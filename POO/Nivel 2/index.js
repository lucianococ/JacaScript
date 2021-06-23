class Productos {
    constructor(producto, id, precio){
        this._producto = producto;
        this._id = id;
        this._precio = precio;
    }
} 
class UI{
    addProducto(ingreso){
        const productList = document.getElementById("listaProductos");
        const element = document.createElement("div");
        element.innerHTML = `
           <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Producto</strong>: ${ingreso._producto} -
                    <strong>ID</strong>: ${ingreso._id} - 
                    <strong>Precio</strong>: ${ingreso._precio}
                    <a href="#" class="btn btn-danger" name="delete">Borrar</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm(){
        document.getElementById('myForm').reset();
    }
    deleteProduct(element){
        if(element.name === 'delete')
        element.parentElement.parentElement.parentElement.remove();
    }

}  



document.getElementById('myForm')
.addEventListener('submit', function(e){
    let producto = (document.getElementById("nuevoProducto").value);
    let id = parseInt(document.getElementById("nuevoID").value); 
    let precio = parseInt(document.getElementById("nuevoPrecio").value);
    
   
    let ingreso = new Productos (producto, id, precio);
    let ui = new UI();
    ui.addProducto(ingreso);
    ui.resetForm();



    e.preventDefault();
});
document.getElementById("listaProductos").addEventListener('click', function(e) {

let ui = new UI();
ui.deleteProduct(e.target);
})

