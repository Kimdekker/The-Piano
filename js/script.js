//Username iput uitvoeren
var startGamePopup = document.querySelector('#startgame'); //de container
var submitButton = document.querySelector('#submitButton'); //de knop om de popup die over de game zit te verwijderen
var displayUserName = document.querySelector('#displayUserName'); //de header waar de name input in komt
var inputField = document.querySelector('#userName'); //het inputfield voor de username
var audioGame = document.querySelector('#audiogame'); //de audio die speelt wanneer je op de submitknop drukt

function removeDiv() { //deze functie zorgt ervoor dat de popup verwijdert zal worden. Wordt uitgevoerd in regel 213
    startGamePopup.classList.add('removediv'); //ik voeg de class .removediv toe aan de functie
}


submitButton.addEventListener('click', function () { //als de submitknop geklikt wordt...
    displayUserName.textContent = inputField.value; //...zal de textcontent (header) uit de DOM structuur worden uitgevoerd
    removeDiv(); // ...zal de functie removeDiv worden uitgevoerd
    audioGame.play(); //... zal de audio uit de DOM worden uitgevoerd > Bron: https://stackoverflow.com/questions/9419263/how-to-play-audio
    startGamePopup.classList.remove('adddiv'); //als de adddiv class is opgeroepen (gebeurd als je game over bent en switch player klikt), verwijdert hij deze nu.
    lives = 3; //Om de levens terug te brengen moeten we deze eerst weer definieren
    heartImg.forEach(function (heartImg) { //Deze heartImg.forEach(selecteer elke van...) functie moet gemaakt worden om alle classes te gaan selecteren. querySelectorAll werkt namelijk niet op zichzelf
        heartImg.classList.remove('removediv'); //We vragen de functie om de class removediv (de levens die we hadden verloren) nu weer terug te brengen
    });
})



//Karakter randomizen

var avatarImg = ['./img/redman.png', './img/greenman.png', './img/blueman.png']; //Array met 3 images. Deze gaan we random opnoemen
var imgElement = document.querySelector('.avatar'); //De plek in de DOM waar de image staat
var randomButton = document.querySelector('#randomButton'); //de knop waar je op gaat klikken die ervoor zorgt dat 1 van de random images uit de array wordt geselecteerd
var imgpopUp = document.querySelector('.avatar_popup')

randomButton.addEventListener('click', function () { //We gaan klikken op de random knop, en dan gebeurt het volgende...
    var randomImgSelector = Math.floor(Math.random() * 3); //deze var zal ervoor zorgen dat er een random img wordt geselecteerd

    const updatedSRC = avatarImg[randomImgSelector]; //We halen hier de source van de image op. Dit is een const, omdat de waarde constant is en niet kan veranderen in het proces.
    imgpopUp.src = updatedSRC //De source van de images worden geupdate elke keer als we op een knop klikken. 
    imgElement.src = updatedSRC //De source van de images worden geupdate elke keer als we op een knop klikken.

    localStorage.setItem('avatarImage', updatedSRC); // Sla de ge-randomize'de image op in de lokale opslag (mapje met afbeeldingen)
});



//pianoknoppen

var knopQ = document.querySelector('#q');
var knopW = document.querySelector('#w');
var knopE = document.querySelector('#e');
var spaceBar = document.querySelector('#spacebar')


// Knop Q inklikken

document.addEventListener('keydown', function (klikq) { //we gaan een keydown functie maken...
    if (klikq.key === 'q' || klikq.key === 'Q') { //als de exacte key q of Q naar beneden gaat...
        knopQ.classList.add('active'); //voeg de class .active toe aan de styling van knopQ
        knopQ.click(); //Doe wat hierboven beschreven staat door knopQ in te klikken
    }
});

document.addEventListener('keyup', function (klikq) { //we gaan een function maken voor als de key weer omhoog is...
    if (klikq.key === 'q' || klikq.key === 'Q') { //als de q of Q weer losgelaten wordt...
        knopQ.classList.remove('active'); //verwijder dan de class active van knopQ
    }
});


// Knop W inklikken


document.addEventListener('keydown', function (klikw) {
    if (klikw.key === 'w' || klikw.key === 'W') {
        knopW.classList.add('active');
        knopW.click();
    }
});

document.addEventListener('keyup', function (klikw) {
    if (klikw.key === 'w' || klikw.key === 'W') {
        knopW.classList.remove('active');
    }
});


// Knop E inklikken


document.addEventListener('keydown', function (klike) {
    if (klike.key === 'e' || klike.key === 'E') {
        knopE.classList.add('active');
        knopE.click();
    }
});

document.addEventListener('keyup', function (klike) {
    if (klike.key === 'e' || klike.key === 'E') {
        knopE.classList.remove('active');
    }
});





// Spacebar inklikken

