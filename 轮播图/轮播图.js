// 五张图片的url
var oImg1 = "img/轮1.jpg";
var oImg2 = "img/轮2.jpg";
var oImg3 = "img/轮3.jpg";
var oImg4 = "img/轮4.jpg";
var oImg5 = "img/轮5.jpg";
// 把5张图片存入一个数组
var arr = [oImg1, oImg2, oImg3, oImg4, oImg5];

window.onload = function() {
	//刚加载时第一张图片1号背景颜色
	document.getElementById("1").style.border = "1px solid peru";
	var timer = null;
	run()
}

//轮播
function run() {
	timer = setInterval(function() {
		//随机点数字时能接着变化 
		var pic = document.getElementById("insert").name;

		//如果为最后一张图片则重新循环
		if (pic == 4) {
			pic = -1;
		}

		//点一个数字该数字背景颜色变化其余的不变
		var aLi = document.getElementsByTagName("li");
		for (var j = 0; j < aLi.length; j++) {
			aLi[j].style.backgroundColor = "#CCCCCC";
		}

		var i = parseInt(pic);

		document.getElementById("insert").src = arr[i + 1];

		document.getElementById("insert").name = i + 1;

		//数字随图片变化
		switch (i) {
			case 0:
				var temp = '2';
				break;
			case 1:
				var temp = '3';
				break;
			case 2:
				var temp = '4';
				break;
			case 3:
				var temp = '5';
				break;
			case -1:
				var temp = '1';
				break;
		}
		document.getElementById(temp).style.background = "peru"

	}, 1000)
}

//右箭头 
function goForward() {
	// 取消定时器
	clearInterval(timer);
	var oBox = document.getElementById("insert");
	var aLi = document.getElementsByTagName("li");
	// 数字跟着图片一起变
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].style.backgroundColor = "#CCCCCC";
	}

	switch (oBox.name) {
		case "0":
			var n = '2';
			break;
		case "1":
			var n = '3';
			break;
		case "2":
			var n = '4';
			break;
		case "3":
			var n = '5';
			break;
		case "4":
			var n = '1';
			break;
	}

	document.getElementById(n).style.background = "peru"
	// 向右移动图片
	for (var j = 0; j < arr.length; j++) {
		if (j < 4) {
			if (oBox.name == j) {
				oBox.src = arr[j + 1];
			}
		} else {
			if (oBox.name == 4) {
				oBox.src = arr[0];
			}
		}
	}
	// 轮到最后一张图片时返回第一张
	if (oBox.name < 4) {
		oBox.name = parseInt(oBox.name) + 1;
	} else {
		oBox.name = 0;
	}
	// 延时启用定时器
	run();
}

//左箭头
function goBack() {
	clearInterval(timer)
	var oBox = document.getElementById("insert")
	var aLi = document.getElementsByTagName("li");
	// 图片移动时数字也跟着变
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].style.backgroundColor = "#CCCCCC";
	}

	switch (oBox.name) {
		case "0":
			var n = '5';
			break;
		case "1":
			var n = '1';
			break;
		case "2":
			var n = '2';
			break;
		case "3":
			var n = '3';
			break;
		case "4":
			var n = '4';
			break;
	}

	document.getElementById(n).style.background = "peru"
	// 向左移动图片 

	for (var j = 0; j < arr.length; j++) {
		if (j > 0) {
			if (oBox.name == j) {
				oBox.src = arr[j - 1];
			}
		} else {
			if (oBox.name == 0) {
				oBox.src = arr[4];
			}
		}
	}
	// 轮到第一张图片时返回最后一张
	if (oBox.name > 0) {
		oBox.name = parseInt(oBox.name) - 1;
	} else {
		oBox.name = 4;
	}
	run();
}

//指定图片
function move(num) {
	clearInterval(timer)
	var oBox = document.getElementById("insert");
	var aLi = document.getElementsByTagName("li");
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].style.backgroundColor = "#CCCCCC";
	}

	document.getElementById(num.innerHTML).style.background = "peru"

	switch (num.innerHTML) {
		case "1":
			oBox.src = arr[0];
			oBox.name = 0;
			break;
		case "2":
			oBox.src = arr[1];
			oBox.name = 1;
			break;
		case "3":
			oBox.src = arr[2];
			oBox.name = 2;
			break;
		case "4":
			oBox.src = arr[3];
			oBox.name = 3;
			break;
		case "5":
			oBox.src = arr[4];
			oBox.name = 4;
			break;
	}
	run();
}
