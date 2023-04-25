
let nombre = prompt("Hola! Bienvenido a nuestra tienda de deportes, como es tu nombre?");

let edad = parseInt(prompt(`Mucho gusto ${nombre}, a continuación necesitamos que ingreses tu edad`));

if(edad < 18){
    alert("Puedes continuar con la compra únicamente acompañado de un adulto");
}else{
    alert("Puedes continuar con la compra sin problemas");
}

for (let contador = 3; contador > 0; contador--) {
    alert(`su compra comienza en ${contador}`)
}

alert(`a continuación ingrese el tipo de pelota que quiera comprar, en stock tenemos pelotas de volley, basquet, futbol y rugby`);


let deporte = prompt(`ingrese "pelota de (deporte)" para saber el precio de la pelota o "ESC" para terminar.`);

while(deporte != "ESC"){
    switch (deporte) {
                case "pelota de volley":
                    alert(`la pelota de volley tiene un valor de $1000`);
                    break;
            
                    case "pelota de rugby":
                        alert(`la pelota de rugby tiene un valor de $1500`);
                        break;
        
                    case "pelota de futbol":
                        alert(`la pelota de futbol tiene un valor de $2000`);
                    break;
        
                    case "pelota de basquet":
                        alert(`la pelota de basquet tiene un valor de $700`);
                    break;
        
                default:
                    alert(`No tenemos stock de pelotas de ese tipo`);
                    break;
                }
    deporte = prompt(`ingrese "pelota de (deporte)" para saber el precio de la pelota o "ESC" para terminar.`);
}

let pelota = prompt("ahora que sabes los precios de las pelotas, la de qué deporte quieres comprar? ingresa solo el deporte:");

let cantidad = parseInt(prompt(`Cúantas pelotas de ${pelota} quieres comprar?`));

var total = 0;

switch (pelota) {
    case "volley":
        total = cantidad * 1000;
        alert(`el total de tu compra es de $${total} por la compra de ${cantidad} pelotas de ${pelota}`);
        break;

    case "rugby":
        total = cantidad * 1500;
        alert(`el total de tu compra es de $${total} por la compra de ${cantidad} pelotas de ${pelota}`);
        break;

    case "futbol":
        total = cantidad * 2000;
        alert(`el total de tu compra es de $${total} por la compra de ${cantidad} pelotas de ${pelota}`);
        break;

    case "basquet":
        total = cantidad * 700;
        alert(`el total de tu compra es de $${total} por la compra de ${cantidad} pelotas de ${pelota}`);
        break;

    default:
        break;
}

function despedida() {
    alert(`muchas gracias por tu compra, vuelve pronto ${nombre}`);
}
despedida();