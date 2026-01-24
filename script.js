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
