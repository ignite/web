package webtemplates

import (
	"embed"
	"io/fs"
)

//go:embed packages/vue-template/* packages/vue-template/**
var vueapp embed.FS

//go:embed packages/react-template/* packages/react-template/**
var reactapp embed.FS

// Boilerplate is a vue app starter for Cosmos SDK chains.
func VueBoilerplate() fs.FS {
	f, _ := fs.Sub(vueapp, "packages/vue-template")
	return f
}

func ReactBoilerplate() fs.FS {
	f, _ := fs.Sub(reactapp, "packages/react-template")
	return f
}
