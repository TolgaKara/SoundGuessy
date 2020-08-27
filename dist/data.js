let collectionOfShows = {
	tvShows: [
		{
			title: "Game of Thrones: Das Lied von Eis und Feuer",
			publishDate: "(2011–2019)",
			genre: "Action, Adventure, Drama",
			descr:
				"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
			rate: "9,3",
			img:
				"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY209_CR7,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Official_Opening_Credits_Game_of_Throne.mp3",
		},
		{
			title: "The Walking Dead",
			publishDate: "(2010– )",
			genre: "Drama, Horror, Thriller",
			descr:
				"Sheriff Deputy Rick Grimes wakes up from a coma to learn the world is in ruins and must lead a group of survivors to stay alive.",
			rate: "8,2",
			img:
				"https://m.media-amazon.com/images/M/MV5BYTUwOTM3ZGUtMDZiNy00M2I3LWI1ZWEtYzhhNGMyZjI3MjBmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX140_CR0,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_The_Walking_Dead_Season_1_Opening_Cr.mp3",
		},
		{
			title: "The 100",
			publishDate: "(2014– )",
			genre: "Drama, Mystery, Sci-Fi",
			descr:
				"Set ninety-seven years after a nuclear war has destroyed civilization, when a spaceship housing humanity's lone survivors sends one hundred juvenile delinquents back to Earth, in hopes of possibly re-populating the planet.",
			rate: "7,7",
			img:
				"https://m.media-amazon.com/images/M/MV5BNjRiYTIzZmUtMTFkNS00ZTM0LWE4ODAtMDliMGE4NzM5ZjVlXkEyXkFqcGdeQXVyNDQ0MTYzMDA@._V1_UY209_CR14,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/10s_to_25s_The_100_intros_from_season_1_4_HD_.mp3",
		},
		{
			title: "The Flash",
			publishDate: "(2014– )",
			genre: "Action, Adventure, Drama",
			descr:
				"After being struck by lightning, Barry Allen wakes up from his coma to discover he's been given the power of super speed, becoming the next Flash, fighting crime in Central City.",
			rate: "7,7",
			img:
				"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
			soundtrack: "./assets/audio/tvShows/15s_to_30s_The_Flash_CW_Soundtrack_The_Flash_The.mp3",
		},
		{
			title: "Haus des Geldes",
			publishDate: "(2017– )",
			genre: "Action, Crime, Mystery",
			descr:
				"An unusual group of robbers attempt to carry out the most perfect robbery in Spanish history - stealing 2.4 billion euros from the Royal Mint of Spain.",
			rate: "8,4",
			img:
				"https://m.media-amazon.com/images/M/MV5BZDcxOGI0MDYtNTc5NS00NDUzLWFkOTItNDIxZjI0OTllNTljXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UY209_CR0,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Haus_des_Geldes_–_Intro.mp3",
		},
		{
			title: "The Big Bang Theory",
			publishDate: "(2007–2019)",
			genre: "Comedy, Romance",
			descr:
				"A woman who moves into an apartment across the hall from two brilliant but socially awkward physicists shows them how little they know about life outside of the laboratory.",
			rate: "8,1",
			img:
				"https://m.media-amazon.com/images/M/MV5BY2FmZTY5YTktOWRlYy00NmIyLWE0ZmQtZDg2YjlmMzczZDZiXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX140_CR0,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_The_Big_Bang_Theory_Intro_HD.mp3",
		},
		{
			title: "Sherlock",
			publishDate: "(2010–2017)",
			genre: "Crime, Drama, Mystery",
			descr:
				"A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
			rate: "9,1",
			img:
				"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Sherlock_Opening_Titles_Season_1_Seas.mp3",
		},
		{
			title: "Vikings",
			publishDate: "(2013– )",
			genre: "Action, Adventure, Drama",
			descr:
				"Vikings transports us to the brutal and mysterious world of Ragnar Lothbrok, a Viking warrior and farmer who yearns to explore - and raid - the distant shores across the ocean.",
			rate: "8,5",
			img:
				"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Vikings_Intro_2013_HD.mp3",
		},
		{
			title: "Breaking Bad",
			publishDate: "(2008–2013)",
			genre: "Crime, Drama, Thriller",
			descr:
				"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
			rate: "9,5",
			img:
				"https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY209_CR5,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Breaking_Bad_Intro.mp3",
		},
		{
			title: "Prison Break",
			publishDate: "(2005–2017)",
			genre: "Action, Crime, Drama",
			descr:
				"Due to a political conspiracy, an innocent man is sent to death row and his only hope is his brother, who makes it his mission to deliberately get himself sent to the same prison in order to break the both of them out, from the inside.",
			rate: "8,3",
			img:
				"https://m.media-amazon.com/images/M/MV5BMTg3NTkwNzAxOF5BMl5BanBnXkFtZTcwMjM1NjI5MQ@@._V1_UY209_CR1,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_prison_break_intro_season_1.mp3",
		},
		{
			title: "Die Simpsons",
			publishDate: "(1989– )",
			genre: "Animation, Comedy",
			descr: "The satiric adventures of a working-class family in the misfit city of Springfield.",
			rate: "8,7",
			img:
				"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
			soundtrack: "./assets/audio/tvShows/8s_to_23s_Simpsons_Intro_HD.mp3",
		},
		{
			title: "Once Upon a Time - Es war einmal ...",
			publishDate: "(2011–2018)",
			genre: "Adventure, Fantasy, Romance",
			descr:
				"A young woman with a troubled past is drawn to a small town in Maine where fairy tales are to be believed.",
			rate: "7,7",
			img:
				"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Once_upon_a_time_intro_HD.mp3",
		},
		{
			title: "Narcos",
			publishDate: "(2015–2017)",
			genre: "Biography, Crime, Drama",
			descr:
				"A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
			rate: "8,8",
			img:
				"https://m.media-amazon.com/images/M/MV5BNmFjODU3YzgtMGUwNC00ZGI3LWFkZjQtMjkxZDc3NmQ1MzcyXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UY209_CR0,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/19s_to_34s_Narcos___Opening_Credits_HD___Netflix.mp3",
		},
		{
			title: "Westworld",
			publishDate: "(2016– )",
			genre: "Drama, Mystery, Sci-Fi",
			descr:
				"Set at the intersection of the near future and the reimagined past, explore a world in which every human appetite can be indulged without consequence.",
			rate: "8,7",
			img:
				"https://m.media-amazon.com/images/M/MV5BMTRmYzNmOTctZjMwOS00ODZlLWJiZGQtNDg5NDY5NjE3MTczXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/20s_to_35s_Westworld_Intro_Opening_Credits___6.mp3",
		},
		{
			title: "Rick and Morty",
			publishDate: "(2013– )",
			genre: "Animation, Adventure, Comedy",
			descr:
				"An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
			rate: "9,2",
			img:
				"https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_UX182_CR0,0,182,268_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Rick_and_Morty_Season_1_Intro.mp3",
		},
		{
			title: "Dark",
			publishDate: "(2017–2020)",
			genre: "Crime, Drama, Mystery",
			descr:
				"A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
			rate: "8,8",
			img:
				"https://m.media-amazon.com/images/M/MV5BZmY2YzU4NDktODIxYi00YWIyLWIzYTctODBkYzYzZjc0ODdlXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UY209_CR0,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Dark_Season_1_Opening_Credits_Intr.mp3",
		},
		{
			title: "Dexter",
			publishDate: "(2006–2013)",
			genre: "Crime, Drama, Mystery",
			descr:
				"By day, mild-mannered Dexter is a blood-spatter analyst for the Miami police. But at night, he is a serial killer who only targets other murderers.",
			rate: "8,6",
			img:
				"https://m.media-amazon.com/images/M/MV5BMTM5MjkwMTI0MV5BMl5BanBnXkFtZTcwODQwMTc0OQ@@._V1_UY209_CR7,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Dexter_Intro_Morning_Routine_HD.mp3",
		},
		{
			title: "Chilling Adventures of Sabrina",
			publishDate: "(2018–2020)",
			genre: "Drama, Fantasy, Horror",
			descr:
				"As her 16th birthday nears, Sabrina must choose between the witch world of her family and the human world of her friends. Based on the Archie comic.",
			rate: "7,6",
			img:
				"https://m.media-amazon.com/images/M/MV5BNDJjYzk0ZTktNzQ1ZC00MmQ0LTk1NTYtNmMwMGE4NDM5ZjAyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR13,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Chilling_Adventures_of_Sabrina___Opening.mp3",
		},
		{
			title: "Brooklyn Nine-Nine",
			publishDate: "(2013– )",
			genre: "Comedy, Crime",
			descr:
				'"Brooklyn Nine-Nine" follows the exploits of hilarious Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD\'s 99th Precinct.',
			rate: "8,4",
			img:
				"https://m.media-amazon.com/images/M/MV5BNzVkYWY4NzYtMWFlZi00YzkwLThhZDItZjcxYTU4ZTMzMDZmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UY209_CR0,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Brooklyn_Nine_Nine_Opening_Theme_Song.mp3",
		},
		{
			title: "True Detective",
			publishDate: "(2014– )",
			genre: "Crime, Drama, Mystery",
			descr:
				"Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
			rate: "9",
			img:
				"https://m.media-amazon.com/images/M/MV5BMTUwMGM2ZmYtZGEyZC00OWQyLWI2Y2QtMTdjYzMxZGJmNjhjXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_UY209_CR0,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/5s_to_20s_True_Detective_Intro_Opening_Scene_H.mp3",
		},
		{
			title: "Marvel's The Punisher",
			publishDate: "(2017–2019)",
			genre: "Action, Crime, Drama",
			descr:
				'After the murder of his family, Marine veteran Frank Castle becomes the vigilante known as "The Punisher," with only one goal in mind: to avenge them.',
			rate: "8,5",
			img:
				"https://m.media-amazon.com/images/M/MV5BMTExODIwOTUxNzFeQTJeQWpwZ15BbWU4MDE5MDA0MTcz._V1_UY209_CR0,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Marvel_s_Netflix_The_punisher_intro.mp3",
		},
		{
			title: "Marvel's Iron Fist",
			publishDate: "(2017–2018)",
			genre: "Action, Adventure, Crime",
			descr:
				"A young man is bestowed with incredible martial arts skills and a mystical force known as the Iron Fist.",
			rate: "6,5",
			img:
				"https://m.media-amazon.com/images/M/MV5BMjI5Mjg1NDcyOV5BMl5BanBnXkFtZTgwMjAxOTQ5MTI@._V1_UY209_CR0,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Marvel_Television_Iron_Fist_Main_Title.mp3",
		},
		{
			title: "Marvel's Luke Cage",
			publishDate: "(2016–2018)",
			genre: "Action, Crime, Drama",
			descr:
				"When a sabotaged experiment gives him super strength and unbreakable skin, Luke Cage becomes a fugitive attempting to rebuild his life in Harlem and must soon confront his past and fight a battle for the heart of his city.",
			rate: "7,3",
			img:
				"https://m.media-amazon.com/images/M/MV5BMjAxOTM3NjEwMV5BMl5BanBnXkFtZTgwNTkyOTY4NTM@._V1_UY209_CR0,0,140,209_AL_.jpg",
			soundtrack: "./assets/audio/tvShows/0s_to_15s_Marvel_s_Luke_Cage___Opening_Credits___M.mp3",
		},
	],

	disneyShows: [
		{
			title: "Peter Pan",
			descr: "The Boy Who Wouldnt Grow Up",
			img: "../assets/img/peterpan.png",
			soundtrack: "../assets/audio/peterpan-youcanfly.mp3",
		},
		{
			title: "The Nightmare Before Christmas",
			descr:
				'a being from "Halloween Town" who opens a portal to "Christmas Town" and decides to celebrate the holiday. ',
			img: "../assets/img/nightmare-before-christmas.png",
			soundtrack: "../assets/audio/The_Nightmare_Before_Christmas_Soundt.mp3",
		},
		{
			title: "Frozen",
			descr: "The kings daughter Anna goes in search of her elder sister Elsa, the ice queen. ",
			img: "../assets/img/frozen.png",
			soundtrack: "../assets/audio/frozen-let it go.mp3",
		},
		{
			title: "The Jungle Book",
			descr:
				"concerns a young man-cub named Mowgli. A panther named Bagheera one day comes across an abandoned boat, in which a small baby is seen. ",
			img: "../assets/img/the-jungle-book.png",
			soundtrack: "../assets/audio/Jungle Book - Bare Necessities.mp3",
		},
		{
			title: "Mulan",
			descr:
				"is a girl, the only child of her honored family. When the Huns invade China, one man from every family is called to arms. ",
			img: "../assets/img/mulan.png",
			soundtrack: "../assets/audio/mulan-i-make-a-man-from-you.mp3",
		},
		{
			title: "Moana",
			descr:
				"is a daughter of the chief of her tribe. Coming from a long line of navigators she sets off for a fabled island with the demigod Maui",
			img: "../assets/img/moana.png",
			soundtrack: "../assets/audio/moana-your-welcome.mp3",
		},
		{
			title: "Tarzan",
			descr:
				"A man raised by gorillas must decide where he really belongs when he discovers he is a human.",
			img: "../assets/img/tarzan.png",
			soundtrack: "../assets/audio/tarzan.mp3",
		},
		{
			title: "Aladdin",
			descr:
				"is a poor street urchin who spends his time stealing food from the marketplace in the city of Agrabah. ",
			img: "../assets/img/aladdin.png",
			soundtrack: "../assets/audio/Aladin-Prince Ali.mp3",
		},
		{
			title: "The Lion King",
			descr:
				"A prince cursed to spend his days as a hideous monster sets out to regain his humanity by earning a young womans love",
			img: "../assets/img/the-lion-king.png",
			soundtrack: "../assets/audio/Lion King be prepared.mp3",
		},
		{
			title: "Beauty and the Beast",
			descr:
				" a prince who is magically transformed into a monster and his servants into household objects ",
			img: "../assets/img/beauty-and-the-beast.png",
			soundtrack: "../assets/audio/beauty and beast - be our guest.mp3",
		},
		{
			title: "The Little Mermaid",
			descr:
				"is fascinated with life on land. On one of her visits to the surface, which are forbidden by her controlling father",
			img: "../assets/img/the-little-mermaid.png",
			soundtrack: "../assets/audio/mermaid under the sea.mp3",
		},
	],

	animeShows: [],
}
