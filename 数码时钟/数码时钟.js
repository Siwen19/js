function toDouble(n) {
	if(n<10) {
		return '0' + n;
	} else {
		return '' + n;
	}
}

window.onload = function() { 
	toStart();
	
	setInterval(toStart, 1000);//注意这里是toStart而不是toStart()
} 

function toStart() { 
	var oDate = new Date();
	var aImg = document.getElementsByTagName("img");
	var str = toDouble(oDate.getHours()) + toDouble(oDate.getMinutes()) + toDouble(oDate.getSeconds());
	for(var i=0; i<aImg.length; i++) {
		aImg[i].src = "img/" + str.charAt(i) + ".png";
	}
}