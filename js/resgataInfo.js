/*var botao = document.querySelector ("#adicionar-paciente");

botao.addEventListener ("click", function (event) {
    event.preventDefault ();

    var form = document.querySelector ("#formulario")
    var paciente = guardaInformacoesDoPaciente (form);
    var pacienteTr = criaTrDoFormulario (paciente);
    var tabela = document.querySelector ("#pacientesRegistrados")

    tabela.appendChild (pacienteTr);
    
    form.reset ();
})

function guardaInformacoesDoPaciente (form) {
    var paciente = {
        nome: form.nome.value,
        peso:form.peso.value,
        altura:form.altura.value,
        imc: calculaImc (form.peso.value,form.altura.value)
    }
    return paciente;
}

function criaTrDoFormulario (paciente) {
    var pacienteTr = document.createElement ("tr");
    pacienteTr.classList.add ("paciente");

    pacienteTr.appendChild (montaTd (paciente.nome,"info-nome"));
    pacienteTr.appendChild (montaTd (paciente.peso,"info-peso"));
    pacienteTr.appendChild (montaTd (paciente.altura,"info-altura"));
    pacienteTr.appendChild (montaTd (paciente.imc,"info-imc"));

    return pacienteTr;
}

function montaTd (dado,classe) {
    var td = document.createElement ("td");
    td.textContent = dado;
    td.classList.add = (classe);
    return td;
}*/