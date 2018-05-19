
var btn1 = document.getElementById('btn1');
var btn2 = document.getElementById('btn2');
var btn3 = document.getElementById('btn3');
var btn4 = document.getElementById('btn4');

var titlename = document.getElementById('name');
var guildtag = document.getElementById('guildtag');
var colorp = document.getElementById('colorp');

var fcolor = document.getElementById('color');
var fcolor2 = document.getElementById('color2');
var fcolor3 = document.getElementById('color3');
var count = document.getElementById('count');
var plus = document.getElementById('plus');
var minus = document.getElementById('minus');
var intfade = 1;
plus.onclick = function(){
   if (intfade < 3)
       intfade++;
       
   count.innerHTML = "Fade Color: " + intfade;
   if (intfade == 1)
   {
       fcolor2.style.display = "none";
       fcolor3.style.display = "none";
   }
   if (intfade == 2)
   {
       fcolor2.style.display = "block";
       fcolor3.style.display = "none";
   }
   if (intfade == 3)
   {
       fcolor2.style.display = "block";
       fcolor3.style.display = "block";
   }
}
minus.onclick = function(){
   if (intfade > 1)
       intfade--;
       
   count.innerHTML = "Fade Color: " + intfade;
   if (intfade == 1)
   {
       fcolor2.style.display = "none";
       fcolor3.style.display = "none";
   }
   if (intfade == 2)
   {
       fcolor2.style.display = "block";
       fcolor3.style.display = "none";
   }
   if (intfade == 3)
   {
       fcolor2.style.display = "block";
       fcolor3.style.display = "block";
   }
}
btn1.onclick = function(){
    Page(1);
    write("หน่วยสำรวจ","[3399FF]Dragon's[FFFFFF]FaMiLy","[3399ff]D[43a1ff]r[52a9ff]a[62b1ff]g[72b8ff]o[81c0ff]n[91c8ff]'[a1d0ff]s[b1d8ff]F[c0e0ff]a[d0e7ff]M[e0efff]i[eff7ff]L[ffffff]y");
    guild("<font color=\"#3399FF\">Dragon's</font><font color=\"#fff\">FaMiLy</font>","<font color=\"#3399ff\">D</font><font color=\"#43a1ff\">r</font><font color=\"#52a9ff\">a</font><font color=\"#62b1ff\">g</font><font color=\"#72b8ff\">o</font><font color=\"#81c0ff\">n</font><font color=\"#91c8ff\">'</font><font color=\"#a1d0ff\">s</font><font color=\"#b1d8ff\">F</font><font color=\"#c0e0ff\">a</font><font color=\"#d0e7ff\">M</font><font color=\"#e0efff\">i</font><font color=\"#eff7ff\">L</font><font color=\"#ffffff\">y</font>");
    content(1);
}

btn2.onclick = function(){
    Page(2);
    write("หน่วยรักษาการ","[818181]Dragon's[000000]FaMiLy","[818181]D[777777]r[6d6d6d]a[636363]g[595959]o[4f4f4f]n[454545]'[3c3c3c]s[323232]F[282828]a[1e1e1e]M[141414]i[0a0a0a]L[000000]y");
    guild("<font color=\"#818181\">Dragon's</font><font color=\"#000\">FaMiLy</font>","<font color=\"#818181\">D</font><font color=\"#777777\">r</font><font color=\"#6d6d6d\">a</font><font color=\"#636363\">g</font><font color=\"#595959\">o</font><font color=\"#4f4f4f\">n</font><font color=\"#454545\">'</font><font color=\"#3c3c3c\">s</font><font color=\"#323232\">F</font><font color=\"#282828\">a</font><font color=\"#1e1e1e\">M</font><font color=\"#141414\">i</font><font color=\"#0a0a0a\">L</font><font color=\"#000000\">y</font>");
    content(2);
}

btn3.onclick = function(){
    Page(3);
    write("หน่วยสารวัตร","[ff0000]Dragon's[000000]FaMiLy","[ff0000]D[eb0000]r[d80000]a[c40000]g[b10000]o[9d0000]n[890000]'[760000]s[620000]F[4e0000]a[3b0000]M[270000]i[140000]L[000000]y");
    guild("<font color=\"#f00\">Dragon's</font><font color=\"#000\">FaMiLy</font>","<font color=\"#ff0000\">D</font><font color=\"#eb0000\">r</font><font color=\"#d80000\">a</font><font color=\"#c40000\">g</font><font color=\"#b10000\">o</font><font color=\"#9d0000\">n</font><font color=\"#890000\">'</font><font color=\"#760000\">s</font><font color=\"#620000\">F</font><font color=\"#4e0000\">a</font><font color=\"#3b0000\">M</font><font color=\"#270000\">i</font><font color=\"#140000\">L</font><font color=\"#000000\">y</font>");
    content(3);
}

btn4.onclick = function(){
    Page(4);
    write("ทหารอาสา","");
}

