package server

import (
	"html/template"
	"log"
	"net/http"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func Init() *http.Server {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

	registerRoutes(r)

	return &http.Server{
		Addr:    ":8080",
		Handler: r,
	}
}

func registerRoutes(r chi.Router) {
	r.Handle("/static/*", http.StripPrefix("/static/", http.FileServer(http.Dir("./static"))))

	r.Get("/", func(w http.ResponseWriter, r *http.Request) {
		tmpl, err := template.New("page").ParseFiles("templates/index.html")
		if err != nil {
			log.Println(err)
			return
		}

		err = tmpl.ExecuteTemplate(w, "Base", nil)
		if err != nil {
			log.Println(err)
			return
		}
	})
}
