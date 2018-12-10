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
