function GravaAssinatura() {
    var xmlhttp;
    xmlhttp = new XMLHttpRequest();
	xmlhttp.onreadystatechange = function () {
		if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
			window.alert("Obrigado pela Assinatura. O seu pagamento está sendo processado!");
       		}
	}
	xmlhttp.open("POST", "http://www.smartsoft.com.br/webservice/restifydb/Employees/chu_compra_assinante", true);
	xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
	xmlhttp.send('_data={"nome":"'+document.getElementById('nome').value+ '","email":"'+document.getElementById('email').value+ '","endereco":"'+document.getElementById('endereco').value+ '","cep":"'+document.getElementById('cep').value+ '","numero":"'+document.getElementById('numero').value+ '","numero_cartao":"'+document.getElementById('numero_cartao').value+ '","vencimento":"'+document.getElementById('vencimento').value+ '","codigo_seguranca":"'+document.getElementById('codigo_seguranca').value+ '"}');
    
}

function consultaCEP() {
			var xhr = new XMLHttpRequest ();
			xhr.onreadystatechange = function () {
        			if (xhr.readyState === XMLHttpRequest.DONE) {
        				if (xhr.status === 200) {
           		 			var data = JSON.parse (xhr.responseText);
           		 			document.getElementById('endereco').value = data.logradouro+data.bairro+data.cidade+data.estado;
        				}
        				else if (xhr.status === 404) {
           		 			alert(xhr.statusText) ;
           		 		}
           		 		else alert("Erro desconhecido");
   			 	}
			}
   			 xhr.open ('GET', 'http://api.postmon.com.br/v1/cep/' + document.getElementById('cep').value);
   			 xhr.send();
}
