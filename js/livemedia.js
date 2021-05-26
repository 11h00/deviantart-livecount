const CULER = new XMLHttpRequest();
var newcount = 0;
var oldcount = 0;
var updatecount = 0
var sonHD = true;
var UPsound = new Audio("lesonn/up.mp3");
var DOWNsound = new Audio("lesonn/down.mp3");
var warnin = new Audio("lesonn/warnin.mp3");
var repon = new Audio("lesonn/reponser.mp3");
var view;
var videoID = "Btx5ia9jks5";
var milestone = 0;
var isvideo = true;
var seentheerror = false;
var lanui = false;
var getdayornoght = getCookie("night");
var sonounon = getCookie("son");
var lastvideo = getCookie("lastvideo")

function sonsetting(){
if (sonHD == true){
	if (lanui == false){
	document.getElementById("soundstting").style.background  = "#FF0000"
	}
	document.getElementById("soundstting").innerText = "sound : OFF"
	document.cookie = "son=false;expires=Thu, 18 Dec 2019 12:00:00 UTC"
	sonHD = false
}else{
	if (lanui == false){
    document.getElementById("soundstting").style.background  = "#00FF00"
	}
	document.getElementById("soundstting").innerText = "sound : ON"
	document.cookie = "son=true;expires=Thu, 18 Dec 2019 12:00:00 UTC"
	sonHD = true
}

}

if (lastvideo == null || NaN || ""){
	videoID = "Btx5ia9jks5"
}else{
	videoID = lastvideo
}

if (videoID.length == 0){
	videoID = "Btx5ia9jks5"
}

function checkcookie(){
	if (sonounon == "true"){
		sonHD = false
		sonsetting()
	}
	if (getdayornoght == "true"){
		document.cookie = "night=true;expires=Thu, 18 Dec 2019 12:00:00 UTC";
		document.getElementById("wewcor").style.background = "black"
		document.getElementById("pfp").style.border = "solid white"
		document.getElementById("pfp2").style.border = "solid white"
		document.getElementById("followin").style.border = "solid 2px #bdbdbd22"
		document.getElementById("followin").style.background = "#77777722"
		document.getElementById("follower").style.border = "solid 2px #bdbdbd22"
		document.getElementById("follower").style.background = "#77777722"
		document.getElementById("post-text").style.border = "solid 2px #bdbdbd22"
		document.getElementById("post-text").style.background = "#77777722"
		document.getElementById("bouto9").style.background = "#424242"
		document.getElementById("bouto8").style.background = "#424242"
		document.getElementById("bouto7").style.background = "#424242"
		document.getElementById("bouto6").style.background = "#424242"
		document.getElementById("bouto6").style.color = "white"
		// document.getElementById("bouto5").style.background = "#424242"
		document.getElementById("bouto4").style.background = "#424242" //chercher
		// document.getElementById("bouto3").style.background = "#424242"
		document.getElementById("bouto2").style.background = "#424242"
		document.getElementById("bouto1").style.background = "#424242"
		document.getElementById("soundstting").style.background = "#424242"
		document.getElementById("sole").src = "img/lue.png"
		lanui = true;
	}else{
		
	}
}

