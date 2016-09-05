

//game counter
var game = {
    correct: 0,
    incorrect: 0,
    counter: 150,

    clock: function() {
        game.counter--;
        $('#counter').html(game.counter);

        if (game.counter === 0) {
            alert("Time is up!");
            // game.done();
        }
    },
    start: function() {
        game.start;
    },
}
//questions
var questionOne = {
    question: "1. How many animals enter U.S. shelters each year?",
    answer: ["1-4 million animals", "5-7 million animals", "8-10 million animals", "More than 11 million animals"],
    correctAnswer: 1,

};

var questionTwo = {
    question: "2. In the U.S., how many total animals are euthanized in shelters per year?",
    answer: ["Less than 1 million animals", "2 million animals", "3-4 million animals", "5-6 million animals"],
    correctAnswer: 2,
};

var questionThree = {
    question: "3. In government run shelters, what percentage of incoming animals are euthanized?",
    answer: ["12%", "30%", "64%", "91%"],
    correctAnswer: 2,
};

var questionFour = {
    question: "4. Outdoor cats live an average of ?",
    answer: ["3-5 years", "6-7 years", "8-10 years", "12-15 years"],
    correctAnswer: 0,
};

var questionFive = {
    question: "5. Indoor cats live an average of ?",
    answer: ["3-5 years", "5-8 years", "8-10 years", "12-15 years",],
    correctAnswer: 3,
};


var questionSix = {
    question: "6. What percentage of cats are reunited with their original owners when picked up stray and end up at a shelter?",
    answer: ["2%", "10%", "15%", "35%"],
    correctAnswer: 0,
};

var questionSeven = {
    question: "7. What percentage of dogs are reunited with their original owners when picked up stray and end up at a shelter?",
    answer: ["2%", "12.5%", "25%", "35%"],
    correctAnswer: 1,
};

var questionEight = {
    question: "8: What is the best way for you to prevent dogs and cats from ending up unwanted in shelters?",
    answer: ["Always spay and neuter your pets", "Make sure you can make a lifetime committment", "Do not adopt from breeders", "All are correct"],
    correctAnswer: 3,
};

var questionNine = {
    question: "9. How many puppies can one unspayed female dog and her unspayed offspring produce in six years?",
    answer: ["30", "200", "1,000", "67,000"],
    correctAnswer: 3,
};

var questionTen = {
    question: "10: How many kittens can one unspayed female cat and her unspayed offspring produce in seven years?",
    answer: ["400", "5,000", "12,000", "420,000"],
    correctAnswer: 3,
}

var questions = [
    questionOne,
    questionTwo,
    questionThree,
    questionFour,
    questionFive,
    questionSix,
    questionSeven,
    questionEight,
    questionNine,
    questionTen,
];

