function $(str) {
	//$-this
	return document.querySelector(str); //返回文档中匹配指定 CSS 选择器的一个元素
}
var oName = $("#user");
var oPsd = $("#psd");
var re_phone = /^1[3|5|7|8|]\d{9}$/; //该字符串以1开头的11位手机号
var re_email = /^\w+@[a-z0-9]+\.[a-z]+$/i; //判断邮箱的正则,不区分大小写
var re_name = /^[a-z][a-z0-9]{4,11}$/i; //用户名的正则,该字符串以字母开头,其他位数字和字母的组合,5-12位
var re_psd = /^[a-z0-9]{6,8}$/i; //密码为6-8位字母和数字的组合

oName.onclick=function(){
	if(oName.value.length<5 || oName.value.length>12){
		$('#namewarn').innerText='请输入5-12位以字母开头的用户名';
	}else if(re_phone.test(oName.value)) {
		$('#namewarn').innerText = '';
	} else if (re_email.test(oName.value)) {
		$('#namewarn').innerText = '';
	} else if (re_name.test(oName.value)) {
		$('#namewarn').innerText = '';
	} else {
		$('#namewarn').innerText = '账号不正确,请重新输入5-12位账号!';
		oName.value = '';
	} 
}

oPsd.onclick=function(){
	if(oPsd.value.length<6 || oPsd.value.length>12){
		$('#passwordwarn').innerText='请输入6-8位的密码'; 
	}else if (re_psd.test(oPsd.value)) {
		$('#passwordwarn').innerText = '';
	} else{
		$('#passwordwarn').innerText='密码只能由数字和字母组成!'
	}
}

$('#login').onclick = function() {    
	if (oName.value == 'admin' && oPsd.value == '123456') {
		$('#logwrong').innerText = '';
		send();
	} else {
		$('#logwrong').innerText = '账号或密码有误,请重新输入!';
		oName.value = '';
		oPsd.value = '';
		$('#namewarn').innerText='';
		$('#passwordwarn').innerText='';
	}
}

function send() {
	var url = "欢迎登录百度.html" + "?" + "username=" + encodeURI(oName.value) + "&password=" + encodeURI(oPsd.value);

	window.location.href = url;
}
