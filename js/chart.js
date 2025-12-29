let myChart;

function initChart() {
  const ctx = document.getElementById("myChart");
  myChart = new Chart(ctx, {
    type: "doughnut",
    data: {
      labels: ["支出"],
      datasets: [{ data: [0], backgroundColor: ["orange"] }]
    }
  });
}
