let emails = [];

// Formulario Login
const form = document.getElementById('myFormLg');


function loginValidate(e) {

	e.preventDefault();

	var acumErroresLg = 0;

	form.classList.remove('is-invalid');

	//var inputEmail = document.getElementById('loginEmail');
	//var inputPassword = document.forms["myFormLg"]["loginPassword"];

	// Email
	if (e.target[0].value == "") {
		e.target[0].classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Este campo es obligatorio";
		acumErroresLg++;
	} else if (!validar_email(e.target[0].value)) {
		e.target[0].classList.add("is-invalid");
		e.target.children[1].children[2].innerText = "El email no cumple con el formato";
		acumErroresLg++;
	}
	let chequeo = chequear(e.target[0].value);
	if (chequeo != true) {
		modalBody.innerHTML=`<p>El e-mail no está registrado</p>`
		$(document).ready(function()
		{
		   $("#myModal").modal("show");
		});
		acumErroresLg++;
	} else if (chequeo == true) {
		
	}

	// Contraseña
	if (e.target[1].value == "") {
		e.target[1].classList.add("is-invalid");
		e.target.children[2].children[2].innerText = "Este campo es obligatorio";
		acumErroresLg++;
	}else if(!validar_psw(e.target[1].value)){
		e.target[1].classList.add("is-invalid");
		e.target.children[2].children[2].innerText = "La contraseña no cumple con los requisitos";
		acumErrores ++;
	}

	var errores = validarErrores(acumErroresLg);
	if (errores == true) {
		$(document).ready(function()
		{
		   $("#myModal").modal("show");
		});
	} else if (errores == false) {


	}
	if (acumErroresLg > 0) {
		return false;
	} else {
		return true;

	}

}
// Formulario de registro
const form2 = document.getElementById('myFormId');

function registerValidate(e) {

	e.preventDefault();
	var acumErrores = 0;


	form2.classList.remove('is-invalid');

	//var inputEmail = document.forms["myForm"]["inputEmail"];
	//var inputUser = document.getElementById('registroUsuario');
	 //var inputEmail1 = document.getElementById('registroEmail');
	// var inputPassword1 = document.forms["myForm"]["registroPassword1"];
	// var inputPassword2 = document.forms["myForm"]["registroPassword2"];
	// var inputProv = document.forms["myForm"]["registroProv"];
	var gridCheck = document.forms["myForm"]["gridCheck"];


	// 	// Usuario
	if (e.target[0].value == "") {
		e.target[0].classList.add("is-invalid");
		e.target.children[1].children[2].innerText = "Este campo es obligatorio";
		acumErrores++;
	}
	// E-mail
	if (e.target[1].value == "") {
		e.target[1].classList.add("is-invalid");
		e.target.children[2].children[2].innerText = "Este campo es obligatorio";
		acumErrores++;
	} else if (!validar_email(e.target[1].value)) {
		e.target[1].classList.add("is-invalid");
		e.target.children[2].children[2].innerText = "El email no cumple con el formato";
		acumErrores++;
	}
	// Contraseña
	if (e.target[2].value == "") {
		e.target[2].classList.add("is-invalid");
		e.target.children[3].children[2].innerText = "Este campo es obligatorio";
		acumErrores++;
	}else if(!validar_psw(e.target[2].value)){
		e.target[2].classList.add("is-invalid");
		e.target.children[3].children[2].innerText = "La contraseña no cumple con los requisitos";
		acumErrores ++;
	}
	
	// Confirmar Contraseña
	if (e.target[3].value == "") {
		e.target[3].classList.add("is-invalid");
		e.target.children[4].children[2].innerText = "Este campo es obligatorio";
		acumErrores++;
	} else if (e.target[3].value != e.target[2].value) {
		e.target[3].classList.add("is-invalid");
		e.target.children[4].children[2].innerText = "Las contraseñas no coinciden";
		acumErrores++;
	}
	// Provincia
	if (e.target[4].value == "") {
		e.target[4].classList.add("is-invalid");
		e.target.children[5].children[2].innerText = "La provincia es obligatoria";
		acumErrores++;
	}

	if (!gridCheck.checked) {
		gridCheck.classList.add("is-invalid");
		e.target.children[6].children[2].innerText = "Acepta las bases";
		acumErrores++;
	}
	let chequeo = chequear(e.target[1].value);
	if (chequeo != true) {
		emails.push(e.target[1].value);
		
	} else if (chequeo == true) {
		modalBody2.innerHTML=`<p>E-mail ya registrado</p>`
		$(document).ready(function () {
			$("#myModal2").modal("show");
		});
		acumErrores++;
	}
	var errores = validarErrores(acumErrores);
	 if (errores == false) {
		
	} else if (errores == true) {
		//modalBody2.innerHTML=`<p>Nombre:${registroUsuario.value}</p>`
				
		$(document).ready(function()
		{
		   $("#myModal2").modal("show");
		});
	}

	if (acumErrores > 0) {
		return false;
	} else {
		return true;
	}

};

form.addEventListener('blur', (event) => {
	console.log(event);
	if (event.target.value != '') event.target.classList.remove('is-invalid');
	//loginValidate();

}, true);

form2.addEventListener('blur', (event) => {
	console.log(event);
	if (event.target.value != '') event.target.classList.remove('is-invalid');
	//registerValidate();
}, true);

function validarErrores(error) {
	let respuesta;
	if (error > 0) {
		respuesta = false;
	} else {
		respuesta = true;
	}
	return respuesta;

}

function Resetear1(){
	document.getElementById('myFormLg').reset();
}
function Resetear2(){
	document.getElementById('myFormId').reset();
}

function validar_email(email) {
	var regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}
function validar_psw(psw) {
	var regex = /(?=^.{8,}$)((?=.*\w)(?=.*[A-Z])(?=.*[0-9]))^./;
		
	return regex.test(psw) ? true : false;
}
function chequear(x) {
	let respuesta
	for (let i = 0; i <= emails.length; i++) {
		if (emails[i] == x) {
			respuesta = true;

		} if (emails[i] != x) {
			respuesta = false;

		} return respuesta
	}
}


