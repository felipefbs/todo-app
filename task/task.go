package task

type Item struct {
	ID          int
	Title       string
	Completed   bool
	Description string
}

type Tasks struct {
	Items          []Item
	Count          int
	CompletedCount int
}
