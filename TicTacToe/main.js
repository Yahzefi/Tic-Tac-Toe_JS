const BODY = document.getElementById("appBody");
const HEADER = document.getElementById("header");

const BOX_01 = document.querySelector("#box_01");
const BOX_02 = document.querySelector("#box_02");
const BOX_03 = document.querySelector("#box_03");
const BOX_04 = document.querySelector("#box_04");
const BOX_05 = document.querySelector("#box_05");
const BOX_06 = document.querySelector("#box_06");
const BOX_07 = document.querySelector("#box_07");
const BOX_08 = document.querySelector("#box_08");
const BOX_09 = document.querySelector("#box_09");

let gameBoard = 
{
    box01: "open",
    box02: "open",
    box03: "open",
    box04: "open",
    box05: "open",
    box06: "open",
    box07: "open",
    box08: "open",
    box09: "open",
}

let winningBoxes = {BoxOne: null, BoxTwo: null, BoxThree: null};

let player = 1;
let winnerPlayerOne = false;
let winnerPlayerTwo = false;

var playerOneScore = 0;
var playerTwoScore = 0;

$(BOX_01).on('click', function() {
    winningBoxes = checkForWinner(this);
    if (winnerPlayerOne || winnerPlayerTwo) endGame(winningBoxes);
})
$(BOX_02).on('click', function() {
    winningBoxes = checkForWinner(this);
    if (winnerPlayerOne || winnerPlayerTwo) endGame(winningBoxes);
});

$(BOX_03).on('click', function () {
    winningBoxes = checkForWinner(this);
    if (winnerPlayerOne || winnerPlayerTwo) endGame(winningBoxes);
})
$(BOX_04).on('click', function () {
    winningBoxes = checkForWinner(this);
    if (winnerPlayerOne || winnerPlayerTwo) endGame(winningBoxes);
})
$(BOX_05).on('click', function () {
    winningBoxes = checkForWinner(this);
    if (winnerPlayerOne || winnerPlayerTwo) endGame(winningBoxes);
})
$(BOX_06).on('click', function () {
    winningBoxes = checkForWinner(this);
    if (winnerPlayerOne || winnerPlayerTwo) endGame(winningBoxes);
})
$(BOX_07).on('click', function () {
    winningBoxes = checkForWinner(this);
    if (winnerPlayerOne || winnerPlayerTwo) endGame(winningBoxes);
})
$(BOX_08).on('click', function () {
    winningBoxes = checkForWinner(this);
    if (winnerPlayerOne || winnerPlayerTwo) endGame(winningBoxes);
})
$(BOX_09).on('click', function () {
    winningBoxes = checkForWinner(this);
    if (winnerPlayerOne || winnerPlayerTwo) endGame(winningBoxes);
})

function endGame (winningBoxes) {
    var winnerDiv = document.createElement("div");
    winnerDiv.id = "winnerDiv";
    $(HEADER).after(winnerDiv);

    var winnerText = document.createElement("h2");
    winnerText.id = "winnerText";
    winnerText.textContent = winnerPlayerOne ? "Player One Wins!" : "Player Two Wins!";
    $(winnerText).css("color", winnerPlayerOne ? "blue" : "red");
    $(winnerDiv).append(winnerText);

    var playAgain = document.createElement("button");
    playAgain.id = "playBtn";
    playAgain.textContent = "Play Again";
    $(winnerDiv).append(playAgain);
    
    playerOneScore = winnerPlayerOne ? playerOneScore + 1 : playerOneScore;
    playerTwoScore = winnerPlayerTwo ? playerTwoScore + 1 : playerTwoScore;

    $(playAgain).on('click', () => restartGame(winningBoxes));

    $(winningBoxes.BoxOne).css("border", "2px solid green");
    $(winningBoxes.BoxTwo).css("border", "2px solid green");
    $(winningBoxes.BoxThree).css("border", "2px solid green");



}

