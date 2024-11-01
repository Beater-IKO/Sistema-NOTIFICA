document.getElementById('criar-ticket').addEventListener("click",function(){

    location.href = "Criar-tickets.html"

})


document.getElementById('ticket-em-andamento').addEventListener("click",function(){

    location.href = "Tickets-Em-Andamentos.html"

})

document.getElementById('tickets-finalizados').addEventListener("click",function(){

    location.href = "Tickets-Finalizados.html"

})


document.getElementById('historicos-de-tickets').addEventListener("click",function(){

    location.href = "Histórico-de-Tickets.html"

})


document.getElementById('icone-suporte').addEventListener("click",function(){

    location.href = "Criar-tickets.html"

})




let opcaoInflada = null;

function inflar(interna) {
    if (opcaoInflada) {
        opcaoInflada.classList.remove('inflada');
    }

    if (interna !== opcaoInflada) {
        interna.classList.add('inflada');
        opcaoInflada = interna;
    } else {
        opcaoInflada = null; // se clicar na mesma, desfaz a inflada
    }
}