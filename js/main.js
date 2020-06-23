
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: '&#9616;',
    delay: 'Natural'
});

typewriter.typeString("<strong>Usługi informatyczne.<strong>")
    .pauseFor(3000)
    .deleteAll()
    .typeString('Developer .NET')
    .pauseFor(2500)
    .deleteChars(19)
    .typeString('Aplikacje webowe w technologii .NET')
    .pauseFor(3500)
    .deleteChars(25)
    .typeString('desktopowe w technologii .NET')
    .pauseFor(3500)
    .deleteAll()
    .typeString('Strony WWW na zlecenie')
    .pauseFor(2500)    
    .deleteAll()
    .typeString('Konsultacje oraz serwis komputerowy')
    .pauseFor(3500)  
    .start();


$(document).ready(function() {

	var getMax = function() {
		return $(document).height() - $(window).height();
	}

	var getValue = function() {
		return $(window).scrollTop();
	}

	if ('max' in document.createElement('progress')) {
		var progressBar = $('progress');
		
		progressBar.attr({
			max: getMax()
		});

		$(document).on('scroll', function() {
			progressBar.attr({
				value: getValue()
			});
		});

		$(window).resize(function() {
			
			progressBar.attr({
				max: getMax(),
				value: getValue()
			});
		});

	} else {

		var progressBar = $('.progress-bar'),
			max = getMax(),
			value, width;

		var getWidth = function() {
			
			value = getValue();
			width = (value / max) * 100;
			width = width + '%';
			return width;
		}

		var setWidth = function() {
			progressBar.css({
				width: getWidth()
			});
		}

		$(document).on('scroll', setWidth);
		$(window).on('resize', function() {
			
			max = getMax();
			setWidth();
		});
	}
});