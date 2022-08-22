var firstStep = '';

let front = '<br><a href="http://www.google.com"><div id="Front"><img src="https://www.kindpng.com/picc/m/299-2994011_front-end-development-logos-hd-png-download.png">Front - end</div></a>'
'<a href="http://www.google.com"><div id="Back"><img src="https://img.freepik.com/premium-vector/back-end-word-concepts-banner-database-programming-web-applications-development-presentation-website-isolated-lettering-typography-idea-with-linear-icons-vector-outline-illustration_106317-8775.jpg?w=740"></div></a>';

let back = `<h1>Que incrivel, Back-end é show!</h1><h1>Dentro do Back-end entre essas duas linguagens, qual você escolheria?</h1><section class="flex-container"><button value="front" onclick="BackTwoStep()"id="Front"><div><img src="https://static.cloud-boxloja.com/lojas/wyfyg/produtos/e3a5cbf1-f38e-4b2d-9263-d2216fd778f0.jpg"></div></button>
<button><div id="Back"><img src="https://mpng.subpng.com/20181122/krs/kisspng-java-programming-language-selenium-computer-softwa-july-2-16-halab-4-dev-5bf78387a7bb41.028192901542947719687.jpg" style="width:40rem; height:40rem;"></div></button></section>`;


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