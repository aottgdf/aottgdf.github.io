var name = "Guest";
var botname = "Amadeus";
var input = document.getElementById('input');
var chat = document.getElementById('chat');
var msg = document.getElementById('msg');
input.addEventListener("keypress", Sent);
function Sent(){
    if (input.value == "" || input.value == " ") { return false }
    Write(input.value);
    
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
    if (str.toUpperCase() == "HI")
    {
        BotWrite("Hi~");
    }
    else if (str.toUpperCase() == "YOU")
    {
        BotWrite("Yes?");
    }
    else if (str == "ดี")
    {
        BotWrite("ดีค่ะ");
    }
    else if (str == "สวัสดี" || str == "สวัสดีครับ")
    {
        BotWrite("สวัสดีค่ะ");
    }
    else 
    {
        //BotWrite("ขออภัยค่ะ ไม่เข้าใจที่พูดค่ะ");
    }
}

function BotWrite(line){
    text = line;
    add = document.createElement('DIV');
    add.setAttribute("id", "msg");
    add.innerHTML = "<name>" + botname + "</name>" + text;
    chat.appendChild(add);
}

function Command(str)
{
    if (str == "/clean")
    {
        for (var i = 0; i < 1000*10; i++)
        {
            document.getElementById('msg').remove();
        }
        return "";
    }
    if (str == "/say")
    {
        for (var i = 0; i < 20; i++)
        {
            BotWrite("Nani!");
        }
        return "";
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