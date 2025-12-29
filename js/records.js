let currentMode = "expense";

function setMode(m) {
  currentMode = m;
}

function addRecord() {
  const [item, amount] = recordInput.value.split(" ");
  if (!item || !amount) return;

  db.collection("users")
    .doc(currentUser.uid)
    .collection("records")
    .add({
      item,
      amount: Number(amount),
      type: currentMode,
      time: new Date()
    })
    .then(loadData);

  recordInput.value = "";
}

function loadData() {
  db.collection("users")
    .doc(currentUser.uid)
    .collection("records")
    .get()
    .then(snap => {
      recordTable.innerHTML = "";
      let spend = 0, save = 0;

      snap.forEach(doc => {
        const d = doc.data();
        if (d.type === "saving") save += d.amount;
        else spend += d.amount;

        recordTable.innerHTML += `<tr><td>${d.item}</td><td>${d.amount}</td></tr>`;
      });

      updateUI(spend, save);
    });
}
