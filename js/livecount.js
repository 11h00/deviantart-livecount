const CULER = new XMLHttpRequest();
var newcount1;
var newcount2;var oldcount = 0;var folo = 0;
var updatecount = 0
var milestonz
var wew = false
var sad = new Audio('lesonn/sad.mp3')
sad.loop = true
var useuname = "mathias777yt13k";
var prifle = "";
var pnz = false
var paused = false;
var methoddemerde = 0;var wownon = "";var high2;var sonHD = false;var putindemerde = false;
var oldpostcount = 0;
var oldfollwoing = null;
//sounds
var UPsound = new Audio("lesonn/up.mp3");
var DOWNsound = new Audio("lesonn/down.mp3");
var downfollowing = new Audio('lesonn/downfollowing.mp3');
var followingup = new Audio("lesonn/followingup.mp3");
var DOWNsoundfollo = new Audio("lesonn/followdown.mp3");
var postup = new Audio('lesonn/uppost.mp3');
var postdown = new Audio('lesonn/downpost.mp3')
var UPsoundfollo = new Audio("lesonn/up2.mp3");
//end of sounds
var eh = new Audio("lesonn/tf.mp3");

var mathais = new Audio("lesonn/wat1.mp3");
var mathais2 = new Audio("lesonn/wat2.mp3");
var repon = new Audio("lesonn/reponser.mp3");
var checkcount = false;
var followers = 0;
var ID;
var sond = 1;
var lanui = false;
var getdayornoght = getCookie("night");
var sonounon = getCookie("son");
var lastuser = getCookie("lastuser")
if (lastuser == "null" || NaN){
	useuname = "mathias777yt13k"
}else{
	useuname = lastuser
}

if (useuname.length == 0){
	useuname = "mathias777yt13k"
}


function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkcookie(){
	if (sonounon == "true"){
		sonHD = false
		sonsetting()
	}
	if (getdayornoght == "true"){
		document.getElementById("wewcor").style.background = "black"
		document.getElementById("pfp").style.border = "solid white"
		document.getElementById("followin").style.border = "solid 2px #bdbdbd22"
		document.getElementById("followin").style.background = "#77777722"
		document.getElementById("follower").style.border = "solid 2px #bdbdbd22"
		document.getElementById("follower").style.background = "#77777722"
		document.getElementById("autre").style.border = "solid 2px #bdbdbd22"
		document.getElementById("autre").style.background = "#77777722"
		document.getElementById("post-text").style.border = "solid 2px #bdbdbd22"
		document.getElementById("post-text").style.background = "#77777722"
		document.getElementById("othercount").style.background = "#424242"
		document.getElementById("bouto1").style.background = "#424242"
		document.getElementById("soundstting").style.background = "#424242"
		document.getElementById("sole").src = "img/lue.png"
		lanui = true;
	}
}
function nightmode(){
	if (lanui == false){
		//foutre la nu ?!
		document.cookie = "night=true;expires=Thu, 25 Feb 4444 07:24:41 GMT";
		document.getElementById("wewcor").style.background = "black"
		document.getElementById("pfp").style.border = "solid white"
		document.getElementById("followin").style.border = "solid 2px #bdbdbd22"
		document.getElementById("followin").style.background = "#77777722"
		document.getElementById("follower").style.border = "solid 2px #bdbdbd22"
		document.getElementById("follower").style.background = "#77777722"
		document.getElementById("autre").style.border = "solid 2px #bdbdbd22"
		document.getElementById("autre").style.background = "#77777722"
		document.getElementById("post-text").style.border = "solid 2px #bdbdbd22"
		document.getElementById("post-text").style.background = "#77777722"
		document.getElementById("othercount").style.background = "#424242"
		document.getElementById("bouto1").style.background = "#424242"
		document.getElementById("soundstting").style.background = "#424242"
		document.getElementById("sole").src = "img/lue.png"
		lanui = true;
	}else{
		document.cookie = "night=false;expires=Thu, 25 Feb 4444 07:24:41 GMT"
		document.getElementById("wewcor").style.background = "linear-gradient(217deg, rgba(166, 55, 55, 0), rgba(255,0,0,0) ), linear-gradient(127deg, rgba(255, 115, 9, 0.8), rgba(0,255,0,0) ), linear-gradient(336deg, rgba(0, 0, 255, 0.92), rgba(0,0,255,0))"
		document.getElementById("pfp").style.border = "solid"
		document.getElementById("followin").style.border = "solid 2px #11111122"
		document.getElementById("followin").style.background = "#11111122"
		document.getElementById("follower").style.border = "solid 2px #11111122"
		document.getElementById("follower").style.background = "#11111122"
		document.getElementById("autre").style.border = "solid 2px #11111122"
		document.getElementById("autre").style.background = "#11111122"
		document.getElementById("post-text").style.border = "solid 2px #11111122"
		document.getElementById("post-text").style.background = "#11111122"
		document.getElementById("othercount").style.background = "#4f0e56"
		document.getElementById("bouto1").style.background = "#99a04f"
		if (sonHD == true){
	    document.getElementById("soundstting").style.background = "#00FF00"
		}else{
		document.getElementById("soundstting").style.background = "#FF0000"	
		}
		document.getElementById("sole").src = "img/sole.png"
		lanui = false;
	}
}
function gotoprofile(){
	Swal.fire({
  title: 'do you want to go to this profile ?',
  type: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'yes',
  cancelButtonText: 'nah rener'
}).then((result) => {
  if (result.value) {
   window.open("https://www.deviantart.com/" + useuname)
  }
})
}

