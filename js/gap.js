const CULER = new XMLHttpRequest();
const VS = new XMLHttpRequest();
var incre = 5000;
var newcount = 0;
var oldcount = 0;
var methoddemerde = 0;
var folo = 0;
var updatecount = 200
var mode1 = 3;
var mode2 = 3;
var useuname1 = "mathias.santourian";
var useuname2 = "triturar";
var UPsound = new Audio("lesonn/up.mp3");
var UPsound2 = new Audio("lesonn/up.mp3");
var eh = new Audio("lesonn/tf.mp3");
var mathais = new Audio("lesonn/wat1.mp3");
var mathais2 = new Audio("lesonn/wat2.mp3");
var UPsound3 = new Audio("lesonn/up.mp3");
var DOWNsound = new Audio("lesonn/down.mp3");
var DOWNsound2 = new Audio("lesonn/down.mp3");
var DOWNsound3 = new Audio("lesonn/down.mp3");
var vsresult = 0;
var post1 = 0;
var soundname = 1;
var sonHD = false;
var post2 = 0;
var downsoundname = 1;
var repon = new Audio("lesonn/reponser.mp3");
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
   window.open("https://www.instagram.com/" + useuname1)
  }
})
}
 function contact(){
	window.open("contact.html")
}
function mathias(){
	mathais.play();
	eh.play();
	Swal.fire({
  title: 'activate ultra HD sound ?',
  text: "you need to refresh for got back xd",
  icon: 'warning',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'ye'
}).then((result) => {
  if (result.value) {
    setTimeout( function(){
		Swal.fire("test de compabiliti !")
	}, 100)
	setTimeout( function(){
		Swal.fire("wa i ! whotre pco est comoujnbaole !")
	}, 2000)
	setTimeout( function(){
		Swal.fire("now we enedd to steo !")
	}, 3100)
	setTimeout( function(){
		Swal.fire("try en got het aller thid shi....")
	}, 4100)
	setTimeout( function(){
		Swal.fire("dosnkoazd DHHDDH sdound !")
	}, 5300)
	setTimeout( function(){
		Swal.fire("ahhhhh ameriavce is saterueat !")
	}, 6100)
	setTimeout( function(){
		Swal.fire("ERROR 444 : aller vou faire enculer !")
	}, 7200)
	setTimeout( function(){
		Swal.fire("wighjt !! ahh lerd e !")
	}, 8100)
	setTimeout( function(){
		Swal.fire("nahi une imde?")
	}, 9100)
	setTimeout( function(){
		Swal.fire("je va sur les ezerver EUROPEROZKN !")
	}, 10100)
	setTimeout( function(){
		Swal.fire("OENG !")
	}, 11100)
	setTimeout( function(){
		Swal.fire("doqnlad sdoudn bynthis uerrl... httpedds://matghaisezfzazGATRUI.co/dsoundhs.pm4")
	}, 12100)
	setTimeout( function(){
		eh.pause()
	mathais2.play()
		Swal.fire("SONA ! :)")
	}, 13100)
	UPsound3 = new Audio('lesonn/up_earrape.mp3');
	UPsound2 = new Audio('lesonn/up_earrape.mp3');
	UPsound = new Audio('lesonn/up_earrape.mp3');
	DOWNsound = new Audio('lesonn/downearrape.mp3')
	DOWNsound2 = new Audio('lesonn/downearrape.mp3')
	DOWNsound3 = new Audio('lesonn/downearrape.mp3')
	useuname1 = "saihtam_santoutou777"
	useuname2 = "saihtam_santoutou444"
  }
})
}
function gotoprofile2(){
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
   window.open("https://www.instagram.com/" + useuname2)
  }
})
}

 function sonsetting(){
if (sonHD == true){
	document.getElementById("soundstting").style.background  = "#FF0000"
	document.getElementById("soundstting").innerText = "sound : OFF"
	sonHD = false
}else{
    document.getElementById("soundstting").style.background  = "#00FF00"
	document.getElementById("soundstting").innerText = "sound : ON"
	sonHD = true
}
 }
 function conmapere(){
	 if (post1 < post2){
		vsresult = post2 - post1
		odometer1.innerHTML = vsresult;
		if (useuname1 != 'mathias_love_dogs?'){
		document.getElementById("lecomba").innerText = "before " + useuname1 + " beat " + useuname2
		document.getElementById("name2lol").innerText = useuname2
		document.getElementById("name1").innerText = useuname1 
		}
			if (sonHD == true) {
				testcount();
			}
	 }else{
		vsresult = post1 - post2
	 odometer1.innerHTML = vsresult;
	 if (useuname1 != 'mathias_love_dogs?' || useuname2 != 'mathias_love_dogs?'){
			document.getElementById("lecomba").innerText = "before " + useuname2 + " beat " + useuname1
			document.getElementById("name1").innerText = useuname1
			document.getElementById("name2lol").innerText = useuname2
			if (sonHD == true) {
				testcount();
			}
	 }
	 }
 }

