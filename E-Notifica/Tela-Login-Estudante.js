function confirmar () {
  let ra = document.getElementById('ra').value;
  localStorage.setItem('RaUsuario', ra);
}

document.getElementById('acessar').addEventListener("click",function(){
  window.location.href = "Tela-Principal.html"
})