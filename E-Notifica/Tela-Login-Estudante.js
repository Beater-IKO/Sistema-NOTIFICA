function confirmar () { // Função que confirma as informações
  let ra = document.getElementById('ra').value; // Recebe o valor do ra 
  localStorage.setItem('RaUsuario', ra); // Armazena o valor do ra
}

document.getElementById('acessar').addEventListener("click",function(){ // Muda de tela quando clica no acessar 
  window.location.href = "Tela-Principal.html";
})

document.getElementById('registrar').addEventListener("click",function(){ // Muda de tela quando clica no registrar
  window.location.href = "Tela-Registro.html";
})

document.getElementById('acessoResponsavel').addEventListener("click",function(){ // Muda de tela quando clica no acesso resposavel
  window.location.href = "Tela-Login-Responsavel.html"
})