document.getElementById('logo').addEventListener("click",function(){

    location.href = "Tela-Principal.html"

})


document.getElementById('criar-ticket').addEventListener("click",function(){

    location.href = "Criar-tickets.html"

})


document.getElementById('ticket-em-andamento').addEventListener("click", function(){

    location.href = "Tickets-Em-Andamento.html"

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

document.getElementById('icone-suporte').addEventListener("click",function(){

    location.href = "SuporteN.html"

})




let opcaoInflada = null;
let opcaoInfladaAndar = null;
let opcaoInfladaGrau = null;

function inflar(interna) {
    if (opcaoInflada) {
        opcaoInflada.classList.remove('inflada');
    }

    if (interna !== opcaoInflada) {
        interna.classList.add('inflada');
        opcaoInflada = interna;
    } else {
        opcaoInflada = null; 
    }
}

//

function inflar(externa) {
    if (opcaoInflada) {
        opcaoInflada.classList.remove('inflada');
    }

    if (externa !== opcaoInflada) {
        externa.classList.add('inflada');
        opcaoInflada = externa;
    } else {
        opcaoInflada = null; 
    }
}


//-----------------------------------------------


function inflarAndar(andar1) {


    if (opcaoInfladaAndar) {
        opcaoInfladaAndar.classList.remove('inflada');
    }

    if (andar1 !== opcaoInfladaAndar) {
        andar1.classList.add('inflada');
        opcaoInfladaAndar = andar1;
    } else {
        opcaoInfladaAndar = null; 
    }
}

function inflarAndar(andar2) {


    if (opcaoInfladaAndar) {
        opcaoInfladaAndar.classList.remove('inflada');
    }

    if (andar2 !== opcaoInfladaAndar) {
        andar2.classList.add('inflada');
        opcaoInfladaAndar = andar2;
    } else {
        opcaoInfladaAndar = null; 
    }
}


function inflarAndar(andar3) {


    if (opcaoInfladaAndar) {
        opcaoInfladaAndar.classList.remove('inflada');
    }

    if (andar3 !== opcaoInfladaAndar) {
        andar3.classList.add('inflada');
        opcaoInfladaAndar = andar3;
    } else {
        opcaoInfladaAndar = null; 
    }
}


function inflarAndar(andar4) {


    if (opcaoInfladaAndar) {
        opcaoInfladaAndar.classList.remove('inflada');
    }

    if (andar4 !== opcaoInfladaAndar) {
        andar4.classList.add('inflada');
        opcaoInfladaAndar = andar4;
    } else {
        opcaoInfladaAndar = null; 
    }
}



//


function inflarGrau(grauleve) {


    if (opcaoInfladaGrau) {
        opcaoInfladaGrau.classList.remove('inflada');
    }

    if (grauleve !== opcaoInfladaGrau) {
        grauleve.classList.add('inflada');
        opcaoInfladaGrau = grauleve;
    } else {
        opcaoInfladaGrau = null; 
    }
}


function inflarGrau(graumediana) {


    if (opcaoInfladaGrau) {
        opcaoInfladaGrau.classList.remove('inflada');
    }

    if (graumediana !== opcaoInfladaGrau) {
        graumediana.classList.add('inflada');
        opcaoInfladaGrau = graumediana;
    } else {
        opcaoInfladaGrau = null; 
    }
}


function inflarGrau(graugrave) {


    if (opcaoInfladaGrau) {
        opcaoInfladaGrau.classList.remove('inflada');
    }

    if (graugrave !== opcaoInfladaGrau) {
        graugrave.classList.add('inflada');
        opcaoInfladaGrau = graugrave;
    } else {
        opcaoInfladaGrau = null; 
    }
}



function inflarurgencia(grauurgencia) {


    if (opcaoInfladaGrau) {
        opcaoInfladaGrau.classList.remove('inflada');
    }

    if (grauurgencia !== opcaoInfladaGrau) {
        grauurgencia.classList.add('inflada');
        opcaoInfladaGrau = grauurgencia;
    } else {
        opcaoInfladaGrau = null; 
    }
}

