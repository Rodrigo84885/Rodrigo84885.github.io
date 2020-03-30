window.onload = function () {
    //chama a função para registar o recluso
    registarRecluso();

    function registarRecluso(){
        var data = {};
        data.nome = "abc";
        data.numero = "123"
        //data.birthdate = "25/01/1997";
        //data.date = "17/03/2020";
        console.log(data); //debugging para ver os dados que foram enviados
        //chamada fetch para envio dos dados para o servior via POST
        fetch('http://localhost:8080/teste', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(data)
        }).then(function (response) {
            if (!response.ok) {
                console.log(response.status); //=> number 100–599
                console.log(response.statusText); //=> String
                console.log(response.headers); //=> Headers
                console.log(response.url); //=> String
                if (response.status === 409) {
                    alert("Duplicated Email");
                } else {
                    throw Error(response.statusText);
                }
            } else {
                alert("Registado com Sucesso");
            }
        }).then(function (result) {
            console.log(result);
        }).catch(function (err) {
            alert("Submission error"); console.error(err);
        });
    }
}    