/*
    ===== Código de TypeScript =====
*/
interface Pasajero {
  nombre: string;
  hijos?: string[]
};

const pasajero1: Pasajero = {
	nombre : 'Janio'
};

const pasajero2: Pasajero = {
	nombre: 'Homero',
	hijos: ['Bart, Lisa', 'Maggie']
};

const pasajero3: Pasajero = {
	nombre: 'Tony',
	hijos: null
};

function imprimeHijos(pasajero:Pasajero):void {
	//poniendo hijos como opcional evitamos el error Uncaught TypeError: Cannot read properties of undefined (reading 'length')
	//seguirá imprimiendo undefined pero al menos la aplicación no romperá, si agregamos el operador || podemos devolver 0 en el caso de undefined ahorrandonos el tener que escribir un if statement
	const cantidadHijos = pasajero.hijos?.length || 0;

	console.log(cantidadHijos);
};

imprimeHijos(pasajero2);//2
imprimeHijos(pasajero1);//undefined --> 0
imprimeHijos(pasajero3);//undefined --> 0