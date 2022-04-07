/*
    ===== Código de TypeScript =====
*/

//Usamos <T> para especificar que es de tipo genérico, la letra T es un standard, lo que indica que es del tipo explicito es el uso de < >
function queTipoSoy<T>(argumento: T) {
    return argumento;
}


let soyString  = queTipoSoy('Hola Mundo');
let soyNumbero = queTipoSoy( 100 );
let soyArreglo = queTipoSoy( [1,2,3,4,5,6,7,8,9,10] );

//Podemos especificar que esta implementación es de tipo number, encerrando number entre < >
let soyExplicito = queTipoSoy<number>( 100 );

console.log(typeof soyString);
console.log(typeof soyNumbero);
console.log(typeof soyArreglo);
console.log(typeof soyExplicito);





