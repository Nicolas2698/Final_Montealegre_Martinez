window.addEventListener('load',function(){

    var numDeCompras=0;
    
    var numDeElementos = JSON.parse(localStorage.getItem('numDeElementos'));
    if(numDeElementos == null){
        numDeElementos = [];
    }

    console.log();
    
   /* function carritoDeCompras__render(){
        numDeElementos.forEach(function(elem){ 
           //numDeCompras += parseInt(elem.price);
        });
    }

    carritoDeCompras__render();
*/
    document.querySelector('.agregar').addEventListener('click', function(element){
        element.preventDefault();
        var url = '/albums/addtocart?title='+this.getAttribute('data-title');
        fetch(url,{
            method: 'GET',
        })
        .then(res => res.json())
        .catch(err => console.log(err))
        .then(function(res){
            numDeElementos.push(res);
            localStorage.setItem('numDeElementos', JSON.stringify(numDeElementos));
            carritoDeCompras__render();
            console.log('////////////////////////////// ARREGLO COMPRAS ////////////////////////////');
            console.log(numDeElementos);
        });
    });

});