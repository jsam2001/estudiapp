export default function Dashboard() {
  return `
    <section class="dashboard">
      <header class="dashboard-header">
        <p>Welcome back,</p>
        <h2>Sarah!</h2>
        <img src="https://cdn-icons-png.flaticon.com/512/2922/2922506.png" alt="avatar" class="avatar"/>
      </header>

      <div class="dashboard-cards">
        <div class="card" data-route="materias">
          <span class="icon">📚</span>
          <h3>Subjects</h3>
          <p>Manage your courses</p>
        </div>
        <div class="card" data-route="tareas">
          <span class="icon">📝</span>
          <h3>Tasks</h3>
          <p>Track assignments</p>
        </div>
        <div class="card" data-route="tecnicas">
          <span class="icon">🎯</span>
          <h3>Study Techniques</h3>
          <p>Learn methods</p>
        </div>
        <div class="card" data-route="perfil">
          <span class="icon">👤</span>
          <h3>Profile</h3>
          <p>Account settings</p>
        </div>
      </div>

      <div class="recent-activity">
        <h4>Recent Activity</h4>
        <div class="activity">
          <span>✅</span>
          <p><strong>Completed Math Assignment</strong><br><small>2 hours ago</small></p>
        </div>
        <div class="activity">
          <span>📖</span>
          <p><strong>Started Biology Chapter 5</strong><br><small>Yesterday</small></p>
        </div>
      </div>

      <nav class="bottom-nav">
        <button data-route="dashboard">🏠 Home</button>
        <button data-route="materias">📚 Subjects</button>
        <button data-route="tareas">📝 Tasks</button>
        <button data-route="tecnicas">🎯 Study</button>
        <button data-route="perfil">👤 Profile</button>
      </nav>
    </section>
  `;
}
