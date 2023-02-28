var buscaPaciente = document.querySelector ("#filtraPaciente");

buscaPaciente.addEventListener ("input", function () {
    var pacientes = document.querySelectorAll (".paciente");
    if (this.value.length > 0) {
        for (i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector (".info-nome");
            var nome = tdNome.textContent;
            if (nome != this.value) {
                paciente.classList.add ("invisivel");
            } else {
                paciente.classList.remove ("invisivel");
            }
        } 
    } else {
        for (i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove ("invisivel");
        }
    }
    
})

