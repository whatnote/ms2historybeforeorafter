function Card(event, date, description, link, linkDisplay, image){
    this.event = event;
    this.date = date; 
    this.description = description; 
    this.link = link;
    this.linkDisplay = linkDisplay;
    this.image = image;
}

var deck = [
    new Card('The Great Fire of London', 1666 ,'The Great Fire of London swept through the central parts of the English city from Sunday, 2 September to Thursday, 6 September 1666. The fire gutted the medieval City of London inside the old Roman city wall.','https://en.wikipedia.org/wiki/Great_Fire_of_London', 'click for more info', 'greatfirelondon' ),
    new Card('When was Florence Nightingale born', 1820, 'Florence Nightingale, byname Lady with the Lamp, (born May 12, 1820, Florence [Italy]—died August 13, 1910, London, England), British nurse, statistician, and social reformer who was the foundational philosopher of modern nursing.','https://www.britannica.com/biography/Florence-Nightingale','click for more info', 'nightengale' ),
    new Card('When was First Crufts dog Show', 1891, 'The first show named Crufts - Crufts Greatest Dog Show — was held at the Royal Agricultural Hall, Islington, in 1891. It was the first at which all breeds were invited to compete, with around 2,000 dogs and almost 2,500 entries.', 'https://en.wikipedia.org/wiki/Crufts', 'click for more info', 'crufts'),
    new Card('Charles Darwin’s theory of Evolution is published', 1859, 'On the Origin of Species (or, more completely, On the Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life), published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology.','https://en.wikipedia.org/wiki/On_the_Origin_of_Species', 'click for more info', 'darwin'),
    new Card('The London underground Open', 1863, 'The London Underground (also known simply as the Underground, or by its nickname the Tube) is a public rapid transit system serving London region, England and some parts of the adjacent counties of Buckinghamshire, Essex and Hertfordshire in the United Kingdom.', 'https://en.wikipedia.org/wiki/London_Underground', 'click for more info', 'londonunderground'),
    new Card('The Launch of the titanic', 1911, 'The Titanic was launched into Belfast Lough on May 31, 1911. Ten months later, it struck an iceberg and sank on its maiden voyage to New York City. The unsinkable British liner Titanic sails out of Southampton, England, at the start of its doomed voyage in 1912.', 'https://en.wikipedia.org/wiki/RMS_Titanic', 'click for more info', 'titanic'),
    new Card('First female MP to sit in the UK parliament', 1919, 'The first women to take her seat was Nancy Astor (Viscountess Astor), after a by-election in December 1919. She was elected as a Conservative for the Plymouth Sutton constituency after her husband, Waldorf Astor, the former MP, was elevated to the peerage.', 'https://www.parliament.uk/about/living-heritage/transformingsociety/electionsvoting/womenvote/overview/womenincommons/','click for more info', 'femaleMP'),
];

function getRandom(num){
  var randomNumber = Math.floor(Math.random() * num);
  return randomNumber;
}

document.getElementById("higher").onclick = function(){
  var index = getRandom(8);
  var currentCard = deck[index];

  document.getElementById("displayright").innerHTML = '<img src="assets/images/backofcards/' + currentCard.image + '.jpg"><h3>' + currentCard.event + '</h3><p>' + currentCard.date + '</p><p>' + currentCard.description + '</p><a href=" +currentCard.link' + '">Click for more Info</a>';
};

