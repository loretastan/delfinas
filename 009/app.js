console.log('Hello from app.js...How are you');

let a = true;
let b = false;

// console.log(a, typeof a);
// console.log(b, typeof b);

 let c = a / b;

// console.log(c, typeof c);


// true => 1
// false => 0
// 0 => false
// 1, 5, 874, 500, -654... => true

// OR, AND, NOT


let d = !!!a;

// console.log(d, typeof d);

let e = 0;

let z = !!e;

// console.log(z, typeof z);

// OR => ||
let t = true;
let f = false;

//console.log('t || t', t || t);
//console.log('t || f', t || f);
//console.log('f || t', f || t);
//console.log('f || f', f || f);
//console.log('f || t || f || f' , f || t || f || f);

// AND => &&
//console.log('t && t', t && t);
//console.log('t && f', t && f);
// console.log('f && t', f && t);
// console.log('f && f', f && f);
// console.log('f && t && f && f', f && t && f && f);

let bever = '0';

// console.log(!!bever);

let x = 'abc';
let y = 10;
let v = '';

console.log(v || y || v);

console.log(x && v && y);

console.log(v || !(y  && x));
