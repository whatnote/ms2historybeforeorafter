function Card(date, event, description, link, linkDisplay, image){
    this.date = date; 
    this.event = event;
    this.description = description; 
    this.link = link;
    this.linkDisplay = linkDisplay;
    this.image = image;
}


//deck of cards
var deck = [
    new Card(1666,'The Great Fire of London', 'The Great Fire of London swept through the central parts of the English city from Sunday, 2 September to Thursday, 6 September 1666. The fire gutted the medieval City of London inside the old Roman city wall.','https://en.wikipedia.org/wiki/Great_Fire_of_London', 'click for more info', 'greatfirelondon' ),
    new Card(1820,'When was Florence Nightingale born', 'Florence Nightingale, byname Lady with the Lamp, (born May 12, 1820, Florence [Italy]—died August 13, 1910, London, England), British nurse, statistician, and social reformer who was the foundational philosopher of modern nursing.','https://www.britannica.com/biography/Florence-Nightingale','click for more info', 'nightengale' ),
    new Card(1891,'When was First Crufts dog Show', 'The first show named Crufts - Crufts Greatest Dog Show — was held at the Royal Agricultural Hall, Islington, in 1891. It was the first at which all breeds were invited to compete, with around 2,000 dogs and almost 2,500 entries.', 'https://en.wikipedia.org/wiki/Crufts', 'click for more info', 'crufts'),
    new Card(1859,'Charles Darwin’s theory of Evolution is published',  'On the Origin of Species (or, more completely, On the Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life), published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology.','https://en.wikipedia.org/wiki/On_the_Origin_of_Species', 'click for more info', 'darwin'),
    new Card(1863,'The London underground Open',  'The London Underground (also known simply as the Underground, or by its nickname the Tube) is a public rapid transit system serving London region, England and some parts of the adjacent counties of Buckinghamshire, Essex and Hertfordshire in the United Kingdom.', 'https://en.wikipedia.org/wiki/London_Underground', 'click for more info', 'londonunderground'),
    new Card(1911,'The Launch of the titanic',  'The Titanic was launched into Belfast Lough on May 31, 1911. Ten months later, it struck an iceberg and sank on its maiden voyage to New York City. The unsinkable British liner Titanic sails out of Southampton, England, at the start of its doomed voyage in 1912.', 'https://en.wikipedia.org/wiki/RMS_Titanic', 'click for more info', 'titanic'),
    new Card(1919,'First female MP to sit in the UK parliament', 'The first women to take her seat was Nancy Astor (Viscountess Astor), after a by-election in December 1919. She was elected as a Conservative for the Plymouth Sutton constituency after her husband, Waldorf Astor, the former MP, was elevated to the peerage.', 'https://www.parliament.uk/about/living-heritage/transformingsociety/electionsvoting/womenvote/overview/womenincommons/','click for more info', 'femaleMP'),
];

//shuffle
function getRandom(num){
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

document.getElementById("higher").onclick = function(){
    var index = getRandom(7);
    var currentCard = deck[index];

    document.getElementById("displayright").innerHTML = '<img src="assets/images/backofcards/' + currentCard.image + '.jpg"><h3>' + currentCard.event + '</h3><p>' + currentCard.date + '</p><p>' + currentCard.description + '</p><a href=" +currentCard.link' + '">Click for more Info</a>';
    document.getElementById("current").innerHTML = currentCard.date;
};

const current_elem = document.getElementById("current");
const btns = document.getElementsByClassName("btn");
const result_elem = document.getElementById("result");
const score_elem = document.getElementById("score");

let last_number = 0;
let current_number = current;
let score = 0;

current_elem.innerText = current_number;

for (let i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function () {
		PlayGame(this.dataset.value);
	});
}

function PlayGame (choice) {
	last_number = current_number;
	current_number = current;
	current_elem.innerText = current_number;
	
	let comparison;
	
	if (last_number < current_number) {
		comparison = "higher";
	} else if (last_number > current_number) {
		comparison = "lower";
	} else {
		comparison = "match";
	}

	if (choice == comparison) {
		score++;
		score_elem.innerText = score;
		result_elem.innerText = "Correct";
		result_elem.classList.add("correct");
		result_elem.classList.remove("hide");

		setTimeout(function () {
			result_elem.classList.remove("correct");
			result_elem.classList.add("hide");
		}, 750);
	} else if (comparison == "match") {
		result_elem.innerText = "Match";
		result_elem.classList.remove("hide");

		setTimeout(function () {
			result_elem.classList.add("hide");
		}, 750);
	} else {
		result_elem.innerText = "Incorrect";
		result_elem.classList.add("incorrect");
		result_elem.classList.remove("hide");

		score = 0;
		score_elem.innerText = score;

		setTimeout(function () {
			result_elem.classList.remove("incorrect");
			result_elem.classList.add("hide");
		}, 750);
	}
}

function getRandomInt () {
	return Math.floor((Math.random() * 10));
}




//RANDOM Card picker
