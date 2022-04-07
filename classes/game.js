
class Game{
    constructor(canvas,ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.intervalId = 0;
        this.newBackground = null;
        this.players=null;
        this.intervalId = 0;
        this.velY = 3;
        this.velX=0.6;
        this.gameOver = false;
        this.looserSound = null;
        this.winnerSound = null;
        this.frame = 0;
        this.secondCounter =0;
       
        this.init()

    }
    init(){
        console.log('game on')
        this.reset()
        this.clearBackground()
        this.loadPlayers()
        this.moveAll()
        this.setEventHandlers()
        startGame.classList.add("inactive")
        
          
        
    }
    
    clearBackground(){
        this.newBackground = new Background(this.canvas,this.ctx)
    }

    loadPlayers(){
        this.players = new Players (this.canvas,this.ctx,275, 250,250,this.velX,this.velY);
        this.looserSound =new Audio();
        this.looserSound.src = "./resources/looser-sound.mp3";
        this.winnerSound = new Audio();
        this.winnerSound.src ="./resources/winner-sound.mp3";
       
    }
    moveAll(){
        this.frames ++;
        //console.log(this.frames);
        this.clear();
        this.newBackground.draw();
        this.players.createOpponent();
        this.players.opponentMove();
        this.players.randomMove();
        this.players.drawBall();
        this.players.drawPlayer();
        this.updateTimer();
        this.checkScore();
        if(this.checkScore()){
            //console.log('one of the players won');
            this.reset();
            return;
        }
        this.timerEndGame();
        if(this.timerEndGame()){
            this.reset();
            return;
        }
        
        this.intervalId = requestAnimationFrame(()=>this.moveAll())
        

    }
    setEventHandlers(){
    document.addEventListener('keydown', (event)=>{
            //console.log(event);
            const key = event.key;
            key === "ArrowRight" ? this.players.moveRight(): null;
            key === "ArrowLeft" ? this.players.moveLeft(): null;
        })
    }
    clear(){
        this.ctx.clearRect(0, 0, 600, 900)
    }
    reset(){
        
        cancelAnimationFrame(this.intervalId);
        this.newBackground = null;
        this.players =null;
        this.gameOver = false;
        this.frames = 0;
         
        
    }
    checkScore(){      
           if(opponentGoalCounter.innerHTML >=1||playerGoalCounter.innerHTML>=1){
            gameRestart.classList.remove("inactive");
            gameBallSpeed.classList.add("inactive");
            gamePlayerSpeed.classList.add("inactive");


                if(opponentGoalCounter.innerHTML >=1){
                gameOverLooser.classList.remove("looser-text")
                this.looserSound.play();
            }
                else if(playerGoalCounter.innerHTML>=1){
                gameOverWinner.classList.remove("winner-text")
                this.winnerSound.play();
            }
            this.gameOver = true;

           return this.gameOver;
           }
        }
        updateTimer(){
           this.secondCounter;
            if(this.frames%60 === 0){
               // console.log("A second has passed")
                this.secondCounter++;
                
                timer.innerHTML=(60-this.secondCounter);
            }
        }
        timerEndGame(){
             //let secondCounter = 0;
             
            if(this.frames >=3600){
            gameRestart.classList.remove("inactive");
            gameBallSpeed.classList.add("inactive");
            gamePlayerSpeed.classList.add("inactive");
            gameOverLooser.classList.remove("looser-text");
            this.looserSound.play();
                return true;
            
            }
        }
    }

