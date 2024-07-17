document.addEventListener("DOMContentLoaded", function () {
    const dementiaRiskCtx = document.getElementById('dementiaRiskChart').getContext('2d');
    const cognitiveDeclineCtx = document.getElementById('cognitiveDeclineChart').getContext('2d');
    const hippocampalVolumeCtx = document.getElementById('hippocampalVolumeChart').getContext('2d');

    const dementiaRiskChart = new Chart(dementiaRiskCtx, {
        type: 'bar',
        data: {
            labels: ['Pain-Free', 'Single-Site CP', 'Multi-Site CP'],
            datasets: [{
                label: 'Dementia Risk',
                data: [1, 1.19, 1.36],
                backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const cognitiveDeclineChart = new Chart(cognitiveDeclineCtx, {
        type: 'line',
        data: {
            labels: ['50', '55', '60', '65', '70', '75', '80'],
            datasets: [{
                label: 'Pain-Free',
                data: [100, 95, 90, 85, 80, 75, 70],
                borderColor: '#4caf50',
                fill: false
            }, {
                label: 'Single-Site CP',
                data: [100, 93, 87, 81, 75, 69, 63],
                borderColor: '#ff9800',
                fill: false
            }, {
                label: 'Multi-Site CP',
                data: [100, 90, 80, 70, 60, 50, 40],
                borderColor: '#f44336',
                fill: false
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    const hippocampalVolumeChart = new Chart(hippocampalVolumeCtx, {
        type: 'bar',
        data: {
            labels: ['Pain-Free', 'Single-Site CP', 'Multi-Site CP'],
            datasets: [{
                label: 'Hippocampal Volume Loss (mm³)',
                data: [0, -9.795, -25.825],
                backgroundColor: ['#4caf50', '#ff9800', '#f44336'],
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
