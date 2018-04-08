/*                           Field                           */

var myModal = document.getElementById('myModal');
var img01 = document.getElementById("img01");
var caption = document.getElementById("caption");

var menuElement = document.querySelector('.menu');
var menuOverlayElement = document.querySelector('.menu__overlay');

var IndexGacha = document.getElementById("IndexGacha");
var BoxGacha = document.getElementById("BoxGacha");
var myGachaBox = document.getElementById("myGachaBox");
var myGachaBox10 = document.getElementById("myGachaBox10");
var gachaimg = document.getElementById("gachaimg");
var GUIgachabox = document.getElementById('GUIgachabox');

var Shop = document.getElementById('Shop');
var GUIshop = document.getElementById('GUIshop');
var Inventory = document.getElementById('Inventory');
var GUIinventory = document.getElementById('GUIinventory');

var myImage = ["./images/gacha/ulr.jpg"];

/*                           Method                           */
/* Icon Collage */

/* Coin */
function AddCoin(coins)
{
	mycoin.value += coins;
	localStorage.setItem("mycoin", mycoin.value);
}
function UseCoin(coins)
{
	mycoin.value -= coins;
	localStorage.setItem("mycoin", mycoin.value);
}


/* Open / Close */

function CloseModal()
{
    myModal.style.display = "none";
}

function hideMenu() 
{
	menuElement.style.transform = "translateX(-110%)";
	menuElement.classList.remove('menu--show');
	menuOverlayElement.classList.remove('menu__overlay--show');
	menuElement.addEventListener('transitionend', onTransitionEnd, false);
}

function DoRotateY180(){
gachaimg.style.transform = "rotateY(180deg)";
}

function DoRotateY0(){
gachaimg.style.transform = "rotateY(0deg)";
}

/*-------------------------------------localStorage-------------------------------------*/
var localName = localStorage.getItem('myname');
var localGuild = localStorage.getItem('myguild');
var localProfile = localStorage.getItem('myprofile');
/*-------------------------------------localStorage-------------------------------------*/
var myname = document.getElementById('name');
var myguild = document.getElementById('guild');
var myname2 = document.getElementById('myname');
var myguild2 = document.getElementById('myguild');
var myprofile = document.getElementById('myprofile');
var myprofile2 = document.getElementById('myprofile2');
var myprofile3 = document.getElementById('myprofile3');
/*--------------------------------------------------------------------Event--------------------------------------------------------------------*/
window.onload = function() {
	if (localName != null)
	{
		myname.innerHTML = localName;
		myname2.innerHTML = localName;
	}
	if (localGuild != null)
	{
		if (localGuild == "1")
		{
			myguild.innerHTML = "<font color=\"#3399ff\">D</font><font color=\"#43a1ff\">r</font><font color=\"#52a9ff\">a</font><font color=\"#62b1ff\">g</font><font color=\"#72b8ff\">o</font><font color=\"#81c0ff\">n</font><font color=\"#91c8ff\">'</font><font color=\"#a1d0ff\">s</font><font color=\"#b1d8ff\">F</font><font color=\"#c0e0ff\">a</font><font color=\"#d0e7ff\">M</font><font color=\"#e0efff\">i</font><font color=\"#eff7ff\">L</font><font color=\"#ffffff\">y</font>";
			myguild2.innerHTML = "<font color=\"#3399ff\">D</font><font color=\"#43a1ff\">r</font><font color=\"#52a9ff\">a</font><font color=\"#62b1ff\">g</font><font color=\"#72b8ff\">o</font><font color=\"#81c0ff\">n</font><font color=\"#91c8ff\">'</font><font color=\"#a1d0ff\">s</font><font color=\"#b1d8ff\">F</font><font color=\"#c0e0ff\">a</font><font color=\"#d0e7ff\">M</font><font color=\"#e0efff\">i</font><font color=\"#eff7ff\">L</font><font color=\"#ffffff\">y</font>";
		}
		else if (localGuild == "2")
		{
			myguild.innerHTML = "<font color=\"#818181\">D</font><font color=\"#777777\">r</font><font color=\"#6d6d6d\">a</font><font color=\"#636363\">g</font><font color=\"#595959\">o</font><font color=\"#4f4f4f\">n</font><font color=\"#454545\">'</font><font color=\"#3c3c3c\">s</font><font color=\"#323232\">F</font><font color=\"#282828\">a</font><font color=\"#1e1e1e\">M</font><font color=\"#141414\">i</font><font color=\"#0a0a0a\">L</font><font color=\"#000000\">y</font>";
			myguild2.innerHTML = "<font color=\"#818181\">D</font><font color=\"#777777\">r</font><font color=\"#6d6d6d\">a</font><font color=\"#636363\">g</font><font color=\"#595959\">o</font><font color=\"#4f4f4f\">n</font><font color=\"#454545\">'</font><font color=\"#3c3c3c\">s</font><font color=\"#323232\">F</font><font color=\"#282828\">a</font><font color=\"#1e1e1e\">M</font><font color=\"#141414\">i</font><font color=\"#0a0a0a\">L</font><font color=\"#000000\">y</font>";
		}
		else if (localGuild == "3")
		{
			myguild.innerHTML = "<font color=\"#ff0000\">D</font><font color=\"#eb0000\">r</font><font color=\"#d80000\">a</font><font color=\"#c40000\">g</font><font color=\"#b10000\">o</font><font color=\"#9d0000\">n</font><font color=\"#890000\">'</font><font color=\"#760000\">s</font><font color=\"#620000\">F</font><font color=\"#4e0000\">a</font><font color=\"#3b0000\">M</font><font color=\"#270000\">i</font><font color=\"#140000\">L</font><font color=\"#000000\">y</font>";
			myguild2.innerHTML = "<font color=\"#ff0000\">D</font><font color=\"#eb0000\">r</font><font color=\"#d80000\">a</font><font color=\"#c40000\">g</font><font color=\"#b10000\">o</font><font color=\"#9d0000\">n</font><font color=\"#890000\">'</font><font color=\"#760000\">s</font><font color=\"#620000\">F</font><font color=\"#4e0000\">a</font><font color=\"#3b0000\">M</font><font color=\"#270000\">i</font><font color=\"#140000\">L</font><font color=\"#000000\">y</font>";
		}
		else
		{
			myguild.innerHTML = "Dragon'sFaMiLy";
			myguild2.innerHTML = "Dragon'sFaMiLy";
		}
	}
	if (localProfile != null)
	{
		myprofile.src = localProfile;
		myprofile2.src = localProfile;
		myprofile3.src = localProfile;
	}
	else
	{
		myprofile.src = "./images/Chakung.png";
		myprofile2.src = "./images/Chakung.png";
		myprofile3.src = "./images/Chakung.png";
	}
	
}


