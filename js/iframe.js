  var themecolor = document.getElementsByName('theme-color')[0];
  var mscolor = document.getElementsByName('msapplication-TileColor')[0];
  var frame = document.getElementById('i-frame');
  var myFrame = document.getElementById('myFrame');
  var namei = document.getElementById('name-i');
  var closei = document.getElementsByClassName('closei')[0];
  closei.onclick = function(){
  if (frame.style.backgroundColor != "white")
  {
      setOverflow(false);
  }
  frame.style.display = "none";
  frame.style.backgroundColor = "white";
  myFrame.src = "404.html";
  themecolor.setAttribute('content','#3399FF');
  mscolor.setAttribute('content','#3399Ff');
  }
  
  var linkR = document.getElementById('linkRank');
  var linkM = document.getElementById('linkMember');
  var linkS = document.getElementById('linkMessage');
  var linkT = document.getElementById('linkTimeline');
  
  function setOverflow(bool){
      if (bool)
      {
          document.body.style.overflow = "hidden";
      }
      else
      {
          document.body.style.overflow = "visible";
      }
      
  }
  var linkRules = document.getElementById('linkRulesM');
  
  linkRules.onclick = function (){
  frame.style.display = "block";
  myFrame.src = "rules.html";
  namei.innerHTML = "Rules";
  frame.style.backgroundColor = "#cc181e";
  themecolor.setAttribute('content','#cc181e');
  mscolor.setAttribute('content','#cc181e');
  setOverflow(true);
  }
  
  var linkEventM = document.getElementById('linkEventM');
  
  linkEventM.onclick = function (){
  frame.style.display = "block";
  myFrame.src = "404.html";
  namei.innerHTML = "Event";
  frame.style.backgroundColor = "#ff4400";
  themecolor.setAttribute('content','#ff4400');
  mscolor.setAttribute('content','#ff4400');
  setOverflow(true);
  }
  
  var linkEventPM = document.getElementById('linkEventPM');
  
  linkEventPM.onclick = function (){
  frame.style.display = "block";
  myFrame.src = "404.html";
  namei.innerHTML = "Event Special";
  frame.style.backgroundColor = "orange";
  themecolor.setAttribute('content','orange');
  mscolor.setAttribute('content','orange');
  setOverflow(true);
  }
  
  var linkLeaderM = document.getElementById('linkRankM');
  
  linkLeaderM.onclick = function (){
  frame.style.display = "block";
  myFrame.src = "404.html";
  namei.innerHTML = "Leaderboard";
  frame.style.backgroundColor = "green";
  themecolor.setAttribute('content','green');
  mscolor.setAttribute('content','green');
  setOverflow(true);
  }
  
  var linkUnitM = document.getElementById('linkUnitM');
  
  linkUnitM.onclick = function (){
  frame.style.display = "block";
  myFrame.src = "404.html";
  namei.innerHTML = "Guild Tags";
  frame.style.backgroundColor = "#066a5f";
  themecolor.setAttribute('content','#066a5f');
  mscolor.setAttribute('content','#066a5f');
  setOverflow(true);
  }
  
  var linkQandAM = document.getElementById('linkQandAM');
  
  linkQandAM.onclick = function (){
  frame.style.display = "block";
  myFrame.src = "404.html";
  namei.innerHTML = "Q&A";
  frame.style.backgroundColor = "#3a5795";
  themecolor.setAttribute('content','#3a5795');
  mscolor.setAttribute('content','#3a5795');
  setOverflow(true);
  }
  
  var linkPageM = document.getElementById('linkPageM');
  
  linkPageM.onclick = function (){
  frame.style.display = "block";
  myFrame.src = "https://www.facebook.com/aottgdf";
  namei.innerHTML = "Fanpage";
  frame.style.backgroundColor = "#a830d3";
  themecolor.setAttribute('content','#a830d3');
  mscolor.setAttribute('content','#a830d3');
  setOverflow(true);
  }
  
  var linkModM = document.getElementById('btnModM');
  
  linkModM.onclick = function (){
  frame.style.display = "block";
  myFrame.src = "mod.html";
  namei.innerHTML = "Mod";
  frame.style.backgroundColor = "#3399ff";
  themecolor.setAttribute('content','#3399ff');
  mscolor.setAttribute('content','#3399ff');
  setOverflow(true);
  }
  
  /* Menu */
  linkR.onclick = function (){
      frame.style.display = "block";
      myFrame.src = "rank.html";
      namei.innerHTML = "Rank";
      themecolor.setAttribute('content','#ffffff');
      mscolor.setAttribute('content','#ffffff');
  }
  linkM.onclick = function (){
  frame.style.display = "block";
  myFrame.src = "member.html";
  namei.innerHTML = "Member";
  themecolor.setAttribute('content','#ffffff');
  mscolor.setAttribute('content','#ffffff');
  
  }
  linkS.onclick = function (){
  frame.style.display = "block";
  myFrame.src = "message.html";
  namei.innerHTML = "Message";
  themecolor.setAttribute('content','#ffffff');
  mscolor.setAttribute('content','#ffffff');
  
  }
  linkT.onclick = function (){
  frame.style.display = "block";
  myFrame.src = "timeline.html";
  namei.innerHTML = "Timeline";
  themecolor.setAttribute('content','#ffffff');
  mscolor.setAttribute('content','#ffffff');
  
  }
  
  
  