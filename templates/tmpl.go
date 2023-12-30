package templates

import (
	"html/template"
	"io/fs"
	"os"
	"path/filepath"
	"strings"
	"sync"

	"github.com/Masterminds/sprig/v3"
)

var (
	tmpl *template.Template
	lock = &sync.Mutex{}
)

func GetTemplates() (*template.Template, error) {
	if tmpl == nil {
		lock.Lock()
		defer lock.Unlock()
		var err error
		tmpl, err = parseTemplates()
		if err != nil {
			return nil, err
		}
	}

	return tmpl, nil
}

func parseTemplates() (*template.Template, error) {
	t := template.New("").Funcs(sprig.FuncMap())
	err := filepath.Walk("templates", func(path string, info fs.FileInfo, err error) error {
		if strings.Contains(path, ".html") {
			templateBytes, err := os.ReadFile(path)
			if err != nil {
				return err
			}

			_, err = t.New(path).Funcs(sprig.FuncMap()).Parse(string(templateBytes))
			if err != nil {
				return err
			}
		}

		return err
	})
	if err != nil {
		return nil, err
	}

	return t, nil
}
