function updateUI(spend, save) {
  monthSpend.innerText = spend;
  monthSave.innerText = save;

  const percent = Math.min(spend / 10000 * 100, 100);
  budgetBar.style.width = percent + "%";

  myChart.data.datasets[0].data = [spend];
  myChart.update();
}
