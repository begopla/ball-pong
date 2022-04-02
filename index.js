let splashScreen = document.querySelector('#splash-screen');
let startButton = document.querySelector("#start-btn");
let gameScreen = document.querySelector("#game-screen");
let=startGame = document.querySelector("#start-game")
let goBack  = document.querySelector("#go-back")
//*Loading images for the background**/
   

    //Changing screens

startButton.addEventListener("click", () =>{
    //*?hide splash screen
    splashScreen.style.display = "none";
    gameScreen.style.display = "flex";
})

goBack.addEventListener("click",()=>{
    splashScreen.style.display = "flex";
    gameScreen.style.display = "none"    
})
//**Loading the canvas backgound which is fixed in the game */
// //**we could create canvas in the Game class */

let canvas = document.querySelector("#my-canvas");
let ctx = canvas.getContext("2d");
 
// //**TODO: this could be replaced by calling a class called Background */
 
    let image = new Image ();
    image.src = "./resources/background.png";
    let player = new Image ()
    player.src = "./resources/player.png";
    let ball = new Image ()
    ball.src = "./resources/soccer-ball.png";
   //**here are all elements of the game */ 
    image.onload =function(){
        console.log('image has been loaded')
        ctx.drawImage(image, 0,0,600,900);
        ctx.fillStyle = "blue";
        ctx.fillRect(250, 150, 100, 50);
        ctx.drawImage(player, 250,700,100,50)
        ctx.drawImage(ball,275,195,50,50)
    }
  
    
//** Start the game on canvas by typing any key **/
startGame.addEventListener("click", () =>{
   
    new Game(ctx,canvas);  

});    


   


