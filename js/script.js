var game = function () {
  var levels = [],
    currentLevel,
    container,
    question,
    button1,
    button2,
    gameStarted = false;

  var buildLevels = function () {
      levels.push(new LevelController(
        'startScherm',
        'Er is een ongeval gebeurd op de A15, hoe ga je hierheen?',
        'Fiets',
        'Auto',
        'startSchermDood',
        'busLaan'
      ));

      levels.push(new LevelController(
        'busLaan',
        'Via de buslaan ben je 3 minuten sneller bij het ongeval, ga je over de buslaan?',
        'Ja',
        'Nee',
        'ongeval',
        'buslaanDood'
      ));

      levels.push(new LevelController(
        'startSchermDood',
        'Je bent veel te laat aangekomen en je hebt het risico genomen om aangereden te worden op de snelweg.',
        'Opnieuw',
        'Opnieuw',
        'startScherm',
        'startScherm'
      ));

      levels.push(new LevelController(
        'buslaanDood',
        'Je bent te laat aangekomen omdat je niet via de buslaan ging, het ongeval is nog veel groter geworden.',
        'Opnieuw',
        'Opnieuw',
        'startScherm',
        'startScherm'
      ));
    },
    buildInteraction = function () {
      container = document.querySelector('#content');
        question = container.querySelector('#question');
        button1 = container.querySelector('button#first');
        button2 = container.querySelector('button#second');

      button1.addEventListener('click', clickButton1);
      button2.addEventListener('click', clickButton2);
    },
    clickButton1 = function (e) {
      e.preventDefault();
      if (gameStarted) {
        setLevel(currentLevel.getRedirect1);
      }
      else {
        startGame();
      }
    },
    clickButton2 = function (e) {
      e.preventDefault();
      if (gameStarted) {
        setLevel(currentLevel.getRedirect2());
      }
      else {
        displayUitleg();
      }
    },
    setLevel = function (level) {
      var Length = levels.length;
      while (Length--) {
        if (levels[Length].getId() === level) {
          currentLevel = levels[Length];
          setupStage(currentLevel);
          break;
        }
      }
    },
    startGame = function(){
      setLevel('startScherm');
      gameStarted = true;
    },
    setupStage = function(level) {
      question.innerHTML = level.getQuestion();
      button1.innerHTML = level.getButton1();
      button2.innerHTML = level.getButton2();
    },
    displayUitleg = function () {
      swal("Uitleg",
        "Bij deze politie test kan je testen of je een geboren politie agent bent. In het spel kan je keuzes maken, elke keuze zal de uitkomst van het spel beinvloeden, kies dus verstandig.",
        "info");
    };


  buildLevels();
  buildInteraction();
};

window.addEventListener("DOMContentLoaded", function() {
  game();
}, false);