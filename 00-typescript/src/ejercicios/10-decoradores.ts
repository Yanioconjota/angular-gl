/*
    ===== Código de TypeScript =====
*/

//Decoradores: sirven para cambiar las clases al momento en que son definidas --> https://www.typescriptlang.org/docs/handbook/decorators.html#class-decorators
//Angular extiende internamente las funcionalidades de otra clase que queremos implementar

function classDecorator<T extends { new (...args: any[]): {} }>(
    constructor: T
  ) {
    return class extends constructor {
      newProperty = "new property";
      hello = "override";
    };
  }

//Un decorador es una función que expande su clase añadiendole funcinalidades especiales

@classDecorator
class MiSuperClase {
	public miPropiedad: string = 'ABC123';

	imprimir () {
		console.log('Hola mundo');
	}
};

console.log(MiSuperClase);

const miCLase = new MiSuperClase();

console.log(miCLase.imprimir());
console.log(miCLase.miPropiedad);
 