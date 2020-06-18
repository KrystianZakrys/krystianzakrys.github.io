
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