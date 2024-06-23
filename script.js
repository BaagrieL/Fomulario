const inputs = document.querySelectorAll(".inputs");
const confirmButton = document.querySelector("#enviar");

inputs.forEach(input => {
    input.addEventListener("blur", () => {
        input.classList.remove("invalidado");
        input.classList.remove("validado");

        if (input.value === "") {
            input.classList.add("invalidado");
        } else {
            input.classList.add("validado");
        }
    });
});

confirmButton.addEventListener('click', function (event) {
    event.preventDefault();
    
    let todosPreenchidos = true;

    inputs.forEach(input => {
        if (input.value.trim() === '') {
            todosPreenchidos = false;
            input.classList.add("invalidado");
        } else {
            input.classList.remove("invalidado");
        }
    });

    if (todosPreenchidos) {
        $('#myModal').modal('show');

        inputs.forEach(input => {
            input.classList.remove("validado");
            input.classList.remove("invalidado");

            input.value = "";
        });
    } else {
        $('#errorModal').modal('show');
    }
});