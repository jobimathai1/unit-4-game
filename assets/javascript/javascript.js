$(document).ready(function () {
    var Random = Math.floor(Math.random() * 101 + 19)
    $("#randomNum").text(Random);

    var num1 = Math.floor(Math.random() * 11 + 1)
    var num2 = Math.floor(Math.random() * 11 + 1)
    var num3 = Math.floor(Math.random() * 11 + 1)
    var num4 = Math.floor(Math.random() * 11 + 1)

    var userScore = 0;
    var wins = 0;
    var losses = 0;

    $("#numWins").text(wins);
    $("#numLoss").text(losses);



    function reset() {
        Random = Math.floor(Math.random() * 101 + 19)
        console.log(Random)
        $("#randomNum").text(Random);
        num1 = Math.floor(Math.random() * 11 + 1);
        num2 = Math.floor(Math.random() * 11 + 1);
        num3 = Math.floor(Math.random() * 11 + 1);
        num4 = Math.floor(Math.random() * 11 + 1);
        userScore = 0;
        $("#finalScore").text(userScore);
    }

    function win() {
        wins++;
        $("#numWins").text(wins);
        reset();
    }

    function loss() {
        losses++;
        $("#numLoss").text(losses);
        reset();
    }


    $("#one").on("click", function () {
        userScore = userScore + num1;
        console.log("New userScore= " + userScore);
        $("#finalScore").text(userScore);
        if (userScore === Random) {
            win();
        }
        else if (userScore > Random) {
            loss();
        }
    })

    $("#two").on("click", function () {
        userScore = userScore + num2;
        console.log("New userScore= " + userScore);
        $("#finalScore").text(userScore);
        if (userScore === Random) {
            win();
        }
        else if (userScore > Random) {
            loss();
        }
    })

    $("#three").on("click", function () {
        userScore = userScore + num3;
        console.log("New userScore= " + userScore);
        $("#finalScore").text(userScore);
        if (userScore === Random) {
            win();
        }
        else if (userScore > Random) {
            loss();
        }
    })

    $("#four").on("click", function () {
        userScore = userScore + num4;
        console.log("New userScore= " + userScore);
        $("#finalScore").text(userScore);
        if (userScore === Random) {
            win();
        }
        else if (userScore > Random) {
            loss();
        }
    });
});