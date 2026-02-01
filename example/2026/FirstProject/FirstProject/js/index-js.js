//Задача №1
// let age = prompt('Enter your age, name, surname:');
// let ageSplit = age.split(' ');
// let [age1, names, surnames] = ageSplit;
// let exBlock = document.getElementById('hdr');
// exBlock.textContent = `${surnames} ${names} -- ${age1} p.`;

// //Задача№2
// let a = +prompt('a:');
// let b = +prompt('b:');
// let sum = a+b;
// let diff = a-b;
// let prod = a*b;
// let pif = Math.sqrt(a**2+b**2);
// let p1 = document.getElementById('p1');
// p1.textContent = `${sum}`;
// let p2 = document.getElementById('p2');
// p2.textContent = `${diff}`;
// let p3 = document.getElementById('p3');
// p3.textContent = `${prod}`;
// let p4 = document.getElementById('p4');
// p4.textContent = `${pif}`;

//Задача №3 (6)
// let a = +prompt('a:');
// let ar= a*Math.PI/180;
// let b = +prompt('b:');
// let br= b*Math.PI/180;
// let vir = 2*Math.sin((ar+br)/2)*Math.cos((ar-br)/2);
// let p1 = document.getElementById('p1');
// p1.textContent = `${vir.toFixed(1)}`;

//Задача №5
let v1 = prompt('Введіть координати першого відрізка: ');
let v2 = prompt('Введіть координати другого відрізка: ');
let v1Split = v1.split(' ');
let v2Split = v2.split(' ');
let [x1,y1,z1] = v1Split.map(Number);
let [x2,y2,z2] = v2Split.map(Number);
let res = `${(x2+x1)/2} , ${(y2+y1)/2} , ${(z2+z1)/2}`;
let p1 = document.getElementById('p1');
p1.textContent = `${res}`;