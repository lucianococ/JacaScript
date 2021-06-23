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

    resetFormu(){
        document.getElementById('myForm').reset();
    }
    deleteProducto(element){
        if(element.name === 'delete')
        element.parentElement.parentElement.parentElement.remove();
        this.mostrarMsj("Producto eliminado satisfactoriamente", "success");
    }

    mostrarMsj(mensaje, cssClass){
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(mensaje));

        const container = document.querySelector('.container');
        const app = document.querySelector('.row');
        container.insertBefore(div, app);
        setTimeout(function() {
            document.querySelector('.alert').remove();
        }, 2000);


    }

}  



document.getElementById('myForm')
.addEventListener('submit', function(e){
    let producto = (document.getElementById("nuevoProducto").value);
    let id = parseInt(document.getElementById("nuevoID").value); 
    let precio = parseInt(document.getElementById("nuevoPrecio").value);
    
   
    let ingreso = new Productos (producto, id, precio);
    let ui = new UI();

    if(producto === "" || id=== "" ||precio===""){
        return ui.mostrarMsj("Campos imcompletos", "danger"); 
           
    }
    ui.addProducto(ingreso);
    ui.resetFormu();
    ui.mostrarMsj('Producto agregado satisfactoriamente', 'success');

    e.preventDefault();
});
document.getElementById("listaProductos").addEventListener('click', function(e) {

let ui = new UI();
ui.deleteProducto(e.target);
});

