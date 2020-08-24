/**
 *
 * <iframe width="560" height="315" src="https://www.youtube.com/embed/s7L2PVdrb_8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
 * https://www.youtube.com/watch?v=s7L2PVdrb_8
 * The Data is saved by the code s7L2PVdrb_8
 *
 */
/** 15 sek duration */

/** String zusammensetzung
 * ROOT : https://www.youtube.com/watch?=
 * VIDKEY : gmyCRJkKeKs
 */

window.onload = () => {
	console.log("Loaded Page")
	//console.log(tvShows)
	let shuffledArrOfShows = shuffleShowArr()
	let fiveShows = getFiveObjsFromArr(shuffledArrOfShows)
	let guessedShowName = getGuessedShow(fiveShows)
	createTheElements()
	console.log(fiveShows)
}

function shuffleShowArr() {
	for (let i = tvShows.length - 1; i > 1; i--) {
		let j = Math.round(Math.random() * i)
		let tempCard = tvShows[i]
		tvShows[i] = tvShows[j]
		tvShows[j] = tempCard
	}
	return tvShows
}

function getFiveObjsFromArr(shuffledArrOfShows) {
	return shuffledArrOfShows.slice(0, 5)
}
