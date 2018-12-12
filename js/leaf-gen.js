var bgSketch=function(d)
{
	d.hArr=[];
	d.vArr=[];
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
		var hNo=d.round(d.width/vmin*10);
		var vNo=d.round(d.height/vmin*10);
		console.log(hNo, vNo, d.width/hNo, d.height/vNo);
		var i;
		for(i=0;i<=hNo;i++)
		{
			d.makeLeaf(i*2,0);
			d.leaf((i+0.5)*d.width/hNo,0,size+delta*d.hArr[i*2][0],d.PI/2+d.hArr[i*2][1], d.hArr[i*2][2]);
			d.makeLeaf(i*2+1,0);
			d.leaf((i+0.5)*d.width/hNo,d.height,size+delta*d.hArr[i*2+1][0],d.PI/2+d.hArr[i*2+1][1], d.hArr[i*2+1][2]);
		}
		for(i=0;i<=vNo;i++)
		{
			d.makeLeaf(i*2,1);
			d.leaf(0,(i+0.5)*d.height/vNo,size+delta*d.vArr[i*2][0],d.vArr[i*2][1], d.vArr[i*2][2]);
			d.makeLeaf(i*2+1,1);
			d.leaf(d.width,(i+0.5)*d.height/vNo,size+delta*d.vArr[i*2+1][0],d.vArr[i*2+1][1], d.vArr[i*2+1][2]);
		}
	};
	d.windowResized=function()
	{
		d.resizeCanvas(window.innerWidth,window.innerHeight);
		d.redraw();
	}
	d.makeLeaf=function(i, hv)
	{
		//hv:0-horizontal  1-vertical
		var arr;
		if(hv==0) arr=d.hArr;
		else  arr=d.vArr;
		var leafColor=[d.color("#86bc33"),d.color("#04a64a"),d.color("#008937"),d.color("#6abfa6"),d.color("#008f66")];
		if(arr[i]==undefined)
		{
			arr[i]=[d.random(-1,1), d.random(-0.5,0.5)), d.random(leafColor)];
		}
	}
	d.leaf=function(x, y, size, rot, col)
	{
		d.fill(col);
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
