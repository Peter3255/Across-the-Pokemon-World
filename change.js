var links = document.getElementsByClassName('changeToYellow');

function changeColor(e) {
    e.target.style.color = e.target.style.color ? null : 'yellow';
}

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', changeColor);
}