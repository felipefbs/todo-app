package main

import (
	"fmt"
	"log"
	"net/http"
	"text/template"

	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func main() {
	r := chi.NewRouter()
	r.Use(middleware.Logger)

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

	server := http.Server{
		Addr:    ":8080",
		Handler: r,
	}

	fmt.Println("Listening port 8080")
	if err := server.ListenAndServe(); err != nil {
		log.Fatal(err)
	}
}
