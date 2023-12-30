package main

import (
	"fmt"
	"log"

	"github.com/felipefbs/todo-app/server"
	"github.com/felipefbs/todo-app/templates"
)

func main() {
	templates, err := templates.GetTemplates()
	if err != nil {
		log.Fatal(err)
	}

	server := server.Init(templates)

	fmt.Println("Listening port 8080")
	if err := server.ListenAndServe(); err != nil {
		log.Fatal(err)
	}
}
