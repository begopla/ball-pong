// class Opponent {
//     constructor(canvas,ctx,oppPosX){
//         this.canvas =canvas;
//         this.ctx = ctx;
//         this.opponentPositionX = oppPosX;
//         this.opponentSpeed= 2;
//         this.opponent=null;
//     }
//     createOpponent(){
//         this.ctx.fillStyle = "blue";
//         this.ctx.fillRect(this.opponentPositionX, 150, 100, 50);

//     }

//     orderedMove(){
        
      
//      this.opponentPositionX += this.opponentSpeed;
//      this.changeDirection();
//     }
        
//       horizontallyOutOfLimit(){
//           return(this.opponentPositionX<0 || this.opponentPositionX>500)
//       }    
//         changeDirection(){
//             if(this.horizontallyOutOfLimit()){
//                 this.opponentSpeed*=-1
//             }

//         }
//         //**?how can I clear opponent keeping the backgrong  */
//         clearOpponent (){
//             this.ctx.clearRect(this.opponentPositionX, 150, 100, 50)
//          }
// }

