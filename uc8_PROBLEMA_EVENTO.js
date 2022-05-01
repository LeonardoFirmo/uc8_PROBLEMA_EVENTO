// Entrada de Dados do usuário e data do evento que quer participar
let dataUsuario = new Date(2022, 5, 23);
let nome = "Leonardo";
let idade = 27;
let tipodeUsuario = "participante";

// Data atual   
let dataHoje = new Date();


//Lista atual de participantes e palestrantes 
let participantes = ["Maria","Lucas","Gabriel","Marcos","Daniel","Dayane","Juliana"];
let palestrantes = ["Paulo","João"];

//participantesFakes var para testes que simula uma quantidade de 90 participantes, que não serão impressos na listagem final.
let participantesFakes = 90;

//Total de Participantes + 90 participantes em number
let totalParticipantes = [participantes.length + palestrantes.length + participantesFakes];


// COMPARAÇÃO DE  DATA
if (dataUsuario > dataHoje ){
    console.log("Data do evento selecionada disponível: " + new Intl.DateTimeFormat ('pt-BR', {day:'numeric' , month: 'long' , year: 'numeric'}).format(dataUsuario));


        // Comparação idade 
        if (idade >= 18){
        console.log("Você é maior de idade,Pode se cadastrar no evento!");


          // Comparar Quantidade de Participantes total
            let totalVagas = 100 - totalParticipantes;
            if (totalParticipantes < 100){
                console.log("Ainda há " + totalVagas + " ingressos para o evento,Siga com o cadastro!");

                // switch de COMPARAÇAO ENTRE PARTICIPANTE E PALESTRANTE / E adicionando o usuario como novo participante ou palestrante
             
                    switch (tipodeUsuario) {
                     case "palestrante":
                        palestrantes.push(nome);
                        console.log("Você foi cadastrado como Palestrante!")
                         
                         break;
                 
                     case "participante":
                        participantes.push(nome);
                        console.log("Você foi cadastrado como Participante!")

                         break;
                    }
                    

                  //FOR PARA IMPRIMIR LISTA TOTAL DE PARTICIPANTES E PALESTRANTES SEPARADAS
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

        }else{
        console.log("Não permitido menores de 18")
        }

        
}else{
    console.log("Data inválida,insira uma data correta!")
};
