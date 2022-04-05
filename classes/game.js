
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
        this.init()

    }
    init(){
        
        console.log('game on')
        this.reset()
        this.clearBackground()
        //this.createOpponent()
        this.loadPlayers()
        this.moveAll()
        this.setEventHandlers()
    }
    
    
    
    
    clearBackground(){
        this.newBackground = new Background(this.canvas,this.ctx)
    }
    // createOpponent(){
    //     this.opponent = new Opponent(this.canvas,this.ctx,250)
    //     this.opponent.createOpponent()
    // }
    // loadplayer(){
    //     this.player= new Player(this.canvas,this.ctx,250)
    //     //this.player.init()
       
    //     console.log('player loaded!')
    // }

    loadPlayers(){
        this.players = new Players (this.canvas,this.ctx,275, 250,250);
    }
    moveAll(){
        this.clear();
        this.newBackground.draw();
        this.players.createOpponent();
        this.players.opponentMove();
        this.players.randomMove();
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
        
    }
    checkScore(){
                    
           if(opponentGoalCounter.innerHTML >=1||playerGoalCounter.innerHTML>=1){
            if(opponentGoalCounter.innerHTML >=1){
                gameOverLooser.classList.remove("looser-text")
            }
            else if(playerGoalCounter.innerHTML>=1){
                gameOverWinner.classList.remove("winner-text")
            }

            this.reset()
           }
        }
    }