function testcount(){
	if (vsresult > oldcount){
		switch(soundname){
	    case 1:
		UPsound.play();
		soundname += 1
		break
		case 2:
		UPsound2.play();
		soundname += 1
		break
		case 3:
		UPsound3.play();
		soundname = 1
		break
		}
	}
	if (vsresult < oldcount){
		switch(downsoundname){
	    case 1:
		DOWNsound.play();
		downsoundname += 1
		break
		case 2:
		DOWNsound2.play();
		downsoundname += 1
		break
		case 3:
		DOWNsound3.play();
		downsoundname = 1
		break
		}
	}
}

function tg() {
   setTimeout(function () {  
   	if (useuname1 != 'mathias_love_dogs?'){
		if (useuname1 == useuname2){
			swal.fire('400: you cant use the same user for compare.')
			useuname1 = 'mathias_santourian'
		}else{
			if (methoddemerde == 1){
				CULER.open('GET', "https://www.instagram.com/" + useuname1 + "/?__a=1");
			}else{
				CULER.open('GET', "https://www.instagram.com/" + useuname1 + "/channel/?__a=1");		
			}
   CULER.send(null);
	CULER.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			degar = JSON.parse(CULER.responseText); //gen 1
			switch(mode1){
			case 1:
			post1 = degar.graphql.user.edge_owner_to_timeline_media.count;	
			break;
			case 2:
			post1 = degar.graphql.user.highlight_reel_count
			break;
			case 3:
			post1 = degar.graphql.user.edge_followed_by.count;	
			break;
			case 4:
			post1 = degar.graphql.user.edge_follow.count;	
			break;
			}
			prifle = degar.graphql.user.profile_pic_url_hd;
			document.getElementById('pfp').src=prifle;
        }
		if (this.status === 404){
			swal.fire('404: no found! C!bien doma!')
		}
    }
   };
		}
	}
		if (useuname2 != 'mathias_love_dogs?'){
			if (useuname2 == useuname1){
			swal.fire('400: you cant use the same user for compare.')
			useuname2 = 'mathias_santourian'
		}else{
			if (methoddemerde == 1){
				VS.open('GET', "https://www.instagram.com/" + useuname2 + "/?__a=1");
			}else{
				VS.open('GET', "https://www.instagram.com/" + useuname2 + "/channel/?__a=1");		
			}
   VS.send(null);
	VS.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
		if (this.status === 200) {
			degar2 = JSON.parse(VS.responseText); //gen 2
			switch(mode2){
			case 1:
			post2 = degar2.graphql.user.edge_owner_to_timeline_media.count;	
			break;
			case 2:
			post2 = degar2.graphql.user.highlight_reel_count
			break;
			case 3:
			post2 = degar2.graphql.user.edge_followed_by.count;	
			break;
			case 4:
			post2 = degar2.graphql.user.edge_follow.count;	
			break;
			}
			prifle2 = degar2.graphql.user.profile_pic_url_hd;
			document.getElementById('pfp3').src=prifle2;
			oldcount = vsresult
			conmapere()
			checkuser()
			odometer3.innerHTML = post2;
			odometer2.innerHTML = post1;
        }
		if (this.status === 404){
			swal.fire('404: no found! C!bien doma!')
		}
    }
};   
		}
		}   
			updatecount = 10000
         tg();                  		 
   }, updatecount)
}

tg();  
