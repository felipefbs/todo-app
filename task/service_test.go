package task_test

import (
	"context"
	"database/sql"
	"testing"

	"github.com/felipefbs/todo-app/database"
	"github.com/felipefbs/todo-app/task"
	"github.com/stretchr/testify/assert"
	"github.com/testcontainers/testcontainers-go"
	"github.com/testcontainers/testcontainers-go/modules/mysql"
)

func TestQueryData(t *testing.T) {
	ctx := context.Background()

	mysqlContainer, db := setupTestDatabase(ctx)

	// Clean up the container
	defer func() {
		if err := mysqlContainer.Terminate(ctx); err != nil {
			panic(err)
		}
	}()

	svc := task.NewService(db)
	err := database.Setup(db)
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	INSERT INTO tasks (title, completed, description, position) values
	("ToDo Task 1", false, "Todo Task", 1),
	("ToDo Task 2", false, "Todo Task", 2),
	("ToDo Task 3", true, "Todo Task", 3);
	`)
	if err != nil {
		panic(err)
	}

	totalItemCount := 3
	firstItemID := 1

	t.Run("Query count tasks", func(t *testing.T) {
		count, err := svc.FetchCount()
		assert.Nil(t, err)
		assert.Equal(t, totalItemCount, count)
	})

	t.Run("Query all tasks", func(t *testing.T) {
		tasks, err := svc.FetchTasks()

		assert.Nil(t, err)
		assert.Len(t, tasks, totalItemCount)
		assert.Equal(t, tasks[0].ID, firstItemID)
		assert.Equal(t, tasks[0].Title, "ToDo Task 1")
	})

	t.Run("Query a task", func(t *testing.T) {
		task, err := svc.FetchTask(firstItemID)
		assert.Nil(t, err)
		assert.Equal(t, task.ID, firstItemID)
		assert.Equal(t, task.Title, "ToDo Task 1")
	})
}

func Test_DeleteAndOrder(t *testing.T) {
	ctx := context.Background()

	mysqlContainer, db := setupTestDatabase(ctx)

	// Clean up the container
	defer func() {
		if err := mysqlContainer.Terminate(ctx); err != nil {
			panic(err)
		}
	}()

	svc := task.NewService(db)
	err := database.Setup(db)
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	INSERT INTO tasks (title, completed, description, position) values
	("ToDo Task 1", false, "Todo Task", 1),
	("ToDo Task 2", false, "Todo Task", 2),
	("ToDo Task 3", true, "Todo Task", 3);
	`)
	if err != nil {
		panic(err)
	}

	t.Run("Delete a Task", func(t *testing.T) {
		err := svc.Delete(2)
		assert.Nil(t, err)

		rows, err := db.Query("select id, position from tasks")
		if err != nil {
			panic(err)
		}

		found := make(map[int]int)
		for rows.Next() {
			id, position := 0, 0
			err := rows.Scan(&id, &position)
			if err != nil {
				panic(err)
			}
			found[id] = position
		}

		assert.Len(t, found, 2)
		assert.Equal(t, 2, found[3])
	})
}

func Test_Service(t *testing.T) {
	ctx := context.Background()

	mysqlContainer, db := setupTestDatabase(ctx)

	// Clean up the container
	defer func() {
		if err := mysqlContainer.Terminate(ctx); err != nil {
			panic(err)
		}
	}()

	svc := task.NewService(db)
	err := database.Setup(db)
	if err != nil {
		panic(err)
	}

	_, err = db.Exec(`
	INSERT INTO tasks (title, completed, description, position) values
	("ToDo Task 1", false, "Todo Task", 1),
	("ToDo Task 2", false, "Todo Task", 2),
	("ToDo Task 3", true, "Todo Task", 3);
	`)
	if err != nil {
		panic(err)
	}

	t.Run("Create a task", func(t *testing.T) {
		task, err := svc.InsertTask("ToDo Task 10", "A ToDo Task")
		assert.Nil(t, err)
		assert.Equal(t, task.Title, "ToDo Task 10")

		title, completed, position := "", true, 0
		err = db.QueryRow("select title, completed, position from tasks where id = ?", task.ID).Scan(&title, &completed, &position)
		if err != nil {
			panic(err)
		}

		lastPosition := 3

		assert.Equal(t, task.Title, title)
		assert.False(t, completed)
		assert.Equal(t, lastPosition, position)
	})

	t.Run("Update a task", func(t *testing.T) {
		item, err := svc.UpdateTask(1, "The ToDo Task", "New ToDo TAsk description")
		assert.Nil(t, err)
		assert.Equal(t, 1, item.ID)
		assert.Equal(t, "The ToDo Task", item.Title)
		assert.Equal(t, "New ToDo TAsk description", item.Description)
	})
}

func setupTestDatabase(ctx context.Context) (*mysql.MySQLContainer, *sql.DB) {
	mysqlContainer, err := mysql.RunContainer(ctx,
		testcontainers.WithImage("mysql:5.7"),
		mysql.WithDatabase("database"),
		mysql.WithUsername("root"),
		mysql.WithPassword("password"),
	)
	if err != nil {
		panic(err)
	}

	connString, err := mysqlContainer.ConnectionString(ctx, "tls=skip-verify")
	if err != nil {
		panic(err)
	}

	db, err := sql.Open("mysql", connString)
	if err != nil {
		panic(err)
	}

	return mysqlContainer, db
}
