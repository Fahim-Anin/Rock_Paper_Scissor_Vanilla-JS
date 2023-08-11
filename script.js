let userScore = 0;
let computerScore = 0;
// catching dom elements in dom variables
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissor_div = document.getElementById("s");



// for creating computer choice
function getComputerChoice(){
    const choices = ["r", "p" ,"s"];
    const randomNumber = Math.floor(Math.random()*3);
/*return statement is used to send a value back to the calling code and set 0,1,2, to r,p,s*/   
    return choices[randomNumber]; 
 
}

// to print the value
function convertToWord(letter){
    if(letter === "r") return "Rock";
    if(letter ==="p") return "Paper";
    return "Scissors";
}

function win(userChoice,computerChoice)
{   
    /*increase of userscore when user win*/
    userScore++;
    /*the new value then set to the userscore_Span by innerHTML */
    userScore_span.innerHTML = userScore;
    /*computerScore remains unchanged here.*/
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}  beats  ${convertToWord(computerChoice)}. You win!`;
}
function lose(userChoice,computerChoice)
{
    /*increase of computerscore when user win*/
    computerScore++;
        /*computerScore remains unchanged here.*/
    userScore_span.innerHTML = userScore;
    /*the new value then set to the userscore_Span by innerHTML */
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)} is lost to ${convertToWord(computerChoice)}. You Lost!`;
}
function draw(userChoice,computerChoice)
{
    result_p.innerHTML = `${convertToWord(userChoice)}  equals to  ${convertToWord(computerChoice)}. Draw!`;
    
}
/* for useoicer choice and compare give the final result */
function game(userChoice){
    const computerChoice = getComputerChoice();
    //   by this we can see the value of user 
    // console.log("user => " + userChoice);  
    
    // by this we can see the value of computer 
    // console.log("computer =>" + computerChoice); 

    /*switch case is for conditiom*/
   switch ( userChoice + computerChoice)
   {
    case "rs":
    case "pr":
    case "sp":
        win(userChoice,computerChoice);
       break;

    case "rp":
    case "ps":
    case "sr":
        lose(userChoice,computerChoice);
        break;

    case "rr":
    case "pp":
    case "ss":
    draw(userChoice,computerChoice);
    break;
   }
}

function main()
{
    rock_div.addEventListener('click',function(){
    game("r");
    })

    paper_div.addEventListener('click',function(){
    game("p");
    })
   scissor_div.addEventListener('click',function(){
    game("s");
    })
}

main();