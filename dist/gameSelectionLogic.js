function selectedGameType(showType) {
	if (showType === "tvShows") {
		sessionStorage["showType"] = showType
	} else if (showType === "disneyShows") {
		sessionStorage["showType"] = showType
	} else if (showType === "animeShows") {
		sessionStorage["showType"] = showType
	} else {
		sessionStorage["showType"] = "tvShows"
	}
}
