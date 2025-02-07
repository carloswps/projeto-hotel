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

// Inputs
let InputCheckin = document.querySelector('#check-in');
InputCheckin.addEventListener('focus', function (){
  if(this.type !== 'date'){
    this.type = 'date'
  }
});
InputCheckin.addEventListener('blur', function (){
  if(!this.value) {
    this.type = 'text';
    this.placeholder = "Check-in"
  }
});

let InputCheckout = document.querySelector('#check-out');
InputCheckout.addEventListener('focus', function (){
  if(this.type !== 'date'){
    this.type = 'date'
  }
});
InputCheckout.addEventListener('blur', function (){
  if(!this.value) {
    this.type = 'text';
    this.placeholder = "Check-out"
  }
});
