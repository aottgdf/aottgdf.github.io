
function timer()
{
document.getElementById('time').innerHTML = "" + (new Date).toTimeString().slice(0,8) + " " + (new Date).toDateString();
document.getElementById('timer').innerHTML = "" + (new Date).toTimeString().slice(0,8) + "";
document.getElementById('dateS').innerHTML = "" + (new Date).toDateString() + "";
setTimeout(timer,500);
}
timer();
window.onscroll = function(){scrolling()};
function scrolling(){
      var header = document.getElementsByTagName('header')[0];
      var time = document.getElementById('time');
      if (document.body.scrollTop > 144 || document.documentElement.scrollTop > 144)
      {
          time.style.display = "block";
          header.style.position = "fixed";
          header.style.height = "56px";
          header.style.backgroundColor = "rgba(0,0,0,1)";
      }
      else
      {
          time.style.display = "none";
          header.style.position = "absolute";
          header.style.height = "200px";
          header.style.backgroundColor = "rgba(0,0,0,0.5)";
      }
}
var modal = document.getElementById('myModal');
var img = document.getElementById('img01');
var elms = document.querySelectorAll("[id='imgI']");

for(var i = 0; i < elms.length; i++) {
  elms[i].onclick = function(){
    modal.style.display = "block";
    img.src = this.src;
    document.body.style.overflow = "hidden";
}
}
document.getElementsByClassName('close')[0].onclick = function(){
    modal.style.display = "none";
    document.body.style.overflow = "visible";
}