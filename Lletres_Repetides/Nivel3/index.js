
////////Ejercicio 1////////
function boton1() {
    let nombre1 = [];
    nombre1 = (document.getElementById("nombre").value);
    let resultado1 = "";
    resultado1 = deletreo(nombre1)


    function deletreo(nombre) {
        for (var i = 0; i < nombre.length; i++) {
            resultado1 += nombre[i] + "<br>";
            console.log(nombre[i])


        }
        return resultado1

    }


    document.getElementById("mostrar_respuesta1").innerHTML = resultado1;
}
///////Ejercicio 2 ///////
function boton2() {
    let nombre2 = [];
    nombre2 = (document.getElementById("nombre2").value);
    let resultado2 = "";
    resultado2 = deletreo2(nombre2)

    function deletreo2(nombre) {
        for (var i = 0; i < nombre.length; i++) {
            if (nombre[i] >= 0) {
                console.log("Els noms de persones no contenen el número: " + nombre[i]);
                resultado2 += "Els noms de persones no contenen el número: " + nombre[i] + "<br>";
            }
            else if (nombre[i] == "a" || nombre[i] == "e" || nombre[i] == "i" || nombre[i] == "o" || nombre[i] == "u") {
                console.log("He trobat la vocal: " + nombre[i])
                resultado2 += "He trobat la vocal: " + nombre[i] + "<br>";
            }
            else {
                console.log("He trobat la consonant: " + nombre[i])
                resultado2 += "He trobat la consonant: " + nombre[i] + "<br>";
            }
        }
        return resultado2
    }
    document.getElementById("mostrar_respuesta2").innerHTML = resultado2;
}
/////////Ejercicio 3///////
function boton3() {
    let nombre = (document.getElementById("nombre3").value);
    let nombre_l = Array.from(nombre);
    var letras = [];
    let resultado3 = "";
    // resultado3 = cuenta(nombre3)

    nombre_l.map(function (letra) {
        if (!letras.hasOwnProperty(letra)) {
            letras[letra] = 0
        }
        letras[letra] += 1;


    });
    
    console.log(letras)

}
/////////Ejercicio 4///////

let nombre4 = [];

let apellido4 = [];

let espacio = [" "];

function boton4(){
    nombre4 = (document.getElementById("nombre4").value);
    apellido4 = (document.getElementById("apellido4").value);
    let nombre4_l= Array.from(nombre4);
    let apellido4_l= Array.from(apellido4)
    let completo = nombre4_l.concat(espacio, apellido4_l);
    console.log(completo);
    document.getElementById("mostrar_respuesta4").innerHTML = completo;
}
/////////Ejercicio 5///////

let texto =  " var str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';";

function boton5(){
    const regex = /\b[\w.!-ñ#$%&*+\/=?{|}]+@[\w!-ñ#$%&*+\/=?{|}]+(?:\.[\w/]+)\b/g;
const validacion = texto.match(regex);
let result = validacion.filter((item, index)=>{
    return validacion.indexOf(item) === index;
})

console.log(result);
document.getElementById("mostrar_respuesta5").innerHTML = result; 
}



