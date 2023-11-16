console.log('Welcome to loops js. Have fun');
function rand(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
}


// console.log('Hello, Raccon!');
// console.log('Hello, Raccon!');
// console.log('Hello, Raccon!');
// console.log('Hello, Raccon!');
// console.log('Hello, Raccon!');


for (let i = 0; i < 5; i++) {

    console.log('Hello, Raccon!', rand(0, 100));

}
let coin;
 do {
    coin = rand(0, 1) ? 'Heads' : 'Tails';
    console.log('My coin is: ${coin} Nice!');
 } while(coin != 'Heads');

//do {
  //  var digit1 = rand(1, 20);
    //var digit2 = rand(1, 20);
    //console.log(digit1, digit2);
//} while(digit1 <= 10 || digit2 <= 10);

// > ---- <=
// >= ---- <
// == ---- !=
// === ---- !== 
// && ---- ||


let fiodor = 0;

let grandpa = rand(0, 500);

fiodor += grandpa;

console.log(`fiodor after birthday has ${fiodor} money`);

while (fiodor < 300) {
    let money = rand(50, 200);
    fiodor += money;
    console.log(`fiodor has ${fiodor} money`);
}