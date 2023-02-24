const botao = document.querySelector ("#adicionar-paciente");

botao.addEventListener ("click", function (event) {
    event.preventDefault ();

    const form = document.querySelector ("#formulario");
    const paciente = guardaInformacoesDoPaciente (form);
    const pacienteTr = montaTr (paciente);
    const tabela = document.querySelector ("#pacientesRegistrados");

    tabela.appendChild (pacienteTr);
    
    form.reset();
})      

function guardaInformacoesDoPaciente (form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value, 
        imc: calculaImc (form.peso.value,form.altura.value)
    }
    return paciente;
}

function montaTr (paciente) {
    const pacienteTr = document.createElement ("tr");
    pacienteTr.classList.add ("paciente");

    pacienteTr.appendChild (criaTd (paciente.nome, "info-nome"));
    pacienteTr.appendChild (criaTd (paciente.peso, "info-peso"));
    pacienteTr.appendChild (criaTd (paciente.altura, "info-altura"));
    pacienteTr.appendChild (criaTd (paciente.imc, "info-imc"));

    return pacienteTr;
}

function criaTd (dado, classe) {
    var td = document.createElement ("td");
    td.textContent = (dado);
    td.classList.add = (classe);
    return td;
}