window.onclick = function(event){
    if (event.target == myModal) {
		CloseModal();
    }
}

document.getElementsByClassName("close")[0].onclick = function() { 
	CloseModal();
}

var MeditProfile = document.getElementById('MeditProfile');
var MeditName = document.getElementById('MeditName');
var MeditGuild = document.getElementById('MeditGuild');


document.getElementById('btnprofile').onclick = function() { 
	document.getElementById('ModalM').style.display = "block";
	document.getElementById('MeditProfile').style.display = "block";
	document.getElementById('MeditName').style.display = "none";
	document.getElementById('MeditGuild').style.display = "none";
}
document.getElementById('btnprofilename').onclick = function() { 
	document.getElementById('ModalM').style.display = "block";
	document.getElementById('MeditProfile').style.display = "none";
	document.getElementById('MeditName').style.display = "block";
	document.getElementById('MeditGuild').style.display = "none";
}
document.getElementById('btnprofileguild').onclick = function() { 
	document.getElementById('ModalM').style.display = "block";
	document.getElementById('MeditProfile').style.display = "none";
	document.getElementById('MeditName').style.display = "none";
	document.getElementById('MeditGuild').style.display = "block";
}

document.getElementsByClassName("closeM")[0].onclick = function() { 
	document.getElementById('ModalM').style.display = "none";
}

var Staff = document.getElementsByClassName("staff")[0];
var Staff1 = document.getElementsByClassName("staff")[1];
var Staff2 = document.getElementsByClassName("staff")[2];
var Staff3 = document.getElementsByClassName("staff")[3];
var Staff4 = document.getElementsByClassName("staff")[4];
var Staff5 = document.getElementsByClassName("staff")[5];
var Staff6 = document.getElementsByClassName("staff")[6];
var Staff7 = document.getElementsByClassName("staff")[7];
var Staff8 = document.getElementsByClassName("staff")[8];
var Staff9 = document.getElementsByClassName("staff")[9];
var Staff10 = document.getElementsByClassName("staff")[10];
var Staff11 = document.getElementsByClassName("staff")[11];
var Staff12 = document.getElementsByClassName("staff")[12];

