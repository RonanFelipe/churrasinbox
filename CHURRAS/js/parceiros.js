function GravaRegistro() {
	var xmlhttp = new XMLHttpRequest();
	//var dados;
	xmlhttp.onreadystatechange=function() {
		if (xmlhttp.readyState==4 && xmlhttp.status==200) {               
			//document.getElementById("").innerHTML = xmlhttp.responseText;
		}
	}
	//dados='_data={"nome":"'+document.getElementById('nome').value+'","responsavel":"'+document.getElementById('responsavel').value+'","cnpj":"'+document.getElementById('cnpj').value+'","tel":"'+document.getElementById('telefone').value+'","email":"'+document.getElementById('email').value +'"}');'
	xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/par_parceiro", true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	//xmlhttp.send(dados);
	//xmlhttp.send('_data={"nome":"'+document.getElementById('nome').value+'","responsavel":"'+ document.getElementById('responsavel').value+'"}');
	xmlhttp.send('_data={"nome":"'+document.getElementById('nome').value+'","responsavel":"'+document.getElementById('responsavel').value+'","cnpj":"'+document.getElementById('cnpj').value+'","tel":"'+document.getElementById('telefone').value+'","email":"'+document.getElementById('email').value +'"}');
}

/*function GravaRegistro() {
 var xmlhttp = new XMLHttpRequest();

 xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4) { //&& xmlhttp.status==200) {               
   document.getElementById("").innerHTML = xmlhttp.responseText;
  }
 }
 xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/par_parceiro", true);
 xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
 xmlhttp.send('_data={"responsavel": "' + document.getElementById('input1').value + '", "nome": "' + document.getElementById('input2').value + '", "cnpj": "' + document.getElementById('input3').value + '", "tel": "' + document.getElementById('input4').value + '", "email": "' + document.getElementById('input5').value + '"}');

}*/

function DeletaRegistro() {
	var i,j;
	for(i=89;i<=120;i++){
	var xmlhttp = new XMLHttpRequest();
	j=i.toString();
	xmlhttp.open("DELETE", "http://www.smartsoft.com.br/webservice/restifydb/Employees/par_parceiro/"+j, true);
	xmlhttp.send();
	}
}

function Alerta() {
	window.alert("Obrigado pelo interesse em ser nosso parceiro!");
}

/*function LimpaForm() {
	var formulario = document.getElementByName('formulario')[0];
	formulario.reset();
}*/