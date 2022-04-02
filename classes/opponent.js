class Opponent {
    constructor(canvas,ctx,positionX){
        this.canvas =canvas;
        this.ctx = ctx;
        this.positionX = positionX;
        this.opponentSpeed= 2;
        this.opponent=null;
    }
    createOpponent(){
        this.ctx.fillStyle = "blue";
        this.ctx.fillRect(this.positionX, 150, 100, 50);

    }

    orderedMove(){
        
      
     this.positionX += this.opponentSpeed;
     this.changeDirection();
    }
        
      horizontallyOutOfLimit(){
          return(this.positionX<0 || this.positionX>500)
      }    
        changeDirection(){
            if(this.horizontallyOutOfLimit()){
                this.opponentSpeed*=-1
            }

        }
        //**?how can I clear opponent keeping the backgrong  */
        clearOpponent (){
            this.ctx.clearRect(this.positionX, 150, 100, 50)
         }
}

