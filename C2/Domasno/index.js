function c2f(celsius){
	console.log(celsius * (9 / 5) + 32)
}

c2f(30)
c2f(-17)
c2f(110)
c2f(220)
c2f(-28)


function f2c(fahrenheit){
	console.log((fahrenheit - 32) * 5 / 9)
}

f2c(120);
f2c(-20);
f2c(220);
f2c(118);
f2c(-96);


function temp1(celsius){
	console.log(celsius + '°C' + ' > ' + (celsius * (9/5) + 32) + '°F')
}

temp1(celsius=30, celsius * (9 / 5) + 32);
temp1(celsius=-17, celsius * (9 / 5) + 32);
temp1(celsius=110, celsius * (9 / 5) + 32);
temp1(celsius=220, celsius * (9 / 5) + 32);
temp1(celsius=-28, celsius * (9 / 5) + 32);


function temp2(fahrenheit){
	console.log(fahrenheit + '°F' + ' > ' + (fahrenheit - 32) * 5 / 9 + '°C')
}

temp2(fahrenheit=120, (fahrenheit - 32) * 5 / 9);
temp2(fahrenheit=-20, (fahrenheit - 32) * 5 / 9);
temp2(fahrenheit=220, (fahrenheit - 32) * 5 / 9);
temp2(fahrenheit=118, (fahrenheit - 32) * 5 / 9);
temp2(fahrenheit=-96, (fahrenheit - 32) * 5 / 9);

