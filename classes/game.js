
class Game{
    constructor(canvas,ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        //this.player = null;
        this.intervalId = 0;
        //this.playerImage=null;
        this.newBackground = null;
       // this.opponent =null;
        this.players=null;
        this.intervalId = 0;
        this.velY = 2;
        this.velX=0.5;
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
    }
    moveAll(){
        this.clear();
        this.newBackground.draw();
        this.players.createOpponent();
        this.players.opponentMove();
        this.players.randomMove();
      //  this.players.getVelocity();
        this.players.drawBall();
        this.players.drawPlayer();
        this.checkScore()
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
        this.players =null;
        //this.loadPlayers(); //*!how can I reload the player??
        //this.players = new Players (this.canvas,this.ctx,275, 250,250);
        // gameRestart.addEventListener("click", () =>{

        //     new Game(this.canvas,this.ctx);  
        // }); 
        
        
    }
    checkScore(){
                    
           if(opponentGoalCounter.innerHTML >=1||playerGoalCounter.innerHTML>=1){
            gameRestart.classList.remove("inactive");
            
            if(opponentGoalCounter.innerHTML >=1){
                gameOverLooser.classList.remove("looser-text")
            }
            else if(playerGoalCounter.innerHTML>=1){
                gameOverWinner.classList.remove("winner-text")
            }

            this.reset()
            return;
            
            
            
           }
        }
    }

