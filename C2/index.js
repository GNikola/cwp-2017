// > - поголемо
// < - помало
// >= - поголемо или еднакво
// <= - помало или еднакво
// == - еднакво
// === - апсолутно еднакво
// != - нееднакво
// !== -апсолутно нееднакво

var kolichinaBrashno = 1.8;
var beloBrashno = false;
var crnoBrashno = false;


if(kolichinaBrashno > 1){
	console.log('Kje pravime torta! :D');
} else {
	console.log('Prvo kupi brashno, pa posle kje pravime');
}


if(beloBrashno == true){
	console.log('Kje pravime so belo brashno!')
} else if(crnoBrashno == true){
	console.log('Kje pravime so crno brashno!')
} else {
	console.log('Nema da pravime torta! :D')
}



var legnam = true;

if(legnam == true){
	console.log('Nema da stanam!')
} 

else if(legnam = false){
	console.log('Kje si napravam kafe!')
}

else {
	console.log('Kje si zuborkam!')
}



console.log(2 + 2);
console.log(2 / 135);
console.log(4 - 12);
console.log(3 + 10);
console.log(147 % 152);


var broj = 10

if(broj % 2 == 0){
	console.log('Paren!')
}
else {
	console.log('Neparen!')
}


var mesec = 'Fevruari'

if(mesec.length % 2 == 0){
	console.log('Ubav!');
}

else {
	console.log('Neubav!');
}



// && и
// || или

kolichinaBrashno = 0.7;
var brashno = true;

if(brashno = true && kolichinaBrashno >=1){
	console.log('Pravime torta!')
}

else {
	console.log('Ne pravime torta!')
}


broj = 12

if(broj < 5 || broj > 10){
	console.log('brojot e pomal od 5 ili pogolem od 10')
}
else {
	console.log('brojot e vo opsegot od 5 do 10')
}


// true && true = true
// true && false = false
// false && true = false
// false && false = false


// true || true = true
// true || false = true
// false || true = true
// false || false = false


mesec = 'Mart';

switch(mesec){
	case 'Januari' :
		console.log('Go odbravte mesecot Januari');
		break;

	case 'Fevruari' :
		console.log('Go odbravte mesecot Fevruari');
		break;

	case 'Mart' :
		console.log('Go odbravte mesecot Mart');
		break;

	case 'April' :
		console.log('Go odbravte mesecot April');
		break;

	case 'Maj' :
		console.log('Go odbravte mesecot Maj');
		break;

	case 'Juni' :
		console.log('Go odbravte mesecot Juni');
		break;

	case 'Juli' :
		console.log('Go odbravte mesecot Juli');
		break;

	case 'Avgust' :
		console.log('Go odbravte mesecot Avgust');
		break;

	case 'Septemvri' :
		console.log('Go odbravte mesecot Septemvri');
		break;

	case 'Oktomvri' :
		console.log('Go odbravte mesecot Oktomvri');
		break;

	case 'Noemvri' :
		console.log('Go odbravte mesecot Noemvri');
		break;

	case 'Dekemvri' :
		console.log('Go odbravte mesecot Dekemvri');
		break;

	default:
		console.log('Ne postoi takov mesec!')
		break;

}












mesec = 'Mart';

switch(mesec){
	case 'Januari' :
	case 'Fevruari' :
	case 'Mart' :
	case 'Oktomvri' :
	case 'Noemvri' :
	case 'Dekemvri' :
		console.log('Odbravte laden mesec')
	break;
	case 'April' :
	case 'Maj' :
	case 'Juni' :
	case 'Juli' :
	case 'Avgust' :
	case 'Septemvri' :
		console.log('Odbravte topol mesec')
	break;
	default:
		console.log('Ne postoi takov mesec!')
}


function zdravo(ime, prezime){
	console.log('Zdravo ' + ime + ' ' + prezime)
}

zdravo('Nikola', 'Gacev');