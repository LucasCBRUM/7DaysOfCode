var firstStep = '';

let front = '<br><a href="http://www.google.com"><div id="Front"><img src="https://www.kindpng.com/picc/m/299-2994011_front-end-development-logos-hd-png-download.png">Front - end</div></a>'
'<a href="http://www.google.com"><div id="Back"><img src="https://img.freepik.com/premium-vector/back-end-word-concepts-banner-database-programming-web-applications-development-presentation-website-isolated-lettering-typography-idea-with-linear-icons-vector-outline-illustration_106317-8775.jpg?w=740"></div></a>';

let back = '<br><p>PUTS</p><br><a href="http://www.google.com"><div id="Front"><img src="https://www.kindpng.com/picc/m/299-2994011_front-end-development-logos-hd-png-download.png">Front - end</div></a>'
'<a href="http://www.google.com"><div id="Back"><img src="https://img.freepik.com/premium-vector/back-end-word-concepts-banner-database-programming-web-applications-development-presentation-website-isolated-lettering-typography-idea-with-linear-icons-vector-outline-illustration_106317-8775.jpg?w=740"></div></a>';


function frontStep() {
firstStep = 'front';
document.getElementById('FirstStep').innerHTML = '';
if (firstStep == 'front') {
    document.getElementById('FirstStep').innerHTML = front;
    console.log(firstStep);
}
}

function backStep() {
firstStep = 'back';
document.getElementById('FirstStep').innerHTML = '';
if (firstStep == 'back') {
    document.getElementById('FirstStep').innerHTML = back;
    console.log(firstStep);
}
}