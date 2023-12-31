package task

import (
	"html/template"
	"log"
	"net/http"
	"strconv"

	"github.com/go-chi/chi/v5"
)

type Handler struct {
	svc  *Service
	tmpl *template.Template
}

func NewHandler(svc *Service, templates *template.Template) *Handler {
	return &Handler{
		svc:  svc,
		tmpl: templates,
	}
}

func (handler *Handler) GetTasks(w http.ResponseWriter, r *http.Request) {
	items, err := handler.svc.FetchTasks()
	if err != nil {
		log.Print(err)
		return
	}

	count, err := handler.svc.FetchCount()
	if err != nil {
		log.Print(err)
		return
	}

	completedCount, err := handler.svc.FetchCompletedCount()
	if err != nil {
		log.Print(err)
		return
	}

	data := Tasks{
		Items:          items,
		Count:          count,
		CompletedCount: completedCount,
	}

	handler.tmpl.ExecuteTemplate(w, "Base", data)
}

func (handler *Handler) CreateTask(w http.ResponseWriter, r *http.Request) {
	title := r.FormValue("title")
	description := r.FormValue("description")

	if title == "" {
		handler.tmpl.ExecuteTemplate(w, "Form", nil)
		return
	}

	_, err := handler.svc.InsertTask(title, description)
	if err != nil {
		log.Print(err)
		return
	}

	count, err := handler.svc.FetchCount()
	if err != nil {
		log.Print(err)
		return
	}

	w.WriteHeader(http.StatusCreated)
	handler.tmpl.ExecuteTemplate(w, "Form", nil)
	handler.tmpl.ExecuteTemplate(w, "TotalCount", map[string]any{"Count": count, "SwapOOB": true})
}

func (handler *Handler) ToggleTask(w http.ResponseWriter, r *http.Request) {
	id, err := strconv.Atoi(chi.URLParam(r, "id"))
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusBadRequest)

		return
	}

	_, err = handler.svc.ToggleTask(id)
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)

		return
	}

	completedCount, err := handler.svc.FetchCompletedCount()
	if err != nil {
		log.Print(err)
		w.WriteHeader(http.StatusInternalServerError)

		return
	}

	handler.tmpl.ExecuteTemplate(w, "CompletedCount",
		map[string]any{"Count": completedCount, "SwapOOB": true},
	)
}
