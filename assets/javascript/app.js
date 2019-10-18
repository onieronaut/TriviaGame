$(document).ready(function () {
    console.log("ready!");

    let timer = 10;
    let intervalId;
    let correctGuesses = 0;
    let wrongGuesses = 0;
    let unAnswered = 0;
    //Global variable for counting what question we're on
    let q = 0;


    let questionArray = [
        q1 = {
            question: "what is 1+1",
            correct: "2",
            incorrect: ["1", "3", "0"]
        },

        q2 = {
            question: "what is the capitol of florida",
            correct: "tallahassee",
            incorrect: ["tampa", "orlando", "miami"]
        },

        q3 = {
            question: "how many states are there",
            correct: "50",
            incorrect: ["39", "69", "100"]
        },
        q4 = {
            question: "best nba player",
            correct: "lebron james",
            incorrect: ["babe ruth", "joe", "bob"]
        },
        q5 = {
            question: "asdsadsad",
            correct: "correct",
            incorrect: ["wqewq", "qewq", "qweqewqeq"]
        },
        q6 = {
            question: "asuhhhhh",
            correct: "dude",
            incorrect: ["bro", "mom", "dad"]
        },
        q7 = {
            question: "you are the",
            correct: "language",
            incorrect: ["poop", "butt", "fart"]
        },
        q8 = {
            question: "what color is the sun",
            correct: "red",
            incorrect: ["blue", "magenta", "black"]
        },
        q9 = {
            question: "this is how u",
            correct: "remind me",
            incorrect: ["poop", "eat", "dance"]
        },
        q10 = {
            question: "who is coolest",
            correct: "satan",
            incorrect: ["god", "me", "you"]
        }

    ];

    //Start button
    $(".startButton").click(startGame);

    function startGame() {
        clearInterval(intervalId);
        $(".startButton").hide();
        showQuestion();
    }


    //Click function to determine user guess
    $(document).on("click", ".answers", function () {
        let choice = $(this).text();
        clearInterval(intervalId);
        if (choice === questionArray[q].correct) {
            $(".prompt").empty();
            $(".result").text("Correct!");
            correctGuesses++;
            setTimeout(showQuestion, 2000);
        } else {
            $(".prompt").empty();
            $(".result").text(`Wrong! The correct answer was ${questionArray[q].correct}.`);
            wrongGuesses++;
            setTimeout(showQuestion, 2000);
        }
        q++;
    });

    //Decrement timer function
    function questionTimer() {
        $(".timer").text(`${timer} seconds left to guess!`);
        timer--;

        //If the timer reaches 0 we tally a wrong guess and display the next question
        if (timer < 0) {
            clearInterval(intervalId);
            $(".prompt").empty();
            $(".result").text(`You ran out of time! The correct answer was ${questionArray[q].correct}.`);
            unAnswered++;
            q++;
            setTimeout(showQuestion, 2000);
        }

    }

    //Creates new divs and appends questions and answers to page
    function showQuestion() {

        if (q < questionArray.length) {
            timer = 10;
            $(".result").text("");
            intervalId = setInterval(questionTimer, 1000);
            let newDiv = $("<div class='prompt'>");
            let questionSlot = $("<div id='question'>").text(questionArray[q].question);
            let answerOne = $("<div class='answers'>").text(questionArray[q].correct);
            let answerTwo = $("<div class='answers'>").text(questionArray[q].incorrect[0]);
            let answerThree = $("<div class='answers'>").text(questionArray[q].incorrect[1]);
            let answerFour = $("<div class='answers'>").text(questionArray[q].incorrect[2]);
            newDiv.append(questionSlot);
            newDiv.append(answerOne);
            newDiv.append(answerTwo);
            newDiv.append(answerThree);
            newDiv.append(answerFour);
            $(".holder").append(newDiv);
        } else {
            endGame();
        }
    }

    function endGame() {
        clearInterval(intervalId);
        $(".timer").empty();
        $(".prompt").empty();
        $(".result").html(`Final Results<br>
                            Correct Guesses: ${correctGuesses}<br>
                            Wrong Guesses: ${wrongGuesses}<br>
                            Unanswered: ${unAnswered}`);
        
    }











































































});