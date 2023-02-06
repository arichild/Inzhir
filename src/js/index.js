// chart.js
const ctx = document.getElementById('myChart');

const DATA_COUNT = 7;
const NUMBER_CFG = {count: DATA_COUNT, min: -100, max: 100};

const labels = [
  "January", "February", "May", "June", "July"
];
const data = {
  labels,
  datasets: [
    {
      data: [60, 20, 42, 46, 78, 10],
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


const myChart = new Chart(ctx, config);
