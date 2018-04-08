
document.addEventListener("DOMContentLoaded", function() {
	//1
document.getElementById("log11").addEventListener("mouseover", function(){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " chakung"; 
}); 
 
document.getElementById("log11").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
	//2
document.getElementById("log12").addEventListener("mouseover", function(dgaung){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " pein"; 
}); 
 
document.getElementById("log12").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
	//3
document.getElementById("log13").addEventListener("mouseover", function(){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " vale"; 
}); 
 
document.getElementById("log13").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
	//4
document.getElementById("log14").addEventListener("mouseover", function(){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " iota"; 
}); 
 
document.getElementById("log14").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
	//5
document.getElementById("log15").addEventListener("mouseover", function(){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " kuma"; 
}); 
 
document.getElementById("log15").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
	//6
document.getElementById("log16").addEventListener("mouseover", function(){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " man"; 
}); 
 
document.getElementById("log16").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
	//1
document.getElementById("log21").addEventListener("mouseover", function(){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " blacky"; 
}); 
 
document.getElementById("log21").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
	//2
document.getElementById("log22").addEventListener("mouseover", function(){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " mad"; 
}); 
 
document.getElementById("log22").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
 
document.getElementById("log23").addEventListener("mouseover", function(){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " mieti"; 
}); 
 
document.getElementById("log23").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
 
document.getElementById("log24").addEventListener("mouseover", function(){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " rat"; 
}); 
 
document.getElementById("log24").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
 
document.getElementById("log25").addEventListener("mouseover", function(){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " cactus"; 
}); 
 
document.getElementById("log25").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
 
document.getElementById("log26").addEventListener("mouseover", function(){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " emperor"; 
}); 
 
document.getElementById("log26").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
 
 
document.getElementById("log27").addEventListener("mouseover", function(){ 
 var d = document.getElementById("interno"); 
d.className = d.className + " dark"; 
}); 
 
document.getElementById("log27").addEventListener("mouseout", function(){ 
var d = document.getElementById("interno"); 
d.className = "interno"; 
}); 
 
var x = document.querySelectorAll(".boxx1 img"); 
var i; 
for (i = 0; i < x.length; i++) { 
x[i].addEventListener("mouseout", function(){ 
var d = document.getElementById("coprente"); 
d.style.display = "block"; 
}); 
 x[i].addEventListener("mouseout", function(){ 
setTimeout(function(){document.getElementById("coprente").style.display = "none"},630); 
}); 
 
}; 
}); 