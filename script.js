const game = function() {

    // every player starts with score 0
    let playerScore = 0;
    let computerScore = 0;
    let tieScore = 0;

    // start game function
    const startGame = function() {
        const playerButton = document.getElementById("play");
        const headerIntro = document.querySelector(".header");
        const match = document.querySelector(".match");

        // hide intro header and display game
        playerButton.addEventListener("click", function() {
            // hide intro header
            headerIntro.classList.add("fadeOut");
            // show game
            match.classList.add("fadeIn");
        });
    };

    // play match
    const playMatch = function() {
        const pick = document.querySelectorAll(".pick button");
        const playerHand = document.getElementById("player-hand");
        const computerHand = document.getElementById("computer-hand");
        const computerPick = ["rock", "paper", "scissors"];

        // compare content from pressed button to random computer pick
        pick.forEach(e => {
            e.addEventListener("click", function() {
                // get random choice for computer
                const computerNumber = Math.floor(Math.random() * 3 );
                const computerChoice = computerPick[computerNumber];
                console.log(this.textContent);

                // call compareHands() function
                compareHands(this.textContent, computerChoice);

                // update images
                playerHand.src = `${this.textContent}.png`;
                computerHand.src = `${computerChoice}.png`;
            });
       });
    };

    // updateScore function
    const updateScore = () => {
        const pScore = document.querySelector(".player-score p");
        const cScore = document.querySelector(".computer-score p");
        const tScore = document.querySelector(".tie-score p");
        // overide 0 with playerScore/computerscore
        pScore.textContent = playerScore;
        cScore.textContent = computerScore;
        tScore.textContent = tieScore;

    };
    
    // compare hands and check for a winner
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");

        // check for a tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a tie!"
            tieScore++;
            return;
        }

        // rock
        if (playerChoice === "rock") {
            if (computerChoice === "scissors") {
                winner.textContent = "Player wins!";
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textcontent = "Computer wins!";
                computerScore++;
                updateScore();
                return;
            }
        }

        // paper
        if (playerChoice === "paper") {
            if (computerChoice === "rock") {
                winner.textContent = "Player wins!";
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textcontent = "Computer wins!";
                computerScore++;
                updateScore();
                return;
            }
        }

        // scissors
        if (playerChoice === "scissors") {
            if (computerChoice === "paper") {
                winner.textContent = "Player wins!";
                playerScore++;
                updateScore();
                return;
            } else {
                winner.textcontent = "Computer wins!";
                computerScore++;
                updateScore();
                return;
            }
        }


    };

    
    // call inner functions
    startGame();
    playMatch();
};
  
// start the game
game();