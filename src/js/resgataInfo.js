const botao = document.querySelector ("#adicionar-paciente");

botao.addEventListener ("click", function (event) {
    event.preventDefault ();

    const form = document.querySelector ("#formulario");
    const paciente = guardaInformacoesDoPaciente (form);
    const erros = validaPaciente (paciente);

    if (erros.length > 0) {
        mensagensDeErro (erros);
        return;
    }

    adicionaPacienteNaTabela (paciente);
    
    const limpaUlAposValidarMensagem = document.querySelector ("#mensagemErro");
    limpaUlAposValidarMensagem.innerHTML = "";

    form.reset();
}) 

function adicionaPacienteNaTabela (paciente) {
    const pacienteTr = montaTr (paciente);
    const tabela = document.querySelector ("#pacientesRegistrados");
    tabela.appendChild (pacienteTr);
}

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
    td.classList.add (classe);
    return td;
}

function validaPaciente (paciente) {
    const erros = [];

    if (paciente.nome.length == 0) {erros.push ("campo nome vazio")}
    if (!pesoValido(paciente.peso)) {erros.push ("peso invalido")}
    if (paciente.peso.length == 0) {erros.push ("campo peso vazio")}
    if (!pesoValido(paciente.altura)) {erros.push ("altura invalida")}
    if (paciente.altura.length == 0) {erros.push ("campo altura vazio")}

    return erros;
}

function mensagensDeErro (erros) {
    const ul = document.querySelector ("#mensagemErro");
    ul.innerHTML = "";
    erros.forEach (function (erro){
        var li = document.createElement ("li");
        li.classList.add ("erroMensagem")
        li.textContent = erro;
        ul.appendChild (li);
    })
}