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

window.addEventListener('scroll', function(){
  let menuResize = document.getElementById("sidebar");
  if(window.scrollY > 50){
    menuResize.style.opacity = '0';
  } else{
    menuResize.style.opacity = '1'
  }
});

// Inputs
let inputCheckin = document.querySelector('#check-in');
inputCheckin.addEventListener('focus', function (){
  if(this.type !== 'date'){
    this.type = 'date'
  }
});
inputCheckin.addEventListener('blur', function (){
  if(!this.value) {
    this.type = 'text';
    this.placeholder = "Check-in"
  }
});

let inputCheckout = document.querySelector('#check-out');
inputCheckout.addEventListener('focus', function (){
  if(this.type !== 'date'){
    this.type = 'date'
  }
});
inputCheckout.addEventListener('blur', function (){
  if(!this.value) {
    this.type = 'text';
    this.placeholder = "Check-out"
  }
});

let inputTel = document.querySelector('#input-phone');

inputTel.addEventListener("keypress", function(event){
  if(!/[0-9() -]/.test(event.key)){
    event.preventDefault(
      alert("Formato inválido!")
    );
  }
} )

inputTel.addEventListener("input", function (){
  const regex = /^\(\d{2}\) \d{5}-\d{4}$/;
  if(!regex.test(inputTel.value)){
    inputTel.setCustomValidity("Formato inválido! Use (99) 99999-9999");
  } else {
    inputTel.setCustomValidity("");
  }
})
