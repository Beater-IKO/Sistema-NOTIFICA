function confirmar () {
    let ra = document.getElementById('ra').value;
    localStorage.setItem('RaUsuario', ra);
  }
  
  document.getElementById('acessar').addEventListener("click",function(){
    window.location.href = "Tela-Principal.html"
  })
  
  document.getElementById('voltar').addEventListener("click",function(){
    window.location.href = "Tela-Login-Estudante.html"
  })

  document.getElementById('registrar').addEventListener("click",function(){
    window.location.href = "Tela-Registro.html"
  })