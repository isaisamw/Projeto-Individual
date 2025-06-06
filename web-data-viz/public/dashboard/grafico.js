var fkUsuario = sessionStorage.ID_USUARIO;
var b_usuario = sessionStorage.NOME_USUARIO;

// Chamando funções assim que carregar
tentativas();
personalidadeAtual();
personalidadePredominante();
mostrarGraficoPizza();

function tentativas() {
    fetch(`/usuarios/tentativastotais/${fkUsuario}`)
        .then(res => res.json())
        .then(resposta => {
            var qtd = resposta[0].tentativastotais;
            document.getElementById("tentativastotais").innerText = `${qtd}`;
        });
}

function personalidadeAtual() {
    fetch(`/usuarios/personalidadeAtual/${fkUsuario}`)
        .then(res => res.json())
        .then(resposta => {
            document.querySelector(".KPI2").innerHTML += `<p>${resposta[0].personalidade}</p>`;
        });
}

function personalidadePredominante() {
    fetch(`/usuarios/personalidadePredominante`)
        .then(res => res.json())
        .then(resposta => {
            document.querySelector(".KPI3").innerHTML += `<p>${resposta[0].personalidade}</p>`;
        });
}

function mostrarGraficoPizza() {
    fetch(`/usuarios/dadosgraficos/${fkUsuario}`)
        .then(res => res.json())
        .then(dados => {
            const ctx = document.getElementById('graficoPizza');
            const grafico = new Chart(ctx, {
                type: 'pie',
                data: {
                    labels: ['Romântico', 'Criativo', 'Aventureiro', 'Fashionista'],
                    datasets: [{
                        label: 'Perfil',
                        data: [
                            dados[0].romantico,
                            dados[0].criativo,
                            dados[0].aventureiro,
                            dados[0].fashionista
                        ],
                        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56', '#8e44ad']
                    }]
                }
            });
        });
}
