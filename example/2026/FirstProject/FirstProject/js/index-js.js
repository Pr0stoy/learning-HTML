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
// let v1 = prompt('Введіть координати першого відрізка: ');
// let v2 = prompt('Введіть координати другого відрізка: ');
// let v1Split = v1.split(' ');
// let v2Split = v2.split(' ');
// let [x1,y1,z1] = v1Split.map(Number);
// let [x2,y2,z2] = v2Split.map(Number);
// let res = `${(x2+x1)/2} , ${(y2+y1)/2} , ${(z2+z1)/2}`;
// let p1 = document.getElementById('p1');
// p1.textContent = `${res}`;

//Задача №7
// let v1 = prompt('Введіть координати першого вершини: ');
// let v2 = prompt('Введіть координати другого вершини: ');
// let v3 = prompt('Введіть координати третьої вершини: ');
// let v1Split = v1.split(' ').map(Number);
// let v2Split = v2.split(' ').map(Number);
// let v3Split = v3.split(' ').map(Number);
// let [x1,y1,z1] = v1Split;
// let [x2,y2,z2] = v2Split;
// let [x3,y3,z3] = v3Split;
// let l1 = Math.sqrt((x2-x1)**2 + (y2-y1)**2 + (z2-z1)**2);
// let l2 = Math.sqrt((x3-x2)**2 + (y3-y2)**2 + (z3-z2)**2);
// let l3 = Math.sqrt((x3-x1)**2 + (y3-y1)**2 + (z3-z1)**2);
// let p = (l1+l2+l3)/2;
// let S = Math.sqrt(p*(p-l1)*(p-l2)*(p-l3));
// let p1 = document.getElementById('p1');
// p1.textContent = `${l1}`;