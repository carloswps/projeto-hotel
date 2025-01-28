function toggleMenu() {
    let sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "0px") {
      sidebar.style.right = "-350px";
    } else {
      sidebar.style.right = "0px";
    }
}

function mobilemenu (){
    const menu = document.querySelector('.mobile-menu');
    if(window.innerWidth < 600) {
        menu.style.display = 'block';
    } else {
      menu.style.display = 'none';
    }
}

window.addEventListener('resize', mobilemenu);
mobilemenu();