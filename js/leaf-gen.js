var bgSketch=function(d)
{
	d.setup=function()
	{
		d.createCanvas(window.innerWidth,window.innerHeight);
		d.noLoop();
		d.noStroke();
	};
	d.draw=function()
	{
		d.background(255);
		var vmin=d.min(d.width,d.height);
		var size=vmin/4;
		var delta=vmin/12;
		var hNo=d.round(d.width/40);
		var vNo=d.round(d.height/40);
		var i;
		for(i=0;i<=hNo;i++)
		{
			d.leaf((i+0.5)*d.width/hNo,0,size+d.random(-delta,delta),d.PI/2+d.random(-0.5,0.5));
			d.leaf((i+0.5)*d.width/hNo,d.height,size+d.random(-delta,delta),d.PI/2+d.random(-0.5,0.5));
		}
		for(i=0;i<=vNo;i++)
		{
			d.leaf(0,(i+0.5)*d.height/vNo,size+d.random(-delta,delta),d.random(-0.5,0.5));
			d.leaf(d.width,(i+0.5)*d.height/vNo,size+d.random(-delta,delta),d.random(-0.5,0.5));
		}
	};
	d.leaf=function(x, y, size, rot)
	{
		var leafColor=[d.olor("#24adaf"),d.color("#123456"),d.color("#777777"),d.color("#00ff00"),d.color("#00cc00")];
		d.fill(d.random(leafColor));
		d.push();
		d.translate(x,y);
		d.rotate(rot);
		d.arc(0,-size/4-0.5,size,size,d.PI/6,d.PI*5/6,d.CHORD);
		d.arc(0,size/4+0.5,size,size,-d.PI*5/6,-d.PI/6,d.CHORD);
		d.pop();
	}
};
new p5(bgSketch,"bg");

/*
var vmin;
function setup() {
  createCanvas(700, 400);
	vmin=min(width,height);
	noLoop();
}

function draw() {
  background(255);
	var size=vmin/4;
	var delta=vmin/12;
	var hNo=round(width/40);
	var vNo=round(height/40);
	var j;
	for(j=0;j<=hNo;j++)
	{
		leaf((j+0.5)*width/hNo,0,size+random(-delta,delta),PI/2+random(-0.5,0.5));
		leaf((j+0.5)*width/hNo,height,size+random(-delta,delta),PI/2+random(-0.5,0.5));
	}
	for(j=0;j<=vNo;j++)
	{
		leaf(0,(j+0.5)*height/vNo,size+random(-delta,delta),random(-0.5,0.5));
		leaf(width,(j+0.5)*height/vNo,size+random(-delta,delta),random(-0.5,0.5));
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
