$(document).ready(function () {
    console.log("ready!");

    let timer = 10;
    let intervalId;
    let correctGuesses = 0;
    let wrongGuesses = 0;
    let unAnswered = 0;
    //Global variable for counting what question we're on
    let q = 0;

    //Array to hold objects with question, answers, and image
    let questionArray = [
        q1 = {
            question: "How old is the universe?",
            correct: "13.8 Billion Years",
            incorrect: ["6000 Years", "10 Million Years", "1 Billion Years"],
            image: "assets/images/universe.jpg"
        },

        q2 = {
            question: "How many planets are in our Solar System? (Sorry Pluto)",
            correct: "8",
            incorrect: ["9", "5", "12"],
            image: "assets/images/planets.jpg"
        },

        q3 = {
            question: "What has a gravitational pull so strong that even light cannot escape it?",
            correct: "A Black Hole",
            incorrect: ["The Sun", "The Moon", "Earth's Core"],
            image: "assets/images/blackhole.jpg"
        },
        q4 = {
            question: "What is the cosmic speedlimit?",
            correct: "The Speed Of Light",
            incorrect: ["The Speed Of Sound", "There Is None", "The Force Of Gravity"],
            image: "assets/images/light.jpg"
        },
        q5 = {
            question: "Who came up with the Theory of Relativity?",
            correct: "Einstein",
            incorrect: ["Newton", "Euler", "Kepler"],
            image: "assets/images/einstein.jpg"
        },
        q6 = {
            question: "Who came up with the Theory of Gravity?",
            correct: "Newton",
            incorrect: ["Planck", "Galileo", "Steve Jobs"],
            image: "assets/images/newton.jpg"
        },
        q7 = {
            question: "What event is theorized to have created our universe?",
            correct: "The Big Bang",
            incorrect: ["The Matrix", "Supernova Explosion", "Quantum Entanglement"],
            image: "assets/images/bigbang.jpg"
        },
        q8 = {
            question: "What is the name of our galaxy?",
            correct: "The Milky Way",
            incorrect: ["The Big Dipper", "Snickers Bar", "The Best Galaxy"],
            image: "assets/images/milkyway.jpg"
        },
        q9 = {
            question: "What is the largest planet in our Solar System?",
            correct: "Jupiter",
            incorrect: ["Saturn", "Earth", "Pluto"],
            image: "assets/images/jupiter.jpg"
        },
        q10 = {
            question: "Is the Earth flat?",
            correct: "No",
            incorrect: ["Yes", "Absolutely", "Science isn't real"],
            image: "assets/images/flatearth.jpg"
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
            $(".image").html(`<img id="displayImage" src="${questionArray[q].image}" />`)
            correctGuesses++;
            setTimeout(showQuestion, 5000);
        } else {
            $(".prompt").empty();
            $(".result").html(`Wrong! The correct answer was <br>${questionArray[q].correct}.`);
            $(".image").html(`<img id="displayImage" src="${questionArray[q].image}" />`)
            wrongGuesses++;
            setTimeout(showQuestion, 5000);
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
            $(".result").html(`You ran out of time! The correct answer was <br>${questionArray[q].correct}.`);
            unAnswered++;
            q++;
            setTimeout(showQuestion, 5000);
        }

    }

    //Creates new divs and appends questions and answers to page
    function showQuestion() {

        if (q < questionArray.length) {
            timer = 10;
            $(".result").text("");
            $(".image").text("");
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

    //Function to remove timer and prompts and display final results
    function endGame() {
        clearInterval(intervalId);
        $(".timer").empty();
        $(".prompt").empty();
        $(".image").empty();
        $(".result").html(`Final Results<br>
                            Correct Guesses: ${correctGuesses}<br>
                            Wrong Guesses: ${wrongGuesses}<br>
                            Unanswered: ${unAnswered}`);

    }











































































});