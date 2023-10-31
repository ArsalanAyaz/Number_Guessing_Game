#!\usr\bin\env node
import inquirer from 'inquirer'
import chalk from 'chalk'

console.log("Game : Let's guess a number lbetween 1 and 10");
let RandomNumber = Math.floor(Math.random() * 10);  
//6console.log(RandomNumber);

//let actualNumber : number = RandomNumber ;

let numTries : number = 3 ;

let play:boolean=true ;


type Answerstype = {

    UserGuess:number,
};

while (play) {

while(numTries>0){

let answers:Answerstype= await inquirer.prompt([

     {
       type:"number",
       name:"UserGuess",
       message:"Write your guessNumber :"

     }


]);

let{UserGuess}= answers;

if (answers.UserGuess == RandomNumber){
    
    console.log("Hurrah  ! You guessed it right \n Game End!");
    numTries=0;
}else{

    console.log("you guessed it wrong");
    console.log(`you have ${numTries-1} left`);

    if (RandomNumber > answers.UserGuess){
        console.log("Think Higher")
    
    }else{ 

            console.log("Think Lower");
        };
    };

    numTries--;
};

type againplay= {

    playagain:boolean;
};

let playagainnn : againplay = await inquirer.prompt({

name: "playagain",
message: "Play Again ?",
type:"confirm",
})

if (playagainnn.playagain === true){

    numTries=3;
    RandomNumber = Math.floor(Math.random() * 10);  
    let actualNumber  = RandomNumber ;



}else{
    console.log("Exiting game ...")
    play=false
   
    
    

};

console.log("Play Again:",playagainnn);

};