Staff.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
Staff1.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
Staff2.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
Staff3.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
Staff4.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
Staff5.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
Staff6.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
Staff7.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
Staff8.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
Staff9.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
Staff10.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
Staff11.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
Staff12.onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
}
document.getElementsByClassName("avatar")[0].onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
	caption.innerHTML = this.alt;
}
document.getElementsByClassName("avatar")[1].onclick = function() { 
	myModal.style.display = "block";
	img01.src = this.src;
	caption.innerHTML = this.src;
}

document.getElementById("home").onclick = function() {
	document.getElementById("home").setAttribute('class', 'active');
	document.getElementById("quest").setAttribute('class', '');
	document.getElementById("shop").setAttribute('class', '');
	document.getElementById("edit").setAttribute('class', '');
	
	document.getElementById("homeblock").style.display = "block";
	document.getElementById("questblock").style.display = "none";
	document.getElementById("shopblock").style.display = "none";
	document.getElementById("editblock").style.display = "none";
}
document.getElementById("home1").onclick = function() {
	document.getElementById("home").setAttribute('class', 'active');
	document.getElementById("quest").setAttribute('class', '');
	document.getElementById("shop").setAttribute('class', '');
	document.getElementById("edit").setAttribute('class', '');
	
	document.getElementById("homeblock").style.display = "block";
	document.getElementById("questblock").style.display = "none";
	document.getElementById("shopblock").style.display = "none";
	document.getElementById("editblock").style.display = "none";
}
document.getElementById("home2").onclick = function() {
	document.getElementById("home").setAttribute('class', 'active');
	document.getElementById("quest").setAttribute('class', '');
	document.getElementById("shop").setAttribute('class', '');
	document.getElementById("edit").setAttribute('class', '');
	
	document.getElementById("homeblock").style.display = "block";
	document.getElementById("questblock").style.display = "none";
	document.getElementById("shopblock").style.display = "none";
	document.getElementById("editblock").style.display = "none";
}
document.getElementById("home3").onclick = function() {
	document.getElementById("home").setAttribute('class', 'active');
	document.getElementById("quest").setAttribute('class', '');
	document.getElementById("shop").setAttribute('class', '');
	document.getElementById("edit").setAttribute('class', '');
	
	document.getElementById("homeblock").style.display = "block";
	document.getElementById("questblock").style.display = "none";
	document.getElementById("shopblock").style.display = "none";
	document.getElementById("editblock").style.display = "none";
}
document.getElementById("quest").onclick = function() {
	document.getElementById("home").setAttribute('class', '');
	document.getElementById("quest").setAttribute('class', 'active');
	document.getElementById("shop").setAttribute('class', '');
	document.getElementById("edit").setAttribute('class', '');
	
	document.getElementById("homeblock").style.display = "none";
	document.getElementById("questblock").style.display = "block";
	document.getElementById("shopblock").style.display = "none";
	document.getElementById("editblock").style.display = "none";
}
document.getElementById("shop").onclick = function() {
	document.getElementById("home").setAttribute('class', '');
	document.getElementById("quest").setAttribute('class', '');
	document.getElementById("shop").setAttribute('class', 'active');
	document.getElementById("edit").setAttribute('class', '');
	
	document.getElementById("homeblock").style.display = "none";
	document.getElementById("questblock").style.display = "none";
	document.getElementById("shopblock").style.display = "block";
	document.getElementById("editblock").style.display = "none";
}
document.getElementById("edit").onclick = function() {
	document.getElementById("home").setAttribute('class', '');
	document.getElementById("quest").setAttribute('class', '');
	document.getElementById("shop").setAttribute('class', '');
	document.getElementById("edit").setAttribute('class', 'active');
	document.getElementById("active").style.display = "none";
	
	document.getElementById("homeblock").style.display = "none";
	document.getElementById("questblock").style.display = "none";
	document.getElementById("shopblock").style.display = "none";
	document.getElementById("editblock").style.display = "block";
}

//Modal
var btnSubProfile = document.getElementById("subprofile");
var btnSubName = document.getElementById("subname");
var btnSubGuild = document.getElementById("subguild");
var inpSetProfile = document.getElementById("setprofile");
var inpSetName = document.getElementById("setname");
var inpSetGuild = document.getElementById("setguild");

