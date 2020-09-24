var titulo = document.querySelector(".titulo");	
titulo.textContent = "Aparecida Nutriciona"

var pacientes = document.querySelectorAll(".paciente")

//Percorre todos pacientes e identifica pesos inválidos
for(var i =0; i < pacientes.length; i++){

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent

    var tdImc = paciente.querySelector(".info-imc") 

    //Se true adiciona classe paciente-invalido e insere String, senão realiza cálculo IMC
    if((peso < 0 || peso > 1000) || (altura < 0)){
        tdImc.textContent = "Peso inválido!"
        paciente.classList.add("paciente-invalido");
    }else{
        var imc = peso / (altura * altura)
        tdImc.textContent = imc.toFixed(2);
    }

}

var botaoAdicionar = document.querySelector('#adicionar-paciente')

botaoAdicionar.addEventListener("click", function(event){
    //Cancela o comportamento padrão do elemento
    //No caso do botão envia os dados para o back e apaga os campos
    event.preventDefault();
    console.log('Olá eu sou o botão e fui clicado!')

});