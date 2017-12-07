var niza5 = [2, 5, 3, 2, 3, 3, 5, 1, 1, 4, 4, 2, 4, 2, 2, 4];
var niza6 = [8, 10, 7, 9, 3, 112, 53, 86, 39, 77, 58, 16, 11];
var niza7 = [1, 24, 15, 3, 68, 71, 14, 95, 88, 5, 13, 9, 7];



function sekojTretParenBroj(niza){
	var a = 0;
    for (var i = 0; i < niza.length; i++){
        if (niza[i] % 2 == 0){
            a = a + 1;
           	if (a == 3) {
				console.log(niza[i]);
				a = 0;
            }
        }
    }
}

sekojTretParenBroj(niza5);
sekojTretParenBroj(niza6);
sekojTretParenBroj(niza7);




function zbirNaNeparniBroevi(oddSum){
	var s = 0;

	for(var i = 0; i < oddSum.length; i++){
		if(oddSum[i] % 2 != 0){
			s = s + oddSum[i];
		}
	}

	// console.log(s);
	return s;
}


zbirNaNeparniBroevi(niza5);
zbirNaNeparniBroevi(niza6);
zbirNaNeparniBroevi(niza7);


function prosek(niza){
	var total = 0;

	for(var i = 0; i < niza.length; i++){
		total = total + niza[i];
	}

	// var average = total / niza.length;
	return total / niza.length;

	// console.log(average);
	// return average;
}

prosek(niza5);
prosek(niza6);
prosek(niza7);







