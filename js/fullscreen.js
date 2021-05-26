const CULER = new XMLHttpRequest();
var incre = 1000;
var folo = 0;
var updatecount = 10000
var useuname
var UPsound = new Audio("lesonn/up2.mp3");
var downsound = new Audio("lesonn/followdown.mp3");
oldcount = 0;

var lastuser = getCookie("lastuser")
var sounHD = getCookie("son")

if (lastuser == "null" || NaN){
	useuname = "mathias_santourian"
}else{
	useuname = lastuser
}

if (useuname.length == 0){
	useuname = "mathias_santourian"
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

function tg() {        
   setTimeout(function () {   
CULER.open('GET', "https://www.instagram.com/" + useuname + "/channel/?__a=1");
CULER.send(null);
CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			degar = JSON.parse(CULER.responseText);
			folo = degar.graphql.user.edge_followed_by.count;
			wownon = degar.graphql.user.full_name;
	if (sounHD == 'true'){
		if (folo > oldcount){
		UPsound.play();
		}
		if (folo < oldcount){
		downsound.play();
		}
	oldcount = folo
}
			if (wownon.length == 0){
				wownon = useuname
			}
			odometer.innerHTML = folo;
			document.getElementById("coconu").innerHTML = wownon;
			}
		}
   }      
         tg();               
   }, updatecount)
}

tg();  
