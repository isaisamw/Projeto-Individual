// Quantidade de respostas por perfil
let respostas = {
    romantico: 5,
    criativo: 3,
    aventureiro: 1,
    fashionista: 1
};

// Soma total de respostas
let total = respostas.romantico + respostas.criativo + respostas.aventureiro + respostas.fashionista;

let porcentagens = [
    (respostas.romantico / total) * 100,
    (respostas.criativo / total) * 100,
    (respostas.aventureiro / total) * 100,
    (respostas.fashionista / total) * 100
];

const ctx = document.getElementById('graficoPizza').getContext('2d');
const graficoPizza = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Romântico', 'Criativo', 'Aventureiro', 'Fashionista'],
        datasets: [{
            data: porcentagens,
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56', 
                '#4BC0C0'  
            ]
        }]
    },
    options: {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        return `${context.label}: ${context.formattedValue}%`;
                    }
                }
            }
        }
    }
});
