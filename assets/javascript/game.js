$(document).ready(function() {

    //Variables to keep trak of wins and loses
    var wins = 0;
    var losses = 0;
    
    //the number the player has to guess.
    var computerNum = [];
    
    //Random Value being set as the values for the crystals
    var orangeNum;
    var tealNum;
    var clearNum;
    var greenNum;
    
    //The player's score counter for the current round; add 0 & player # works but not random number
    var playerCounter = 0;
    
    //function that will start the game properly.
    function startGame() {
        var compNum = Math.floor(Math.random() * 102) + 19;
        computerNum.push(compNum);
        $("#random-number").text(computerNum[0]);
        console.log("Computer number: " + computerNum);
        
        //Giving random values to the 4 Crystals
        orangeNum = Math.floor(Math.random() * 12) + 1;
        console.log("Orange: " + orangeNum);
    
        tealNum = Math.floor(Math.random() * 12) + 1;
        console.log("Teal: " + tealNum);
    
        clearNum = Math.floor(Math.random() * 12) + 1;
        console.log("Clear: " + clearNum);
    
        greenNum = Math.floor(Math.random() * 12) + 1;
        console.log("Green: " + greenNum);
    };
    
    //reset the game
    function nextGame() {
        computerNum.length = 0;
        playerCounter = 0;
        startGame();
    };
    
    //funciton determening if the user won or lose the game.
    function checkingNum () {
        if (playerCounter === computerNum[0]) {
            wins++;
            $("#outcome").html("You won!!");
            $("#wins").html("Wins: "+ wins);
            console.log("You won!!");
            nextGame();
        }
    
        else if (playerCounter > computerNum[0]) {
            losses++;
            $("#outcome").html("You lost!!");
            $("#losses").html("Losses: " + losses);
            console.log("You lost!!");
            nextGame();
        }
    
        else {
            console.log("Keep guessing!")
        }
    
    };
    
    //Starting the game
    startGame();
    
    //Crystals
    $("#crystal-orange").on("click", function() {
        playerCounter = orangeNum + playerCounter;
        $("#player-count").text(playerCounter);
        console.log(playerCounter);
        checkingNum();
    });
    
    $("#crystal-teal").on("click", function() {
        playerCounter = tealNum + playerCounter;
        $("#player-count").text(playerCounter);
        console.log(playerCounter);
        checkingNum();
    });
    
    $("#crystal-clear").on("click", function() {
        playerCounter = clearNum + playerCounter;
        $("#player-count").text(playerCounter);
        console.log(playerCounter);
        checkingNum();
    });
    
    $("#crystal-green").on("click", function() {
        playerCounter = greenNum + playerCounter;
        $("#player-count").text(playerCounter);
        console.log(playerCounter);
        checkingNum();
    });
    
    });