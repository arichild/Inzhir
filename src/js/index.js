// chart.js
if(document.querySelector('.personal-statistics-chart.weight')) {
  const ctx = document.getElementById('chart-weight');
  const chart = document.querySelector('.personal-statistics-chart.weight')

  const chartLabels = chart.dataset.labels
  const arrChartLabels = (chartLabels.split(','))

  const chartData = chart.dataset.data
  const arrChartData = (chartData.split(','))

  const data = {
    labels: arrChartLabels,
    datasets: [
      {
        data: arrChartData,
        label: "Взвешивания за последние две недели",
        borderColor: "#E64A70"
      },
    ]
  };

  const config = {
    type: 'line',
    data: data,
    options: {
      responsive: true,
    },
  };

  const chartWeight = new Chart(ctx, config);
}

if(document.querySelector('.personal-statistics-chart.steps')) {
  const ctx = document.getElementById('chart-steps');
  const chart = document.querySelector('.personal-statistics-chart.steps')

  const chartLabels = chart.dataset.labels
  const arrChartLabels = (chartLabels.split(','))

  const chartData = chart.dataset.data
  const arrChartData = (chartData.split(','))

  const data = {
    labels: arrChartLabels,
    datasets: [
      {
        data: arrChartData,
        label: "Шаги за последние две недели",
        backgroundColor: "#5C267E",
        barPercentage: 0.2
      },
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        }
      }
    },
  };

  const chartSteps = new Chart(ctx, config);
}

if(document.querySelector('.personal-statistics-chart.water')) {
  const ctx = document.getElementById('chart-water');
  const chart = document.querySelector('.personal-statistics-chart.water')

  const chartLabels = chart.dataset.labels
  const arrChartLabels = (chartLabels.split(','))

  const chartData = chart.dataset.data
  const arrChartData = (chartData.split(','))

  const data = {
    labels: arrChartLabels,
    datasets: [
      {
        data: arrChartData,
        label: "Вода за последние две недели",
        backgroundColor: "#5C267E",
        barPercentage: 0.2
      },
    ]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true,
        }
      }
    },
  };

  const chartWater = new Chart(ctx, config);
}
