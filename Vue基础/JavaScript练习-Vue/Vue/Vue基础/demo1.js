window.onload = function(){
	function showDate(){
		var date = new Date();//获取date对象
		var d = date.toLocaleString();//获取本地时间格式
		var box = document.getElmentById('box');
		box.innerHTML = d;//使用innerHTML属性赋值
	}
	window.setInterval("showDate()",1000);
}