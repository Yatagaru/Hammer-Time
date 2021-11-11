class Borracha{
	constructor(x,y,r){ 
		var options = {
			"restitution" : 0.3,
			"friction" : 5,
			"density" : 1
		 }
		this.x=x;
		this.y=y;
		this.r=40;
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);
		World.add(world, this.body);
	}
// adicione opções a bola de borracha, coloque densidade baixa e atrito alto


	
	display(){
	
			var pos=this.body.position;		
			push();
			translate(pos.x, pos.y);
			rectMode(CENTER);
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			ellipse(0,0, this.r);
			//use ellipse() aqui para desenhar a bola de borracha
			pop();
	}
}
