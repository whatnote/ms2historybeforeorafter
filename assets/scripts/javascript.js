var message = document.getElementById('message');
var count = 0
var score = 0
var moves = 10
var cardOutput = document.getElementById('cards');
var scoreOutput = document.getElementById('score');
var cardOutputEvent = document.getElementById('cardright');

//start game
function gameStart() {
    var count = 0
    var score = 0
    var moves = 10

    message.innerHTML = "<h3>Game started!</h3>";
    document.getElementById('start').style.display = 'none';
    document.getElementById('highLow').style.display = 'block';
    document.getElementById('cards').style.display = 'block';
    shuffleArray(cards);
    cardOutput.innerHTML += showCard();
    scoreOutput.innerHTML = '<h3>Score: '+score+'</h3>';
    cardOutputEvent.innerHTML +=showCardeventonly();
    }

//highlow 
function hilo(a){
    var win = false;
    var oldCard = cards[count].date;
    count++;
    cardOutput.innerHTML +=showCard();
    var newCard = cards[count].date;

    cardOutputEvent.innerHTML +=showCardeventonly();
    
    var cardclear=document.getElementById('cardtodelete');
    cardclear.remove();

    var cardclear=document.getElementById('cardtodeleteright');
    cardclear.remove();
        
    if(a == 'high' && oldCard < newCard){win=true;}
    else if(a == 'low' && oldCard > newCard){win=true;}
    if(win){
        message.innerHTML = "<h3>You Were Right!</h3>";
        score++;
        moves--;
        if(moves<1){endPlay(); }           
        }else {
            message.innerHTML = "<h3>You Were Wrong</h3>";
            moves--;
            if(moves<1){endPlay();
            }          
        }
        scoreOutput.innerHTML = '<h3>Score: '+score+'</h3>';
     }

function endPlay(){
    document.getElementById('clearcards').style.display ='none';
        message.innerHTML = 
        '<div class="scorecard"><h3>GAME OVER!</h3><br><h3> Your score was '+score+'</h3><br>' 
        +'<p>0-3 Maybe play again</p><br>'
        +'<p>3-7 A Student of History</p><br>'
        +'<p>7-9 A Doctor of Histroy</p><br>'
        +'<p>10 A Professor of History!</p><br>'
        +'<button id="btnstart" type="button" onclick="gameStart()" class="btn1">Play Again?</button></div>'; 
     }

//shuffle
function shuffleArray(array){
    for(var i = array.length -1; i >0; i--){
        var holder = Math.floor(Math.random() *(i+1));
        var temp = array[i];
            array[i]=array[holder];
            array[holder] = temp;
        }
    return array;
    console.log(array)
}

//dealing the cards
function showCard(){
    return '<div id="cardtodelete"><img src="assets/css/images/' 
    + cards[count].image 
    + '.jpg" width="50%" class"cardpic"><p>'    
    +cards[count].event+ '<br><br>'
    +cards[count].date
    +'</p><div class="popup" onclick="moreInfo()">Click for more Info<span class="popuptext" id="myPopup">'
    +cards[count].description
    +'</span></div>';      
}

function moreInfo() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}


//https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_popup for the pop up

//dealing the cards - card on the right
function showCardeventonly(){
    return '<div id="cardtodeleteright"><p><img src="assets/css/images/' 
    + cards[count+1].image 
    + '.jpg" width="50%" class"cardpic"><p>'    
    +cards[count+1].event+'</p>'
    }

//deck of cards
function Card(date, event, description, link, linkDisplay, image){
    this.date = date; 
    this.event = event;
    this.description = description; 
    this.link = link;
    this.linkDisplay = linkDisplay;
    this.image = image;
}

