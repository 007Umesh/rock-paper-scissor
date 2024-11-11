let choices =document.querySelectorAll(".choice");
let userCount =document.querySelector("#userCount");
let systemCount = document.querySelector("#systemCount");
let result = document.querySelector("#result");

let uCount=0;
let sCount=0;

const randomChoice=()=>{
    options =["rock","paper","scissor"];
    //rock,paper,scissor
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawGame=()=>{
    result.innerText ="Drawn";
    console.log("drawn");
}


const showWinner=(userWin)=>{
    if(userWin){
        uCount++;
        userCount.innerText = uCount;
        result.innerText ="user won";
        console.log("user won");
    }
    else{
        sCount++;
        systemCount.innerText= sCount;
        result.innerText ="comp won";
        console.log("comp won");
    }  
    
};

const playGame =(userChoice,compChoice)=>{
    // let compChoice= randomChoice();
    console.log({userChoice,compChoice})
    if (userChoice === compChoice){
        console.log("tie");
        return;  

}else{
    userWin = true;
    if(userChoice === "rock"){
        userWin = compChoice === "paper" ? false:true;
    }
    else if(userChoice === "paper"){
        userWin = compChoice === "scissor" ? false:true;
    }
    else{
        userWin = compChoice === "rock" ? false:true;
    }

    console.log({userWin})
    showWinner(userWin);
}
};




choices.forEach((choice)=>{
choice.addEventListener("click",()=>{
   let  userChoice = choice.getAttribute("id");
    let compChoice=randomChoice();
    // console.log("user choice" ,userChoice);
    // console.log("comp choice",compChoice);
    playGame(userChoice,compChoice);
})
});

