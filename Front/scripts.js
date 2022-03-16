let productos = [];
let total = 0;

function agregar(producto, precio){
    console.log(producto, precio);
    productos.push(producto);
    total = total + precio;
    document.getElementById("venta").innerHTML = `Pagar $${total}`
}
function pagar(){

    window.alert(productos.join(", \n"))
} 
 function mostrarproductos(listaproductos){
    let productosHTML = '';
    listaproductos.forEach(element => {
     productosHTML +=
        `<div class="product-container col">
           <h4>${element.nombre}</h4>
           <img src="${element.imagen}">
           <h1>$${element.precio}</h1>
          <button class="btn"onclick="agregar(${element.id},${element.precio})">Agregar</button>
             </div>`
    });
    document.getElementById('page-content').innerHTML = productosHTML;
}


window.onload = async() =>  {  // 

const listaproductos = await (await fetch("/api/productos")).json();
console.log(listaproductos);
mostrarproductos(listaproductos);
}   




 
