
let secretNumber = Math.trunc(20 * Math.random() + 1);
let highscore = [];
let timer;
let time = [0, 0] ;
const  x=[];
// const bestHeighScore=[];

// document.addEventListener("DOMContentLoaded", function () {

//     console.log("Script loaded"); 
document.querySelector('.again').addEventListener('click', function () {
    
    clearInterval(timer);
    console.log("Check button clicked");
    time = [0, 0]
    secretNumber =Math.trunc(20 * Math.random() + 1);
    document.querySelector('.score').textContent = '20';
    document.querySelector('.guess').value = '';
    document.getElementById('timer').innerHTML = '';
    document.querySelector('.check').style.backgroundColor = '#f1356d';
    document.querySelector('.number').textContent = "?";
    document.body.style.backgroundColor = 'white';
    
    
});

document.querySelector('.check').addEventListener('click',function(){
    console.log("check button")

    let guess = document.querySelector('.guess').value;
    clearInterval(timer);
    timer =  setInterval(() => {
        time[1] ++ ;
        if (time[1] >= 60) {
            time[0] ++ 
            time[1]=0;
                    } 
    document.getElementById('timer').innerHTML = ` ${time[0]} : ${time[1]} `
    // console.log(time);

    }, 1000 );
    
    this.style.backgroundColor = 'black';

    if (!guess) {
        document.querySelector(".message").textContent = "Not a Valid input";
    }
    else if (guess == secretNumber) {
        clearInterval(timer);
        console.log("New guess no.");
        document.querySelector(".message").textContent = "You guessed it Right";
        document.querySelector('.number').style.width = '30rem'
        document.body.style.backgroundColor = 'green';

        document.querySelector('.number').textContent = secretNumber;
        
        if (highscore < Number(document.querySelector('.score').textContent)) {
            highscore = Number(document.querySelector('.score').textContent);
            console.log("New high score:", highscore);}
        
        document.querySelector('.highscore').textContent = highscore;
        // console.log(highscore);
        console.log("Updated high score on the page:", highscore);
        const score = Number(document.querySelector('.score').textContent);
        const formattedTime = `${time[0]}:${time[1]}`;
        
        const highscoreText = `${score} (${formattedTime})`;
        const saved =highscoreText;
        console.log(formattedTime);
        console.log(highscoreText);
        document.querySelector('.highscore').textContent = highscoreText;
        
        // if(score!=0){
        //     highscoreText.push( x);
        //         console.log( x);

        // }
        

        // console.log("score and highscore"+score+highscore);

        // if (score < highscore) {
        //     highscore==score;
        //     console.log("highscore "+highscore)
        //     console.log(" score "+score)
        //     const formattedTime = `${time[0]}:${time[1]}`;
        //     const highscoreText = `${highscore} (${highscoreTime})`;
        //     document.querySelector('.highscore').textContent = highscoreText;

        //     console.log(highscore);
        //     highscoreText.push(bestHeighScore);
        //     console.log(bestHeighScore);
        // }
    //         highscore = score;
    //         document.querySelector('.highscore').textContent = highscore;
    //         document.querySelector('.highscore').textContent = formattedTime;
    // }
}
// if (score > highscore) {
//     const formattedTime = `${time[0]}:${time[1]}`;
//     document.querySelector('.highscore').textContent = highscoreText;
// }


    else if (guess > secretNumber) {
        document.querySelector(".message").textContent = "Too high";
        document.querySelector('.score').textContent--;
    

    }


    else {
        document.querySelector(".message").textContent = "Too low ";
        document.querySelector('.score').textContent--;
    }

    if (document.querySelector('.score').textContent <= 0) {
        document.querySelector(".message").textContent = "You lost the Game";
        clearInterval(timer);
        document.getElementById('timer').innerHTML = '';
        document.getElementById('hiddenResult').textContent == secretNumber;
        document.body.style.backgroundColor = 'red';
        // document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber;

        // console.log(message);
    }

});
// });
