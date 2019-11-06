/*
var a = document.getElementsByClassName('chk');
alert(a);
for (var i = a.length - 1; i >= 0; i--) {
	a[i].onclick = function(){
		alert(this.innerText);
	}
}
*/

HTMLCollection.prototype.click = function(f) {
	for (var i = this.length - 1; i >= 0; i--) {
		this[i].onclick = f;
	}
};
document.getElementsByClassName('chk').click(function(){
	alert(this.innerText);
});

//alert(document.getElementsByClassName('c'));
NodeList.prototype.change = function(f){
	for (var i = this.length - 1; i >= 0; i--) {
		this[i].onchange = f;
	}
};
document.getElementsByName('c').change(function(){
	alert(this.value);
});

var o ={
	'memberid': '123423423',
	'roleid': 1234234
};
var a = new Array();
for(var k in o){
	//alert(k);
	//alert(o(0[k]);
	a.push(k + '=' + o[k]);
}
alert(a.join('&'));