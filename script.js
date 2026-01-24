// ===== DASHBOARD ONLY =====
let currentEarning = localStorage.getItem("earning")
  ? parseInt(localStorage.getItem("earning"))
  : 0;

window.onload = function () {
  document.getElementById("user-earning").innerText = "$" + currentEarning;
};

function addEarning() {
  currentEarning += 10;
  localStorage.setItem("earning", currentEarning);
  document.getElementById("user-earning").innerText = "$" + currentEarning;
}
// ===== TASK SYSTEM =====
let completedTasks = localStorage.getItem("tasks")
  ? parseInt(localStorage.getItem("tasks"))
  : 0;

const totalTasks = 10;

window.onload = function () {
  document.getElementById("user-earning").innerText = "$" + currentEarning;
  document.getElementById("tasks-completed").innerText =
    completedTasks + " / " + totalTasks;
};

function addTask() {
  if (completedTasks < totalTasks) {
    completedTasks++;
    localStorage.setItem("tasks", completedTasks);
    document.getElementById("tasks-completed").innerText =
      completedTasks + " / " + totalTasks;
  }
}
