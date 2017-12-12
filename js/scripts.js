var interval;
var isStarted = false;
var index = 0;

function startOrStop()
{
	isStarted = !isStarted;

	if (isStarted)
	{
		interval = setInterval(color, 100);
	}

	else
	{
		clearInterval(interval);
		document.body.style.backgroundColor = 'white';
	}

}	

function color()
{
	document.body.style.backgroundColor = randomColor();
}

function randomColor()
{
	var arrayColor = [
		'blue',
		'red',
		'green',
		'brown',
		'grey',
		'yellow',
		'purple'

	];
	var colorBody = arrayColor[index  % arrayColor.length];
	index++;
	return colorBody;
}