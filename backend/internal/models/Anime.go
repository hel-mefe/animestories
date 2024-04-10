package models

import "time"

type Anime struct {
	ID int `json:"id"`
	Title string `json:"title"`
	ReleaseData time.Time `json:"release_date"`
	RunTime int `json:"run_time"`
	MPAARating string `json:"mpaa_rating"`
	Description string `json:"description"`
	Image string `json:"image"`
	CreatedAt time.Time `json:"-"`
	UpdatedFrom time.Time `json:"-"`
}