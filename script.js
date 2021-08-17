// =====================================for theme============================================

let theme = localStorage.getItem('theme')

if (theme == null) {
	setTheme('blue')
} else {
	setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i = 0; themeDots.length > i; i++) {
	themeDots[i].addEventListener('click', function () {
		let mode = this.dataset.mode
		console.log('Option clicked:', mode)
		setTheme(mode)
	})
}

function setTheme(mode) {
	if (mode == 'light') {
		document.getElementById('theme-style').href = 'light.css'
	}

	if (mode == 'blue') {
		document.getElementById('theme-style').href = 'style.css'
	}

	if (mode == 'green') {
		document.getElementById('theme-style').href = 'green.css'
	}

	if (mode == 'purple') {
		document.getElementById('theme-style').href = 'purple.css'
	}

	localStorage.setItem('theme', mode)
}



// =====================================for blurry loading============================================



const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 30)



function blurring(){
	load++;

	if(load > 99){
		clearInterval(int);
	}

	loadText.innerText = ` ${load}% `;

	loadText.style.opacity = scale(load, 0, 100, 1, 0);

	bg.style.filter = `blur( ${ scale(load, 0, 100, 40, 0) }px )`

}


const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
