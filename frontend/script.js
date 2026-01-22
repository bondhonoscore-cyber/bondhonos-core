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
  if (!raw) return
document.addEventListener("DOMContentLoaded", () => {
  const systemState = {
    month4Unlocked: true,
    earnings: 120,
    tasksCompleted: 3,
    totalTasks: 10,
    upcomingTasks: 2,
    accountStatus: "Active"
  };

  if (systemState.month4Unlocked) {
    document.getElementById("user-earning").innerText =
      "$" + systemState.earnings;

    document.getElementById("tasks-completed").innerText =
      systemState.tasksCompleted + " / " + systemState.totalTasks;

    document.getElementById("upcoming-tasks").innerText =
      systemState.upcomingTasks;

    document.getElementById("account-status").innerText =
      systemState.accountStatus;
  }
});
// script.js

// Load JSON data dynamically
fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const user = data.user;

    // Update Dashboard
    document.getElementById('user-earning').innerText = `$${user.earning}`;
    document.getElementById('tasks-completed').innerText = user.tasksCompleted;
    document.getElementById('account-status').innerText = user.accountStatus;
    document.getElementById('upcoming-tasks').innerText = user.upcomingTasks;

    // Remove "Monitoring in progress" text if data loaded
    const locked = document.querySelector('.locked');
    if (locked) locked.style.display = 'none';
  })
  .catch(err => {
    console.error("Error loading dashboard data:", err);
  });
