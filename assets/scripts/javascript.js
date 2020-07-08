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
    + '.jpg" width="50%" class="cardpic"><p>'    
    +cards[count].event+ '<br><br>'
    +cards[count].date
    +'</p><div class="popup" onclick="moreInfo()">Click for more Info<span class="popuptext" id="myPopup">'
    +cards[count].description
    +'<br><a href="'
    + cards[count].link
    +'" target="_blank">Link</a>'
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
    + '.jpg" class="cardpic"><p>'    
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
        'nightingale' ),
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

     new Card(
        1516,
        'The Postal Service Opened', 
        'The Royal Mail can trace its history back to 1516, when Henry VIII established a "Master of the Posts", a position that was renamed "Postmaster General" in 1710', 
        'https://en.wikipedia.org/wiki/Royal_Mail#:~:text=One%20of%20his%20first%20acts,being%20paid%20by%20the%20recipient.',
        'click for more info',
        'RoyalMail'),

   new Card (
        1571,
        'The London Stock Exchange is opened', 
        'The Royal Exchange had been founded by English financier Thomas Gresham and Sir Richard Clough on the model of the Antwerp Bourse. It was opened by Elizabeth I of England in 1571', 
        'https://en.wikipedia.org/wiki/London_Stock_Exchange',
        'click for more info',
        'NewStockExchange'),    

    new Card(
        1863,
        'The London underground Open',
        'The London Underground (also known simply as the Underground, or by its nickname the Tube) is a public rapid transit system serving London region, England and some parts of the adjacent counties of Buckinghamshire, Essex and Hertfordshire in the United Kingdom.', 
        'https://en.wikipedia.org/wiki/London_Underground', 
        'click for more info', 
        'londonunderground'),

    new Card(
        1911,
        'The Launch of the titanic',
        'The Titanic was launched into Belfast Lough on May 31, 1911. Ten months later, it struck an iceberg and sank on its maiden voyage to New York City. The unsinkable British liner Titanic sails out of Southampton, England, at the start of its doomed voyage in 1912.', 
        'https://en.wikipedia.org/wiki/RMS_Titanic', 
        'click for more info', 
        'titanic'),

    new Card(
        1919,
        'First female MP to sit in the UK parliament', 
        'The first women to take her seat was Nancy Astor (Viscountess Astor), after a by-election in December 1919. She was elected as a Conservative for the Plymouth Sutton constituency after her husband, Waldorf Astor, the former MP, was elevated to the peerage.', 
        'https://www.parliament.uk/about/living-heritage/transformingsociety/electionsvoting/womenvote/overview/womenincommons/',
        'click for more info', 
        'femaleMP'),    

    new Card(
        1928,
        'Women receive the same voting rights as men', 
        'It was not until the Equal Franchise Act of 1928 that women over 21 were able to vote and women finally achieved the same voting rights as men. This act increased the number of women eligible to vote to 15 million.', 'link',
        'click for more info',
        'https://www.parliament.uk/about/living-heritage/transformingsociety/electionsvoting/womenvote/case-study-the-right-to-vote/the-right-to-vote/birmingham-and-the-equal-franchise/1928-equal-franchise-act/1928-equal-franchise-act-first-page/', 
        'womenvote'),

    new Card(1586,
        'The Potato is brought to Britain', 
        'On this day in 1586, Sir Thomas Harriot brought the first potato back to Britain from the "New Found Land of Virginia".', 
        'https://en.wikipedia.org/wiki/History_of_the_potato',
        'click for more info',
        'potato'),
    
    new Card(1652,
        'Tea is bought the Britain', 
        'description', 
        'https://www.tea.co.uk/history-of-tea',
        'click for more info', 
        'tea'),
    
    new Card(1966,
        'England wins the Football World Cup', 
        'The 1966 FIFA World Cup was an international association football tournament played in England between 11 and 30 July 1966. ', 
        'https://en.wikipedia.org/wiki/1966_FIFA_World_Cup',
        'click for more info', 
        'football'),

    new Card(1895,
        'The National Trust is founded', 
        'The National Trust was founded on 12 January 1895 by Octavia Hill, Sir Robert Hunter and Canon Hardwicke Rawnsley. Over the last 125 years we’ve become one of the UK’s largest charities, caring for historic places and areas of beautiful countryside.', 
        'lihttps://www.nationaltrust.org.uk/lists/our-history-1884-1945nk',
        'click for more info',
        'nationaltrust'),
    
    new Card(1956,
        'Britains first Nuclear Power station is built', 
        'The United Kingdom established the worlds first civil nuclear programme, opening a nuclear power station, Calder Hall at Windscale, England, in 1956.', 
        'https://en.wikipedia.org/wiki/Nuclear_power_in_the_United_Kingdom#:~:text=The%20United%20Kingdom%20established%20the,was%20generated%20from%20nuclear%20power.',
        'click for more info', 
        'nuclearpower'),
    
    new Card(1839,
        'The first Official Grand National', 
        'The 1839 Grand Liverpool Steeplechase was the first official annual running of a steeplechase which later became known as the Grand National. It was held at Aintree Racecourse near Liverpool, England, on Tuesday 26 February 1839 and attracted a field of 17 runners.', 
        'https://en.wikipedia.org/wiki/1839_Grand_National#:~:text=The%201839%20Grand%20Liverpool%20Steeplechase,a%20field%20of%2017%20runners.',
        'click for more info', 
        'grandnational'),
    
    new Card(1922,
        'The BBC is Founded',
        'The British Broadcasting Company, as the BBC was originally called, was formed on 18 October 1922 by a group of leading wireless manufacturers including Marconi.', 
        'https://www.bbc.com/historyofthebbc/timelines/1920s',
        'click for more info', 
        'bbc'),
    
    new Card(1937,
        'The 999 emergency number is introduced', 
        'First introduced in the London area on 30 June 1937, the UKs 999 number is the worlds oldest emergency call telephone service. ', 
        'https://en.wikipedia.org/wiki/999_(emergency_telephone_number)#:~:text=First%20introduced%20in%20the%20London,which%20five%20women%20were%20killed.', 
        'click for more info', 
        '999'),
    
    new Card(1997,
        'The first Harry Potter book is published',
        'Harry Potter is a series of fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.', 
        'https://en.wikipedia.org/wiki/Harry_Potter',
        'click for more info', 
        'harrypotter'),
    
    new Card(1959,
        'The first motorway is completed', 
        'The first section of motorway was the Preston Bypass in Lancashire, now part of the M6 motorway, which opened in 1958.[3] The M1 was Britains first full-length motorway and opened in 1959. The early M1 had no speed limits, no central reservation or crash barriers, and no lighting.', 
        'https://en.wikipedia.org/wiki/M1_motorway#:~:text=The%20first%20section%20of%20motorway,motorway%20and%20opened%20in%201959.',
        'click for more info', 
        'motorway'),
    
    new Card(1759,
        'The British Museum opens', 
        'descThe British Museum was founded in 1753 and opened its doors in 1759. It was the first national museum to cover all fields of human knowledge, open to visitors from across the world.ription', 
        'https://www.britishmuseum.org/about-us/british-museum-story',
        'click for more info', 
        'britishmuseum'),
    
    new Card(1264,
        'The first English Parliament is Held', 
        'Simon de Montforts parliament of 1265 is sometimes referred to as the first representative English parliament, because of its inclusion of both the knights and the burgesses, and Montfort himself is often regarded as the founder of the House of Common', 
        'https://en.wikipedia.org/wiki/Parliament_of_England',
        'click for more info', 
        'firstparliment'),
    
    new Card(1348,
        'The Black Death (1st one)', 
        'The Black Death was a bubonic plague pandemic, which reached England in June 1348. It was the first and most severe manifestation of the Second Pandemic, caused by Yersinia pestis bacteria. The term "Black Death" was not used until the late 17th century.', 
        'https://en.wikipedia.org/wiki/Black_Death_in_England',
        'click for more info', 
        'blackdeath'),
    
    new Card(1215,
        'The Signing of the Magna Carta', 
        'Magna Carta Libertatum (Medieval Latin for "Great Charter of Freedoms"), commonly called Magna Carta (also Magna Charta; "Great Charter"), is a charter of rights agreed to by King John of England at Runnymede, near Windsor, on 15 June 1215.',
        'https://en.wikipedia.org/wiki/Magna_Carta#:~:text=Magna%20Carta%20Libertatum%20(Medieval%20Latin,Windsor%2C%20on%2015%20June%201215.',
        'click for more info', 
        'magnacarter'),
    
    new Card(1065,
        'Westminster Abbey is completed', 
        ' It was the first church in England built in the Romanesque style. The building was completed around 1060 and was consecrated on 28 December 1065, only a week before Edwards death on 5 January 1066.', 
        'https://en.wikipedia.org/wiki/Westminster_Abbey#:~:text=It%20was%20the%20first%20church,Edith%20was%20buried%20alongside%20him.',
        'click for more info',
        'westminsterabbey'),
    
    new Card(1476,
        'The first printing press in Britain opens', 
        'description', 
        'link',
        'click for more info', 
        'picfilename'),
    
    new Card(1086,
        'The Domesday Book is Compelted', 
        'description', 
        'link',
        'click for more info', 
        'picfilename'),
    
    new Card(122,
        'The Building of Hadrians walll begins', 
        'description', 
        'link',
        'click for more info', 
        'picfilename'),
    
    new Card(1564,
        'William Shakespear is Born', 'description', 'link','click for more info', 'picfilename'),
    
    new Card(1799,
        'Income Tax is Introduced', 'description', 'link','click for more info', 'picfilename'),
    
    new Card(1962,
        'Britians First satellite is Launched', 'description', 'link','click for more info', 'picfilename'),
    
    new Card(1935,
        'Compulusary Driveing Tet is introduced', 'description', 'link','click for more info', 'picfilename'),
    
    new Card(2012,
        'The London Olympics (modern)', 'description', 'link','click for more info', 'picfilename'),
    
    new Card(1957,
        'The Queens first Televised Christmas Speach', 'description', 'link','click for more info', 'picfilename'),
    
    new Card(1991,
        'The first Briton in Space', 'description', 'link','click for more info', 'picfilename'),
    
    new Card(1994,
        'The channel tunnel opens', 
        'description', 'link','click for more info', 'picfilename'),
    
    new Card(1973,
        'Britain Joins EEC ', 
        'description', 'link','click for more info', 'picfilename'),
    
    new Card(1971,
        'Decimilisation of British Currency', 
        'description', 'link','click for more info', 'picfilename'),
    
    new Card(1605,
        'The Gun Powder Plot', 
        'description', 'link','click for more info', 'picfilename'),
    
    new Card(1912,
        'Captain Scotts Expedition reaches the South Pole', 
        'description', 'link','click for more info', 'picfilename'),
    
    new Card(1983,
        'The £1 coin in introduced in Britain', 
        'description', 
        'link',
        'click for more info', 'picfilename'),

];


