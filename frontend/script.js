// ===== CONFIG =====
const TOTAL_TASK = 10;

// ===== LOAD SAVED DATA =====
let earning = localStorage.getItem("earning")
  ? parseInt(localStorage.getItem("earning"))
  : 0;

let completedTask = localStorage.getItem("task")
  ? parseInt(localStorage.getItem("task"))
  : 0;

// ===== PAGE LOAD =====
window.onload = function () {
  updateUI();
};

// ===== UPDATE UI =====
function updateUI() {
  document.getElementById("user-earning").innerText = "$" + earning;
  document.getElementById("tasks-completed").innerText =
    completedTask + " / " + TOTAL_TASK;

  if (completedTask >= TOTAL_TASK) {
    document.getElementById("account-status").innerText = "Completed";
  } else {
    document.getElementById("account-status").innerText = "Active";
  }

  // Admin inputs filled automatically if present
  if (document.getElementById("admin-earning")) {
    document.getElementById("admin-earning").value = earning;
  }
  if (document.getElementById("admin-tasks")) {
    document.getElementById("admin-tasks").value = completedTask + " / " + TOTAL_TASK;
  }
  if (document.getElementById("admin-upcoming")) {
    document.getElementById("admin-upcoming").value = TOTAL_TASK - completedTask;
  }
}

// ===== ADD EARNING =====
function addEarning() {
  if (completedTask >= TOTAL_TASK) {
    alert("Task completed! Earnings locked 🔒");
    return;
  }

  earning += 10;
  localStorage.setItem("earning", earning);
  updateUI();
}

// ===== ADD TASK =====
function addTask() {
  if (completedTask >= TOTAL_TASK) {
    alert("All tasks completed ✅");
    return;
  }

  completedTask += 1;
  localStorage.setItem("task", completedTask);
  updateUI();
}

// ===== ADMIN PANEL =====
function saveAdminData() {
  const adminEarning = parseInt(document.getElementById("admin-earning").value) || 0;
  const adminTasksRaw = document.getElementById("admin-tasks").value || "0 / 10";
  const adminUpcoming = parseInt(document.getElementById("admin-upcoming").value) || 0;

  const adminTasks = parseInt(adminTasksRaw.split("/")[0]) || 0;

  earning = adminEarning;
  completedTask = adminTasks;

  localStorage.setItem("earning", earnin
