class Ball {
    constructor(canvas, ctx, positionX){
        this.canvas =canvas;
        this.ctx = ctx;
        this.positionX = positionX;
        this.ball=null; 
        this.positionY=195;
        this.playerSize = {w: 50, h: 50 };
        this.playerSpeed  = {x:this.getRandVelocity(),
                             y:this.getRandVelocity(),};
        this.load()
    }

    load(){
        this.ball = new Image();
        this.ball.src = "./resources/soccer-ball.png"
    }

    getRandVelocity(){
        const velocity = [-2,2];
        return velocity[Math.floor(Math.random()*2)]*(Math.random()*2);
    }
    draw(){
       // this.ball.onload = function (){
            this.ctx.drawImage(
                this.ball,
                this.positionX,
                this.positionY,
                this.playerSize.w,
                this.playerSize.h
            )
       // }
    }
    randomMove(){
        console.log('changing ball position')
        this.positionX += this.playerSpeed.x;
        this.positionY -= this.playerSpeed.y;
       // this.checkCollision()
    }
    // checkCollision() {
	// 	if (this.horizontallyOutOfBound()) {
	// 		this.playerSpeed.x *= -1;
	// 	}

	// 	if (this.verticallyOutOfBound()) {
	// 		this.playerSpeed.y *= -1;
	// 	}
	// }

	// horizontallyOutOfBound() {
	// 	return (
	// 		this.playerPos.x + this.playerSize.w > this.gameSize.w ||
	// 		this.playerPos.x < 0
	// 	);
	// }
}