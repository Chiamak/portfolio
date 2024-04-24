const lang = document.querySelectorAll('.lang');
let id;

function fillLang(){
  lang.forEach((lan) =>{
    lan.classList.add('active');
  })
}
function setLang(){
  id = setTimeout(fillLang, 1000);
}

window.onload = setLang;


const menubar = document.querySelector('.menu');
const menu = document.querySelector('.menub');

menubar.addEventListener('click', ()=>{
  if(menu.classList.contains('active')){
    menu.classList.remove('active');
  }else{
    menu.classList.add('active');
  }
})