function showLeft() {
    document.getElementById('cat').style.width = '80%';
    document.getElementById('dog').style.width = '20%';
    document.getElementById('catImg').style.width = '75%';
    document.getElementById('dogImg').style.width = '0%';
}

function showBoth() {
    document.getElementById('cat').style.width = '50%';
    document.getElementById('dog').style.width = '50%';
    document.getElementById('dogImg').style.width = '100%';
    document.getElementById('catImg').style.width = '100%';
}

function showRight() {
    document.getElementById('cat').style.width = '20%';
    document.getElementById('dog').style.width = '80%';
    document.getElementById('dogImg').style.width = '75%';
    document.getElementById('catImg').style.width = '0%';
}