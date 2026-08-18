let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorePara= document.querySelector("#user-score");
const compScorePara= document.querySelector("#comp-score");

const generateCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="The game is draw. Play Again!";
    msg.style.backgroundColor="#0B3948";
}

const showWin=(userWin, userChoice, compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText=`You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        msg.innerText= `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
    }
}

const playGame=(userChoice)=>{
    console.log("User choice was clicked, ", userChoice);
    // generate comp choice;
    const compChoice= generateCompChoice();
    console.log("Computer choice was clicked, ", compChoice);

    if(userChoice===compChoice){
        drawGame();
    }else{
        let userWin=true;
        if(userChoice==="rock"){
            // paper, scissors
            userWin= compChoice==="Paper"? false: true;
        }else if(userChoice==="paper"){
            // rock, scissors;
            userWin= compChoice==="scissors"? false: true;
        }else{
            // user scissors
            // paper, rock
            userWin= compChoice==="rock"? false: true; 
        }
        showWin(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice)=>{
    console.log(choices);
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})