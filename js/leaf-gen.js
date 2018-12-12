var bgSketch=function(d)
{
	d.setup=function()
	{
		d.createCanvas(window.innerWidth,window.innerHeight);
		d.background(255);
	};
	d.draw=function()
	{
    d.fill(0);
		d.ellipse(50,50,50,50);
	};
};
new p5(bgSketch,"bg");

/*
var vmin;
function setup() {
  createCanvas(400, 400);
	vmin=min(width,height);
	noLoop();
}

function draw() {
  background(255);
	var j;
	for(j=0;j<13;j++)
	{
		leaf((j+0.5)*width/12,0,100+random(-40,40),PI/2+random(-0.5,0.5));
		leaf((j+0.5)*width/12,height,100+random(-40,40),PI/2+random(-0.5,0.5));
	}
	for(j=0;j<13;j++)
	{
		leaf(0,(j+0.5)*height/12,100+random(-40,40),random(-0.5,0.5));
		leaf(width,(j+0.5)*height/12,100+random(-40,40),random(-0.5,0.5));
	}
}

function leaf(x, y, size, rot)
{
	var leafColor=[color("#24adaf"),color("#123456"),color("#777777"),color("#00ff00"),color("#00cc00")];
	noStroke();
	fill(random(leafColor));
	push();
	translate(x,y);
	rotate(rot);
	arc(0,-size/4-0.5,size,size,PI/6,PI*5/6,CHORD);
	arc(0,size/4+0.5,size,size,-PI*5/6,-PI/6,CHORD);
	pop();
}*/
