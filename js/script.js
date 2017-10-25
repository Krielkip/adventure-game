function Uitleg() {
  swal("Uitleg",
       "Bij deze politie test kan je testen of je een geboren politie agent bent. In het spel kan je keuzes maken, elke keuze zal de uitkomst van het spel beinvloeden, kies dus verstandig.",
       "info");
}

function StartGame() {

  var startScherm = new LevelController(
    /*Question*/  'Er is een ongeval gebeurd op de A15, hoe ga je hierheen?',
    /*Button1*/   'Fiets',
    /*Button2*/   'Auto',
    /*Redirect1*/ startSchermDood,
    /*Redirect2*/ buslaan);

    startscherm.setQuestion("sddassads");
    console.log(startscherm.getQuestion());

  //Startscherm dood
  var startSchermDood = new LevelController(
    /*Question*/  'Je bent veel te laat aangekomen en je hebt het risico genomen om aangereden te worden op de snelweg.',
    /*Button1*/   'Opnieuw',
    /*Button2*/   'Opnieuw',
    /*Redirect1*/ startScherm,
    /*Redirect2*/ startScherm);

  //Buslaan
  var buslaan = new LevelController(
    /*Question*/  'Via de buslaan ben je 3 minuten sneller bij het ongeval, ga je over de buslaan?',
    /*Button1*/   'Ja',
    /*Button2*/   'Nee',
    /*Redirect1*/ ongeval,
    /*Redirect2*/ buslaanDood);

  //Buslaan dood
  var buslaanDood = new LevelController(
    /*Question*/  'Je bent te laat aangekomen omdat je niet via de buslaan ging, het ongeval is nog veel groter geworden.',
    /*Button1*/   'Opnieuw',
    /*Button2*/   'Opnieuw',
    /*Redirect1*/ startScherm,
    /*Redirect2*/ startScherm);

  var ongeval = new LevelController(
    /*Question*/  'Je komt aan bij het ongeval en er is druk verkeer, wat doe je eerst?',
    /*Button1*/   'Weg afzetten',
    /*Button2*/   'Gewonden helpen',
    /*Redirect1*/ '',
    /*Redirect2*/ ongevalDood);

  //Ongeval dood
  var ongevalDood = new LevelController(
    /*Question*/  'Je wordt overreden voor een vrachtwagen die je niet heeft gezien.',
    /*Button1*/   'Opnieuw',
    /*Button2*/   'Opnieuw',
    /*Redirect1*/ startScherm,
    /*Redirect2*/ startScherm);

    var gameContainer = document.querySelector('#content'),
    currentLevel = startScherm, // of startScherm
    button1 = gameContainer.querySelector('button#first'),
    button2 = gameContainer.querySelector('button#second');

    button1.addEventListener('click', function(e) {
      e.preventDefault();
      console.info(currentLevel.getRedirect1());
      setNewLevel(currentLevel.getRedirect1());
    });
}

// document.getElementById('third').setAttribute( "onClick", "();" );
