window.addEventListener('load', function () {

    var tag= document.querySelector(".cartProducts");
    console.log(tag);

    var compras = JSON.parse(localStorage.getItem('compras'));
    if(compras == null){
        console.log("Aquí no hay nada");
        msgError();
    }
    else {
        this.console.log("Si hay objetos");
        this.console.log(compras);        
        compras.forEach(element => {
            agregarProducto(element);
        });
    }

    function msgError(){
        var msg= document.createElement("h3");
        msg.setAttribute("class","agregado__yqs");
        msg.innerHTML="You haven't add products to take out";
        tag.appendChild(h3);
    }

    function agregarProducto(element){
        var container = document.createElement('section');
        container.setAttribute('class','agregado');

        var imagenContenedor = document.createElement('imagenContenedor');
        imagenContenedor.setAttribute('class','agregado__imagenContenedor');

        var img = document.createElement('img');
        img.setAttribute('src',element.image);

        var name = document.createElement('h2');
        name.setAttribute('class','agregado__title');
        name.innerHTML = element.title;

        var price = document.createElement('h3');
        price.setAttribute('class','agregado__price');
        price.innerHTML = element.price;

        imagenContenedor.appendChild(img);
        container.appendChild(imagenContenedor);
        container.appendChild(title);
        container.appendChild(price);

        tag.appendChild(container);
    }
});