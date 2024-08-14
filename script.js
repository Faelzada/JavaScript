window.alert("Opa Jairão, bão?");
var msg = window.document.getElementById('msg');
var img = window.document.getElementById('foto');
var data = new Date();
var hora = data.getHours();

if (hora >= 7 && hora < 12) {
    img.src = '3292e2078a6a7d8bce24d19361dd413b.jpg';
    msg.innerHTML = 'Bom dia!';
} else if (hora >= 12 && hora < 18) {
    img.src = 'tarde.jpeg';
    msg.innerHTML = 'Boa tarde!';
} else {
    img.src = 'noite.jpg';
    msg.innerHTML = 'Boa noite!';
}