//deck of cards
var cards = [
    new Card(
        1666,
        'The Great Fire of London', 
        'The Great Fire of London swept through the central parts of the English city from Sunday, 2 September to Thursday, 6 September 1666. The fire gutted the medieval City of London inside the old Roman city wall.',
        'https://en.wikipedia.org/wiki/Great_Fire_of_London', 
        'click for more info', 
        'greatfirelondon' ),
    new Card(
        1820,
        'When was Florence Nightingale born', 
        'Florence Nightingale, byname Lady with the Lamp, (born May 12, 1820, Florence [Italy]—died August 13, 1910, London, England), British nurse, statistician, and social reformer who was the foundational philosopher of modern nursing.',
        'https://www.britannica.com/biography/Florence-Nightingale',
        'click for more info', 
        'nightengale' ),
    new Card(
        1891,
        'When was First Crufts dog Show', 
        'The first show named Crufts - Crufts Greatest Dog Show — was held at the Royal Agricultural Hall, Islington, in 1891. It was the first at which all breeds were invited to compete, with around 2,000 dogs and almost 2,500 entries.',
        'https://en.wikipedia.org/wiki/Crufts', 
        'click for more info',
        'crufts'),
    new Card(
        1859,
        'Charles Darwin’s theory of Evolution is published',  
        'On the Origin of Species (or, more completely, On the Origin of Species by Means of Natural Selection, or the Preservation of Favoured Races in the Struggle for Life), published on 24 November 1859, is a work of scientific literature by Charles Darwin which is considered to be the foundation of evolutionary biology.',
        'https://en.wikipedia.org/wiki/On_the_Origin_of_Species', 
        'click for more info', 
        'darwin'),
    new Card(1863,'The London underground Open',  'The London Underground (also known simply as the Underground, or by its nickname the Tube) is a public rapid transit system serving London region, England and some parts of the adjacent counties of Buckinghamshire, Essex and Hertfordshire in the United Kingdom.', 'https://en.wikipedia.org/wiki/London_Underground', 'click for more info', 'londonunderground'),
    new Card(1911,'The Launch of the titanic',  'The Titanic was launched into Belfast Lough on May 31, 1911. Ten months later, it struck an iceberg and sank on its maiden voyage to New York City. The unsinkable British liner Titanic sails out of Southampton, England, at the start of its doomed voyage in 1912.', 'https://en.wikipedia.org/wiki/RMS_Titanic', 'click for more info', 'titanic'),
    new Card(1919,'First female MP to sit in the UK parliament', 'The first women to take her seat was Nancy Astor (Viscountess Astor), after a by-election in December 1919. She was elected as a Conservative for the Plymouth Sutton constituency after her husband, Waldorf Astor, the former MP, was elevated to the peerage.', 'https://www.parliament.uk/about/living-heritage/transformingsociety/electionsvoting/womenvote/overview/womenincommons/','click for more info', 'femaleMP'),
    new Card(1635,'The Postal Service is Opened', 'description', 'link','click for more info', 'picfilename'),
    new Card(1807,'The slave trade is Abolished in Britain', 'description', 'link','click for more info', 'picfilename'),
    new Card(1801,'The London Stock Exchange is opened', 'description', 'link','click for more info', 'picfilename'),
    new Card(1928,'Women receive the same voting rights as men', 'description', 'link','click for more info', 'picfilename'),
    new Card(1586,'The Potato is brought to Britain', 'description', 'link','click for more info', 'picfilename'),
    new Card(1652,'Tea is brought the Britain', 'description', 'link','click for more info', 'picfilename'),
    new Card(1966,'England win the World Cup', 'description', 'link','click for more info', 'picfilename'),
    new Card(1895,'The National Trust is founded', 'description', 'link','click for more info', 'picfilename'),
    new Card(1956,'Britains first Nuclear Power statino is built', 'description', 'link','click for more info', 'picfilename'),
    new Card(1839,'The first Official Grand National', 'description', 'link','click for more info', 'picfilename'),
    new Card(1922,'The BBC is Founded', 'description', 'link','click for more info', 'picfilename'),
    new Card(1937,'The 999 emergency number is introduced', 'description', 'link','click for more info', 'picfilename'),
    new Card(1997,'The first Harry Potter book is published', 'description', 'link','click for more info', 'picfilename'),
    new Card(1959,'The frist motorway is completed', 'description', 'link','click for more info', 'picfilename'),
    new Card(1759,'The British Museum opens', 'description', 'link','click for more info', 'picfilename'),
    new Card(1264,'The Frist English Parliament is Held', 'description', 'link','click for more info', 'picfilename'),
    new Card(1348,'The Black Death (1st one)', 'description', 'link','click for more info', 'picfilename'),
    new Card(1215,'The Signing of the Magna Carta', 'description', 'link','click for more info', 'picfilename'),
    new Card(1065,'Westminster Abbey is Compelted', 'description', 'link','click for more info', 'picfilename'),
    new Card(1476,'The first printing press in Britain opens', 'description', 'link','click for more info', 'picfilename'),
    new Card(1086,'The Domesday Book is Compelted', 'description', 'link','click for more info', 'picfilename'),
    new Card(122,'The Building of Hadrians walll begins', 'description', 'link','click for more info', 'picfilename'),
    new Card(1564,'William Shakespear is Born', 'description', 'link','click for more info', 'picfilename'),
    new Card(1799,'Income Tax is Introduced', 'description', 'link','click for more info', 'picfilename'),
    new Card(1962,'Britians First satellite is Launched', 'description', 'link','click for more info', 'picfilename'),
    new Card(1935,'Compulusary Driveing Tet is introduced', 'description', 'link','click for more info', 'picfilename'),
    new Card(2012,'The London Olympics (modern)', 'description', 'link','click for more info', 'picfilename'),
    new Card(1957,'The Queens first Televised Christmas Speach', 'description', 'link','click for more info', 'picfilename'),
    new Card(1991,'The first Briton in Space', 'description', 'link','click for more info', 'picfilename'),
    new Card(1994,'The channel tunnel opens', 'description', 'link','click for more info', 'picfilename'),
    new Card(1973,'Britain Joins EEC ', 'description', 'link','click for more info', 'picfilename'),
    new Card(1971,'Decimilisation of British Currency', 'description', 'link','click for more info', 'picfilename'),
    new Card(1605,'The Gun Powder Plot', 'description', 'link','click for more info', 'picfilename'),
    new Card(1912,'Captain Scotts Expedition reaches the South Pole', 'description', 'link','click for more info', 'picfilename'),
    new Card(1983,'The £1 coin in introduced in Britain', 'description', 'link','click for more info', 'picfilename'),

];


