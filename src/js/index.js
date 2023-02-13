// chart.js
if(document.querySelectorAll('.personal-statistics-chart')) {
  let allBlockChart = document.querySelectorAll('.personal-statistics-chart');

  allBlockChart.forEach((item) => {
    let collectionJSON = item.dataset.info;
    let title = item.dataset.title;
    let color = item.dataset.color;
    let type = item.dataset.type;

    let parseJSON = JSON.parse(collectionJSON);

    let arrLabels = Object.keys(parseJSON);
    let arrValue = Object.values(parseJSON);

    chartBuild(arrLabels, arrValue, item, title, color, type)
  })
}

function chartBuild(arrLabels, arrValue, canvas, ...desc) {
  let canvasBlock = canvas.children[0]
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
