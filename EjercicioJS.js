var array = [
    {
        name: 'Luiggi',
        age: 1000,
        programmingLanguage: 'java' 
    },{
        name: 'Lopo',
        age: 2000,
        programmingLanguage: 'python' 
    },{
        name: 'Alvaro',
        age: 3000,
        programmingLanguage: 'html' 
    },{
        name: 'Antonio',
        age: 4000,
        programmingLanguage: 'html' 
    },{
        name: 'nio',
        age: 5000,
        programmingLanguage: 'javascript' 
    },{
        name: 'nionio',
        age: 6000,
        programmingLanguage: 'python'
    },{
        name: 'nionionionio',
        age: 7000,
        programmingLanguage: 'html' 
    }
];


var probando = array.map ( numero =>  numero.programmingLanguage )
                    .filter(function(element, index, array){return index == array.indexOf(element)});
console.log(probando);


// Convertir el array de objetos en un array de Strings en el que se recoja
// cada valor de la propiedad 'programmingLanguage' y haciéndolo único en el nuevo array.
// Ejemplo. Debería de obtenerse el siguiente array convirtiendo el de arriba:
// var arrayNuevo = ['java', 'python', 'html', 'javascript']
//
// Utilizar el mínimo código posible




var nuevoArray = probando.map ( numero => function(){
    return miObjeto = {
        programing : probando[numero],
        Boolean: 'false'
    };
    
    console.log(miObjeto);
})

console.log(nuevoArray);



// Ahora un segundo ejercicio

// El array de salida tiene que ser un array con OBJETOS que tengan 2 propiedades:
// - String unico (como antes)
// - Valor booleano false