class Players {
    constructor(canvas, ctx, positionX, playerPositionX,oppPosX){
        this.canvas =canvas;
        this.ctx = ctx;
        this.ballPositionX  = positionX;
        this.ball=null; 
        this.ballPositionY =200;
        this.ballSize = {w: 50, h: 50 };
        this.gameSize = {w:600, h:900}
        this.ballSpeed  = {x:this.getRandVelocity(),
                            y:this.getRandVelocity(),};
        this.playerPosX = playerPositionX;
        this.playerPosY = 700;
        this.playerSize = {w:100 , h:50};
        this.playerImage= null;
        this.playerSpeed = 2;
        this.opponentPositionX = oppPosX;
        this.opponentPositionY =150;
        this.opponentSpeed= 2;
        this.opponent=null;
        this.hasCollided = false;
        this.load()
    }
//**Ball functions */
    load(){
        this.ball = new Image();
        this.ball.src = "./resources/soccer-ball.png";
        this.playerImage = new Image();
        this.playerImage.src = "./resources/player.png";
    }

    getRandVelocity(){
        const velocity = [-2,2];
        return velocity[Math.floor(Math.random()*2)]*(Math.random()*2);
    }
    drawBall(){
        this.ctx.drawImage(
        this.ball,
        this.ballPositionX,
        this.ballPositionY ,
        this.ballSize.w,
        this.ballSize.h
            )}
    randomMove(){
       // console.log('changing ball position')
        this.ballPositionX  += this.ballSpeed.x;
        this.ballPositionY -= this.ballSpeed.y;
        this.checkCollision()
    }
    checkCollision() {
		if (this.horizontallyOutOfBound()||this.collisionBetweenBallandPlayer()) {
			this.ballSpeed.x *= -1;}

		if (this.verticallyOutOfBound()||this.collisionBetweenBallandPlayer()) {
			this.ballSpeed.y *= -1;
		}}

	horizontallyOutOfBound() {
		return (
			this.ballPositionX  + this.ballSize.w > this.gameSize.w ||
			this.ballPositionX  < 0
		);}
    verticallyOutOfBound(){
        return ( this.ballPositionY<72 ||
                 this.ballPositionY + this.ballSize.h >(this.gameSize.h-73));
    }


 //*player functions*//
    
    drawPlayer(){
    this.ctx.drawImage(
        this.playerImage,
        this.playerPosX,
        this.playerPosY,
        this.playerSize.w,
        this.playerSize.h);
        // this.ctx.fillStyle = "red";
        // this.ctx.fillRect(this.playerPosX, 700, 100, 50);
     }
     moveLeft(){
        if(this.playerPosX>0){
        this.playerPosX -=this.playerSpeed; }}
              
    moveRight(){
        if(this.playerPosX <450) {
        this.playerPosX +=this.playerSpeed; }}
    
//*all opponent functions**//
    createOpponent(){
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.opponentPositionX, this.opponentPositionY, this.playerSize.w, this.playerSize.h);}
            
    opponentMove(){ 
        this.opponentPositionX += this.opponentSpeed;
        this.changeDirection();}
             
     horizontallyOutOfLimit(){
        return(this.opponentPositionX<0 || this.opponentPositionX>500) }    
     changeDirection(){
         if(this.horizontallyOutOfLimit()){
                this.opponentSpeed*=-1}}

 //**Collission between ball and player */
    collisionBetweenBallandPlayer(){
        
        let ballWithinPlayerX = 
        this.ballPositionX+this.ballSize.w > this.playerPosX && 
        this.ballPositionX <this.playerPosX + this.playerSize.w;
        
        let ballWithinPlayerY = 
        this.playerPosY + this.playerSize.h >this.ballPositionY &&
        this.playerPosY<this.ballPositionY+this.ballSize.h;
        
        let ballWithinOppX = 
        this.ballPositionX+this.ballSize.w > this.opponentPositionX && 
        this.ballPositionX <this.opponentPositionX + this.playerSize.w;

        let ballWithinOppY =
        this.opponentPositionY + this.playerSize.h >this.ballPositionY &&
        this.opponentPositionY<this.ballPositionY+this.ballSize.h;
        
        this.hasCollided = (ballWithinPlayerX && ballWithinPlayerY) || (ballWithinOppX && ballWithinOppY);
        if(this.hasCollided){
            console.log('I have collided')
        }
        return this.hasCollided;
    }

}