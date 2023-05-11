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

// ANIMATION

$(window).scroll(function() {
  $('.leftCards').each(function() {
    var position = $(this).offset().top;
    var scrollPosition = $(window).scrollTop() + $(window).height();
    if (scrollPosition > position) {
      $(this).addClass('active');
    }
  });
});

$(window).scroll(function() {
  $('.rightCards').each(function() {
    var position = $(this).offset().top;
    var scrollPosition = $(window).scrollTop() + $(window).height();
    if (scrollPosition > position) {
      $(this).addClass('active');
    }
  });
});


const stalker = document.getElementById('stalker');

let hovFlag = false;

document.addEventListener('mousemove', function (e) {
    if (!hovFlag) {
    stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }
});


const linkElem = document.querySelectorAll('a:not(.no_stick_)');
for (let i = 0; i < linkElem.length; i++) {
   
    linkElem[i].addEventListener('mouseover', function (e) {
        hovFlag = true;

       
        stalker.classList.add('hov_');

       
        let rect = e.target.getBoundingClientRect();
        let posX = rect.left + (rect.width / 2);
        let posY = rect.top + (rect.height / 2);

        stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    });
   
    linkElem[i].addEventListener('mouseout', function (e) {
        hovFlag = false;
        stalker.classList.remove('hov_');
    });
  }

const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  card.addEventListener('click', () => {
    if (!card.hasAttribute('active')) {
      updateActiveCard(card);
    }
  });
});

function updateActiveCard(activeCard) {
  cards.forEach((card) => {
    if (card === activeCard) {
      card.setAttribute('active', '');
    } else {
      card.removeAttribute('active');
    }
  })
}