package webtemplates

import (
	"embed"
	"io/fs"
)

//go:embed packages/vue-template/* packages/vue-template/**
var webapps embed.FS

// Boilerplate is a vue app starter for Cosmos SDK chains.
func VueBoilerplate() fs.FS {
	f, _ := fs.Sub(webapps, "packages/vue-template")
	return f
}
