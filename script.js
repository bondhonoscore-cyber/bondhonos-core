function saveAdminData() {
  const earning = document.getElementById("admin-earning").value;
  const tasks = document.getElementById("admin-tasks").value;
  const upcoming = document.getElementById("admin-upcoming").value;

  localStorage.setItem("earning", earning);
  localStorage.setItem("tasks", tasks);
  localStorage.setItem("upcoming", upcoming);

  alert("Saved! Now open Dashboard.");
}

window.onload = function () {
  const earning = localStorage.getItem("earning");
  const tasks = localStorage.getItem("tasks");
  const upcoming = localStorage.getItem("upcoming");

  if (earning) document.getElementById("user-earning").innerText = `$${earning}`;
  if (tasks) document.getElementById("tasks-completed").innerText = tasks;
  if (upcoming) document.getElementById("upcoming-tasks").innerText = upcomi
