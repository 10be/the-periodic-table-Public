//;SSdocument.getElementById("text1").style.fontSize = '17px';
function box1on(){
    document.getElementById("box").style.display = 'block';
}
function box1off(){
    document.getElementById("box").style.display = 'none';
}
function banana(){
    document.getElementById("text").innerHTML = '포타슘';
    document.getElementById("queen").style.display = 'none';
    document.getElementById("nice").style.display = 'block';
    setTimeout(() => {
        document.getElementById("text").innerHTML = '크리스 바나나 먹어';
        document.getElementById("queen").style.display = 'block';
        document.getElementById("nice").style.display = 'none';
    }, 2000);
}