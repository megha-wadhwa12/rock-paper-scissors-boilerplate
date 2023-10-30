// **Iteration 3:** Make the game functional using JavaScript.


// **Iteration 3.1:** Declare the variables required for this game.
let playerdiv = document.querySelector("#player")
let compdiv = document.querySelector("#comp")
let rockbtn = document.querySelector("#rock")
let paperbtn = document.querySelector("#paper")
let scissorsbtn = document.querySelector("#scissors")
let team1;
let team2;
let playerscore = document.getElementById("score1");
let compscore = document.getElementById("score2");
let score1=0;
let score2=0;
team1 = [rockbtn,paperbtn,scissorsbtn];
let footer1 = document.getElementById("win")
let footer2 = document.getElementById("lose")
let playagain1 = document.getElementById("playagain1")
let playagain2 = document.getElementById("playagain2")
let icons = document.querySelector(".icons")



// **Iteration 3.2:** Using random number function select the shapes randomly for the computer.
function randomise(){
    let num = Math.ceil(Math.random()*3)
    // let game = " "
    switch(num){
        case 1: 
        team2 = "rock";
        break;
        case 2: 
        team2 = "paper";
        break;
        case 3: 
        team2 = "scissors";
        break;
    }
    compdiv.innerHTML = `<img src = "./assets/${team2}-hand.png" alt="" />`
    return team2
}


// **Iteration 3.3:** Write onclick function with the game logic to make the game functional.
    
    rockbtn.onclick = ()=>{
        playerdiv.innerHTML = `<img src="assets/rock-hand.png" alt="" />`
        scoreupdate("scissors","paper")
    }
    paperbtn.onclick = ()=>{
        playerdiv.innerHTML = `<img src="assets/paper-hand.png" alt="" />`
        scoreupdate("rock","scissors")
    }
    scissorsbtn.onclick = ()=>{
        playerdiv.innerHTML = `<img src="assets/scissors-hand.png" alt="" />`
        scoreupdate("paper","rock")
    }
    
    function scoreupdate(win,lose){
        let compchoice;
        compchoice = randomise()
        if(compchoice == win){
            score1++
        }else if(compchoice == lose){
            score2++
        }
    
        playerscore.innerHTML = score1;
        compscore.innerHTML = score2;

        complete()
    }

// **Iteration 3.4:** Write a function with logic to display result.

function complete(){
    if(score1==5 || score2 == 5){
        if (score1>score2) {
            footer1.style.display="flex"
        }else{
            footer2.style.display="flex"
        }
        icons.style.display = "none"
    }

}

// **Iteration 3.5:** When the play again button is clicked the game page should be reloaded.

let playagainbtn1 = document.querySelector("#again1")
let playagainbtn2 = document.querySelector("#again2")
playagainbtn1.onclick = () =>{
    window.location.reload();
}
playagainbtn2.onclick = () =>{
    window.location.reload();
}
