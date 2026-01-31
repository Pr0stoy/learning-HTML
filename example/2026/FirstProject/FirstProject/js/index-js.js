// let age = prompt('Enter your age, name, surname:');
// let ageSplit = age.split(' ');
// let [age1, names, surnames] = ageSplit;
// let exBlock = document.getElementById('hdr');
// exBlock.textContent = `${surnames} ${names} -- ${age1} p.`;

let a = +prompt('a:');
let b = +prompt('b:');
let sum = a+b;
let diff = a-b;
let prod = a*b;
let pif = Math.sqrt(a**2+b**2);
let p1 = document.getElementById('p1');
p1.textContent = `${sum}`;

let p2 = document.getElementById('p2');
p2.textContent = `${diff}`;

let p3 = document.getElementById('p3');
p3.textContent = `${prod}`;

let p4 = document.getElementById('p4');
p4.textContent = `${pif}`;
