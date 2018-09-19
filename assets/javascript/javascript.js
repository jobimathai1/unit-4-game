$(document).ready(function() {
  //First generate a random number between 19 & 120

  var Random = Math.floor(Math.random() * 101 + 19)
  $("#randomNum").text(Random);

  //Create 4 variables to store the value between 1 to 12 for the crystals.

  var num1 = Math.floor(Math.random() * 11 + 1)
  var num2 = Math.floor(Math.random() * 11 + 1)
  var num3 = Math.floor(Math.random() * 11 + 1)
  var num4 = Math.floor(Math.random() * 11 + 1)

  //Declaring the variables that will store the user's score, the number of wins & losses
  var userScore = 0;
  var wins = 0;
  var losses = 0;

  $("#numWins").text(wins);
  $("#numLoss").text(losses);

  //After the user wins or loses, reset the game back to original state to continue

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

  //A function to update the wins of the user & display the count to the user
  function win() {
    wins++;
    $("#numWins").text(wins);
    reset();
  }

  //A function to update the losses of the user & display the count to the user
  function loss() {
    losses++;
    $("#numLoss").text(losses);
    reset();
  }

  //when user clicks on the 1st crystal,  update user score & update the user score on the website
  $("#one").on("click", function() {
    userScore = userScore + num1;
    console.log("New userScore= " + userScore);
    $("#finalScore").text(userScore);

    //if the user clicks the 1st crystal & user score matches the random number generated, then increment win otherwise loss count
    if (userScore === Random) {
      win();
    } else if (userScore > Random) {
      loss();
    }
  })

  //when user clicks on the 2nd crystal,  update user score & update the user score on the website
  $("#two").on("click", function() {
    userScore = userScore + num2;
    console.log("New userScore= " + userScore);
    $("#finalScore").text(userScore);

    //if the user clicks the 2nd crystal & user score matches the random number generated, then increment win otherwise loss count
    if (userScore === Random) {
      win();
    } else if (userScore > Random) {
      loss();
    }
  })

  //when user clicks on the 3rd crystal,  update user score & update the user score on the website
  $("#three").on("click", function() {
    userScore = userScore + num3;
    console.log("New userScore= " + userScore);
    $("#finalScore").text(userScore);
    //if the user clicks the 3rd crystal & user score matches the random number generated, then increment win otherwise loss count
    if (userScore === Random) {
      win();
    } else if (userScore > Random) {
      loss();
    }
  })

  //when user clicks on the 4th crystal,  update user score & update the user score on the website
  $("#four").on("click", function() {
    userScore = userScore + num4;
    console.log("New userScore= " + userScore);
    $("#finalScore").text(userScore);

    //if the user clicks the 4th crystal & user score matches the random number generated, then increment win otherwise loss count
    if (userScore === Random) {
      win();
    } else if (userScore > Random) {
      loss();
    }
  });
});
