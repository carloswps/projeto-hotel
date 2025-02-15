// Menu
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

window.addEventListener('scroll', function () {
  let menuResize = document.getElementById("sidebar");
  if (window.scrollY > 50) {
    menuResize.style.opacity = '0';
  } else {
    menuResize.style.opacity = '1'
  }
});

// Rooms redi
function redirecionar() {
  const select = document.getElementById('rooms-options');
  const pagina = select.value;
  if (pagina) {
    window.location.href = pagina;
  }
}


// Carrousel
document.addEventListener('DOMContentLoaded', function () {
  let comments = document.querySelectorAll(".carousel-comment-item");
  let index = 0;

  function showComments(e) {
    comments.forEach(c => c.classList.remove('active'));
    comments[e].classList.add('active'); 
  }
  setInterval(() => {
    index = (index + 1) % comments.length;
    showComments(index);
  }, 5000);
})
