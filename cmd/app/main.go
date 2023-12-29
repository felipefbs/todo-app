package main

import (
	"fmt"
	"log"

	"github.com/felipefbs/todo-app/server"
)

func main() {
	server := server.Init()

	fmt.Println("Listening port 8080")
	if err := server.ListenAndServe(); err != nil {
		log.Fatal(err)
	}
}
