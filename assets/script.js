$(document).ready(function(){
    var mouseX, mouseY;
    var ww = $( window ).width();
    var wh = $( window ).height();
    var traX, traY;
    $(document).mousemove(function(e){
      mouseX = e.pageX;
      mouseY = e.pageY;
      traX = ((4 * mouseX) / 570) + 40;
      traY = ((4 * mouseY) / 570) + 50;
      console.log(traX);
      $(".title").css({"background-position": traX + "%" + traY + "%"});
    });
});

var sidenav = document.getElementById("mySidenav");
var openBtn = document.getElementById("openBurger");
var closeBtn = document.getElementById("closeBtn");

openBtn.onclick = openNav;
closeBtn.onclick = closeNav;

function openNav() {
  sidenav.classList.add("active");
}

function closeNav() {
  sidenav.classList.remove("active");
}

function closeNavByLinks() {
  sidenav.classList.remove("active");
}

// POSITION SCROLL
function scrollElement(){
  window.scroll(0, Position(document.getElementById("wai")));
}

function scrollElement2(){
  window.scroll(0, Position(document.getElementById("projets")));
}

function scrollElement3(){
  window.scroll(0, Position(document.getElementById("contact")));
}

function scrollElement0(){
  window.scroll(0, Position(document.getElementById("accueil")));
}


function Position(obj){
  var currenttop = -150;
  if (obj.offsetParent){
   do{
    currenttop += obj.offsetTop;
   }while ((obj = obj.offsetParent));
   return [currenttop];
  }
}

function openNewTab() {
  window.open("https://github.com/Guurido/Front-Insta");
}