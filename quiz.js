class Quiz {
  constructor() {

  }
  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }

  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })
  }

  async start() {
    if (gameState === 0) {
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestCount').once("value");
      if (contestantCountRef.exists()) {
        contestantCount = contestantCountRef.val();
        contestant.getCount
      }
      question = new Question();
      question.display();
    }
  }

  play() {

  }


}