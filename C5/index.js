var body = document.querySelector("body");
// var div1 = document.createElement("div"); //createElement - kreira nov html element
// var div2 = document.createElement("div");
// var span1 = document.createElement("span");

// div1.appendChild(div2);
// div2.appendChild(span1);
// span1.innerText = "Hello World"

// body.appendChild(div1); // appendChild - dodavanje html elementi

var studenti = [
	{
		ime: "Pero",
		prezime: "Perovski",
	},
	{
		ime: "Janko",
		prezime: "Jankovski",
	},
	{
		ime: "Stanko",
		prezime: "Stankovski",
	},
	{
		ime: "Mile",
		prezime: "Milevski",
	}
];

var list = document.createElement("ul");

var colorChanger = function(e){
	e.preventDefault();
	this.classList.remove("green");
	this.classList.remove("red");

	switch(e.type){
		case "auxclick":
			this.classList.add('green');
			break;
		case "click":
			this.classList.add('red');
			break;		
	}
}

studenti.forEach(function(v, i){
	var item = document.createElement("li");
	item.innerText = v.ime + ' ' + v.prezime;

	item.addEventListener("click", colorChanger);
	item.addEventListener("contextmenu", colorChanger);
	item.addEventListener("auxclick", colorChanger);

	list.appendChild(item);
});

body.appendChild(list);

var input1 = document.querySelector(".input1");
var button1 = document.querySelector(".button1");

button1.addEventListener('click', function(){

	console.log('test');

	var li = document.createElement("li");
	li.innerText = input1.value;
	
	list.appendChild(li);
});