function restartGame(winningBoxes) {
    alert(`Player 1: ${playerOneScore} | Player 2: ${playerTwoScore}`);


    gameBoard.box01 = "open";
    gameBoard.box02 = "open";
    gameBoard.box03 = "open";
    gameBoard.box04 = "open";
    gameBoard.box05 = "open";
    gameBoard.box06 = "open";
    gameBoard.box07 = "open";
    gameBoard.box08 = "open";
    gameBoard.box09 = "open";

    $("#winnerDiv").remove();
    $("img").remove();
    $(winningBoxes.BoxOne).css("border", "1px solid black");
    $(winningBoxes.BoxTwo).css("border", "1px solid black");
    $(winningBoxes.BoxThree).css("border", "1px solid black");

    winnerPlayerOne = false;
    winnerPlayerTwo = false;
    winningBoxes = {BoxOne: null, BoxTwo: null, BoxThree: null};
}

function fillBox(clickedBox) {
    console.log(clickedBox);

    let image = document.createElement('img');
    
    if (player == 1) {
        // fill box with X
        image.src = "./Images/x.png"; // X
        image.id = "xImg";
        $(clickedBox).append(image);

        player++;
    }
    else {
        // fill box with O
        image.src = "./Images/o.png"; // O
        image.id = "oImg";
        $(clickedBox).append(image);

        player--;
    }


}

