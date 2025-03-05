document.addEventListener("DOMContentLoaded", () =>{
    const rollBtn = document.getElementById("roll-btn");
    const saveBtn = document.getElementById("save-btn");
    const resetBtn = document.getElementById("reset-btn");
    const diceImage = document.getElementById("dice-img");
    const p1Current = document.getElementById("p1current");
    const p2Current = document.getElementById("p2current");
    const p1Saved = document.getElementById("p1saved");
    const p2Saved = document.getElementById("p2saved");
    const winnerDec = document.getElementById("winner-declaration");
    const player1 = document.getElementById("player1");
    const player2 = document.getElementById("player2");

    const rollingDice = "images/rollingdice.webp";

    let currentPlayer = 1;
    let currentScore = 0;
    let savedScores = {1 : 0, 2 : 0};
    let active = 1;

    function switchPlayers(){
        currentScore = 0;
        if(currentPlayer === 1){
            currentPlayer = 2;
            }
        else{
            currentPlayer = 1;    
        }
        update();
    }
    // function design(){
    //     if (currentPlayer === 1){
    //         player1.style.backgroundColor = "light-blue";
    //     }
    //     else{
    //         player2.style.backgroundColor = "light-blue";
    //     }
    // }
    function update(){
        p1Saved.textContent = savedScores[1];
        p2Saved.textContent = savedScores[2];
        if(currentPlayer === 1){
            p1Current.textContent = currentScore;
            p2Current.textContent = 0;
            player1.style.backgroundColor = "lightblue"; 
            player2.style.backgroundColor = "";
        } else {
            p2Current.textContent = currentScore;
            player2.style.backgroundColor = "lightblue";
            player1.style.backgroundColor = "";
           
            p1Current.textContent = 0;
        } 
    }

    rollBtn.addEventListener("click" , () =>{
       diceImage.src = rollingDice;

       setTimeout(() => {
        let diceRoll = Math.floor(Math.random() * 6) + 1;
        diceImage.src = `images/dice-${diceRoll}.jpeg`;
        
        if(diceRoll === 1){
            switchPlayers();
        }
        else{
            currentScore += diceRoll;
            update();
        }
       }, 800);
    });

    saveBtn.addEventListener("click", () =>{
        savedScores[currentPlayer] += currentScore;
        if(savedScores[currentPlayer] >= 100){
            winnerDec.textContent = `Player ${currentPlayer} Wins!`;
            rollBtn.disabled = true;
            saveBtn.disabled = true;
        } 
        else{
            switchPlayers();
        }
    });

    resetBtn.addEventListener("click", () => {
        currentPlayer = 1;
        currentScore = 0;
        savedScores = {1 : 0, 2 : 0};
        winnerDec.textContent = "";
        rollBtn.disabled = false;
        saveBtn.disabled = false;
        update();

    });
    
});

