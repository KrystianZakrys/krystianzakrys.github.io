
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
    cursor: '&#9608;',
    delay: 'Natural'
});

typewriter.typeString('Developer .NET')
    .pauseFor(2500)
    .deleteChars(19)
    .typeString('Aplikacje webowe')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Strony WWW')
    .pauseFor(2500)    
    .deleteAll()
    .typeString('Konsultacje oraz serwis komputerowy')
    .pauseFor(2500)  
    .start();