btnSubProfile.onclick = function() {
	if (inpSetProfile.value == "")
	{
		myprofile.src = "./images/Chakung.png";
		myprofile2.src = "./images/Chakung.png";
		myprofile3.src = "./images/Chakung.png";
		localStorage.setItem("myprofile","./images/Chakung.png");
		toast("Reset profile.");
	}
	else
	{
		myprofile.src = inpSetProfile.value;
		myprofile2.src = inpSetProfile.value;
		myprofile3.src = inpSetProfile.value;
		localStorage.setItem("myprofile",inpSetProfile.value);
		toast("Change profile.");
	}
}

btnSubName.onclick = function() {
	if (inpSetName.value == "")
	{
		myname.innerHTML = "GUEST2018";
		myname2.innerHTML = "GUEST2018";
		localStorage.setItem("myname","GUEST2018");
		toast("Change name to " + "GUEST2018" + ".");
	}
	else
	{
		myname.innerHTML = inpSetName.value;
		myname2.innerHTML = inpSetName.value;
		localStorage.setItem("myname",inpSetName.value);
		toast("Change name to " + inpSetName.value + ".");
	}
}

btnSubGuild.onclick = function() {
	if (inpSetGuild.value == "")
	{
		myguild.innerHTML = "Dragon'sFaMiLy";
		myguild2.innerHTML = "Dragon'sFaMiLy";
		localStorage.setItem("myguild","0");
		toast("Change name to " + "Dragon'sFaMiLy" + ".");
	}
	else
	{
		myguild.innerHTML = setGuild(inpSetGuild.value);
		myguild2.innerHTML = setGuild(inpSetGuild.value);
		localStorage.setItem("myguild",inpSetGuild.value);
		toast("Change guild to " + inpSetGuild.value + ".");
	}
}

function setGuild(text)
{
	if (text == "1")
	{
		text = "<font color=\"#3399ff\">D</font><font color=\"#43a1ff\">r</font><font color=\"#52a9ff\">a</font><font color=\"#62b1ff\">g</font><font color=\"#72b8ff\">o</font><font color=\"#81c0ff\">n</font><font color=\"#91c8ff\">'</font><font color=\"#a1d0ff\">s</font><font color=\"#b1d8ff\">F</font><font color=\"#c0e0ff\">a</font><font color=\"#d0e7ff\">M</font><font color=\"#e0efff\">i</font><font color=\"#eff7ff\">L</font><font color=\"#ffffff\">y</font>";
	}
	else if (text == "2")
	{
		text = "<font color=\"#818181\">D</font><font color=\"#777777\">r</font><font color=\"#6d6d6d\">a</font><font color=\"#636363\">g</font><font color=\"#595959\">o</font><font color=\"#4f4f4f\">n</font><font color=\"#454545\">'</font><font color=\"#3c3c3c\">s</font><font color=\"#323232\">F</font><font color=\"#282828\">a</font><font color=\"#1e1e1e\">M</font><font color=\"#141414\">i</font><font color=\"#0a0a0a\">L</font><font color=\"#000000\">y</font>";
	}
	else if (text == "3")
	{
		text = "<font color=\"#ff0000\">D</font><font color=\"#eb0000\">r</font><font color=\"#d80000\">a</font><font color=\"#c40000\">g</font><font color=\"#b10000\">o</font><font color=\"#9d0000\">n</font><font color=\"#890000\">'</font><font color=\"#760000\">s</font><font color=\"#620000\">F</font><font color=\"#4e0000\">a</font><font color=\"#3b0000\">M</font><font color=\"#270000\">i</font><font color=\"#140000\">L</font><font color=\"#000000\">y</font>";
	}
	else
	{
		text = "Dragon'sFaMiLy";
	}
	return text;
}
//SLIDESHOW 
var slideJRadio = document.getElementById('slideshow').querySelectorAll('input[type="radio"]'); 
var eSlide = 1; 
var slideJTime; 

function setSlideTime(){ 
slideJTime = window.setInterval(function(){ if(eSlide === slideJRadio.length){ eSlide = 0; } slideJRadio[eSlide].checked = true; eSlide++;}, 4000); 
}

setSlideTime();

document.getElementById('slideshow').onmouseover = function(){
window.clearInterval(slideJTime);
}

document.getElementById('slideshow').onmouseout = setSlideTime;

for(var i = 0; i < slideJRadio.length; i++){
slideJRadio[i].onclick=function(){ eSlide = this.id.match(/[0-9]+/) - 1;}
}

//Copy

//div title = "textID"
//button class = "copy"
document.getElementsByClassName('copy')[0].onclick = function() {
	
	var copyText = document.getElementById("myInput");

	  /* Select the text field */
	copyText.select();

	  /* Copy the text inside the text field */
	document.execCommand("Copy");
}
