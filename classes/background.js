class Background{
 constructor (canvas, ctx){
     this.canvas = canvas;
     this.ctx = ctx;
     this.image = null;

     
 }
 
       
    
    loadBackground(){
        
        this.image = new Image();
        this.image.scroll="./resources/background.png";

    }

    draw(){ //? is it now a funtion because it´s not loading?
        this.ctx.drawImage(this.image,0,0,600,900)
    }


 }