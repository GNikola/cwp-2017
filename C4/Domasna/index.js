document.getElementById("yahoo").addEventListener('click', goToYahoo);

function goToYahoo(){
	this.href = "https://www.yahoo.com/"
};


document.getElementById("input1").addEventListener("keyup", myFunction);
document.getElementById("input2").addEventListener("keyup", myFunction);

function myFunction(){
	var a = document.getElementById("input1").value;
	var b = document.getElementById("input2").value;
	var rezultat = +a + +b;
	document.getElementById("input3").value = rezultat;

}