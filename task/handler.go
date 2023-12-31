package task

import (
	"html/template"
	"log"
	"net/http"
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
