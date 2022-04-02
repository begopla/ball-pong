class Game{
    constructor(canvas,ctx){
        this.canvas = canvas;
        this.ctx = ctx;
        this.player = null;
        this.intervalId = 0;
        this.playerImage=null;
        this.newBackground = null;
        this.opponent =null;
        this.ball=null;
        this.frames =0;
        this.intervalId = 0;
        this.init()

    }
    init(){
        
        console.log('game on')
        this.clearBackground()
        this.createOpponent()
        this.loadplayer()
        this.loadBall()
        this.moveAll()
        this.setEventHandlers()
    }
    
    
    
    
    clearBackground(){
        this.newBackground = new Background(this.canvas,this.ctx)
        this.newBackground.loadBackground()
    }
    createOpponent(){
        this.opponent = new Opponent(canvas,ctx,250)
        this.opponent.createOpponent()
    }
    loadplayer(){
        this.player= new Player(canvas,ctx,250)
        this.player.init()
        this.player.draw();
        console.log('player loaded!')
    }

    loadBall(){
        this.ball = new Ball(canvas,ctx,275)
        this.ball.draw()
        console.log('ball loaded!')

    }
    moveAll(){
        
        this.frames ++;
        //this.clear()
        this.newBackground.draw()
        this.opponent.createOpponent()
        this.opponent.orderedMove()
        

        this.intervalId = requestAnimationFrame(()=>this.moveAll())
    }

    setEventHandlers(){
    document.addEventListener('keydown', (event)=>{
                    console.log(event);
            const key = event.key;
            key === "ArrowRight" ? this.player.moveRight(): null;
            key === "ArrowLeft" ? this.player.moveLeft(): null;
        })
    }
    clear(){
        this.ctx.clearRect(0, 0, 600, 900)
    }
}
