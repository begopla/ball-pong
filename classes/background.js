class Background{
 constructor (canvas, ctx){
     this.canvas = canvas;
     this.ctx = ctx;
     this.image = null;

     
 }
 
       
    
    loadBackground(){
        
        this.image = new Image();
        this.image.scr="resources/background.png";

    }

    draw(){ //? is it now a funtion because it´s not loading?
        console.log('background is loaded')
        this.ctx.drawImage(this.image,0,0,600,900)
    }


 }