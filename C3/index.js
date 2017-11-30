

function name(ime){
	switch(ime.length % 2){
		case 0:
		console.log('Ubavo ime');
		break;
		case 1:
		console.log('Neubavo ime');
		break;
	}
}

name('Bojan');





var niza = ['a', 'b', 'c', 'd', 'e'];
console.log(niza);
console.log(niza[2]);

niza[20] = 'z' // dodava vrednost vo samata niza //ama ne se koristi

niza.push('z') // dodava vrednost vo nizata

console.log(niza[20])
console.log(niza.length)




var niza2 = ['bojan', 2131234, true, 'test']
console.log(niza2)

var niza3 = [
	[1, 2, 3, 4, 5],
	[6, 7, 8, 9, 0],
	['a', 'b', 'c', 'd', 'e' ]
];

console.log(niza3[1][2]);

var o1 = {
	ime: 'Nikola',
	prezime: 'Gacev',
	oceni: [6, 6, 7, 5, 7, 6],
	profesori: [
		{
			ime: 'Pero',
			prezime: 'Perovski',
		},

		{
			ime: 'Janko',
			prezime: 'Jankovski',
		},
	]
};

console.log(o1);
console.log(o1['ime'], o1['prezime']) //varijanta 1 (se koristi samo za indexi(numbers))

console.log(o1.ime); //varijanta 2 (se koristi samo za stringovi(klucevi))
console.log(o1.oceni[3]);

console.log(o1.profesori[1].prezime);



for(var i=0; i < 10; i = i + 1) {          //start, end, step
	console.log('Hello');
	console.log(i);
}

var niza4 = [2, 2, 3, 5, 4, 5, 5, 6, 7];

// console.log(niza4[0]);
// console.log(niza4[1]);
// console.log(niza4[2]);
// console.log(niza4[3]);
// console.log(niza4[4]);

for(var i=0; i < niza4.length; i = i + 1) {
	console.log(niza4[i]);
}

for(var i=0; i < niza4.length; i = i + 1){
	if(niza4[i] % 2 == 0){
		console.log(niza4[i]);
	}
	
}








