class Productos {
    constructor(producto, id, precio){
        this._producto = producto;
        this._id = id;
        this._precio = precio;
    }
}   
document.getElementById('myForm')
.addEventListener('submit', function(e){
    let producto = (document.getElementById("nuevoProducto").value);
    let id = parseInt(document.getElementById("nuevoID").value); 
    let precio = parseInt(document.getElementById("nuevoPrecio").value);
    
   
    console.log(new Productos (producto, id, precio))
    e.preventDefault();
});

