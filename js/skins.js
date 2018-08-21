var mod = document.getElementsByClassName('modal');
var button = document.getElementsByTagName('button');
button[0].onclick = function(){
	mod[0].style.display = "block";
	mod[0].setAttribute('class','modal cha-show');
	
}
window.onclick = function(event) {
    if (event.target != mod[0] && event.target != button[0])
    {
        mod[0].setAttribute('class','modal cha-hide');
        setTimeout(function(){ mod[0].style.display = "none";},500);
    }
}