document.getElementById("yahoo").addEventListener('click', goToYahoo);
document.getElementById("yahoo").addEventListener("auxclick", goToYahoo_Blank);

function goToYahoo(e){
	e.preventDefault();
	window.location = "https://www.yahoo.com/"
};

function goToYahoo_Blank(){
		this.href = "https://www.yahoo.com/";
		this.target = "_Blank";
	};


document.getElementById("input1").addEventListener("keyup", myFunction);
document.getElementById("input2").addEventListener("keyup", myFunction);
document.getElementById("input1").addEventListener("change", myFunction);
document.getElementById("input2").addEventListener("change", myFunction);


function myFunction(){
	var a = document.getElementById("input1").value;
	var b = document.getElementById("input2").value;
	var rezultat = +a + +b;
	document.getElementById("input3").value = rezultat;
	if(rezultat == 1000){
		console.log("asd")
		document.getElementById("win").style.display='block';
	}
	else{
		document.getElementById("win").style.display='none';
	}
}

