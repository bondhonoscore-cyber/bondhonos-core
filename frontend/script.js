// ===== CONFIG =====
const TOTAL_TASK = 10;

// ===== SUPABASE INIT =====
const SUPABASE_URL = "https://cumlgdgzoynswoqzbctg.supabase.co";  // Project URL
const SUPABASE_ANON_KEY = "sb_publishable_IPicyezYc7MDvujsz6irBA_3O5xj9Ii"; // Anon Key
const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// ===== LOAD SAVED DATA FROM LOCALSTORAGE =====
let earning = localStorage.getItem("earning")
  ? parseInt(localStorage.getItem("earning"))
  : 0;

let completedTask = localStorage.getItem("task")
  ? parseInt(localStorage.getItem("task"))
  : 0;

// ===== PAGE LOAD =====
window.onload = async function () {
  await loadSupabaseData(); // Load live data from Supabase if exists
  updateUI();
};

// ===== UPDATE UI =====
function updateUI() {
  document.getElementById("user-earning").innerText = "$" + earning;
  document.getElementById("tasks-completed").innerText =
    completedTask + " / " + TOTAL_TASK;

  document.getElementById("account-status").innerText =
    completedTask >= TOTAL_TASK ? "Completed" : "Active";

  // Admin inputs auto-fill if present
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
  saveSupabaseData();
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
  saveSupabaseData();
}

// ===== ADMIN PANEL =====
function saveAdminData() {
  const adminEarning = parseInt(document.getElementById("admin-earning").value) || 0;
  const adminTasksRaw = document.getElementById("admin-tasks").value || "0 / 10";
  const adminTasks = parseInt(adminTasksRaw.split("/")[0]) || 0;

  earning = adminEarning;
  completedTask = adminTasks;

  localStorage.setItem("earning", earning);
  localStorage.setItem("task", completedTask);

  updateUI();
  saveSupabaseData(); // Save admin changes to Supabase
  alert("Admin data saved! Dashboard updated ✅");
}

// ===== SUPABASE FUNCTIONS =====
async function saveSupabaseData() {
  // Save to table 'user_progress' with single row for demo
  const { data, error } = await supabaseClient
    .from("user_progress")
    .upsert([{ id: 1, earning: earning, completed_task: completedTask }]);

  if (error) console.log("Supabase save error:", error);
}

async function loadSupabaseData() {
  const { data, error } = await supabaseClient
    .from("user_progress")
    .select("*")
    .eq("id", 1)
    .single();

  if (!error && data) {
    earning = data.earning || earning;
    completedTask = data.completed_task || completedTask;

    // Sync localStorage
    localStorage.setItem("earning", earning);
    localStorage.setItem("task", completedTask);
  }
}