document.addEventListener('keydown', function (klikspacebar) {
    if (klikspacebar.key === ' ') {
        spaceBar.classList.add('active');
        spaceBar.click();
    }
});

document.addEventListener('keyup', function (klikspacebar) {
    if (klikspacebar.key === ' ') {
        spaceBar.classList.remove('active');
    }
});



// Klik knop > Blok valt

var blockQ = document.querySelector('.blockq');
var blockW = document.querySelector('.blockw');
var blockE = document.querySelector('.blocke');


// Als ik op de Q klik, dan valt het blok die onder de Q staat

knopQ.addEventListener("click", function () { //eventlistene, want er gaat wat gebeuren als ik ergens op klik..
    var KlikKnopQ = true; // variabele voor als ik de knop heb ingeklikt > true omdat het dan waar is...

    if (KlikKnopQ) { // als ik op knopQ klik...
        blockQ.classList.remove('drop'); //als default hebben we dan verwijder de class .drop van het blok > Als ik de knop  Q loslaat, gebeurt dit stukje altijd.
        blockQ.offsetWidth; // Forceer een heropbouw van blockQ > door de zichtbare breedte van het element te retourneren, waardoor het blok opnieuw aan de animatie zal starten. Bron: https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/offsetWidth
        blockQ.classList.add('drop'); // en als je op knopQ klikt, dan wordt de class drop toegevoegd aan het blok van knop Q
    }
});


// Als ik op de W klik, dan valt het blok die onder de W staat


knopW.addEventListener("click", function () {
    var KlikKnopW = true;

    if (KlikKnopW) {
        blockW.classList.remove('drop');
        blockW.offsetWidth;
        blockW.classList.add('drop');
    }
});


// Als ik op de Q klik, dan valt het blok die onder de Q staat

knopE.addEventListener("click", function () {
    var KlikKnopE = true;

    if (KlikKnopE) {
        blockE.classList.remove('drop');
        blockE.offsetWidth;
        blockE.classList.add('drop');
    }
});




//Blokken vangen, punten verdienen en levens verliezen

var VangSbRect = spaceBar.getBoundingClientRect(); //we maken hier 2 variabelen om de syntax in een doosje te stoppen, zodat we deze goed kunnen terug vinden.
var vangMarge = 100; // marge die je krijgt voor het vangen van het blok, anders zou je alleen punten kunnen scoren als de 2 borders precies gelijk zijn.
var blockCaught = false; // Deze variable gaan we gebruiken als het blok niet is gevangen, want het blok wordt nooit gevangen, tenzij het blok wel gevangen wordt
var spaceBarClicked = false; // Trackt of de spatiebalk is ingeklikt. Dit hebben we nodig om te achterhalen of er een block mis is gevangen, daarom is deze default false (anders verlies je levens zonder in te klikken)


//Block Q vangen

function VangBlockQ() { //we maken een functie om het blok met de spatiebalk te vangen
    var blockQRect = blockQ.getBoundingClientRect(); //De volgende syntax geeft informatie over de grootte van een DOM element en de positie ervan > viewport (bron:https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect)

    if (blockQRect.bottom >= VangSbRect.top - vangMarge) { //checkt bottomborder van het block en checkt of het overeenkomt met de top van de spatiebalk knop. Vervolgens geef ik de marge mee en zegt dat het blok er ook overheen mag
        verhoogScore(); //voer de verhoogScore functie uit (regel 243)
        blockCaught = true //want het blok is gevangen, dus er wordt geen leven weggenomen
        return; //start de functie weer opnieuw op, want we hebben een punt gekregen...
    } else { // anders...
        if (spaceBarClicked && !blockCaught) { // Als de spatie is ingeklikt en er is geen (!) block gevangen...
            verliesLeven(); //...Verlies je een leven (regel 254)
        }
    }
    spaceBarClicked = false; // Zet na het uitvoeren van de functie de spatiebalk weer op niet geklikt (anders verlies je meer dan 1 leven)
    blockCaught = false;
}

spaceBar.addEventListener('click', VangBlockQ); //we voeren de functie hierboven uit zodra de spatie is ingedrukt



// block W vangen
function VangBlockW() {
    var blockWRect = blockW.getBoundingClientRect();

    if (blockWRect.bottom >= VangSbRect.top - vangMarge) {
        verhoogScore();
        blockCaught = true;
        return;
    } else {
        if (spaceBarClicked && !blockCaught) {
            verliesLeven();
        }
    }
    spaceBarClicked = false;
}

spaceBar.addEventListener('click', VangBlockW);

// block E vangen
function VangBlockE() {
    var blockERect = blockE.getBoundingClientRect();

    if (blockERect.bottom >= VangSbRect.top - vangMarge) {
        verhoogScore();
        blockCaught = true;
        return;
    } else {
        if (spaceBarClicked && !blockCaught) {
            verliesLeven();
        }
    }
    spaceBarClicked = false;
}