function Page(num){
    if (num == 1)
    {
        guildtag.style.display = "block";
        colorp.style.display = "none";
    }
    if (num == 2)
    {
        guildtag.style.display = "block";
        colorp.style.display = "none";
    }
    if (num == 3)
    {
        guildtag.style.display = "block";
        colorp.style.display = "none";
    }
    if (num == 4)
    {
        guildtag.style.display = "none";
        colorp.style.display = "block";
    }
}

function content(text){
    if (text == 1)
    {
        document.getElementById('text1').style.display = "block";
        document.getElementById('text2').style.display = "none";
        document.getElementById('text3').style.display = "none";
    }
    if (text == 2)
    {
        document.getElementById('text1').style.display = "none";
        document.getElementById('text2').style.display = "block";
        document.getElementById('text3').style.display = "none";
    }
    if (text == 3)
    {
        document.getElementById('text1').style.display = "none";
        document.getElementById('text2').style.display = "none";
        document.getElementById('text3').style.display = "block";
    }
}

function guild(guildtag1,guildtag2){
    document.getElementsByTagName('g1')[0].innerHTML = guildtag1;
    document.getElementsByTagName('g2')[0].innerHTML = guildtag2;
}

function write(n,value,value2){
    titlename.innerHTML = n;
    guild1.value = value;
    guild2.value = value2;
}

var guild1 = document.getElementById('guild1');
var copy1 = document.getElementsByClassName('copy1')[0];

copy1.onclick = function(){
    var text = guild1;
    text.select();
    copy();
}
var guild2 = document.getElementById('guild2');
var copy2 = document.getElementsByClassName('copy2')[0];

copy2.onclick = function(){
    var text = guild2;
    text.select();
    copy();
}
var convert = document.getElementById('convert');
var copyfade = document.getElementById('copyfade');
copyfade.onclick = function(){
    var textarea = convert;
    textarea.select();
    copy();
}
var convert2 = document.getElementById('convert2');
var copyfade2 = document.getElementById('copyfade2');
copyfade2.onclick = function(){
    var textarea = convert2;
    textarea.select();
    copy();
}
function copy(){
    document.execCommand("Copy");
}

var result = document.getElementById('isguild');
var inputfade = document.getElementById('isinput');
function typing(value){
    result.innerHTML = value;
    Converter(value);
}

function color(c){
    result.style.color = c;
    typing(inputfade.value);
}

function Converter(str){
    if (intfade == 1)
    {
        convert.value = "[" + fcolor.value.replace("#","").toUpperCase() + "]" + str;
        convert2.value = "<color=" + fcolor.value.toUpperCase() + ">" + str + "</color>";
    }
    else if (intfade == 2)
    {
        var input = isinput;
        var inputlength = input.value.length;
        var startcolor = fcolor.value;
        var endcolor = fcolor2.value;
        var myStringArray = gradient(startcolor,endcolor,inputlength - 1);
        var arrayLength = myStringArray.length;
        var inner1 = "",inner2 = "",inner3 = "";
        for (var i = 0; i < arrayLength; i++) {
            inner1 += "[" + myStringArray[i].toUpperCase() + "]" + input.value[i];
        }
        for (var i = 0; i < arrayLength; i++) {
            inner2 += "<color=#" + myStringArray[i].toUpperCase() + ">" + input.value[i] + "</color>";
        }
        for (var i = 0; i < arrayLength; i++) {
            inner3 += "<font color=\"#" + myStringArray[i].toUpperCase() + "\">" + input.value[i] + "</font>";
        }
        convert.value = inner1;
        convert2.value = inner2;
        result.innerHTML = inner3;
    }
    else
    {
        convert.value = "null รออัพเดท";
        convert2.value = "null รออัพเดท";
        
    }
}

function gradient(startColor, endColor, steps) {
             var start = {
                     'Hex'   : startColor,
                     'R'     : parseInt(startColor.slice(1,3), 16),
                     'G'     : parseInt(startColor.slice(3,5), 16),
                     'B'     : parseInt(startColor.slice(5,7), 16)
             }
             var end = {
                     'Hex'   : endColor,
                     'R'     : parseInt(endColor.slice(1,3), 16),
                     'G'     : parseInt(endColor.slice(3,5), 16),
                     'B'     : parseInt(endColor.slice(5,7), 16)
             }
             diffR = end['R'] - start['R'];
             diffG = end['G'] - start['G'];
             diffB = end['B'] - start['B'];

             stepsHex  = new Array();
             stepsR    = new Array();
             stepsG    = new Array();
             stepsB    = new Array();

             for(var i = 0; i <= steps; i++) {
                     stepsR[i] = start['R'] + ((diffR / steps) * i);
                     stepsG[i] = start['G'] + ((diffG / steps) * i);
                     stepsB[i] = start['B'] + ((diffB / steps) * i);
                     stepsHex[i] = hex6digit(Math.round(stepsR[i]).toString(16)) + '' + hex6digit(Math.round(stepsG[i]).toString(16)) + '' + hex6digit(Math.round(stepsB[i]).toString(16));
             }
             return stepsHex;
}

function hex6digit(str) {
    var hex = str;
    hex = ( hex.length < 2 ) ? '0'+hex : hex;
    return hex;
}