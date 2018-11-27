window.addEventListener('load', function(){

var imagen = document.querySelectorAll('.imagen');

imagen.forEach(function (elemento) {
  elemento.addEventListener('mouseover', function() {
    imagen.src = "imgs/album.png";
  });
  elemento.addEventListener('mouseout', function() {
    imagen.src = "imgs/album-play.png";
  });

});

/*  */

var imagen1 = document.querySelector('.gallery__song--image1');

imagen1.addEventListener('mouseover', mouseover);
imagen1.addEventListener('mouseout', mouseout);


function mouseout() {
  imagen1.src = "imgs/album3.png";
}

function mouseover() {
  imagen1.src = "imgs/album.play2.png";
}


var imagen2 = document.querySelector('.gallery__song--image');

imagen2.addEventListener('mouseover', mouseov);
imagen2.addEventListener('mouseout', mouseou);


function mouseou() {
  imagen2.src = "imgs/album2.png";
}

function mouseov() {
  imagen2.src = "imgs/album.play1.png";
}

var survey = document.querySelector('.survey__album');

survey.addEventListener('click', clicked);

function clicked() {
  survey.backgroundColor = "gainsboro";
  survey.color = "black";
}

});