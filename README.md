# Ball Pong game

## Description 

Ball-pong ia a game wher the player has to deffend their goal against the opponent, the console. It will hit the ball everytime is near thir goal aiming towards the opponent goal. The end game if one of the players //*user player or opponent, the console**/ scores a goal or the clock timer runs out of seconds.
If the user player scores a goal it wins the game, if a goal is scored in their goal or the timer runs ot it looses the game.

## MVP (DOM -CANVAS)
- on the landing paging, bu clicking to the start button we are showed the game screen with the canvas.
- game has two players that move horizontally. 
- one of the player, the botton one,  is controlled by the user using the left and right keys, the player has an assigned speed that can be increased cliking on increase speed button.
- the opponent on the top,  is smartly controlled by the console.
- a ball is moving with a given speed, the ball's speed can be ramdomly changed clicking on the ball speed button.
- a timmer is seen at the top of the canvas, when it runs down the game is over.
- the opponent score is tracked on the top of the screen and updated accordently.
- the player score is tracked at the botton of the canvas and updated accordently.
- at any moment of timer, the player can click on Go Back button to go back to the landing page or re-start the Game by clicking on Start Game.
- when the game is over the player can choose to re-start it by clicking on Play Again button.

## Backlog 
- add two button on the landing pae to choose the dificulty of the game 
- remove game bug that appers on the ball not bouncing against the player when the ball speed is increase, some timer if it hit the corner of the player it bounces back.

## Data Structure

# index.js
- hide splash screen 
- show game screen
- new Game() //*start game**/
- new Game() //*re-start game**//

# game.js
- Game(){
    this.canvas = canvas;
    this.ctx = ctx;
    this.intervalId = 0;
    this.newBackground = null;
    this.players=null;
    this.intervalId = 0;
    this.velY = 3.5;
    this.velX=0.7;
    this.gameOver = false;
    this.looserSound = null;
    this.winnerSound = null;
    this.frame = 0;
    this.secondCounter =0;
    this.init()   
}
- init(){}
- clearBackground(){}
- loadPlayers(){}
- moveAll(){}
- setEventHandlers(){}
- clear(){}
- reset(){}
- checkScore(){}
- updateTimer(){}
- timerEndGame(){}

# background.js
- Background{
     this.canvas = canvas;
     this.ctx = ctx;
     this.image = null;
     this.loadBackground()
}
- loadBackground(){}
- draw (){}

# allPlayers.js

- Players(){
        this.canvas =canvas;
        this.ctx = ctx;
        this.ballPositionX  = positionX;
        this.ball=null; 
        this.ballPositionY =240;
        this.ballSize = {w: 50, h: 50 };
        this.gameSize = {w:600, h:900}
        this.ballSpeed  = {x:velX,
                            y:velY,};
        this.playerPosX = playerPositionX;
        this.playerPosY = 700;
        this.playerSize = {w:100 , h:50};
        this.playerImage= null;
        this.playerSpeed = 4;
        this.opponentPositionX = oppPosX;
        this.opponentPositionY =150;
        this.opponentSpeed= 2;
        this.opponent=null;
        this.hasCollided = false;
        this.playerGoals =0;
        this.opponentGoals = 0;
        this.audioBong =null;
        this.load()
}

- load(){}
- drawBall(){}
- randomMove(){}
- checkCollision(){}
- horizontallyOutOfBound(){}
- verticallyOutOfBound(){}
- drawPlayer(){}
- moveLeft(){}
- moveRight(){}
- createOpponent(){}
- opponentMove(){}
- horizontallyOutOfLimit(){}
- collisionBetweenBallandPlayer(){}

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen

## Task

- index - addEventListener
- index - buildSplashScreen
- index - addEventListener
- index - buildGameScreen
- index - buildDom
- index - addEventLister
- index - start Game
- index - addEventListener
- index - restartGame
- game - init
- game - reset
- game - clearBackground
- background -loadBackground
- game - loadPlayers
- allPlayers - load
- game - clear
- game - moveAll */start loop**/
- background -draw
- allPlayers - createOppoent
- allPlayers - opponentMove
- allPlayers - randomMove
- allPlayers - checkCollision
- allPlayers - drawBall
- allPlayers - drawPlayer
- game - updateTimer
- game - checkScore
- game - timerEndGame


### Trello
[Link url](https://trello.com/b/XyDE5Kgp/ball-pong)

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/begopla/ball-pong)
[Link Deploy](https://begopla.github.io/ball-pong/)

### Slides
URls for the project presentation (slides)
[Link Slides.com](https://prezi.com/i/annzm8kdmkqe/)