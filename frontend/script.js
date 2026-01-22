// BondhonOS Core – Shared Frontend Logic

function saveAdmin() {
  const data = {
    month4: document.getElementById("month4").checked,
    earning: document.getElementById("earning").value,
    tasks: document.getElementById("tasks").value,
    upcoming: document.getElementById("upcoming").value
  };

  localStorage.setItem("bondhonos_core_data", JSON.stringify(data));
  alert("Admin data saved successfully");
}

function loadDashboard() {
  const raw = localStorage.getItem("bondhonos_core_data");
  if (!raw) return;

  const data = JSON.parse(raw);

  if (data.month4) {
    document.getElementById("user-earning").innerText = "$" + data.earning;
    document.getElementById("tasks-completed").innerText = data.tasks;
    document.getElementById("upcoming-tasks").innerText = data.upcoming;
  }
}
