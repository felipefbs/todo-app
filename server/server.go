package server

import (
	"html/template"
	"net/http"

	"github.com/felipefbs/todo-app/database"
	"github.com/felipefbs/todo-app/task"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func Init(templates *template.Template) *http.Server {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	registerRoutes(r, templates)

	return &http.Server{
		Addr:    ":8080",
		Handler: r,
	}
}

func registerRoutes(r chi.Router, templates *template.Template) {
	db := database.GetDatabase()
	svc := task.NewService(db)
	handler := task.NewHandler(svc, templates)

	r.Handle("/static/*", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

	r.Get("/", handler.GetTasks)
	r.Post("/tasks", handler.CreateTask)
	r.Put("/tasks/{id}/toggle", handler.ToggleTask)
}
