
const consultas = [];

const formulario = document.getElementById("formulario");
const inputNombre = document.getElementById("fullName");
const inputEmail = document.getElementById("email");
const inputNumero = document.getElementById("number");
const inputConsul = document.getElementById("consulta");

formulario.addEventListener("submit", (event) => {

    // Detengo el evento
    event.preventDefault();

    // Agregar validación si los campos no están completos
        if(inputNombre.value === ""){
            console.log("debes completar este campo con tu nombre");
            return;

        }else if(inputEmail.value === ""){
            console.log("debes completar este campo con tu email");
            return;

        }else if ((inputNumero.value === "")|| (inputNumero.value >9999999999)){
            console.log("debes completar este campo con tu numero de telefono");
            return;

        }else if(inputConsul.value === ""){
            console.log("debes completar este campo con tu consulta");
            return;
        }

    // Crear objeto
    const consulta = {
        nombre: inputNombre.value,
        email: inputEmail.value,
        numero: inputNumero.value,
        consulta : inputConsul.value
    };

    // Agregar persona al array
    consultas.push(consulta);

    // Limpiar los inputs
    inputNombre.value = "";
    inputEmail.value = "";
    inputNumero.value = "";
    inputConsul.value = "";

    console.log(consultas);
    

    localStorage.setItem("FormularioEnviado", 1);

    setTimeout(function(){
        window.location.replace('exito.html');
    },1000);
    
});



