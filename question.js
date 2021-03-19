class Question {
    constructor() {
        this.title = createElement('h1')
        this.question = createElement('h2');
        this.option1 = createElement('h4');
        this.option2 = createElement('h4');
        this.option3 = createElement('h4');
        this.option4 = createElement('h4');

        this.input1 = createInput("Name");
        this.input2 = createInput("Answer");
        this.button = createButton('Submit');
    }

    display() {
        this.title.position(350, 0);

        this.title.html("My Quiz Game");
        this.question.html("Question:-  If animals could talk what ever they want, which would be the rudest?");
        this.question.position(150, 80);

        this.option1.html("1: GOAT 🐑");
        this.option1.position(150, 100);

        this.option2.html("2: FRIENDS 😜");
        this.option2.position(150, 120);

        this.option3.html("3: YOUR PET 🐶");
        this.option3.position(150, 140);

        this.option4.html("4: SIBLINGS 😈");
        this.option4.position(150, 160);

        this.input1.position(150, 290);
        this.input2.position(150, 290);


        this.button.position(290, 300);

        this.button.mousePressed(() => {
            // this.title.hide();
            // this.input1.hide();
            // this.input2.hide();
            // this.button.hide();
            contestant.name = this.input1.value();
            contestant.answer = this.input2.value();
            contestantCount += 1;
            contestant.index = contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        });
    }

}