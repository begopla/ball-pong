class Ball {
    constructor(canvas,ctx, positionX){
        this.canvas =canvas;
        this.ctx = ctx;
        this.positionX = positionX;
        this.ball=null; 
        this.load()
    }

    load(){
        this.ball = new Image();
        this.ball.src = "C:\Users\begon\OneDrive\Desktop\Ironhack\my-code\module-1\Ball-Pong2\resources\soccer-ball.png"
    }
    draw(){
        this.ball.onload = function (){
            this.ctx.drawImage(
                this.ball,
                this.positionX,
                195,50,50
            )
        }
    }

}