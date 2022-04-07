
let opponentGoalCounter = document.getElementById('goalsOpponent');
let playerGoalCounter = document.getElementById('goals')
class Players {
    constructor(canvas, ctx, positionX, playerPositionX,oppPosX,velX,velY){
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
//**Ball functions */
    load(){
        this.ball = new Image();
        this.ball.src = "./resources/soccer-ball.png";
        this.playerImage = new Image();
        this.playerImage.src = "./resources/player.png";
        this.audio = new Audio();
        this.audio.src = "./resources/ping-pong-hit.mp3";
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
    
       gameBallSpeed.addEventListener("click",()=>{
        this.ballSpeed.y = this.ballSpeed.y +0.01*Math.floor(Math.random()*2);
       
        this.ballSpeed.x = this.ballSpeed.x+0.0000001;

        
   // console.log('increase speed!!!')
    })
        this.ballPositionX  -= this.ballSpeed.x;

        this.ballPositionY -= this.ballSpeed.y;
        if(this.collisionBetweenBallandPlayer()&&this.ballSpeed.y<4){
            this.ballPositionX = this.ballPositionX -0.5*this.ballSpeed.x;
            this.ballPositionY = this.ballPositionY -2*this.ballSpeed.y;
        }
        this.checkCollision()
        
    }
    checkCollision() {
		if (this.horizontallyOutOfBound()||this.collisionBetweenBallandPlayer()) {
			this.ballSpeed.x *= -1;
            this.audio.play();
        }
            

		if (this.verticallyOutOfBound()||this.collisionBetweenBallandPlayer()) {
			this.ballSpeed.y *= -1;
		}}

	horizontallyOutOfBound() {
        
            let outOfAxisX =  this.ballPositionX  + this.ballSize.w > (this.gameSize.w) ||
                this.ballPositionX  < 0;

            return outOfAxisX;
            
        
    }
    verticallyOutOfBound(){
        
       let outOfAxisY = this.ballPositionY<72 ||
        this.ballPositionY + this.ballSize.h >(this.gameSize.h-73)

         if(this.ballPositionX>0 && (this.ballPositionX+this.ballSize.w) <this.gameSize.w/3)
         return outOfAxisY;

        else if( this.ballPositionX>this.gameSize.w*(2/3) && (this.ballPositionX+this.ballSize.w)<this.gameSize.w)
        return outOfAxisY;

        else {
            if(this.ballPositionY<=15){
                
                this.playerGoals ++;
                playerGoalCounter.innerHTML = this.playerGoals;
                
                   this.ballPositionY = 300;
                   this.ballPositionX = 250;
                   this.playerPosX=250;
                   this.playerPosY=700;
                   this.opponentPositionX =250;
                   this.opponentPositionY= 150;
                   this.ballSpeed.x *= -1;
                   this.ballSpeed.y *= -1;  
            }
            if(this.ballPositionY>this.gameSize.h-80 && this.ballPositionY<=this.gameSize.h-15){
                this.opponentGoals ++;
                opponentGoalCounter.innerHTML = this.opponentGoals;
               
                   this.ballPositionY = 300;
                   this.ballPositionX = 250;
                   this.playerPosX=250;
                   this.playerPosY=700;
                   this.opponentPositionX =250;
                   this.opponentPositionY= 150;
    
            }

        }
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
        gamePlayerSpeed.addEventListener("click",()=>{
           if(this.playerSpeed<7){

               this.playerSpeed += 0.002;
           }
        //console.log(this.playerSpeed)
        }) 
    }
     moveLeft(){
        if(this.playerPosX>0){
        this.playerPosX -=this.playerSpeed; }}
        
              
    moveRight(){
        if(this.playerPosX <498) {
        this.playerPosX +=this.playerSpeed; }}
    
//*all opponent functions**//
    createOpponent(){
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.opponentPositionX, this.opponentPositionY, this.playerSize.w, this.playerSize.h);}
            
    opponentMove(){ 
    
               
        if(this.ballPositionX>this.gameSize.w/2 && this.ballPositionY <this.gameSize.h/2){
            if(this.opponentPositionX>this.gameSize.w*0.3 &&(this.opponentPositionX+this.playerSize.w)<this.gameSize.w*0.65){
            this.opponentPositionX =this.opponentPositionX;
            
            }
           else{
            this.opponentPositionX += this.opponentSpeed;
               this.changeDirection();
           }
         }
         else if(this.ballPositionX<this.gameSize.w/2 && this.ballPositionY <this.gameSize.h/2){
            if(this.opponentPositionX>this.gameSize.w*0.3 &&(this.opponentPositionX+this.playerSize.w)<this.gameSize.w*0.65){
                this.opponentPositionX =this.opponentPositionX;
                
                }
                else{
                    this.opponentPositionX += this.opponentSpeed;
                       this.changeDirection();
                   }
        }   
         
         else{

             this.opponentPositionX += this.opponentSpeed;
             this.changeDirection();  
         }
    }
            
     horizontallyOutOfLimit(){
        return(this.opponentPositionX<this.gameSize.w*0.1 || this.opponentPositionX>this.gameSize.w*0.8) }    
     changeDirection(){
         if(this.horizontallyOutOfLimit()){
                this.opponentSpeed*=-1}}

 //**Collission between ball and player */
    collisionBetweenBallandPlayer(){
        
        let ballWithinPlayerX = 
        this.ballPositionX+this.ballSize.w >= this.playerPosX && 
        this.ballPositionX <=this.playerPosX + this.playerSize.w;
        
        let ballWithinPlayerY = 
        this.playerPosY + this.playerSize.h >=this.ballPositionY &&
        this.playerPosY<=this.ballPositionY+this.ballSize.h;
        
        let ballWithinOppX = 
        this.ballPositionX+this.ballSize.w+5 >= this.opponentPositionX && 
        this.ballPositionX <=this.opponentPositionX + this.playerSize.w+5;

        let ballWithinOppY =
        this.opponentPositionY + this.playerSize.h+10 >=this.ballPositionY &&
        this.opponentPositionY<=this.ballPositionY+this.ballSize.h+5;
        
        this.hasCollided = (ballWithinPlayerX && ballWithinPlayerY) || (ballWithinOppX && ballWithinOppY);
        if(this.hasCollided){
            //console.log('I have collided')
        }
        return this.hasCollided;
    }

    

}