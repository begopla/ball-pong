let splashScreen = document.querySelector('#splash-screen');
let startButton = document.querySelector("#start-btn");
let gameScreen = document.querySelector("#game-screen");
let startGame = document.querySelector("#start-game");
let goBack  = document.querySelector("#go-back");
const gamePlayerSpeed = document.querySelector("#player");
const gameBallSpeed = document.querySelector("#ball");
const gameRestart = document.querySelector("#restart");
const gameOverLooser= document.getElementById("looser");
const gameOverWinner = document.getElementById("winner");
const increaseGameLevel = document.querySelector("#difficult-game")
const timer =document.getElementById("count-down")
//*Loading images for the background**/
   

    //Changing screens

startButton.addEventListener("click", () =>{
    //*?hide splash screen
    splashScreen.style.display = "none";
    gameScreen.style.display = "flex";
    gameOverWinner.classList.remove("start")
})


goBack.addEventListener("click",()=>{
    splashScreen.style.display = "flex";
    gameScreen.style.display = "none"    
})
//**Loading the canvas backgound which is fixed in the game */


let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
 
 
    let image = new Image ();
    image.src = "./resources/background.png";
    let player = new Image ()
    player.src = "./resources/player.png";
    let ball = new Image ()
    ball.src = "./resources/soccer-ball.png";
   //**here are all elements of the game */ 
    image.onload =function(){
        console.log('background has been loaded')
        ctx.drawImage(image, 0,0,600,900);
        ctx.fillStyle = "blue";
        ctx.fillRect(250, 150, 100, 50);
        ctx.drawImage(player, 250,700,100,50)

        //ctx.fillStyle = "red";
       // ctx.fillRect(250, 700, 100, 50);
        ctx.drawImage(ball,275,195,50,50)
    }
  
    
//** Start the game on canvas by typing any key **/
startGame.addEventListener("click", () =>{
   
   new Game(canvas,ctx);  

});    

gameRestart.addEventListener("click", () =>{


//reset game scores & remove winner/looser text
if(opponentGoalCounter.innerHTML >=1){
    opponentGoalCounter.innerHTML = 0;
    gameOverLooser.classList.add("looser-text")
}
else if(playerGoalCounter.innerHTML>=1){
    playerGoalCounter.innerHTML =0;
    gameOverWinner.classList.add("winner-text")
}
if(timer.innerHTML <60){
    timer.innerHTML =60;
    gameOverLooser.classList.add("looser-text")
}


//enable speed bottons
gameBallSpeed.classList.remove("inactive");
gamePlayerSpeed.classList.remove("inactive")

//remove Play Again botton
 gameRestart.classList.add("inactive")
    new Game(canvas,ctx);  
}); 