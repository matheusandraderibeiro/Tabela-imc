const pacientes = document.querySelectorAll (".paciente");

for (i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    const tdPeso = paciente.querySelector (".info-peso");
        const peso = tdPeso.textContent;
            var validaPeso = true;
    const tdAltura = paciente.querySelector (".info-altura");
        const altura = tdAltura.textContent;
            var validaAltura = true;
    const tdImc = paciente.querySelector (".info-imc");

    if (peso <= 0 || peso >= 1000) {
        validaPeso = false;
        tdImc.textContent = ("peso invalido");
        paciente.classList.add(".paciente-Invalido");
    }
    
    if (altura <= 0.72 || altura >= 3.00) {
        validaAltura = false;
        tdImc.textContent = ("altura invalida");
        paciente.classList.add ("paciente-Invalido");
    }
    
    if (validaPeso && validaAltura) {
        const imc = (peso / (altura * altura));
        tdImc.textContent = imc.toFixed(2);
    }
}













    



































/*var pacientes = document.querySelectorAll (".paciente");

for (var i = 0; i < pacientes.length; i++) {
    var paciente = pacientes[i];
    var tdPeso = document.querySelector (".info-peso");
        var peso = tdPeso.textContent;
            var pesoValido = true;
    var tdAltura = document.querySelector (".info-altura");
        var altura = tdAltura.textContent;
            var alturaValida = true;
    var tdImc = document.querySelector (".info-imc");

    if (peso <= 0 || peso >= 200) {
        pesoValido = false;
        tdImc.textContent = "Peso Invalido";
        paciente.classList.add ("paciente-Invalido");
    }

    if (altura <= 0.70 || altura >=3.00) {
        alturaValida = false;
        tdImc.textContent = "altura invalida";
        paciente.classList.add ("paciente-Invalido");
    }

    if (pesoValido && alturaValida) {
        var imc  = calculaImc (peso,altura);
        tdImc.textContent = imc;
    }
}

function calculaImc (peso, altura) {
    var imc = 0;
    var imc = (peso/(altura*altura));
    return imc.toFixed(2);
}*/