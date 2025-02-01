function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "0px") {
      sidebar.style.right = "-60vw";
    } else {
      sidebar.style.right = "0px";
    }
}

function mobilemenu() {
  const menu = document.querySelector('.mobile-menu');
  if (!menu) return; 
  if (window.innerWidth < 600) {
    menu.style.display = 'block';
  } else {
    menu.style.display = 'none';
  }
}
window.addEventListener('resize', mobilemenu);
mobilemenu();

function redirecionar(){
  const select = document.getElementById('rooms-options');
  const pagina = select.value;
  if(pagina){
    window.location.href = pagina;
  }
}
