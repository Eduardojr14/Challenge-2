
var words = [
    'MANZANA',     
    'PERA',     
    'BANANA',    
    'ARANA',       
    'FRESA',     
    'NARANJA',       
    'MANDARINA',   
    'KIWI',     
    'COMPUTADORA',
    'MICROFONO',
    'IMPRESORA',
    'MONITOR',
    'TECLADO',
    'MOUSE',
    'CAMISA',
    'PANTALON',
    'ZAPATOS',
    'CHAQUETA',
    'SUETER',
    'MEDIAS',
    'FALDA',
    'SOMBRERO',
    'ROJO',
    'AZUL',
    'BLANCO',
    'AMARILLO',
    'NEGRO',
    'ROSADO',
    'VINOTINTO',
    'ARGENTINA',
    'CHILE',
    'COLOMBIA',
    'BRASIL',
    'URUGUAY',
    'VENEZUELA',
    'CANADA',
    'HOLANDA',
    'PANAMA',
    'MEXICO',
    'CARACAS',
    'BOGOTA',
    'CALGARY',
    'BARQUISIMETO',
    'MENDOZA',
    'EDMONTON',
    'BOSTON',
    'ATLANTA',
    'CHICAGO',
    'TELEFONO',
    'LAPICERA',
    'HAMBURGUESA',
    'CABALLO',
];

var newPalabra = document.getElementById('newPalabra');
var addnewPalabra = words =>{
    
    let newPalabra = Event.key.toUpperCase();
    words.push(words);
    popup("<h3>Palabra Agregada</h3>");
    cleanInput("#stargame");
    startGame();
    }; 
    

