package task

import (
	"context"
	"database/sql"
)

type Service struct {
	db *sql.DB
}

func NewService(db *sql.DB) *Service {
	return &Service{db: db}
}

func (svc *Service) FetchTasks() ([]Item, error) {
	var items []Item
	rows, err := svc.db.Query("select id, title, completed, description from tasks order by position;")
	if err != nil {
		return nil, err
	}

	defer rows.Close()

	for rows.Next() {
		item := Item{}
		err := rows.Scan(&item.ID, &item.Title, &item.Completed, &item.Description)
		if err != nil {
			return nil, err
		}

		items = append(items, item)
	}

	return items, nil
}

func (svc *Service) FetchTask(id int) (*Item, error) {
	var item Item
	err := svc.db.QueryRow("select id, title, description, completed from tasks where id = ?;", id).Scan(&item.ID, &item.Title, &item.Description, &item.Completed)
	if err != nil {
		return nil, err
	}

	return &item, nil
}

func (svc *Service) UpdateTask(id int, title, description string) (*Item, error) {
	stmt, err := svc.db.Prepare("UPDATE tasks SET title = ?, description = ? where id = ?")
	if err != nil {
		return nil, err
	}

	defer stmt.Close()

	_, err = stmt.Exec(title, description, id)
	if err != nil {
		return nil, err
	}

	item, err := svc.FetchTask(id)
	if err != nil {
		return nil, err
	}

	return item, nil
}

func (svc *Service) FetchCount() (int, error) {
	var count int

	err := svc.db.QueryRow("select count(*) from tasks").Scan(&count)
	if err != nil {
		return 0, err
	}

	return count, nil
}

func (svc *Service) InsertTask(title, description string) (*Item, error) {
	count, err := svc.FetchCount()
	if err != nil {
		return nil, err
	}

	stmt, err := svc.db.Prepare("INSERT INTO tasks (title, description, position) values (?, ?, ?)")
	if err != nil {
		return nil, err
	}

	defer stmt.Close()

	result, err := stmt.Exec(title, description, count)
	if err != nil {
		return nil, err
	}

	id, err := result.LastInsertId()
	if err != nil {
		return nil, err
	}

	return &Item{
		ID:          int(id),
		Title:       title,
		Completed:   false,
		Description: description,
	}, nil
}

func (svc *Service) Delete(id int) error {
	_, err := svc.db.Exec("delete from tasks where id = ?", id)
	if err != nil {
		return err
	}

	rows, err := svc.db.Query("SELECT id FROM tasks ORDER BY position")
	if err != nil {
		return err
	}

	var idList []int
	for rows.Next() {
		var id int
		err := rows.Scan(&id)
		if err != nil {
			return err
		}

		idList = append(idList, id)
	}

	err = svc.OrderTasks(idList)
	if err != nil {
		return err
	}

	return nil
}

func (svc *Service) OrderTasks(values []int) error {
	tx, err := svc.db.BeginTx(context.Background(), nil)
	if err != nil {
		return err
	}

	defer tx.Rollback()

	for index, id := range values {
		_, err := svc.db.Exec("update tasks set position = ? where id = ?", index+1, id)
		if err != nil {
			return err
		}
	}

	err = tx.Commit()
	if err != nil {
		return err
	}

	return nil
}
