    var href = localStorage.getItem('href');
    console.log(href);
    if (href != undefined) {
        document.getElementById('mycss').setAttribute('href', href);
    }


function switchStyle() {  // fonction qui change de feuille de style 
    var style = document.getElementById('mycss');
    var href = style.getAttribute('href');

    if (href == 'vetementstyle.css') {
        style.setAttribute('href', 'sombre.css');
        localStorage.setItem('href', 'sombre.css');
        document.getElementById('style').innerHTML = "Mode Jour";
    }
    else {
        style.setAttribute('href', 'vetementstyle.css');
        localStorage.setItem('href', 'vetementstyle.css');
        document.getElementById('style').innerHTML = "Mode nuit";
    }
    console.log(localStorage.getItem('href'));

}