function checkForWinner (clickedBox) {

    switch (clickedBox) {

        case BOX_01:

            if (gameBoard.box01 == "open"){
                gameBoard.box01 = player == 1 ? "X" : "O";
                fillBox(clickedBox);
            }

            if (gameBoard.box01 == "X") {
                if (gameBoard.box02 == "X" && gameBoard.box03 == "X") { // horizontal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_01, 
                        BoxTwo: BOX_02, 
                        BoxThree: BOX_03
                    };
                } else if (gameBoard.box04 == "X" && gameBoard.box07 == "X"){ // vertical
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_01, 
                        BoxTwo: BOX_04, 
                        BoxThree: BOX_07
                    };
                }
                else if (gameBoard.box05 == "X" && gameBoard.box09 == "X"){ // diagonal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_01, 
                        BoxTwo: BOX_05, 
                        BoxThree: BOX_09
                    };
                }
            } else if (gameBoard.box01 == "O") {
                if (gameBoard.box02 == "O" && gameBoard.box03 == "O"){ // horizontal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_01, 
                        BoxTwo: BOX_02, 
                        BoxThree: BOX_03
                    };
                } else if (gameBoard.box04 == "O" && gameBoard.box07 == "O") { // vertical
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_01, 
                        BoxTwo: BOX_04, 
                        BoxThree: BOX_07
                    };
                } else if (gameBoard.box05 == "O" && gameBoard.box09 == "O") { // diagonal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_01, 
                        BoxTwo: BOX_05, 
                        BoxThree: BOX_09
                    };
                }
            }

            break;

        case BOX_02:

            if (gameBoard.box02 == "open") {
                gameBoard.box02 = player == 1 ? "X" : "O";
                fillBox(clickedBox);
            }

            if (gameBoard.box02 == "X") {
                if (gameBoard.box01 == "X" && gameBoard.box03 == "X") { // horizontal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_02,
                        BoxTwo: BOX_01,
                        BoxThree: BOX_03
                    }
                } else if (gameBoard.box05 == "X" && gameBoard.box08 == "X") { // vertical
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_02,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_08
                    }
                }
            } else if (gameBoard.box02 == "O") {
                if (gameBoard.box01 == "O" && gameBoard.box03 == "O") { // horizontal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_02,
                        BoxTwo: BOX_01,
                        BoxThree: BOX_03
                    }
                } else if (gameBoard.box05 == "O" && gameBoard.box08 == "O") { // vertical
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_02,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_08
                    }
                }
            }

            break;

        case BOX_03:

            if (gameBoard.box03 == "open") {
                gameBoard.box03 = player == 1 ? "X" : "O";
                fillBox(clickedBox);
            }

            if (gameBoard.box03 == "X") {
                if (gameBoard.box02 == "X" && gameBoard.box01 == "X") { // horizontal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_03,
                        BoxTwo: BOX_02,
                        BoxThree: BOX_01
                    }
                } else if (gameBoard.box06 == "X" && gameBoard.box09 == "X") { // vertical
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_03,
                        BoxTwo: BOX_06,
                        BoxThree: BOX_09
                    }
                } else if (gameBoard.box05 == "X" && gameBoard.box07 == "X") { // diagonal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_03,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_07
                    }
                }
            } else if (gameBoard.box03 == "O") {
                if (gameBoard.box02 == "O" && gameBoard.box01 == "O") { // horizontal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_03,
                        BoxTwo: BOX_02,
                        BoxThree: BOX_01
                    }
                } else if (gameBoard.box06 == "O" && gameBoard.box09 == "O") { // vertical
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_03,
                        BoxTwo: BOX_06,
                        BoxThree: BOX_09
                    }
                } else if (gameBoard.box05 == "O" && gameBoard.box07 == "O") { // diagonal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_03,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_07
                    }
                }
            }

            break;

        case BOX_04:

            if (gameBoard.box04 == "open") {
                gameBoard.box04 = player == 1 ? "X" : "O";
                fillBox(clickedBox);
            }

            if (gameBoard.box04 == "X") {
                if (gameBoard.box05 == "X" && gameBoard.box06 == "X") { // horizontal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_04,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_06
                    }
                } else if (gameBoard.box01 == "X" && gameBoard.box07 == "X") { // vertical
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_04,
                        BoxTwo: BOX_01,
                        BoxThree: BOX_07
                    }
                }
            } else if (gameBoard.box04 == "O") {
                if (gameBoard.box05 == "O" && gameBoard.box06 == "O") { // horizontal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_04,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_06
                    }
                } else if (gameBoard.box01 == "O" && gameBoard.box07 == "O") { // vertical
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_04,
                        BoxTwo: BOX_01,
                        BoxThree: BOX_07
                    }
                }
            }

            break;

        case BOX_05:

            if (gameBoard.box05 == "open") {
                gameBoard.box05 = player == 1 ? "X" : "O";
                fillBox(clickedBox);
            }

            if (gameBoard.box05 == "X") {
                if (gameBoard.box04 == "X" && gameBoard.box06 == "X") { // horizontal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_05,
                        BoxTwo: BOX_04,
                        BoxThree: BOX_06
                    }
                } else if (gameBoard.box02 == "X" && gameBoard.box08 == "X") { // vertical
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_05,
                        BoxTwo: BOX_02,
                        BoxThree: BOX_08
                    }
                } else if (gameBoard.box01 == "X" && gameBoard.box09 == "X") { // diagonal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_05,
                        BoxTwo: BOX_01,
                        BoxThree: BOX_09
                    }
                }
            } else if (gameBoard.box05 == "O") {
                if (gameBoard.box04 == "O" && gameBoard.box06 == "O") { // horizontal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_05,
                        BoxTwo: BOX_04,
                        BoxThree: BOX_06
                    }
                } else if (gameBoard.box02 == "O" && gameBoard.box08 == "O") { // vertical
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_05,
                        BoxTwo: BOX_02,
                        BoxThree: BOX_08
                    }
                } else if (gameBoard.box01 == "O" && gameBoard.box09 == "O") { // diagonal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_05,
                        BoxTwo: BOX_01,
                        BoxThree: BOX_09
                    }
                }
            }

            break;

        case BOX_06:

            if (gameBoard.box06 == "open") {
                gameBoard.box06 = player == 1 ? "X" : "O";
                fillBox(clickedBox);
            }

            if (gameBoard.box06 == "X") {
                if (gameBoard.box05 == "X" && gameBoard.box04 == "X") { // horizontal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_06,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_04
                    }
                } else if (gameBoard.box03 == "X" && gameBoard.box09 == "X") { // vertical
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_06,
                        BoxTwo: BOX_03,
                        BoxThree: BOX_09
                    }
                }
            } else if (gameBoard.box06 == "O") {
                if (gameBoard.box05 == "O" && gameBoard.box04 == "O") { // horizontal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_06,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_04
                    }
                } else if (gameBoard.box03 == "O" && gameBoard.box09 == "O") { // vertical
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_06,
                        BoxTwo: BOX_03,
                        BoxThree: BOX_09
                    }
                }
            }

            break;

        case BOX_07:

            if (gameBoard.box07 == "open") {
                gameBoard.box07 = player == 1 ? "X" : "O";
                fillBox(clickedBox);
            }

            if (gameBoard.box07 == "X") {
                if (gameBoard.box08 == "X" && gameBoard.box09 == "X") { // horizontal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_07,
                        BoxTwo: BOX_08,
                        BoxThree: BOX_09
                    }
                } else if (gameBoard.box04 == "X" && gameBoard.box01 == "X") { // vertical
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_07,
                        BoxTwo: BOX_04,
                        BoxThree: BOX_01
                    }
                } else if (gameBoard.box05 == "X" && gameBoard.box03 == "X") { // diagonal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_07,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_03
                    }
                }
            } else if (gameBoard.box07 == "O") {
                if (gameBoard.box08 == "O" && gameBoard.box09 == "O") { // horizontal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_07,
                        BoxTwo: BOX_08,
                        BoxThree: BOX_09
                    }
                } else if (gameBoard.box04 == "O" && gameBoard.box01 == "O") { // vertical
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_07,
                        BoxTwo: BOX_04,
                        BoxThree: BOX_01
                    }
                } else if (gameBoard.box05 == "O" && gameBoard.box03 == "O") { // diagonal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_07,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_03
                    }
                }
            }

            break;

        case BOX_08:

            if (gameBoard.box08 == "open") {
                gameBoard.box08 = player == 1 ? "X" : "O";
                fillBox(clickedBox);
            }

            if (gameBoard.box08 == "X") {
                if (gameBoard.box07 == "X" && gameBoard.box09 == "X") { // horizontal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_08,
                        BoxTwo: BOX_07,
                        BoxThree: BOX_09
                    }
                } else if (gameBoard.box05 == "X" && gameBoard.box02 == "X") { // vertical
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_08,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_02
                    }
                }
            } else if (gameBoard.box08 == "O") {
                if (gameBoard.box07 == "O" && gameBoard.box09 == "O") { // horizontal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_08,
                        BoxTwo: BOX_07,
                        BoxThree: BOX_09
                    }
                } else if (gameBoard.box05 == "O" && gameBoard.box02 == "O") { // vertical
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_08,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_02
                    }
                }
            }

            break;

        case BOX_09:

            if (gameBoard.box09 == "open") {
                gameBoard.box09 = player == 1 ? "X" : "O";
                fillBox(clickedBox);
            }

            if (gameBoard.box09 == "X") {
                if (gameBoard.box08 == "X" && gameBoard.box07 == "X") { // horizontal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_09,
                        BoxTwo: BOX_08,
                        BoxThree: BOX_07
                    }
                } else if (gameBoard.box06 == "X" && gameBoard.box03 == "X") { // vertical
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_09,
                        BoxTwo: BOX_06,
                        BoxThree: BOX_03
                    }
                } else if (gameBoard.box05 == "X" && gameBoard.box01 == "X") { // diagonal
                    winnerPlayerOne = true;
                    return {
                        BoxOne: BOX_09,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_01
                    }
                }
            } else if (gameBoard.box09 == "O") {
                if (gameBoard.box08 == "O" && gameBoard.box07 == "O") { // horizontal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_09,
                        BoxTwo: BOX_08,
                        BoxThree: BOX_07
                    }
                } else if (gameBoard.box06 == "O" && gameBoard.box03 == "O") { // vertical
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_09,
                        BoxTwo: BOX_06,
                        BoxThree: BOX_03
                    }
                } else if (gameBoard.box05 == "O" && gameBoard.box01 == "O") { // diagonal
                    winnerPlayerTwo = true;
                    return {
                        BoxOne: BOX_09,
                        BoxTwo: BOX_05,
                        BoxThree: BOX_01
                    }
                }
            }

            break;

        default: 
            break;
    }

}
