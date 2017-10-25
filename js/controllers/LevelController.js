var LevelController = function (id, question, button1, button2, redirect1, redirect2) {
  this.lvlId = id;
  this.lvlQuestion = question;
  this.lvlButton1 = button1;
  this.lvlButton2 = button2;
  this.lvlRedirect1 = redirect1;
  this.lvlRedirect2 = redirect2;

  this.setQuestion = function (question) {
      this.lvlQuestion = question;
    };
    this.setButton1 = function (name) {
      this.lvlButton1 = name;
    };
    this.setButton2 = function (name) {
      this.lvlButton2 = name;
    };
    this.setRedirect1 = function (level) {
      this.lvlRedirect1 = level;
    };
    this.setRedirect2 = function (level) {
      this.lvlRedirect2 = level;
    };
    this.getId = function () {
      return this.lvlId;
    };
    this.getQuestion = function () {
      return this.lvlQuestion;
    };
    this.getButton1 = function () {
      return this.lvlButton1;
    };
    this.getButton2 = function () {
      return this.lvlButton2;
    };
    this.getRedirect1 = function () {
      return this.lvlRedirect1;
    };
    this.getRedirect2 = function () {
      return this.lvlRedirect2;
    };

  return this;
};