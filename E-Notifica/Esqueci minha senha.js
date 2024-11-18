function confirmar () {
  let ra = document.getElementById('ra').value; // Recebe o valor do ra que é uma id de um input
  let email = document.getElementById('E-mail').value; // Recebe o valor do email
  let cpf = document.getElementById('cpf').value; // Recebe o valor do cpf
  localStorage.setItem('RaUsuario', ra); // Armazena o ra do usuário
  localStorage.setItem('E-mail', email); //Armazena o email do usuário
  localStorage.setItem('CPF', cpf); // Armazena o cpf do usuário
}

document.getElementById('acessar').addEventListener("click",function(){ // Função que abre outro html baseado no click 
  window.location.href = "Tela-Principal.html" 
})

document.getElementById('voltar').addEventListener("click",function(){ // Função que abre outro html baseado no click
  window.location.href = "Tela-Login-Estudante.html"
})