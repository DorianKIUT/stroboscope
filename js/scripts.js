var interval;
var isStarted = false;
var index = 0;

function startOrStop()
{
	//à l'initialisation, la valeur est à false, ce qui fait que quand on appuie sur le bouton Start/stop
	// la valeur devient true ( l'inverse ). Et au contraire quand le bouton est à "true", il passe à "false" quand on réapuie dessus.
	isStarted = !isStarted;
	//si le bouton est à true
	if (isStarted)
	{	
		//execution de la fonction color pendant 100ms
		interval = setInterval(color, 10;
	}
	//si le bouton est à false:
	else
	{
		//on supprime l'intervalle (réinitialise) et on remet blanche la couleur du background.
		clearInterval(interval);
		document.body.style.backgroundColor = 'white';
	}

}	
//fonction qui va définir la couleur de fond du body de la page html
function color()
{
	//la couleur de background est égale au résultat de l'execution de la fonction randomColor()
	document.body.style.backgroundColor = randomColor();
}

function randomColor()
{
	//on initialise un tableau contenant des couleurs
	var arrayColor = [
		'blue',
		'red',
		'green',
		'brown',
		'grey',
		'yellow',
		'purple'

	];
	//On parcourt le tableau à l'aide d'un index et au modulo de sa taille ( on crée une boucle infinie )
	var colorBody = arrayColor[index  % arrayColor.length];
	//on incrémente l'index
	index++;
	//on retourne la couleur correspondante
	return colorBody;
}