$(document).ready(function() {

    //start button

    $('.startButton').on('click', function() {
        $('.startWindow').addClass('invisible');
        $('.questionArea').removeClass('invisible');
        // $('.finalgif').addClass('invisible');

        //submit button

    var submitButton = $('<button>');
        submitButton.addClass('submit');
        submitButton.text('Submit');
        $('.wrapper').append(submitButton);

        $('.submit').on('click', function() {
        $('.questionArea').hide();
            submitButton.remove();
        $('.music').remove();
        $('#counter').remove();
        clearInterval(timer);


            //This part gives the game scores

    function checkAnswer() {
        console.log('hello');
        $('.input:checked').each(function() {
        if ($(this).attr('data-correct') === 'true') {
        game.correct++;
        } else {
        game.incorrect++;
        }
    });
};
            //score
        checkAnswer();
            var scoreArea = $('<div>');
            scoreArea.addClass('scoring');
            scoreArea.text("You guessed " + game.correct + " correct and " + game.incorrect + " wrong!");
            $('.wrapper').append(scoreArea)

                 

            //Answers
            //How do I make this a table??? Actually, no, a table will be too big. I want to make it so the score shows up with an ok button
            //when the ok button is clicked, I want it to trigger a new html page that displays these answers in a table and then displays the play again
            //button. How do I do that?

        var AnswerArea = $('<div>');
            AnswerArea.addClass('answers1');
            AnswerArea.text("Answer Key")
             $('.wrapper').append(AnswerArea)

        var AnswerArea = $('<div>');
            AnswerArea.addClass('answers2');
            AnswerArea.html("Question 1: How many animals enter U.S. shelters each year?" + "&nbsp;&nbsp;&nbsp;" + "Answer: 5-7 million")
             $('.wrapper').append(AnswerArea)

        var AnswerArea = $('<div>');
            AnswerArea.addClass('answers2');
            AnswerArea.html("Question 2: In the U.S., how many total animals are euthanized in shelters per year?" + "&nbsp;&nbsp;&nbsp;" + "Answer: 3-4 million")
             $('.wrapper').append(AnswerArea)


         var AnswerArea = $('<div>');
            AnswerArea.addClass('answers2');
            AnswerArea.html("Question 3: In government run shelters, what percentage of incoming animals are euthanized?" + "&nbsp;&nbsp;&nbsp;" + "Answer: 64%")
             $('.wrapper').append(AnswerArea)

        var AnswerArea = $('<div>');
            AnswerArea.addClass('answers2');
            AnswerArea.html("Question 4: Outdoor cats how many years on average?" + "&nbsp;&nbsp;&nbsp;" + "Answer: 3-5")
             $('.wrapper').append(AnswerArea)

        var AnswerArea = $('<div>');
            AnswerArea.addClass('answers2');
            AnswerArea.html("Question 5: Indoor cats live how many years on average?" + "&nbsp;&nbsp;&nbsp;" + "Answer: 12-15")
             $('.wrapper').append(AnswerArea)

           
        var AnswerArea = $('<div>');
            AnswerArea.addClass('answers2');
            AnswerArea.html("Question 6: What percentage of cats are reunited with their original owners when picked up stray and end up at a shelter?" + "&nbsp;&nbsp;&nbsp;" + "Answer: 2%")
             $('.wrapper').append(AnswerArea)

        var AnswerArea = $('<div>');
            AnswerArea.addClass('answers2');
            AnswerArea.html("Question 7: What percentage of dogs are reunited with their original owners when picked up stray and end up at a shelter?" + "&nbsp;&nbsp;&nbsp;" + "Answer: 12.5%")
             $('.wrapper').append(AnswerArea)

        var AnswerArea = $('<div>');
            AnswerArea.addClass('answers2');
            AnswerArea.html("Question 8: What is the best way for you to prevent dogs and cats from ending up unwanted in shelters?" + "&nbsp;&nbsp;&nbsp;" + "Answer: Always spay and neuter your pets, make sure you can make a lifetime committment, do not adopt from breeders: all are correct.")
             $('.wrapper').append(AnswerArea)

        var AnswerArea = $('<div>');
            AnswerArea.addClass('answers2');
            AnswerArea.html("Question 9: How many puppies can one unspayed female dog and her unspayed offspring produce in six years?"+ "&nbsp;&nbsp;&nbsp;" + "Answer: 67,000")
             $('.wrapper').append(AnswerArea)

        var AnswerArea = $('<div>');
            AnswerArea.addClass('answers2');
            AnswerArea.html("Question 10: How many kittens can one unspayed female cat and her unspayed offspring produce in seven years?" + "&nbsp;&nbsp;&nbsp;" + "Answer: 420,000")
             $('.wrapper').append(AnswerArea)

        var refreshButton = $('<button>');
            refreshButton.addClass('refresh');
            refreshButton.text('Play Again!');
            $('.wrapper').append(refreshButton);

            $('.refresh').click(function() {
                location.reload();
    })

});

        //timer
    timer = setInterval(game.clock, 1000)
        $('.questionArea').prepend("Time remaining: <span id='counter'>150</span> Seconds");

        //functions for questions
    for (var i = 0; i < questions.length; i++) {
            var showQuestion = $('<div class="question">');
            var questionText = $('<div class="question-text">');
            questionText.html(questions[i].question);
            showQuestion.append(questionText);


                var answerGroup = $('<form class="answers">');
                showQuestion.append(answerGroup);


                for (var j = 0; j < questions[i].answer.length; j++) {
                var showAnswer = $('<div class="answer"></div>');
                var input = $('<input type="radio" name="radio" class="input">');
                input.attr('data-correct', questions[i].correctAnswer === j);
                showAnswer.append(input);
                showAnswer.append(questions[i].answer[j]);
                answerGroup.append(showAnswer);
            }
                    $('.questionArea').append(showQuestion);

        }
//How do I push all the correct answers to an output?
    });
   
});