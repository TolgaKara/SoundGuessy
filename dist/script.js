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
let showType

window.onload = () => {
	showType = sessionStorage["showType"]
	console.log(showType)
	if (showType === "tvShows") {
		shuffledArrOfShows = shuffleShowArr(collectionOfShows.tvShows)
	} else if (showType === "disneyShows") {
		shuffledArrOfShows = shuffleShowArr(collectionOfShows.disneyShows)
	} else if (showType === "animeShows") {
		shuffledArrOfShows = shuffleShowArr(collectionOfShows.animeShows)
	} else {
		shuffledArrOfShows = shuffleShowArr(collectionOfShows.tvShows)
	}

	fiveShows = getFiveObjsFromArr(shuffledArrOfShows)
	gameRoundQuestion = generateGameQuestions(fiveShows)
	playGame(gameRoundQuestion)
	let guessSeconds = 5
	display = document.querySelector("#timer")
	timerCountdown(guessSeconds, display)
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
	let shuffledTVShows = ""

	showType = sessionStorage["showType"]

	if (showType === "tvShows") {
		shuffledTVShows = shuffleShowArr(collectionOfShows.tvShows)
	} else if (showType === "disneyShows") {
		shuffledTVShows = shuffleShowArr(collectionOfShows.disneyShows)
	} else if (showType === "animeShows") {
		shuffledTVShows = shuffleShowArr(collectionOfShows.animeShows)
	} else {
		shuffledTVShows = shuffleShowArr(collectionOfShows.tvShows)
	}

	let counter = 0
	let listOfQuestions = []
	let questions = []
	for (let show of fiveShows) {
		questions = []
		console.log(show.title)
		questions.push(show)
		shuffledTVShows = shuffleShowArr(shuffledTVShows)
		for (let i = 0; i < shuffledTVShows.length; i++) {
			if (counter >= 3) {
				counter = 0
				break
			}

			if (show.title !== shuffledTVShows[i].title) {
				counter++
				questions.push(shuffledTVShows[i])
			}
		}
		listOfQuestions.push([questions])
	}
	return listOfQuestions
}

function playGame(gameRoundQuestions) {
	let roundIndex = parseInt(document.querySelector("#current-round").innerHTML) - 1
	console.log("gameRoundQuestions: ", gameRoundQuestions)
	correctAnswer = gameRoundQuestions[0][0][0].title

	let shuffleGameArr = shuffleShowArr(gameRoundQuestions[0][0])
	console.log(shuffleGameArr)
	changeElementOnWebpage(shuffleGameArr)
	document.getElementById("hint-text").innerHTML = ""
}

function changeElementOnWebpage(gameArr) {
	let roundIndex = parseInt(document.querySelector("#current-round").innerHTML) - 1
	let soundtrackKey = ""
	gameArr.forEach((showObj, index) => {
		document.querySelector(`#answer-img-${index}`).src = showObj.img
		document.querySelector(`#answer-title-${index}`).innerHTML = showObj.title
		if (showObj.title === correctAnswer) {
			soundtrackKey = showObj.soundtrack
		}
	})
	removeClickedStyles()
	let ytURL
	if (showType === "tvShows") {
		ytURL = getSolidEmbedYTUrl(soundtrackKey)
		document.querySelector(".youtube-player").src = ytURL
	} else if (showType === "disneyShows") {
		let soundtrackFilePath = soundtrackKey
		document.querySelector(".youtube-player").src = soundtrackFilePath
	} else {
		ytURL = getSolidEmbedYTUrl(soundtrackKey)
		document.querySelector(".youtube-player").src = ytURL
	}

	//console.log(gameArr)
}

function getSolidEmbedYTUrl(soundtrackKey) {
	return `https://www.youtube.com/embed/${soundtrackKey}&autoplay=1&mute=0`
}

function showEndScreen() {
	displayModal()
}

function displayModal() {
	var modal = document.getElementById("myModal")
	modal.style.display = "block"
}

