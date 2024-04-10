package main

import (
	"animestories-backend/internal/models"
	"encoding/json"
	"fmt"
	"net/http"
	"time"
)

func (app *application) Home(w http.ResponseWriter, r *http.Request) {
	var payload = struct {
		Status string `json:"status"`
		Message string `json:"message"`
		Version string `json:"version"`
	} {
		Status: "active",
		Message: "Anime stories",
		Version: "1.0.0",
	}

	out, err := json.Marshal(payload)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}

func (app *application) AllAnimes(w http.ResponseWriter, r *http.Request) {
	var animes []models.Anime
	rd, _ := time.Parse("2006-01-02", "1999-10-20")

	onePiece := models.Anime{
		ID: 1,
		Title: "One Piece",
		ReleaseData: rd,
		MPAARating: "R",
		RunTime: 116,
		Description: "Luffy will become king of the pirates!",
		CreatedAt: time.Now(),
		UpdatedFrom: time.Now(),
	}

	animes = append(animes, onePiece)

	rd, _ = time.Parse("2006-01-02", "2004-04-06")
	monster := models.Anime{
		ID: 2,
		Title: "Monster",
		ReleaseData: rd,
		MPAARating: "R",
		RunTime: 116,
		Description: "Monster is a dark psychology anime!",
		CreatedAt: time.Now(),
		UpdatedFrom: time.Now(),
	}

	animes = append(animes, monster)

	out, err := json.Marshal(animes)
	if err != nil {
		fmt.Println(err)
	}

	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)
	w.Write(out)
}