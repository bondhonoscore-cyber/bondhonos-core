// Step 6 – Month-4 Controlled Unlock
const month4Unlocked = true;
const realEarning = 120; // Example earning
const tasksCompleted = "3 / 10";
const upcomingTasks = 2;

if(month4Unlocked){
    const userEarning = document.getElementById('user-earning');
    if(userEarning) userEarning.innerText = `$${realEarning}`;

    const tasks = document.getElementById('tasks-completed');
    if(tasks) tasks.innerText = tasksCompleted;

    const upcoming = document.getElementById('upcoming-tasks');
    if(upcoming) upcoming.innerText = upcomingTasks;

    const locked = document.querySelector('.locked');
    if(locked) locked.innerText = "Monetization activated";
}
