package server

import (
	"html/template"
	"log"
	"net/http"

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
	r.Handle("/static/*", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		err := templates.ExecuteTemplate(w, "Base", nil)
		if err != nil {
			log.Println(err)
			return
		}
	})
}
