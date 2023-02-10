var pacientes = document.querySelectorAll (".paciente");

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
}