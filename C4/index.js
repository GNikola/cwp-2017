var math = {
	a: null,
	b: null,

	add: function(){
		return this.a + this.b;
	},

	sub: function(){
		return this.a - this.b;
	},

	div: function(){
		return this.a / this.b;
	},

	mul: function(){
		return this.a * this.b;
	}
};

math.a = 4; // zadava vrednosti za objektite a & b
math.b = 9; // zadava vrednosti za objektite a & b

console.log(math.add()); // povikuvanje na add funkcijata
console.log(math.sub()); // povikuvanje na sub funkcijata
console.log(math.div()); // povikuvanje na div funkcijata
console.log(math.mul()); // povikuvanje na mul funkcijata