function nightmode(){
	if (lanui == false){
		//foutre le nu ?!
		acti.play()
		document.cookie = "night=true;expires=Thu, 18 Dec 2019 12:00:00 UTC";
		document.getElementById("wewcor").style.background = "black"
		document.getElementById("pfp").style.border = "solid white"
		document.getElementById("pfp2").style.border = "solid white"
		document.getElementById("followin").style.border = "solid 2px #bdbdbd22"
		document.getElementById("followin").style.background = "#77777722"
		document.getElementById("follower").style.border = "solid 2px #bdbdbd22"
		document.getElementById("follower").style.background = "#77777722"
		document.getElementById("post-text").style.border = "solid 2px #bdbdbd22"
		document.getElementById("post-text").style.background = "#77777722"
		document.getElementById("bouto9").style.background = "#424242"
		document.getElementById("bouto8").style.background = "#424242"
		document.getElementById("bouto7").style.background = "#424242"
		document.getElementById("bouto6").style.background = "#424242"
		document.getElementById("bouto6").style.color = "white"
		// document.getElementById("bouto5").style.background = "#424242"
		document.getElementById("bouto4").style.background = "#424242" //chercher
		// document.getElementById("bouto3").style.background = "#424242"
		document.getElementById("bouto2").style.background = "#424242"
		document.getElementById("bouto1").style.background = "#424242"
		document.getElementById("soundstting").style.background = "#424242"
		document.getElementById("sole").src = "img/lue.png"
		lanui = true;
	}else{
		//foutre le joue !
		desacti.play()
		document.cookie = "night=false;expires=Thu, 18 Dec 2019 12:00:00 UTC"
		document.getElementById("wewcor").style.background = "linear-gradient(217deg, rgba(255,0,0,.8), rgba(255,0,0,0) ),linear-gradient(127deg, rgba(0,255,0,.8), rgba(0,255,0,0) ),    linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) )"
		document.getElementById("pfp").style.border = "solid"
		document.getElementById("pfp2").style.border = "solid"
		document.getElementById("followin").style.border = "solid 2px #11111122"
		document.getElementById("followin").style.background = "#11111122"
		document.getElementById("follower").style.border = "solid 2px #11111122"
		document.getElementById("follower").style.background = "#11111122"
		document.getElementById("post-text").style.border = "solid 2px #11111122"
		document.getElementById("post-text").style.background = "#11111122"
		document.getElementById("bouto9").style.background = "#00ffad"
		document.getElementById("bouto8").style.background = "#2200ff"
		document.getElementById("bouto7").style.background = "#00ffad"
		document.getElementById("bouto6").style.background = "#ffa7a7"
		document.getElementById("bouto6").style.color = "#f50000"
		// document.getElementById("bouto5").style.background = "#99a04f"
		document.getElementById("bouto4").style.background = "#5610ff" //chercher
		// document.getElementById("bouto3").style.background = "#99a04f"
		document.getElementById("bouto2").style.background = "#99a04f"
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

function XPM(){
	repon.play()
	Swal.fire(
  'comment je fais ?',
  'non mai t con ? juste copi! le lien dune video non dune ima !,,, UYPADFTA  : noi XAUYT ! yyou can puyt a iumabgnowx !!! my bad ',
  'question'
)
}

  function prifi() {
  Swal.fire({
  title: 'do you want to go to this profile ?',
  type: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'yes'
}).then((result) => {
  if (result.value) {
    window.open("https://www.instagram.com/" + namer)
  }
})
  }

function testcount(){
	if (view > oldcount){
		UPsound.play();
	}
	if (view < oldcount){
		DOWNsound.play();
	}
}
function tg() {        
   setTimeout(function () {   
   CULER.open('GET', "https://www.instagram.com/p/" + videoID + "/?__a=1");
   CULER.send(null);
	CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {

			degar = JSON.parse(CULER.responseText);
			oldcount = view
			view = degar.graphql.shortcode_media.video_view_count;
            comment = degar.graphql.shortcode_media.edge_media_to_parent_comment.count;
			like = degar.graphql.shortcode_media.edge_media_preview_like.count;
			ima = degar.graphql.shortcode_media.display_url;
			ima2 = degar.graphql.shortcode_media.owner.profile_pic_url;
			namer = degar.graphql.shortcode_media.owner.username;
			isvideo = degar.graphql.shortcode_media.is_video;
			document.getElementById('pfp').src=ima;
			document.getElementById('pfp2').src=ima2;
			if (isvideo == true){
			document.getElementById('coconu').innerHTML = namer + " video"
		}else{
			document.getElementById('coconu').innerHTML = namer + " photo"
		}
			if (isvideo == true){
			odometer.innerHTML = view;
			document.getElementById("post-text").style.display = "block"
			}else{
			odometer.innerHTML = 0;			
			document.getElementById("post-text").style.display = "none"
			}
			odometer2.innerHTML = like;
			odometer3.innerHTML = comment;
			if (sonHD == true) {
				testcount()

			}
        }
    }
};            
         tg();	 
   }, updatecount)
}

tg();  
updatecount = 5000	