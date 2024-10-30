function confirmar () {
  let nome = document.getElementById('nome').value;
  localStorage.setItem('Nome', nome);
  let sobrenome = document.getElementById('sobrenome').value;
  localStorage.setItem('Sobrenome', sobrenome);
  let email = document.getElementById('E-mail').value;
  localStorage.setItem('E-mail', email);
  let cpf = document.getElementById('CPF').value;
  localStorage.setItem('CPF', cpf);
  let telefone = document.getElementById('Tel').value;
  localStorage.setItem('Telefone', telefone);
}

document.getElementById('acessar').addEventListener("click",function(){
  window.location.href = "Tela-Login-Estudante.html"
})

document.getElementById('voltar').addEventListener("click", function(){
  window.location.href = "Tela-Login-Estudante.html"
})

document.getElementById('acessoResponsavel').addEventListener("click",function(){
  window.location.href = "Tela-login-Responsavel.html"
})