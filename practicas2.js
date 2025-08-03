function holaMundo(){
    console.log('HOLA MUNDO');
}

holaMundo();

function nombreConsola(nombre){
    console.log(`Hola, ${nombre}`);
}

nombreConsola('Camilo');

function numeroDoble(numero){
    return numero*2;
}
console.log(numeroDoble(8));

function promedioNumeros(numero1, numero2, numero3){
    return numero1+numero2+numero3/3;
}
console.log(promedioNumeros(40, 60, 10));

function numeroMayor(numero1, numero2){
    if(numero1 > numero2){
        return numero1;
    } else{
        return numero2;
    }
}
console.log(numeroMayor(10, 50));

function multiplicarNumero(numero){
    return numero*numero;
}
console.log(multiplicarNumero(5));