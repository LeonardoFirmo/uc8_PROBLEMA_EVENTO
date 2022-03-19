// Entrada de Dados do usuário e data do evento que quer participar
let dataUsuario = "23/04/2022";
let nome = "Leonardo";
let idade = 27;
let TipodeUsuario = "palestrante";



// Data atual Convertida para o padrão BR
let data = new Date();
dataFormatada = data.toLocaleDateString('pt-BR', {timeZone: 'UTC'});


//Lista atual de participantes e palestrantes 
let participantes = ["Maria","Lucas","Gabriel","Marcos","Daniel","Dayane","Juliana"];
let palestrantes = ["Paulo","João"];
let totalParticipantes = [participantes.length + palestrantes.length];




// COMPARAÇÃO DE  DATA
if (dataUsuario > dataFormatada ){
    console.log("Data do evento selecionada disponível")
}else{
    console.log("Data inválida,insira uma data correta!")
};

// Comparação idade 
if (idade >= 18){
    console.log("Você é maior de idade,Pode se cadastrar no evento!")
}else{
    console.log("Não permitido menores de 18")
};






// Comparar Quantidade de Participantes total
let totalVagas = 100 - totalParticipantes;
if (totalParticipantes <= 100){
    console.log("Ainda há " + totalVagas + " ingressos para o evento,Siga com o cadastro!");




    
    //COMPARAÇAO ENTRE PARTICIPANTE E PALESTRANTE / E adicionando o usuario como participante ou palestrante
    if (TipodeUsuario === "palestrante"){
        palestrantes.push(nome);
    }else{
        participantes.push(nome);
        
    }
    






  //FOR PARA IMPRIMIR LISTA DE PARTICIPANTES E PALESTRANTES SEPARADAS
    console.log("Lista de Palestrantes")
    for (let index = 0; index < palestrantes.length; index++) {
        console.log (palestrantes[index]);
        
    }
    
    console.log("Lista de Participantes");
    for (let index = 0; index < participantes.length; index++) {
        
        console.log(participantes[index])
        
    }

    





}else{
    console.log("Cadastro não permitido,não há mais ingressos.")
};