spaceBar.addEventListener('click', VangBlockE);



//punten verdienen 


function verhoogScore() {
    var score = document.querySelector('#score'); //variabele score aanmaken, we halen de ID #score op uit de DOM
    score.textContent = parseInt(score.textContent) + 1; //Als er gescoord wordt, mag de texcontent (die als start op 0 staat) met +1 omhoog.
    finalScore.textContent = parseInt(score.textContent); // zorgt ervoor dat de score die je hebt als je game over bent wordt gedisplayed in het game over schermpje
}


//levens verliezen > 
// Chat GPT heeft me geholpen om deze code helemaal te laten werken.
// de code is wel verder aangepast op mijn eigen code en dus verder uitgeschreven door mijzelf :)

var lives = 3; //variabel maken voor het aantal levens dat de user heeft, in dit geval 3

function verliesLeven() {
    lives--; // Levens gaat met 1 naar beneden... deze komt zometeen in werking in de if statement terug met wat deze doet.

    if (lives >= 0) { //als de levens hoger of gelijk zijn aan 0...
        var lifeElement = document.querySelector('#life' + lives); //var voor de ID life in Dom > life (-1) dus hij pakt elke keer een getal minder > eerst life2, dan life1 en dan life0. ChatGPT heeft hier geholpen met deze toepassing, omdat ik er zelf net niet helemaal uitkwam hoe je 1 afbeelding er vanaf haal
        if (lifeElement) { //als het hartje in aanraking komt (weeg moet omdat je een leven verliest), dan...
            lifeElement.classList.add('removediv') //voegen we de class removediv toe aan de classlist van het hartje, waardoor hij weggaat.
        }
    }




    //Gameover
    if (lives === 0) { //Als er geen levens meer over zijn (van de 3) dan...
        audioGame.pause(); //gaat het nummer op pauze > bron: https://stackoverflow.com/questions/14834520/html5-audio-stop-function
        gameOver.classList.add('adddiv'); //ik voeg de class .addiv toe aan de functie
        gameOver.classList.remove('removediv'); //en ik verwijder de class removediv, zodat de div tevoorschijn komt
    }
}


function spaceBarClickHandler() { //omdat we willen tracken of de spatiebalk wel een blokje vangt, hebben we hier een functie voor nodag dat als dat niet zo is, dat er dan een leven af gaat.
    spaceBarClicked = true; // In deze functie hebben we alleen nodig dat de var 
}

spaceBar.addEventListener('click', spaceBarClickHandler);




//Start game opnieuw


var gameOver = document.querySelector('.gameover'); //de container
var tryAgainButton = document.querySelector('#tryagain'); //de knop om de popup die over de game zit te verwijderen
var switchPlayer = document.querySelector('#switchplayer')

tryAgainButton.addEventListener('click', function () { //als de try again knop geklikt wordt...
    displayUserName.textContent = inputField.value; //...zal de textcontent (header) uit de DOM structuur worden uitgevoerd
    startGameAgain(); // ...zal de functie startGameAgain worden uitgevoerd (regel 313)
    audioGame.play(); //... zal de audio uit de DOM weer worden uitgevoerd 
    score.textContent = '0'; //De textcontent die de score weergeeft wordt weer gereset op 0
})


switchPlayer.addEventListener('click', function () { //als de switch player knop geklikt wordt...
    startGamePopup.classList.add('adddiv');
    startGamePopup.classList.remove('removediv');
    gameOver.classList.add('removediv');
    gameOver.classList.remove('adddiv')
})


var finalScore = document.querySelector('#finalscore'); //om de h5 uit de DOM structuur op te roepen
var heartImg = document.querySelectorAll('.life'); //Om het hartje van de levens in de functie hieronder terug te halen. Ik zet hier een All achter omdat ik alle classes wil pakken.

function startGameAgain() { //deze functie zorgt ervoor dat de gameover popup verwijdert zal worden
    gameOver.classList.add('removediv'); //de class removediv uit de CSS wordt aan de classlist toegepast
    gameOver.classList.remove('adddiv'); //... en de class adddiv wordt verwijdert, omdat ze elkaar anders tegenspreken
    finalScore.textContent = parseInt(score.textContent); //De uiteindelijk behaalde score ophalen vanuit de score functie die we eerder scrheven
    lives = 3; //Om de levens terug te brengen moeten we deze eerst weer definieren
    heartImg.forEach(function (heartImg) { //Deze heartImg.forEach(selecteer elke van...) functie moet gemaakt worden om alle classes te gaan selecteren. querySelectorAll werkt namelijk niet op zichzelf
        heartImg.classList.remove('removediv'); //We vragen de functie om de class removediv (de levens die we hadden verloren) nu weer terug te brengen
    });
}