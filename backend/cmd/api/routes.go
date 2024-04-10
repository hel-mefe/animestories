package main

import (
	"net/http"
	"github.com/go-chi/chi/v5"
	"github.com/go-chi/chi/v5/middleware"
)

func (app *application) routes() http.Handler {
	// create a router mux
	mux := chi.NewMux()

	mux.Use(middleware.Recoverer)
	mux.Use(middleware.Logger)
	mux.Use(middleware.RequestID)

	mux.Get("/", app.Home)
	mux.Get("/animes", app.AllAnimes)

	return mux
}