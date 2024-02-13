let userscore = 0;
let compscore = 0;

let choices = document.querySelectorAll(".choice");

const compchoice=()=>{
    let choices = ["rock","paper","scissors"];
    let rand= Math.floor(Math.random()*3);
    return choices[rand];
}

const game = (userchoice) => {
    console.log(userchoice);
    let computer = compchoice();
    console.log(computer);
    let message = document.querySelector("#msg");

    if(userchoice === computer){
        console.log("Draw");
        message.innerHTML = "Game was Draw";
    }
    else if(userchoice === "paper"){
        if(computer ==="scissors"){
            console.log("you lose");
            message.innerHTML = "Your lose";
        }
        else if(computer === "rock"){
            console.log("you win");
            message.innerHTML = "You win";
        }
    }
    else if(userchoice === "rock"){
        if(computer ==="scissors"){
            console.log("you win");
            message.innerHTML = "You win";
        }
        else if(computer === "paper"){
            console.log("you lose");
            message.innerHTML = "You Lose";
        }
    }
    else if(userchoice === "scissors"){
        if(computer ==="paper"){
            console.log("you win");
            message.innerHTML = "You win";
        }
        else if(computer === "rock"){
            console.log("you lose");
            message.innerHTML = "You Lose";
        }
    }
}


choices.forEach((choice) => {

    choice.addEventListener("click",()=>{
        let userid = choice.getAttribute("id");
        game(userid);
    })
});
