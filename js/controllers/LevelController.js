class LevelController {

  function LevelController(question, button1, button2, redirect1, redirect2) {
    this.question = question;
    this.button1 = button1;
    this.button2 = button2;
    this.redirect1 = redirect1;
    this.redirect2 = redirect2;
  }

  function setNewLevel() {
    document.getElementById('first').innerHTML = button1;
    document.getElementById('second').innerHTML = button2;
    document.getElementById('question').innerHTML = question;
  }

  function setQuestion(question) {
    this.question = question;
  }

  function setButton1(button1) {
    this.button1 = button1;
  }

  function setButton2(button2) {
    this.button2 = button2;
  }

  function setRedirect1(redirect1) {
    this.redirect1 = redirect1;
  }

  function setRedirect2(redirect2) {
    this.redirect2 = redirect2;
  }

  function getQuestion() {
    return this.question;
  }

  function getButton1() {
    return this.button1;
  }

  function getButton2() {
    return this.button2;
  }

  function getRedirect1() {
    return this.redirect1;
  }

  function getRedirect2() {
    return this.redirect2;
  }

}
