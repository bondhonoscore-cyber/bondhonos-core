// ===== ADMIN PANEL =====
function saveAdminData() {
  const earning = document.getElementById("admin-earning").value;
  const tasks = document.getElementById("admin-tasks").value;
  const upcoming = document.getElementById("admin-upcoming").value;

  localStorage.setItem("earning", earning);
  localStorage.setItem("tasks", tasks);
  localStorage.setItem("upcoming", upcoming);

  alert("Saved! Now open Dashboard (index.html)");
}

// ===== DASHBOARD LOAD =====
window.onload = function () {
  const earning = localStorage.getItem("earning");
  const tasks = localStorage.getItem("tasks");
  const upcoming = localStorage.getItem("upcoming");

  if (earning && document.getElementById("user-earning")) {
    document.getElementById("user-earning").innerText = "$" + earning;
  }

  if (tasks && document.getElementById("tasks-completed")) {
    document.getElementById("tasks-completed").innerText = tasks;
  }

  if (upcoming && document.getElementById("upcoming-tasks")) {
    document.getElementById("upcoming-tasks").innerText = upcoming;
  }
};

// ===== ADD $10 BUTTON =====
let currentEarning = localStorage.getItem("earning")
  ? parseInt(localStorage.getItem("earning"))
  : 0;

function addEarning() {
  currentEarning += 10;
  localStorage.setItem("earning", currentEarning);

  document.getElementById("user-earning").innerText =
    "$" + currentEarning;
}
