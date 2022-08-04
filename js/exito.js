setTimeout(function(){
    window.location.replace('index.html');
},3000);



const nombre = localStorage.getItem('nombre');
const email = localStorage.getItem('email');
const numero = localStorage.getItem('telefono');


function cargarLocal(){
    const container = document.getElementById('localstore');

    const h2 = document.createElement('h2');
    h2.className = 'mensaje';

    h2.innerText = `Gracias ${nombre} por su reserva pronto nos contactaremos con usted a traves de ${email} o ${numero}`;
    container.append(h2);
}

cargarLocal();