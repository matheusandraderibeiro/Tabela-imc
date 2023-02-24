const pacientes = document.querySelectorAll (".paciente");

for (i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    const tdPeso = paciente.querySelector (".info-peso");
        const peso = tdPeso.textContent;
            var validaPeso = pesoValido (peso);
    const tdAltura = paciente.querySelector (".info-altura");
        const altura = tdAltura.textContent;
            var validaAltura = alturaValida (altura);
    const tdImc = paciente.querySelector (".info-imc");

    if (!validaPeso) {
        validaPeso = false;
        tdImc.textContent = ("peso invalido");
        paciente.classList.add("paciente-Invalido");
    }
    
    if (!validaAltura) {
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

function pesoValido (peso) {
    if (peso >= 0 && peso < 300) {
        return true;
    } else {
        return false;
    }
}

function alturaValida (altura) {
    if (altura >= 0.72 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}