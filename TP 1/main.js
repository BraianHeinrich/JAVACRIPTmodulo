// 1. Crear una funcion que reciba un numero por parametro e indique en consola si el numero
//es par o impar. 

function esimpar(valor = 0) {
    return (valor % 2 !== 0) ? `El numero ${valor} es impar` : `El numero ${valor} es par`;
}
console.log(esimpar(1));
console.log(esimpar(90));

//2. crear una funcion que reciba dos numeros por parametro e indique en consola que numero
//   es mayor, y si ninguno lo es, indicar por consola que son iguales. 

function compararNumeros(num1,num2) {
    if(num1>num2) {
        console.log("${num1}es mayor que ${num2}" );
    }else if(num2>num1) {
        console.log("${num2}es mayor que ${num1}");
    }else {
        console.log("Los numeros son iguales");
    }    
}

//3. crear una funcion que reciba un numero por parametro e indique en consola si ese numero
//   es multiplo de 5.

function esMultiploDeCinco(numero) {
    if(numero %5 ===0) {
        console.log("${numero} es multiplo de 5");
    }else {
        console.log("$ {numero} no es multiplo de 5");
    }
}


//4. crear una funcion que reciba un numero por parametro e imprima por consola todos los 
//   numeros desde el 0 hasta llegar a ese numero.

function imprimirHasta(numero) {
    for (let i=0;i<=numero; i++) {
        console.log(i);
    }
    console.log(imprimirHasta(3))
}



//5. crear una funcion que reciba una palabra y un numero por parametro e imprima por 
//   consola esa palabra la cantidad correspondiente al numero indicado.

function imprimirPalabra(palabra,veces) {
    for (let i=0;i<veces; i++) {
        //console.log(palabra);
    }
}


//6. crear una funcion que reciba un array por parametro e imprima por consola todos los valores
//   de ese array.

function imprimirArray(arr) {
    //arr.forEach(elemento=>console.log(elemento));
}

//7. crear una funcion que reciba un array con 10 numeros e imprima por consola todos los valores
//   de ese array, menos el que se encuentre en la 5ta posicion del mismo. Ayuda: Recuerde que el 
//   primer indice de un array es "0".

function imprimirArrayExceptoQuinto(arr) {
    if (arr.length!==10) {
        //console.log("El array debe tener exactamente 10 elementos");
        return;
    }
}

//8. crea una funcion que reciba un array de numeros y un numero por parametro e imprima por consola
//   cada numero del array multiplicado por el numero pasado por parametro. 

function multiplicarArrayPorNumero(arr, numero){
    //arr.forEach(elemento=>console.log(elemento*numero));
}