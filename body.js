//;SSdocument.getElementById("text1").style.fontSize = '17px';

var iron = 0;

function box1on(){
    document.getElementById("box").style.display = 'block';
}
function box1off(){
    document.getElementById("box").style.display = 'none';
}
function irons() {
    iron += 1
    document.getElementById("text").innerHTML = iron;
}