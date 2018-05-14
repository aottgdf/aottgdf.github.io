var name = "Guest";
var botname = "Amadeus";
var input = document.getElementById('input');
var chat = document.getElementById('chat');
var msg = document.getElementById('msg');
input.addEventListener("keypress", function(e){ Sent(e);});
function Sent(e){
	if(13 == e.keyCode)
	{
		if (input.value == "") { return false }
		Write(input.value);
	}
    
}

function Chat(){
    Down();
}

var add, text;
function Write(line){
    setTimeout(function(){input.value = "";Down();},100);
    line = Command(line);
    if (line == "") { return false; }
    text = line;
    add = document.createElement('DIV');
    add.setAttribute("id", "msg");
    add.innerHTML = "<name>" + name + "</name>" + text;
    chat.appendChild(add);
    Bot(text);
}

function Bot(str){
    if (str.toUpperCase() == "HI" || str.toUpperCase() == "HELLO" || str.toUpperCase() == "HEY")
    {
        BotWrite("Hi~");
    }
    else if (str.toUpperCase() == "YOU")
    {
        BotWrite("Yes?");
    }
    else if (str == "ดี" || str == "ดีครับ" || str == "ดีคับ")
    {
        BotWrite("ดีค่ะ");
    }
    else if (str == "สวัสดี" || str == "สวัสดีครับ" || str == "สวัสดีคับ")
    {
        BotWrite("สวัสดีค่ะ");
    }
    else 
    {
		if (str.toUpperCase().indexOf("AMADEUS") >= 0)
		{
			BotWrite("มีอะไรให้รับใช้คะ?");
			//BotWrite("ขออภัยค่ะ ไม่เข้าใจที่พูดค่ะ");
		}
    }
}

function BotWrite(line){
    text = line;
    add = document.createElement('DIV');
    add.setAttribute("id", "msg");
    add.innerHTML = "<name>" + botname + "</name>" + text;
    chat.appendChild(add);
}

var msgElms;

function Command(str)
{
	var nocmd = str.indexOf("/") >= 0;
    if (str == "/clean")
    {
		msgElms = document.querySelectorAll("[id='msg']");
        for (var i = 0; i < msgElms.length; i++)
        {
            msgElms[i].remove();
        }
        return "";
    }
    if (str == "/say")
    {
        for (var i = 0; i < 10; i++)
        {
            BotWrite("Nani!");
        }
        return "";
    }
	if (nocmd)
	{ 
		return "" 
	}
    return str;
}

function Down(){
}
var localName = localStorage.getItem('myname');
window.onload = function() {
	if (localName != null)
	{
		name = localName;
	}
}