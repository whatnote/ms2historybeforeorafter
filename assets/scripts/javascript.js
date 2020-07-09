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
        'William Caxton (c. 1422 – c. 1491) was an English merchant, diplomat, and writer. He is thought to be the first person to introduce a printing press into England, in 1476, and as a printer was the first English retailer of printed books.', 
        'https://en.wikipedia.org/wiki/William_Caxton#:~:text=William%20Caxton%20(c.,English%20retailer%20of%20printed%20books.',
        'click for more info', 
        'printingpress'),
    
    new Card(1086,
        'The Domesday Book is completed', 
        'Domesday Book Latin: Liber de Wintonia "Book of Winchester") is a manuscript record of the "Great Survey" of much of England and parts of Wales completed in 1086 by order of King William the Conqueror. ', 
        'https://en.wikipedia.org/wiki/Domesday_Book#:~:text=Domesday%20Book%20(%2F%CB%88du%CB%90,of%20King%20William%20the%20Conqueror.',
        'click for more info', 
        'domesdaybook'),
    
    new Card(122,
        'The building of Hadrians walll begins', 
        'It was built by the Roman army on the orders of the emperor Hadrian following his visit to Britain in AD 122.', 
        'https://www.english-heritage.org.uk/visit/places/hadrians-wall/hadrians-wall-history-and-stories/history/#:~:text=It%20was%20built%20by%20the,on%2DSolway%20in%20the%20west.',
        'click for more info', 
        'hadrianswall'),
    
    new Card(1564,
        'William Shakespear is Born', 
        'William Shakespeare (bapt. 26 April 1564 – 23 April 1616) was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the worlds greatest dramatist.', 
        'lhttps://en.wikipedia.org/wiki/William_Shakespeareink',
        'click for more info', 
        'shakespear'),
    
    new Card(1799,
        'Income Tax is Introduced', 
        'Income Tax was the first tax in British history to be levied directly on peoples earnings. It was introduced in 1799 by the then Prime Minister William Pitt the Younger, as a temporary measure to cover the cost of the Napoleonic Wars.',
        'https://www.politics.co.uk/reference/income-tax#:~:text=Income%20Tax%20rose%20dramatically%20in,%22Super%20Tax%22%20was%20introduced.',
        'click for more info',
        'incometax'),
    
    new Card(1962,
        'Britians First satellite is Launched',
        'Although Prospero was the first British satellite to have been launched successfully by a British rocket, the first British satellite placed in orbit was Ariel 1, launched in April 1962 on a U.S. rocket.', 
        'https://en.wikipedia.org/wiki/Prospero_(satellite)#:~:text=Although%20Prospero%20was%20the%20first,1962%20on%20a%20U.S.%20rocket.',
        'click for more info',
        'satellite'),
    
    new Card(1934,
        'Compulsory driving Test is introduced',
        'Legislation for compulsory testing was introduced for all new drivers with the Road Traffic Act 1934.', 
        'https://en.wikipedia.org/wiki/United_Kingdom_driving_test#:~:text=Legislation%20for%20compulsory%20testing%20was,to%20have%20passed%20the%20test.',
        'click for more info', 
        'drivingtest'),
    
    new Card(2012,
        'The London Olympics (modern)', 
        'The 2012 Summer Olympics commonly known as London 2012, was an international multi-sport event that was held from 27 July to 12 August 2012 in London, United Kingdom. ',
        'https://en.wikipedia.org/wiki/2012_Summer_Olympics',
        'click for more info', 
        'olympics'),
    
    new Card(1957,
        'The Queens first Televised Christmas Speech', 
        'The Queens Christmas Message is a broadcast made by the sovereign of the Commonwealth realms to the Commonwealth of Nations each Christmas.', 
        'https://en.wikipedia.org/wiki/Royal_Christmas_Message',
        'click for more info', 
        'queenspeech'),
    
    new Card(1991,
        'The first Briton in Space', 
        'Helen Sharman, a 26-year-old food chemist, who became the first Briton in space after she answered a radio advert simply stating: “Astronaut wanted, no experience necessary.”', 
        'https://www.fourpure.com/blog/helen-sharman-the-first-brit-in-space#:~:text=Take%20Helen%20Sharman%2C%20a%2026,wanted%2C%20no%20experience%20necessary.%E2%80%9D',
        'click for more info', 
        'shama'),
    
    new Card(1994,
        'The channel tunnel opens', 
        'The Channel Tunnel (French: Le tunnel sous la Manche), also referred to as the Chunnel, is a 50.45-kilometre (31.35 mi) railway tunnel that connects Folkestone (Kent, England) with Coquelles (Pas-de-Calais, France), beneath the English Channel at the Strait of Dover', 
        'https://en.wikipedia.org/wiki/Channel_Tunnel',
        'click for more info',
        'tunnel'),
    
    new Card(1973,
        'Britain Joins EEC', 
        'The Accession of the United Kingdom to the European Communities (EC) – the collective term for the European Coal and Steel Community (ECSC), the European Economic Community (EEC) and the European Atomic Energy Community (EAEC) – took effect on 1 January 1973.', 
        'https://en.wikipedia.org/wiki/Accession_of_the_United_Kingdom_to_the_European_Communities',
        'click for more info', 
        'ukeec'),
    
    new Card(1971,
        'Decimalisation of British Currency', 
        'On 14 February that year, there were 12 pennies to the shilling and 20 shillings to the pound. The following day all that was history and the pound was made up of 100 new pence.', 
        'https://www.bbc.co.uk/news/business-12346083#:~:text=If%20you%20do%2C%20you%20must,20%20shillings%20to%20the%20pound.',
        'click for more info',
        'oldmoney'),
    
    new Card(1605,
        'The Gunpowder Plot', 
        'The Gunpowder Plot of 1605, in earlier centuries often called the Gunpowder Treason Plot or the Jesuit Treason, was a failed assassination attempt against King James I by a group of provincial English Catholics led by Robert Catesby.', 
        'https://en.wikipedia.org/wiki/Gunpowder_Plot',
        'click for more info', 
        'gunpowder'),
    
        new Card(1912,
        'Captain Scotts Expedition reaches the South Pole', 
        'Robert Falcon Scott CVO (6 June 1868 – c. 29 March 1912) was a Royal Navy officer and explorer who led two expeditions to the Antarctic regions: the Discovery expedition of 1901–1904 and the ill-fated Terra Nova expedition of 1910–1913.',
        'https://en.wikipedia.org/wiki/Robert_Falcon_Scott',
        'click for more info',
        'scott'),
    
         new Card(1983,
        'The New £1 coin in introduced in Britain', 
        'The old style £1 coin was introduced in 1983 to replace the Bank of England £1 note, which remained in circulation alongside the coins until 1988. Many different reverse designs were used on the original £1 coin, alternating design themes each year for the UK, Scotland, Wales, Northern Ireland and England.', 
        'https://en.wikipedia.org/wiki/One_pound_(British_coin)',
        'click for more info', 
        'Oldonepound'),

        new Card(2017,
        'The £1 coin in introduced in Britain', 
        'A new, dodecagonal (12-sided) design of coin was introduced on 28 March 2017 and both new and old versions of the one pound coin circulated together until the older design was withdrawn from circulation on 15 October 2017.', 
        'https://en.wikipedia.org/wiki/One_pound_(British_coin)',
        'click for more info', 
        'newpoundcoin'),
        
        /* CArd layout 
        new Card(1983,
        'The £1 coin in introduced in Britain', 
        'description', 
        'link',
        'click for more info', 
        'pic'),*/

];


