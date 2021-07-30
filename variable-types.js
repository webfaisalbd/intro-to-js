var tShirtPrice = 200;
console.log(typeof tShirtPrice);


var dressName = "shirt";
console.log(typeof dressName);


var isRaining = false;
console.log(typeof isRaining);

// undefined 
var isRomantic;
console.log(typeof isRomantic);



var today = new Date();
console.log(today);
console.log(typeof today);


// special edition 
// toFixed and parseFloat

var num1 = 0.1;
var num2 = 0.2;
total = num1 + num2;
console.log(total);
console.log(total.toFixed(2));


//toFixed output is string type 
var num1 = 0.1;
var num2 = 0.2;
total = num1 + num2;
total = total.toFixed(1);
console.log(typeof total);
total = parseFloat(total);
console.log(total);