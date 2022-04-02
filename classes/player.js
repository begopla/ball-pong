class Player{
    constructor(canvas,ctx, playerPositionX){
        this.canvas = canvas;
        this.ctx = ctx;
        this.playerPosX = playerPositionX;
        this.playerImage= null;
        this.playerSpeed = 2;
    }
    init(){
        this.playerImage = new Image();
        this.playerImage.scr = "./resources/player.png";
        
    }
    draw(){

        //   console.log('loading player')
        //     this.ctx.drawImage(
        //         this.playerImage,
        //         this.playerPosX,
        //         700,
        //         100,
        //         50
        //         );
            

        this.ctx.fillStyle = "red";
        this.ctx.fillRect(this.playerPosX, 700, 100, 50);
             
         }

    
     moveLeft(){
            if(this.playerPosX>0){
     
             this.playerPosX -=this.playerSpeed;
            }
        }
           
         
    moveRight(){
             if(this.playerPosX <450)
             {
             this.playerPosX +=this.playerSpeed;
            }
        }
    };
