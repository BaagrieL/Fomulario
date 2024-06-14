const inputs = document.querySelectorAll(".inputs");
const confirmButton = document.querySelectorAll("#enviar");

inputs.forEach(input => {
    input.addEventListener("blur", () => {
        input.classList.remove("invalidado");
        input.classList.remove("validado");

        if (input.value == "") {
            input.classList.add("invalidado");
        } else {
            input.classList.add("validado");
        }
        
    });

});

function enviarFormulario() {
    window.location = "#myModal";
}