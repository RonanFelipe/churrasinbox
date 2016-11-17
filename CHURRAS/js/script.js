function mostraReceitas() {
	var texto = document.getElementById("text-receita");

	// Changes the style to show the text
	if (texto.style.display == "block") {
		texto.style.display = "none";
	} else {
		texto.style.display = "block";
	}
}

function mostraReceitas2() {
	var texto = document.getElementById("text-receita2");

	// Changes the style to show the text
	if (texto.style.display == "block") {
		texto.style.display = "none";
	} else {
		texto.style.display = "block";
	}
}

function mostraReceitas3() {
	var texto = document.getElementById("text-receita3");

	// Changes the style to show the text
	if (texto.style.display == "block") {
		texto.style.display = "none";
	} else {
		texto.style.display = "block";
	}
}

function mostraCarnes() {
	var texto = document.getElementById("text-carnes");

	// Changes the style to show the text
	if (texto.style.display == "block") {
		texto.style.display = "none";
	} else {
		texto.style.display = "block";
	}
}

function mostraModos() {
	var texto = document.getElementById("text-mod");

	// Changes the style to show the text
	if (texto.style.display == "block") {
		texto.style.display = "none";
	} else {
		texto.style.display = "block";
	}
}

function mostraDicas() {
	var texto = document.getElementById("text-dicas");

	// Changes the style to show the text
	if (texto.style.display == "block") {
		texto.style.display = "none";
	} else {
		texto.style.display = "block";
	}
}

function mostraCombinações() {
	var texto = document.getElementById("text-combinacoes");

	// Changes the style to show the text
	if (texto.style.display == "block") {
		texto.style.display = "none";
	} else {
		texto.style.display = "block";
	}
}

function GravaRegistro() {
	var xmlhttp = new XMLHttpRequest();

	xmlhttp.onreadystatechange = function() {
		if (xmlhttp.readyState == 4) { //&& xmlhttp.status==200) {               
			document.getElementById("").innerHTML = xmlhttp.responseText;
		}
	}
	xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/par_parceiro", true);
	xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xmlhttp.send('_data={"responsavel": "' + document.getElementById('input1').value + '", "nome": "' + document.getElementById('input2').value + '", "cnpj": "' + document.getElementById('input3').value + '", "tel": "' + document.getElementById('input4').value + '", "email": "' + document.getElementById('input5').value + '"}');

}
function Mensagem(){
    alert('Obrigado por se cadastrar no nosso clube de parceiros.\ Em breve entraremos em contato!');
}