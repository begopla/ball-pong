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
        this.newBackground.draw();
    }
    createOpponent(){
        this.opponent = new Opponent(this.canvas,this.ctx,250)
        this.opponent.createOpponent()
    }
    loadplayer(){
        this.player= new Player(this.canvas,this.ctx,250)
        //this.player.init()
       
        console.log('player loaded!')
    }

    loadBall(){
        this.ball = new Ball(this.canvas,this.ctx,275)
        console.log('ball loaded!')

    }
    moveAll(){
        
        this.frames ++;
        this.clear()
        this.newBackground.draw()
        this.opponent.createOpponent()
        this.opponent.orderedMove()
        //this.opponent.clearOpponent();
        this.ball.randomMove();
        this.ball.draw();
        this.player.draw();
        this.intervalId = requestAnimationFrame(()=>this.moveAll())
    }

    setEventHandlers(){
    document.addEventListener('keydown', (event)=>{
            //console.log(event);
            const key = event.key;
            key === "ArrowRight" ? this.player.moveRight(): null;
            key === "ArrowLeft" ? this.player.moveLeft(): null;
        })
    }
    clear(){
        this.ctx.clearRect(0, 0, 600, 900)
    }
}
