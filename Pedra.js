class Pedra{
	constructor(x,y){ 
    var options = {
      "restitution" : 0.8,
      "friction" : 0.9,
      "density" : 12
    }
     this.x=x;
     this.y=y;
     this.width = 30;
     this.height = 100;
     this.body=Bodies.rectangle(this.x, this.y, 30, 100, options);
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
			fill("lightgray");
			rect(0,0, 100,100);
			pop();
	}

}