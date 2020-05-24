import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-matrix',
  templateUrl: './matrix.component.html',
  styleUrls: ['./matrix.component.scss']
})
export class MatrixComponent implements OnInit {


  canvas;

  ctx :any;
  ypos;
  w;
  h;
  // set the width and height of the canvas



  constructor() {

  }
  //  drawRectable(){
  //   this.canvas = document.getElementById('canv');
  //   console.log(this.canvas,"ad")
  //  }

  ngOnInit() {

    this.canvas = document.getElementById('canv');
    console.log(this.canvas)
  
    
    this.w = this.canvas.clientWidth
    let cols = Math.floor(this.w / 20) + 1;
    this.ypos = Array(cols).fill(0);
    if (this.canvas["getContext"]) {
      console.log("running");
      this.ctx = this.canvas["getContext"]('2d');
      console.log(this.ctx,"ctx")
      this.h = document.body.offsetHeight;
      this.matrix()

    }




  }
  matrix(){
    while(true){

 
    console.log("running")
    // debugger
    
    // if (this.ctx!== undefined){
    
      // draw a black rectangle of width and height same as that of the canvas
      this.ctx.fillStyle = '#000';
      this.ctx.fillRect(0, 0, this.w, this.h);
      this.ctx.fillStyle = '#0001';
      this.ctx.fillRect(0, 0, this.w, this.h);

      // Set color to green and font to 15pt monospace in the drawing context
      this.ctx.fillStyle = '#0f0';
      this.ctx.font = '15pt monospace';

      // for each column put a random character at the end
      this.ypos.forEach((y, ind) => {
        // generate a random character
        const text = String.fromCharCode(Math.random() * 128);

        // x coordinate of the column, y coordinate is already given
        const x = ind * 20;
        // render the character at (x, y)
        this.ctx.fillText(text, x, y);

        // randomly reset the end of the column if it's at least 100px high
        if (y > 100 + Math.random() * 10000) this.ypos[ind] = 0;
        // otherwise just move the y coordinate for the column 20px down,
        else this.ypos[ind] = y + 20;
      });
  }
  
}



}
