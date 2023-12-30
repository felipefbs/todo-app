package database

import (
	"database/sql"
	"log"
	"os"
	"sync"

	_ "github.com/go-sql-driver/mysql"
)

var (
	database *sql.DB
	lock     = &sync.Mutex{}
)

func GetDatabase() *sql.DB {
	if database == nil {
		lock.Lock()
		defer lock.Unlock()

		db, err := sql.Open("mysql", os.Getenv("DB_URL"))
		if err != nil {
			log.Fatal(err)
		}

		database = db
	}

	return database
}

func Setup(db *sql.DB) error {
	_, err := db.Exec(`
	CREATE TABLE IF NOT EXISTS 
	tasks (
		id integer not null primary key auto_increment, 
		title varchar(255), 
		completed boolean default false, 
		position integer, 
		description text
	)`)
	return err
}
