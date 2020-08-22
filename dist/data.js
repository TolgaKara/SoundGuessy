const tvShows = [
	{
		title: "Game of Thrones: Das Lied von Eis und Feuer",
		publishDate: "(2011–2019)",
		genre: "Action, Adventure, Drama",
		descr:
			"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia.",
		rate: "9,3",
		img:
			"https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_UY209_CR7,0,140,209_AL_.jpg",
	},
	{
		title: "Stranger Things",
		publishDate: "(2016– )",
		genre: "Drama, Fantasy, Horror",
		descr:
			"When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
		rate: "8,8",
		img:
			"https://m.media-amazon.com/images/M/MV5BMjEzMDAxOTUyMV5BMl5BanBnXkFtZTgwNzAxMzYzOTE@._V1_UY209_CR0,0,140,209_AL_.jpg",
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
	},
	{
		title: "Tote Mädchen lügen nicht",
		publishDate: "(2017–2020)",
		genre: "Drama, Mystery",
		descr:
			"Follows teenager Clay Jensen, in his quest to uncover the story behind his classmate and crush, Hannah, and her decision to end her life.",
		rate: "7,7",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
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
	},
	{
		title: "Orange Is the New Black",
		publishDate: "(2013–2019)",
		genre: "Comedy, Crime, Drama",
		descr:
			"Convicted of a decade old crime of transporting drug money to an ex-girlfriend, normally law-abiding Piper Chapman is sentenced to a year and a half behind bars to face the reality of how life-changing prison can really be.",
		rate: "8,1",
		img:
			"https://m.media-amazon.com/images/M/MV5BYjYyM2FmMmMtZDgyZi00NGU3LWI3NzktODllZDY0YzQyNzgyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Riverdale",
		publishDate: "(2017– )",
		genre: "Crime, Drama, Mystery",
		descr:
			"While navigating the troubled waters of romance, school and family, Archie and his gang become entangled in dark Riverdale mysteries.",
		rate: "7",
		img:
			"https://m.media-amazon.com/images/M/MV5BNDYxOTU0NDYtYzg2MC00YzgyLTg1YzctMDc1MGJmOGIzMTc3XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX140_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Grey's Anatomy: Die jungen Ärzte",
		publishDate: "(2005– )",
		genre: "Drama, Romance",
		descr:
			"A drama centered on the personal and professional lives of five surgical interns and their supervisors.",
		rate: "7,6",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
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
	},
	{
		title: "Arrow",
		publishDate: "(2012–2020)",
		genre: "Action, Adventure, Crime",
		descr:
			"Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
		rate: "7,5",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
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
	},
	{
		title: "Black Mirror",
		publishDate: "(2011–2019)",
		genre: "Drama, Sci-Fi, Thriller",
		descr:
			"An anthology series exploring a twisted, high-tech multiverse where humanity's greatest innovations and darkest instincts collide.",
		rate: "8,8",
		img:
			"https://m.media-amazon.com/images/M/MV5BYTM3YWVhMDMtNjczMy00NGEyLWJhZDctYjNhMTRkNDE0ZTI1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
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
	},
	{
		title: "Pretty Little Liars",
		publishDate: "(2010–2017)",
		genre: "Drama, Mystery, Romance",
		descr:
			"Four friends band together against an anonymous foe who threatens to reveal their darkest secrets, while also investigating the disappearance of their best friend.",
		rate: "7,4",
		img:
			"https://m.media-amazon.com/images/M/MV5BMTU5MDYzMzQ2Nl5BMl5BanBnXkFtZTgwMDE3MzU4MTI@._V1_UY209_CR1,0,140,209_AL_.jpg",
	},
	{
		title: "The Vampire Diaries",
		publishDate: "(2009–2017)",
		genre: "Drama, Fantasy, Horror",
		descr:
			"The lives, loves, dangers and disasters in the town, Mystic Falls, Virginia. Creatures of unspeakable horror lurk beneath this town as a teenage girl is suddenly torn between two vampire brothers.",
		rate: "7,7",
		img:
			"https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UY209_CR1,0,140,209_AL_.jpg",
	},
	{
		title: "American Horror Story",
		publishDate: "(2011– )",
		genre: "Drama, Horror, Thriller",
		descr:
			"An anthology series centering on different characters and locations, including a house with a murderous past, an insane asylum, a witch coven, a freak show circus, a haunted hotel, a possessed farmhouse, a cult, the apocalypse, and a slasher summer camp.",
		rate: "8",
		img:
			"https://m.media-amazon.com/images/M/MV5BODZlYzc2ODYtYmQyZS00ZTM4LTk4ZDQtMTMyZDdhMDgzZTU0XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX140_CR0,0,140,209_AL_.jpg",
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
	},
	{
		title: "Lucifer",
		publishDate: "(2016– )",
		genre: "Crime, Drama, Fantasy",
		descr:
			"Lucifer Morningstar has decided he's had enough of being the dutiful servant in Hell and decides to spend some time on Earth to better understand humanity. He settles in Los Angeles - the City of Angels.",
		rate: "8,2",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Supernatural: Zur Hölle mit dem Bösen",
		publishDate: "(2005–2020)",
		genre: "Drama, Fantasy, Horror",
		descr:
			"Two brothers follow their father's footsteps as hunters, fighting evil supernatural beings of many kinds, including monsters, demons and gods that roam the earth.",
		rate: "8,4",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
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
	},
	{
		title: "How to Get Away with Murder",
		publishDate: "(2014–2020)",
		genre: "Crime, Drama, Mystery",
		descr:
			"A group of ambitious law students and their brilliant criminal defense professor become involved in a twisted murder plot that promises to change the course of their lives.",
		rate: "8,1",
		img:
			"https://m.media-amazon.com/images/M/MV5BZDQ5ZDRhMWItNjA5Ni00MDhiLTgwN2EtZjFkYzgzNjBhZTIyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Teen Wolf",
		publishDate: "(2011–2017)",
		genre: "Action, Drama, Fantasy",
		descr:
			"An average high school student and his best friend get caught up in some trouble causing him to receive a werewolf bite. As a result they find themselves in the middle of all sorts of dramas in Beacon Hills.",
		rate: "7,6",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Die Simpsons",
		publishDate: "(1989– )",
		genre: "Animation, Comedy",
		descr: "The satiric adventures of a working-class family in the misfit city of Springfield.",
		rate: "8,7",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
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
	},
	{
		title: "Marvel's Daredevil",
		publishDate: "(2015–2018)",
		genre: "Action, Crime, Drama",
		descr:
			"A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil.",
		rate: "8,6",
		img:
			"https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Friends",
		publishDate: "(1994–2004)",
		genre: "Comedy, Romance",
		descr:
			"Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
		rate: "8,9",
		img:
			"https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY209_CR1,0,140,209_AL_.jpg",
	},
	{
		title: "How I Met Your Mother",
		publishDate: "(2005–2014)",
		genre: "Comedy, Romance",
		descr:
			"A father recounts to his children - through a series of flashbacks - the journey he and his four best friends took leading up to him meeting their mother.",
		rate: "8,3",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Suits",
		publishDate: "(2011–2019)",
		genre: "Comedy, Drama",
		descr:
			"On the run from a drug deal gone bad, brilliant college dropout Mike Ross, finds himself working with Harvey Specter, one of New York City's best lawyers.",
		rate: "8,5",
		img:
			"https://m.media-amazon.com/images/M/MV5BNmVmMmM5ZmItZDg0OC00NTFiLWIxNzctZjNmYTY5OTU3ZWU3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY209_CR1,0,140,209_AL_.jpg",
	},
	{
		title: "Mr. Robot",
		publishDate: "(2015–2019)",
		genre: "Crime, Drama, Thriller",
		descr:
			"Elliot, a brilliant but highly unstable young cyber-security engineer and vigilante hacker, becomes a key figure in a complex game of global dominance when he and his shadowy allies try to take down the corrupt corporation he works for.",
		rate: "8,5",
		img:
			"https://m.media-amazon.com/images/M/MV5BMzgxMmQxZjQtNDdmMC00MjRlLTk1MDEtZDcwNTdmOTg0YzA2XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX140_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "The Originals",
		publishDate: "(2013–2018)",
		genre: "Drama, Fantasy, Horror",
		descr:
			"A family of power-hungry thousand-year-old vampires look to take back the city that they built and dominate all those who have done them wrong.",
		rate: "8,2",
		img:
			"https://m.media-amazon.com/images/M/MV5BNDllZjc2NjEtOGMwZS00ZmNkLTg2NDgtZjJkYjg0YjMxM2FmXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UX140_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Supergirl",
		publishDate: "(2015– )",
		genre: "Action, Adventure, Drama",
		descr: "The adventures of Superman's cousin in her own superhero career.",
		rate: "6,3",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Gossip Girl",
		publishDate: "(2007–2012)",
		genre: "Drama, Romance",
		descr:
			"Privileged teens living on the Upper East Side of New York can hide no secret from the ruthless blogger who is always watching.",
		rate: "7,4",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Sense8",
		publishDate: "(2015–2018)",
		genre: "Drama, Mystery, Sci-Fi",
		descr:
			"A group of people around the world are suddenly linked mentally, and must find a way to survive being hunted by those who see them as a threat to the world's order.",
		rate: "8,3",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Gotham",
		publishDate: "(2014–2019)",
		genre: "Action, Crime, Drama",
		descr:
			"The story behind Detective James Gordon's rise to prominence in Gotham City in the years before Batman's arrival.",
		rate: "7,8",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
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
	},
	{
		title: "Marvel's Jessica Jones",
		publishDate: "(2015–2019)",
		genre: "Action, Crime, Drama",
		descr:
			"Following the tragic end of her brief superhero career, Jessica Jones tries to rebuild her life as a private investigator, dealing with cases involving people with remarkable abilities in New York City.",
		rate: "7,9",
		img:
			"https://m.media-amazon.com/images/M/MV5BM2QyNmZkNTYtZWQyZi00NDhhLWEzMDItYmIzY2U4ZWVmOWNhXkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Modern Family",
		publishDate: "(2009–2020)",
		genre: "Comedy, Drama, Romance",
		descr:
			"Three different but related families face trials and tribulations in their own uniquely comedic ways.",
		rate: "8,4",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Rick and Morty",
		publishDate: "(2013– )",
		genre: "Animation, Adventure, Comedy",
		descr:
			"An animated series that follows the exploits of a super scientist and his not-so-bright grandson.",
		rate: "9,2",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Shadowhunters: The Mortal Instruments",
		publishDate: "(2016–2019)",
		genre: "Action, Drama, Fantasy",
		descr:
			"After her mother disappears, Clary must venture into the dark world of demon hunting, and embrace her new role among the Shadowhunters.",
		rate: "6,6",
		img:
			"https://m.media-amazon.com/images/M/MV5BNTU1N2ViZDctYzQwOS00ZDYyLThkMDItNmEwYTIyZTI4NGFhXkEyXkFqcGdeQXVyNTM1NDMwNDM@._V1_UY209_CR1,0,140,209_AL_.jpg",
	},
	{
		title: "The End of the F***ing World",
		publishDate: "(2017–2019)",
		genre: "Adventure, Comedy, Crime",
		descr:
			"James is 17 and is pretty sure he is a psychopath. Alyssa, also 17, is the cool and moody new girl at school. The pair make a connection and she persuades him to embark on a road trip in search of her real father.",
		rate: "8,1",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "House of Cards",
		publishDate: "(2013–2018)",
		genre: "Drama",
		descr:
			"A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
		rate: "8,7",
		img:
			"https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
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
	},
	{
		title: "Élite",
		publishDate: "(2018– )",
		genre: "Crime, Drama, Thriller",
		descr:
			"When three working-class teenagers begin attending an exclusive private school in Spain, the clash between them and the wealthy students leads to murder.",
		rate: "7,6",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Sex Education",
		publishDate: "(2019– )",
		genre: "Comedy, Drama",
		descr:
			"A teenage boy with a sex therapist mother teams up with a high school classmate to set up an underground sex therapy clinic at school.",
		rate: "8,3",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Shameless - Nicht ganz nüchtern",
		publishDate: "(2011– )",
		genre: "Comedy, Drama",
		descr: "A scrappy, feisty, fiercely loyal Chicago family makes no apologies.",
		rate: "8,6",
		img:
			"https://m.media-amazon.com/images/M/MV5BYzFmODNkNDMtOTgzMy00NzQ1LWEwNDItNzU1MmYyYThhYzUwXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_UY209_CR8,0,140,209_AL_.jpg",
	},
	{
		title: "New Girl",
		publishDate: "(2011–2018)",
		genre: "Comedy",
		descr:
			"After a bad break-up, Jess, an offbeat young woman, moves into an apartment loft with three single men. Although they find her behavior very unusual, the men support her - most of the time.",
		rate: "7,7",
		img:
			"https://m.media-amazon.com/images/M/MV5BMjA0MDc1NTk0Ml5BMl5BanBnXkFtZTgwMTk2ODA5NDM@._V1_UY209_CR13,0,140,209_AL_.jpg",
	},
	{
		title: "Marvel's Agents of S.H.I.E.L.D.",
		publishDate: "(2013–2020)",
		genre: "Action, Adventure, Drama",
		descr:
			"The missions of the Strategic Homeland Intervention, Enforcement and Logistics Division.",
		rate: "7,5",
		img:
			"https://m.media-amazon.com/images/M/MV5BOTJhMjhhZDItZTQxMi00NGM3LTliZjYtMjcyMWE2YzYwNTA0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR13,0,140,209_AL_.jpg",
	},
	{
		title: "You: Du wirst mich lieben",
		publishDate: "(2018– )",
		genre: "Crime, Drama, Romance",
		descr:
			"A dangerously charming, intensely obsessive young man goes to extreme measures to insert himself into the lives of those he is transfixed by.",
		rate: "7,8",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
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
	},
	{
		title: "Fear the Walking Dead",
		publishDate: "(2015– )",
		genre: "Drama, Horror, Sci-Fi",
		descr:
			"A Walking Dead spin-off, set in Los Angeles, following two families who must band together to survive the undead apocalypse.",
		rate: "6,9",
		img:
			"https://m.media-amazon.com/images/M/MV5BYWNmY2Y1NTgtYTExMS00NGUxLWIxYWQtMjU4MjNkZjZlZjQ3XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX140_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Family Guy",
		publishDate: "(1999– )",
		genre: "Animation, Comedy",
		descr:
			"In a wacky Rhode Island town, a dysfunctional family strive to cope with everyday life as they are thrown from one crazy scenario to another.",
		rate: "8,1",
		img:
			"https://m.media-amazon.com/images/M/MV5BODEwZjEzMjAtNjQxMy00Yjc4LWFlMDAtYjhjZTAxNDU3OTg3XkEyXkFqcGdeQXVyOTM2NTM4MjA@._V1_UY209_CR8,0,140,209_AL_.jpg",
	},
	{
		title: "The Blacklist",
		publishDate: "(2013– )",
		genre: "Crime, Drama, Mystery",
		descr:
			"A new FBI profiler, Elizabeth Keen, has her entire life uprooted when a mysterious criminal, Raymond Reddington, who has eluded capture for decades, turns himself in and insists on speaking only to her.",
		rate: "8",
		img:
			"https://m.media-amazon.com/images/M/MV5BZDU1OGI3NWItZTliOS00OWYxLTliNDktYTFjODcxNmE1NTNmXkEyXkFqcGdeQXVyODUxOTU0OTg@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Lost",
		publishDate: "(2004–2010)",
		genre: "Adventure, Drama, Fantasy",
		descr:
			"The survivors of a plane crash are forced to work together in order to survive on a seemingly deserted tropical island.",
		rate: "8,3",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Peaky Blinders: Gangs of Birmingham",
		publishDate: "(2013– )",
		genre: "Crime, Drama",
		descr:
			"A gangster family epic set in 1919 Birmingham, England; centered on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby.",
		rate: "8,8",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Dr. House",
		publishDate: "(2004–2012)",
		genre: "Drama, Mystery",
		descr:
			"An antisocial maverick doctor who specializes in diagnostic medicine does whatever it takes to solve puzzling cases that come his way using his crack team of doctors and his wits.",
		rate: "8,7",
		img:
			"https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY209_CR1,0,140,209_AL_.jpg",
	},
	{
		title: "Quantico",
		publishDate: "(2015–2018)",
		genre: "Crime, Drama, Mystery",
		descr:
			"A look at the lives of young FBI recruits training at the Quantico base in Virginia when one of them is suspected of being a sleeper terrorist.",
		rate: "6,7",
		img:
			"https://m.media-amazon.com/images/M/MV5BMTkxNTg3MTc0Ml5BMl5BanBnXkFtZTgwMzYxNDIyNTM@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Orphan Black",
		publishDate: "(2013–2017)",
		genre: "Action, Drama, Sci-Fi",
		descr:
			"A streetwise hustler is pulled into a compelling conspiracy after witnessing the suicide of a girl who looks just like her.",
		rate: "8,3",
		img:
			"https://m.media-amazon.com/images/M/MV5BZjM1ZTVlMGYtNjVkZS00OGMzLWFjMmYtYTE3NjJhZDRlODY3XkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Homeland",
		publishDate: "(2011–2020)",
		genre: "Crime, Drama, Mystery",
		descr:
			"A bipolar CIA operative becomes convinced a prisoner of war has been turned by al-Qaeda and is planning to carry out a terrorist attack on American soil.",
		rate: "8,3",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Blindspot",
		publishDate: "(2015–2020)",
		genre: "Action, Crime, Drama",
		descr: "Jane Doe is found in Times Square with no memory and mysterious tattoos on her body.",
		rate: "7,4",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Legends of Tomorrow",
		publishDate: "(2016– )",
		genre: "Action, Adventure, Drama",
		descr:
			"Time-travelling rogue Rip Hunter has to recruit a rag-tag team of heroes and villains to help prevent an apocalypse that could impact not only Earth, but all of time.",
		rate: "6,8",
		img:
			"https://m.media-amazon.com/images/M/MV5BMTc1NTA2YWMtOTc1ZC00ZDk0LThmZDktODhhZjZiMjdkYmNkXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR13,0,140,209_AL_.jpg",
	},
	{
		title: "The Handmaid's Tale: Der Report der Magd",
		publishDate: "(2017– )",
		genre: "Drama, Sci-Fi, Thriller",
		descr:
			"Set in a dystopian future, a woman is forced to live as a concubine under a fundamentalist theocratic dictatorship.",
		rate: "8,5",
		img:
			"https://m.media-amazon.com/images/M/MV5BMTU0MTI0MDAyM15BMl5BanBnXkFtZTgwMDg5MzYyNTM@._V1_UY209_CR1,0,140,209_AL_.jpg",
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
	},
	{
		title: "The Good Doctor",
		publishDate: "(2017– )",
		genre: "Drama",
		descr:
			"Shaun Murphy, a young surgeon with autism and Savant syndrome, is recruited into the surgical unit of a prestigious hospital.",
		rate: "8,2",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Jane the Virgin",
		publishDate: "(2014–2019)",
		genre: "Comedy",
		descr:
			"A young, devout Catholic woman discovers that she was accidentally artificially inseminated.",
		rate: "7,8",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Glee",
		publishDate: "(2009–2015)",
		genre: "Comedy, Drama, Music",
		descr:
			"A group of ambitious misfits try to escape the harsh realities of high school by joining a glee club headed by a passionate Spanish teacher.",
		rate: "6,7",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "South Park",
		publishDate: "(1997– )",
		genre: "Animation, Comedy",
		descr:
			"Follows the misadventures of four irreverent grade-schoolers in the quiet, dysfunctional town of South Park, Colorado.",
		rate: "8,7",
		img:
			"https://m.media-amazon.com/images/M/MV5BOGE2YWUzMDItNTg2Ny00NTUzLTlmZGYtNWMyNzVjMjQ3MThkXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY209_CR1,0,140,209_AL_.jpg",
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
	},
	{
		title: "Under the Dome",
		publishDate: "(2013–2015)",
		genre: "Drama, Mystery, Sci-Fi",
		descr:
			'An invisible and mysterious force field descends upon a small actual town of Chester\'s Mill, Maine, USA, trapping residents inside, cut off from the rest of civilization. The trapped townspeople must discover the secrets and purpose of the "dome" or "sphere" and its origins, while coming to learn more than they ever knew about each other and animals too.',
		rate: "6,6",
		img:
			"https://m.media-amazon.com/images/M/MV5BMjA3NDk0NzM1MF5BMl5BanBnXkFtZTcwOTYxMTk3OQ@@._V1_UY209_CR9,0,140,209_AL_.jpg",
	},
	{
		title: "The Umbrella Academy",
		publishDate: "(2019– )",
		genre: "Action, Adventure, Comedy",
		descr:
			"A family of former child heroes, now grown apart, must reunite to continue to protect the world.",
		rate: "8",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
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
	},
	{
		title: "The OA",
		publishDate: "(2016–2019)",
		genre: "Drama, Fantasy, Mystery",
		descr:
			"Having gone missing seven years ago, the previously blind Prairie returns home, now in her twenties with her sight restored. While many believe she is a miracle, others worry that she could be dangerous.",
		rate: "7,9",
		img:
			"https://m.media-amazon.com/images/M/MV5BMTY5OTkwNDkzOF5BMl5BanBnXkFtZTgwMDEyNzI1NzM@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Desperate Housewives",
		publishDate: "(2004–2012)",
		genre: "Comedy, Drama, Mystery",
		descr:
			"Secrets and truths unfold through the lives of female friends in one suburban neighborhood, after the mysterious suicide of a neighbor.",
		rate: "7,4",
		img:
			"https://m.media-amazon.com/images/M/MV5BYzI2MTFjZDktYTZhNS00YTU2LWI5ZTMtM2MzNDU1YjNhNTJlXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_UY209_CR1,0,140,209_AL_.jpg",
	},
	{
		title: "Better Call Saul",
		publishDate: "(2015– )",
		genre: "Crime, Drama",
		descr:
			"The trials and tribulations of criminal lawyer Jimmy McGill in the time before he established his strip-mall law office in Albuquerque, New Mexico.",
		rate: "8,7",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Bates Motel",
		publishDate: "(2013–2017)",
		genre: "Drama, Horror, Mystery",
		descr:
			"A contemporary prequel to Psycho, giving a portrayal of how Norman Bates' psyche unravels through his teenage years, and how deeply intricate his relationship with his mother, Norma, truly is.",
		rate: "8,2",
		img:
			"https://m.media-amazon.com/images/M/MV5BMzk4OTU5NTE2M15BMl5BanBnXkFtZTcwNTIxMDIyOQ@@._V1_UY209_CR8,0,140,209_AL_.jpg",
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
	},
	{
		title: "Atypical",
		publishDate: "(2017– )",
		genre: "Comedy, Drama",
		descr:
			"Sam, an 18-year-old on the autism spectrum, decides it's time to find a girlfriend, a journey that sets Sam's mom on her own life-changing path as her son seeks more independence.",
		rate: "8,3",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Der Denver-Clan",
		publishDate: "(2017– )",
		genre: "Drama",
		descr:
			"Follows two of America's wealthiest families as they feud for control over their fortune and their children.",
		rate: "7,3",
		img:
			"https://m.media-amazon.com/images/M/MV5BZWFjMDhkY2YtMTljYi00MWNjLTgyNjQtN2NjNjQ3ZjZhMzJlXkEyXkFqcGdeQXVyMjYwNDA2MDE@._V1_UY209_CR13,0,140,209_AL_.jpg",
	},
	{
		title: "This is Us: Das ist Leben",
		publishDate: "(2016– )",
		genre: "Comedy, Drama, Romance",
		descr:
			"A heartwarming and emotional story about a unique set of triplets, their struggles and their wonderful parents.",
		rate: "8,7",
		img:
			"https://m.media-amazon.com/images/M/MV5BMDM2YTMzMWMtNmFhZi00ZWY4LTk1ZmUtMWExNzg3NDZmMTY4XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX140_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "The Good Place",
		publishDate: "(2016–2020)",
		genre: "Comedy, Drama, Fantasy",
		descr:
			"Four people and their otherworldly frienemy struggle in the afterlife to define what it means to be good.",
		rate: "8,2",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
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
	},
	{
		title: "The Rain",
		publishDate: "(2018–2020)",
		genre: "Drama, Sci-Fi, Thriller",
		descr:
			"After a brutal virus wipes out most of the population, two young siblings embark on a perilous search for safety.",
		rate: "6,3",
		img:
			"https://m.media-amazon.com/images/M/MV5BZjg2YmVhYTktODE5NC00MzYwLTljNmQtYTg5YzczOTEwZDc3XkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UY209_CR7,0,140,209_AL_.jpg",
	},
	{
		title: "Mindhunter",
		publishDate: "(2017– )",
		genre: "Crime, Drama, Thriller",
		descr:
			"Set in the late 1970s, two FBI agents are tasked with interviewing serial killers to solve open cases.",
		rate: "8,6",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Revenge",
		publishDate: "(2011–2015)",
		genre: "Drama, Mystery, Thriller",
		descr:
			"An emotionally troubled young woman sets out to exact revenge against the people who wronged her father.",
		rate: "7,8",
		img:
			"https://m.media-amazon.com/images/M/MV5BMTY2NjA5MDc0OF5BMl5BanBnXkFtZTgwNTE4OTA5MjE@._V1_UY209_CR8,0,140,209_AL_.jpg",
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
	},
	{
		title: "Scandal",
		publishDate: "(2012–2018)",
		genre: "Drama, Thriller",
		descr:
			"A former White House Communications Director starts her own crisis management firm only to realize her clients are not the only ones with secrets.",
		rate: "7,7",
		img:
			"https://m.media-amazon.com/images/G/01/imdb/images/nopicture/large/film-184890147._CB466725069_.png",
	},
	{
		title: "Marvel's The Defenders",
		publishDate: "(2017)",
		genre: "Action, Adventure, Crime",
		descr:
			"Set a few months after the events of the second season of Daredevil, and a month after the events of Iron Fist, the vigilantes Daredevil, Jessica Jones, Luke Cage, and Iron Fist team up in New York City to fight a common enemy: The Hand.",
		rate: "7,3",
		img:
			"https://m.media-amazon.com/images/M/MV5BNWU4NmY3MTMtMTBmMi00NjFjLTkwMmItYWZhZWUwNDg5M2ExXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Big Little Lies",
		publishDate: "(2017–2019)",
		genre: "Crime, Drama, Mystery",
		descr:
			"The apparently perfect lives of upper-class mothers, at a prestigious elementary school, unravel to the point of murder when a single-mother moves to their quaint Californian beach town.",
		rate: "8,5",
		img:
			"https://m.media-amazon.com/images/M/MV5BZmNjYzdjN2ItOTBlNy00Mjc0LWE4YmMtYTQ4ZjQzNTMyNDc4XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Insatiable",
		publishDate: "(2018–2019)",
		genre: "Comedy, Drama, Thriller",
		descr:
			"A disgraced, dissatisfied civil lawyer-turned-beauty pageant coach takes on a vengeful, bullied teenager as his client and has no idea what he's about to unleash upon the world.",
		rate: "6,5",
		img:
			"https://m.media-amazon.com/images/M/MV5BODUzODY1NzEtYjNiNy00NzEwLThhYzEtZGUxZjQ4MDRiNjY2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "The Mentalist",
		publishDate: "(2008–2015)",
		genre: "Crime, Drama, Mystery",
		descr:
			'A famous "psychic" outs himself as a fake, and starts working as a consultant for the California Bureau of Investigation so he can find "Red John", the madman who killed his wife and daughter.',
		rate: "8,1",
		img:
			"https://m.media-amazon.com/images/M/MV5BMTQ5OTgzOTczM15BMl5BanBnXkFtZTcwMDM2OTY4MQ@@._V1_UY209_CR8,0,140,209_AL_.jpg",
	},
	{
		title: "The Crown",
		publishDate: "(2016– )",
		genre: "Drama, History",
		descr:
			"Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the twentieth century.",
		rate: "8,7",
		img:
			"https://m.media-amazon.com/images/M/MV5BNGI1ODkzZDQtZTYxYS00MTg1LWFlY2QtMTM5MGNhNWRhYmVmXkEyXkFqcGdeQXVyNjU2ODM5MjU@._V1_UY209_CR13,0,140,209_AL_.jpg",
	},
	{
		title: "Chernobyl",
		publishDate: "(2019)",
		genre: "Drama, History, Thriller",
		descr:
			"In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
		rate: "9,4",
		img:
			"https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_UX140_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "iZombie",
		publishDate: "(2015–2019)",
		genre: "Comedy, Crime, Drama",
		descr:
			"A medical resident finds that being a zombie has its perks, which she uses to assist the police.",
		rate: "7,9",
		img:
			"https://m.media-amazon.com/images/M/MV5BZWNhODE4NzAtN2JjOC00ODJjLThhNzAtMWM1NDg4ZDQxNzMzXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR13,0,140,209_AL_.jpg",
	},
	{
		title: "Reign",
		publishDate: "(2013–2017)",
		genre: "Drama, Fantasy",
		descr:
			"Mary, Queen of Scots, faces political and sexual intrigue in the treacherous world of the French court.",
		rate: "7,5",
		img:
			"https://m.media-amazon.com/images/M/MV5BMjEwMDgzNjA1Ml5BMl5BanBnXkFtZTgwNjYyNDUzMTI@._V1_UY209_CR13,0,140,209_AL_.jpg",
	},
	{
		title: "Eine Reihe betrüblicher Ereignisse",
		publishDate: "(2017–2019)",
		genre: "Adventure, Comedy, Drama",
		descr:
			"After the loss of their parents in a mysterious fire, the three Baudelaire children face trials and tribulations attempting to uncover dark family secrets.",
		rate: "7,8",
		img:
			"https://m.media-amazon.com/images/M/MV5BMTYzMjA3OTgxOV5BMl5BanBnXkFtZTgwMjAwMDU5NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Criminal Minds",
		publishDate: "(2005–2020)",
		genre: "Crime, Drama, Mystery",
		descr:
			"The cases of the F.B.I. Behavioral Analysis Unit (B.A.U.), an elite group of profilers who analyze the nation's most dangerous serial killers and individual heinous crimes in an effort to anticipate their next moves before they strike again.",
		rate: "8,1",
		img:
			"https://m.media-amazon.com/images/M/MV5BNGE2ZmFkZTYtNjRiOS00ZjE3LThjOWMtZTViZjRmNDFjNTQwXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_UX140_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Scream",
		publishDate: "(2015– )",
		genre: "Crime, Drama, Horror",
		descr:
			"A serialized anthology series that follows a group of teenagers being targeted by a masked serial killer.",
		rate: "7,2",
		img:
			"https://m.media-amazon.com/images/M/MV5BNjVmY2M3ZTUtMDhkZC00ODk4LTkwMjktNDRjNGRjYTIxZGZiXkEyXkFqcGdeQXVyNjEwNTM2Mzc@._V1_UX140_CR0,0,140,209_AL_.jpg",
	},
	{
		title: "Spuk in Hill House",
		publishDate: "(2018– )",
		genre: "Drama, Horror, Mystery",
		descr:
			"Flashing between past and present, a fractured family confronts haunting memories of their old home and the terrifying events that drove them from it.",
		rate: "8,7",
		img:
			"https://m.media-amazon.com/images/M/MV5BMTU4NzA4MDEwNF5BMl5BanBnXkFtZTgwMTQxODYzNjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
	},
]

const disneyShows = []

const animeShows = []
