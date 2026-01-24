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
