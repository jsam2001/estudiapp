export default function Perfil() {
  return `
    <section class="screen-container profile">

      <!-- Header -->
      <header class="app-header">
        <button class="icon-btn">←</button>
        <h1 class="app-title">Profile</h1>
        <button class="icon-btn">⚙️</button>
      </header>

      <!-- User card -->
      <div class="card user-card">
        <img src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png" alt="avatar" class="avatar"/>
        <div class="user-info">
          <h2>Sarah Johnson</h2>
          <p>sarah.johnson@email.com</p>
        </div>
        <button class="btn btn-outline edit-btn">Edit Profile</button>
      </div>

      <!-- Preferences -->
      <div class="card">
        <h3>Preferences</h3>

        <div class="preference">
          <span>Push Notifications</span>
          <label class="switch">
            <input type="checkbox" checked>
            <span class="slider"></span>
          </label>
        </div>
        <small class="hint">Get reminders for tasks and study sessions</small>

        <div class="preference">
          <span>Study Routine Reminders</span>
          <label class="switch">
            <input type="checkbox">
            <span class="slider"></span>
          </label>
        </div>
        <small class="hint">Daily reminders to maintain study habits</small>
      </div>

      <!-- Statistics -->
      <div class="card">
        <h3>Study Statistics</h3>

        <p>Hours studied this week <span class="hours">24h</span></p>
        <div class="progress-bar">
          <div class="progress" style="width: 70%;"></div>
        </div>
        <p class="goal">Goal: 35 hours</p>

        <div class="stats">
          <div class="stat-box">
            <h4>5</h4>
            <p>Active Subjects</p>
          </div>
          <div class="stat-box">
            <h4>42</h4>
            <p>Tasks Completed</p>
          </div>
        </div>

        <h4>Weekly Progress</h4>
        <div class="week-grid">
          <span>Mon</span><span>Tue</span><span>Wed</span>
          <span>Thu</span><span>Fri</span><span>Sat</span><span>Sun</span>
        </div>
      </div>

      <!-- Bottom Nav -->
      <nav class="bottom-nav">
        <button data-route="dashboard">🏠<span>Home</span></button>
        <button data-route="materias">📚<span>Subjects</span></button>
        <button data-route="tareas">📝<span>Tasks</span></button>
        <button data-route="tecnicas">🎯<span>Study</span></button>
        <button data-route="perfil" class="active">👤<span>Profile</span></button>
      </nav>

    </section>
  `;
}
