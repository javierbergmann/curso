let a = "Hola mundo";
let b = 120.345;
var numero1=170;
var numero2=18;
var numero3=null;

function holaMundo() {
    return "Hola mundo....!!!";
}

function sumar(val1=0, val2=0){
    return val1+val2;
}

function restar(val1=0, val2=0){
    return val1-val2;
}

const factorial= function fac(n=0){
    if(n<2){
        return 1;
    }else{
        return n * fac(n-1);
    }

    /**
     todo este condicional se puede resumir con el condicional ternario:
     condicion ? valor si verdadero : valor si falso
     return n<2 ? 1 : n*fac(n-1)
     */  
}

function printResult(r){
    console.log("El resultado es: ", r)
}

const operaciones= (a, b, pr)=>{
    console.log("--------------------------------------------");
    console.log("Vamos a Sumar ", a, "+", b);
    pr((a+b));
    console.log("Vamos a Restar ", a, "-", b);
    pr((a-b));
    console.log("Vamos a Multiplicar ", a, "*", b);
    pr((a*b));
    console.log("Vamos a Dividir ", a, "/", b);
    pr((a/b));
}

console.info("Sumamos");
numero3= sumar(numero1, numero2);
console.log(numero3);
console.info("Ahora vamos a Restar");
numero3=restar(numero1, numero2);
console.log(numero3);
console.info("Ahora llamamos a la funcion restar() sin parametros");
numero3=restar();
console.log(numero3);

console.info("Ahora llamamos a la funcion restar() con 1 parametros");
numero3=restar(13);
console.log(numero3);

console.info("Ahora llamamos a la funcion anónima para obtener el factorial");
numero3=factorial(3);
console.log(numero3);
operaciones(150, 268, printResult);


