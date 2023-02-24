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
        var imc = calculaImc (peso, altura);
        tdImc.textContent = imc;
    }
}

function calculaImc (peso, altura) {
    var imc = 0;
    imc = (peso / (altura * altura));
    return imc.toFixed(2);
}