function sonsetting(){
if (sonHD == true){
	if (lanui == false){
	document.getElementById("soundstting").style.background  = "#FF0000"
	}
	document.getElementById("soundstting").innerText = "sound : OFF"
	document.cookie = "son=false;expires=Thu, 25 Feb 4444 07:24:41 GMT"
	sonHD = false
}else{
	if (lanui == false){
    document.getElementById("soundstting").style.background  = "#00FF00"
	}
	document.getElementById("soundstting").innerText = "sound : ON"
	document.cookie = "son=true;expires=Thu, 25 Feb 4444 07:24:41 GMT"
	sonHD = true
}

}
function milestonztest(){
	switch(folo.toString().length){
case 1:
	var milestonz = folo
	milestonz += 1
break;
case 2:
	var milestonz = parseInt((Math.floor(folo / 10)) + "0")
	milestonz += 10
break;
case 3:
	var milestonz = parseInt((Math.floor(folo / 100)) + "00")
	milestonz += 100
break;
case 4:
	var milestonz = parseInt((Math.floor(folo / 1000)) + "000")
	milestonz += 1000
break;
case 5:
	var milestonz = parseInt((Math.floor(folo / 10000)) + "0000")
	milestonz += 10000
break;
case 6:
	var milestonz = parseInt((Math.floor(folo / 100000)) + "00000")
	milestonz += 100000
break;
case 7:
	var milestonz = parseInt((Math.floor(folo / 1000000)) + "000000")
	milestonz += 1000000
break;
case 8:
	var milestonz = parseInt((Math.floor(folo / 10000000)) + "0000000")
	milestonz += 10000000
break;
case 9:
	var milestonz = parseInt((Math.floor(folo / 100000000)) + "00000000")
	milestonz += 100000000
break;
	}
	
	if (milestonz == 100000000){
document.getElementById('milestona').innerHTML = 'before ' + milestonz + " ONG"
	}else{
document.getElementById('milestona').innerHTML = 'before ' + milestonz;
	}
odometer5.innerHTML = milestonz - folo
}

function testcount(){
	if (folo > oldcount){
		UPsound.cloneNode(true).play();
	}
	if (folo < oldcount){
		DOWNsound.cloneNode(true).play();
	}
	if (high2 > oldpostcount){
		postup.cloneNode(true).play();
	}
	if (high2 < oldpostcount){
		postdown.cloneNode(true).play();
	}
	if (oldfollwoing > followin){
		downfollowing.cloneNode(true).play();
	}
	if (oldfollwoing < followin){
		followingup.cloneNode(true).play();
	}
	if (followers > oldcount2){
		UPsoundfollo.cloneNode(true).play();
	}
	if (followers < oldcount2){
		DOWNsoundfollo.cloneNode(true).play();
	}
}

function tg() {        
   setTimeout(function () {   
		CULER.open('GET', "https://cors-anywhere.herokuapp.com/https://www.deviantart.com/_napi/da-user-profile/api/init/posts?username=" + useuname);
		CULER.send(null);
		CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			degar = JSON.parse(CULER.responseText);
			oldcount2 = followers
			oldcount = folo
			oldpostcount = high2
			oldfollwoing = followin
			switch(useuname){
				case 'mathias777yt13k':
				case 'grobargodu6':
				case 'mathias444':
				document.getElementById('pfp').style.border = 'solid blue'
				break;
				default:
				document.getElementById('pfp').style.border = 'solid'
				break;
			}
			switch(useuname){
				case "grobargodu6":
				$(".deviantiontext")[0]["innerText"] = "posts :"
				folo = degar.sectionData.modules[0].moduleData.statuses.total
				break
				case "tpjland":
				$(".deviantiontext")[0]["innerText"] = "comment :"
				folo = degar.pageData.stats.commentsMade
				break
				default:
				$(".deviantiontext")[0]["innerText"] = "deviation :"
				folo = degar.pageData.stats.deviations;
				break
			}
            followers = degar.pageData.stats.watchers;
			followin = degar.pageData.stats.watching;
			high2 = degar.pageData.stats.pageviews;
			wownon = degar.pageData.gruser.username;

			ID = degar.pageData.gruser.userId;
			prifle = degar.pageData.gruser.usericon;
			document.getElementById('pfp').src=prifle;
			odometer.innerHTML = folo;
			odometer2.innerHTML = followers;
			odometer3.innerHTML = followin;
			milestonztest()
			odometer4.innerHTML = high2;
			document.getElementById("coconu").innerHTML = wownon + " ID : (" + ID + ")";
			if (sonHD == true) {
				testcount()
			}
        }
		switch(this.status){
			case 404:
			case 500:
			if (!Swal.isVisible()){
			sad.play()
			swal.fire({
			allowEscapeKey: false,
			title:"444: account no found",
			text: useuname + " was no found please try again with a other deviantart username:",
			input: 'text'
			}).then((result) => {
			useuname = result.value
			if (useuname == undefined || useuname == null || useuname == ""){
				useuname = "mathias777yt13k";
			}
			document.cookie = "lastuser=" + useuname + ";expires=Thu, 25 Feb 4444 07:24:41 GMT";
			CULER.open('GET', "https://www.deviantart.com/_napi/da-user-profile/api/init/posts?username=" + useuname);
			CULER.send(null);
			swal.fire({
			title: "new deviantart username set:",
			text: useuname,
			toast: true,
			icon: "success",
			animation: null,
			position: 'top',
			allowEscapeKey: false,
			showConfirmButton: false,
			timer: 3000,
			timerProgressBar: true})
			sad.pause()
			})
		}
			break
			case 429:
			swal.fire({
			title:"429: rate limit",
			text:"please try again later.",
			})
			break
		}
    }
};              
      if (putindemerde == false) {          
         tg();     
		 if (pnz == false){
		updatecount = 5000
		pnz = true
		 }
      }else{
	console.log('STOPPING.')
	}                 
   }, updatecount)
}

tg();  