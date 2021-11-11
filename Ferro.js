class Ferro{
	constructor(x,y){ 
    var options = {
      "restitution" : 0.8,
      "friction" : 3,
      "density" : 120
  
     }
     this.x=x;
     this.y=y;
     this.width = 70;
     this.height = 100;
     this.body=Bodies.rectangle(this.x, this.y, 70, 100, options);
     World.add(world, this.body);
    }
  
	display(){
	
			var pos=this.body.position;		
			push();
			translate(pos.x, pos.y);
			rotate(this.body.angle);
      rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("gray");
			rect(0,0, this.width,this.height);
			
			pop();
  }

}
