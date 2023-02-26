// chart.js
if(document.querySelectorAll('.personal-statistics-chart').length !== 0) {
  let allBlockChart = document.querySelectorAll('.personal-statistics-chart');

  allBlockChart.forEach((item) => {
    const collectionJSON = item.dataset.info || null;
    const title = item.dataset.title || 'Статистика';
    const color = item.dataset.color || '#E64A70';
    const type = item.dataset.type || null;

    if(!collectionJSON || !type) return

    const parseJSON = JSON.parse(collectionJSON);

    const arrLabels = Object.keys(parseJSON);
    const arrValue = Object.values(parseJSON);

    chartBuild(arrLabels, arrValue, item, title, color, type)
  })
}

function chartBuild(arrLabels, arrValue, canvas, ...desc) {
  const canvasBlock = canvas.children[0]
  let title
  let color
  let type

  [title, color, type] = [...desc]

  const data = {
    labels: arrLabels,
    datasets: [
      {
        data: arrValue,
        label: title,
        borderColor: color,
        barPercentage: 0.1,
        backgroundColor: color,
      },
    ]
  };

  const config = {
    type: type,
    data: data,
    options: {
      responsive: true,
    },
  };

  const chartInit = new Chart(canvasBlock, config);
}
