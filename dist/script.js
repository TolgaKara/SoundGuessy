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
 *
 */
let shuffledArrOfShows
let fiveShows
let correctAnswer
let gameRoundQuestion

window.onload = () => {
	shuffledArrOfShows = shuffleShowArr(tvShows)
	fiveShows = getFiveObjsFromArr(shuffledArrOfShows)
	gameRoundQuestions = generateGameQuestions(fiveShows)
	playGame(gameRoundQuestions)

	//let guessedShowName = getGuessedShow(fiveShows)
	//createTheElements()
	console.log(fiveShows)
}

function shuffleShowArr(tvShowsArr) {
	for (let i = tvShowsArr.length - 1; i > 1; i--) {
		let j = Math.round(Math.random() * i)
		let tempCard = tvShowsArr[i]
		tvShowsArr[i] = tvShowsArr[j]
		tvShowsArr[j] = tempCard
	}
	return tvShowsArr
}

function getFiveObjsFromArr(shuffledArrOfShows) {
	return shuffledArrOfShows.slice(0, 5)
}

function generateGameQuestions(fiveShows) {
	// Shuffle TV Show
	let shuffledTVShows = shuffleShowArr(tvShows)

	let counter = 0
	let listOfQuestions = []
	let questions = []
	for (let show of fiveShows) {
		questions = []
		console.log(show.title)
		questions.push(show.title)
		for (let i = 0; i < shuffledTVShows.length; i++) {
			if (counter >= 3) {
				counter = 0
				break
			}

			if (show.title !== shuffledTVShows[i].title) {
				counter++
				questions.push(shuffledTVShows[i].title)
			}
		}
		listOfQuestions.push(questions)
	}
	return listOfQuestions
}

function playGame(gameRoundQuestions) {
	let roundIndex = parseInt(document.querySelector("#current-round").innerHTML) - 1
	correctAnswer = gameRoundQuestions[roundIndex][0]
	let shuffleGameArr = shuffleShowArr(gameRoundQuestions[roundIndex])
	changeElementOnWebpage(shuffleGameArr)
}

function changeElementOnWebpage(gameArr) {
	console.log(gameArr)
	document.querySelector("#answer-options > div:nth-child(1) > h1").innerHTML = gameArr[0]
}

function checkAnswer() {
	let round = parseInt(document.querySelector("#current-round").innerHTML) + 1
	let maxRound = parseInt(document.querySelector("#max-round").innerHTML)
	if (round > maxRound) {
		showEndScreen()
	}
	document.querySelector("#current-round").innerHTML = round
	console.log("checkAnwer()")
}

function giveHint() {
	console.log("giveHint()")
}

function showEndScreen() {
	return true
}
