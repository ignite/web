package webtemplates

import (
	"embed"
	"io/fs"
)

//go:embed packages/vue-template/* packages/vue-template/** packages/react-template/* packages/react-template/**
var webapps embed.FS

// Boilerplate is a vue app starter for Cosmos SDK chains.
func VueBoilerplate() fs.FS {
	f, _ := fs.Sub(webapps, "packages/vue-template")
	return f
}

func ReactBoilerplate() fs.FS {
	f, _ := fs.Sub(webapps, "packages/react-template")
	return f
}