function checkAnswer() {
	let round = parseInt(document.querySelector("#current-round").innerHTML)
	let maxRound = parseInt(document.querySelector("#max-round").innerHTML)
	if (round >= maxRound) {
		displayModal()
		document.querySelector("body").classList.add("overflow-hidden")
		document.querySelector("body").classList.add("m-0")
		document.querySelector("body").classList.add("h-full")
		setTimeout(() => {
			console.log("timeout")
		}, 600000)
		window.location.reload()
	} else {
		document.querySelectorAll(".answer-title").forEach((cardTitle) => {
			let isCardSelected =
				cardTitle.classList.contains("bg-yellow-300") &&
				cardTitle.classList.contains("text-indigo-500")
			console.log("isCardSelected: ", isCardSelected)
			if (isCardSelected) {
				if (cardTitle.innerHTML === correctAnswer) {
					console.log("You Won")
					//TODO Alert that you won
					// Check if the game is finished
					let currentRound = document.querySelector("#current-round").innerHTML
					if (currentRound === "5") {
						displayModal
					} else {
						// add to the Points
						let currentPoints = parseInt(document.querySelector("#point").innerHTML) + 5
						document.querySelector("#point").innerHTML = currentPoints
						//console.log("Game Round Questions: ", gameRoundQuestion)
						gameRoundQuestion.shift()

						playGame(gameRoundQuestion)
						//console.log("Game Round Questions after the shift: ", gameRoundQuestion)
					}

					// Starting the next Round
					//playGame()
				} else {
					console.log("You lost")
					let currentPoints = parseInt(document.querySelector("#point").innerHTML) - 2
					document.querySelector("#point").innerHTML = currentPoints
					//TODO Alert that you lost
				}
			} else {
				console.log("nothing selected")
			}
		})
	}

	//TODO Nothing was selected

	document.querySelector("#current-round").innerHTML = round
}

function giveHint() {
	fiveShows.forEach((show) => {
		if (show.title === correctAnswer) {
			document.querySelector("#hint-text").innerHTML = show.descr
		}
	})
	let currentPoints = parseInt(document.querySelector("#point").innerHTML) - 2
	document.querySelector("#point").innerHTML = currentPoints
}

function addPulseAnimation() {
	document.querySelectorAll(".answer-option").forEach((showCard) => {
		console.log("Adding Animate Pulse")
		showCard.classList.add("animate-pulse")
	})
}

function removePulseAnimation() {
	document.querySelectorAll(".answer-option").forEach((showCard) => {
		console.log("Removing Animate Pulse")
		showCard.classList.remove("animate-pulse")
	})
}

function getTheDeckOfCards() {
	showType = sessionStorage["showType"]

	if (showType === "tvShows") {
		return collectionOfShows.tvShows
	} else if (showType === "disneyShows") {
		return collectionOfShows.disneyShows
	} else if (showType === "animeShows") {
		return collectionOfShows.animeShows
	} else {
		return collectionOfShows.tvShows
	}
}

function timerCountdown(duration, display) {
	var timer = duration,
		seconds
	let timerInterval = setInterval(function () {
		seconds = parseInt(timer % 60, 10)

		display.textContent = seconds

		if (--timer < 0) {
			let currentRound = document.querySelector("#current-round").innerHTML
			console.log(typeof currentRound)
			if (currentRound === "5") {
				displayModal()
				clearInterval(timerInterval)
			} else {
				let currentPoints = parseInt(document.querySelector("#point").innerHTML) - 5
				let currentRound = parseInt(document.querySelector("#current-round").innerHTML) + 1
				document.querySelector("#current-round").innerHTML = currentRound
				document.querySelector("#point").innerHTML = currentPoints
				shuffledArrOfShows = shuffleShowArr(getTheDeckOfCards())
				fiveShows = getFiveObjsFromArr(shuffledArrOfShows)
				gameRoundQuestion = generateGameQuestions(fiveShows)
				playGame(gameRoundQuestion)

				timer = duration
			}
		}
	}, 1000)
}

function clickedCard(cardNumber) {
	removePulseAnimation()
	removeClickedStyles()
	//console.log("Card ", cardNumber)
	let clickedCardOutlined = document.querySelectorAll(".answer-option")[cardNumber]
	let clickedTVTitle = document.querySelectorAll(".answer-title")[cardNumber]
	//console.log(clickedCardOutlined)
	clickedCardOutlined.classList.add("border-8")
	clickedCardOutlined.classList.add("border-yellow-300")
	clickedTVTitle.classList.add("bg-yellow-300")
	clickedTVTitle.classList.add("text-indigo-500")
}

function removeClickedStyles() {
	document.querySelectorAll(".answer-option").forEach((card) => {
		card.classList.remove("border-8")
		card.classList.remove("border-yellow-300")
	})

	document.querySelectorAll(".answer-title").forEach((title) => {
		title.classList.remove("bg-yellow-300")
		title.classList.remove("text-indigo-500")
	})
}

function refreshCurrentWindow() {
	window.location.reload()
}

var span = document.getElementById("close-btn")
span.onclick = function () {
	modal.style.display = "none"
}
