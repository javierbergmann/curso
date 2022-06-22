let numeros= [1,5,9,6,3,63,52,152,1,0,1520];
let clientes= ["Pedro", "Jorge", "Juan", "Roberto", "Anibal", "Laura", "Mariana"];
console.log(numeros);
document.write(numeros + "<br>");
numeros.sort();

document.write(numeros + "<br>");

document.write("<br>" + clientes);
let resultado= clientes.join("<br>Nombre: ");
document.write("<br><hr>"+clientes);
document.write("<br><hr>Nombre: "+resultado);