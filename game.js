"use strict";

let acorns = 0;
let dontclick = 0;
let boughtBlue = false;
let secretEnabled = false;
// why doesn't this work without settimeout -_-

setTimeout(function(){ document.getElementById("acorns").innerHTML = acorns; }, 0);
setInterval(function(){
		acorns++;
		document.getElementById("acorns").innerHTML = acorns;
		if (acorns >= 100){
			document.getElementById("beetleArrival").style.display = "";
		}
		if (acorns >= 250){
			document.getElementById("lennon").style.display = "";
		}
	}, 1000);
	
function DontClick(){
	acorns = acorns + 10;
	document.getElementById("acorns").innerHTML = acorns;
	dontclick++;
	if (dontclick == 10) {
		alert("Did you even read the button?!?!");
	}
}

function buyBlue(){
	if(boughtBlue == false && acorns >= 500){
		acorns = acorns - 500;
		document.body.style.backgroundColor = "#84b3ff";
		boughtBlue = true;
	}else if(acorns <=500){
		alert("You cannot afford this, fool");
	}else{
		alert("You have already bought this upgrade, fool");
	}
}

function enableSecret(){
	if(secretEnabled == false){
		alert("You found the secret!");
		document.getElementById("cologne").style.display = "";
		document.getElementById("colognet").style.display = "";
		secretEnabled = true;
	}
}