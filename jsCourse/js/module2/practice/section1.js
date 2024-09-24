//Quiz
//Q1
const rosePrice  = 8;
var roseQuantity = 70;
const lilyPrice = 10;
var lilyQuantity = 50;
const tulipPrice = 2;
var tulipQuantity = 120;
var finalPrice = 0;
var pricesList = [];
var totalPrice = 0;

function roseResult(){
    finalPrice = rosePrice * roseQuantity;
    console.log('Rose - Unit price: $' + rosePrice + ", quantity: " + roseQuantity + ", value: $" + finalPrice);
    pricesList.push(finalPrice);
}

function lilyResult(){
    finalPrice = lilyPrice * lilyQuantity;
    console.log('Lily - Unit price: $' + lilyPrice + ", quantity: " + roseQuantity + ", value: $" + finalPrice);
    pricesList.push(finalPrice);
}

function tulipResult(){
    finalPrice = tulipPrice * tulipQuantity;
    console.log('Lily - Unit price: $' + tulipPrice + ", quantity: " + tulipQuantity + ", value: $" + finalPrice);
    pricesList.push(finalPrice);
}

function total(){
    totalPrice = pricesList.reduce((a, b) => a+b, 0);
    console.log("Total of flowers: " + totalPrice);
}

console.log(pricesList);
//Q2

roseQuantity-=50;
lilyQuantity-=20;

roseResult();
lilyResult();
tulipResult();
total();


//LAB Variable

var nameMaxwell = 'Maxwell Wright';
var nameRaja = 'Raja VillaReal';
var nameHelen = 'Helen Richards';

var phoneMaxwell =  '(0191) 719 6495';
var phoneRaja = '0866 398 2895';
var phoneHelen = '0800 1111';

var emailMaxwell = 'libero@convallis.edu';
var emailRaja = 'posuere.vulputate@sed.com';
var emailHelen = 'Curabitur.egestas.nunc@nonummyac.co.uk';

console.log('Name: ' + nameMaxwell + " " +'Phone: '+ phoneMaxwell + " " + 'Email:' + emailMaxwell);
console.log('Name: ' + nameRaja + " " +'Phone: '+ phoneRaja + " " + 'Email:' + emailRaja); 
console.log('Name: ' + nameHelen + " " +'Phone: '+ phoneHelen + " " + 'Email:' + emailHelen); 