// Materias.js
export default function Materias() {
  return `
    <div class="screen-container">

      <!-- Header superior -->
      <header class="app-header">
        <button class="icon-btn">←</button>
        <h1 class="app-title">Subjects</h1>
        <button class="icon-btn">🔍</button>
      </header>

      <!-- Lista de materias -->
      <main class="subjects">
        <div class="card">
          <div class="card-info">
            <h2>Mathematics</h2>
            <p>12 tasks remaining</p>
          </div>
          <div class="progress-wrapper">
            <div class="progress-bar">
              <div class="fill" style="width: 75%"></div>
            </div>
            <span class="progress-text">75%</span>
          </div>
        </div>

        <div class="card">
          <div class="card-info">
            <h2>Biology</h2>
            <p>8 tasks remaining</p>
          </div>
          <div class="progress-wrapper">
            <div class="progress-bar">
              <div class="fill" style="width: 80%"></div>
            </div>
            <span class="progress-text">80%</span>
          </div>
        </div>

        <div class="card">
          <div class="card-info">
            <h2>Chemistry</h2>
            <p>15 tasks remaining</p>
          </div>
          <div class="progress-wrapper">
            <div class="progress-bar danger">
              <div class="fill" style="width: 40%"></div>
            </div>
            <span class="progress-text">40%</span>
          </div>
        </div>

        <div class="card">
          <div class="card-info">
            <h2>Physics</h2>
            <p>6 tasks remaining</p>
          </div>
          <div class="progress-wrapper">
            <div class="progress-bar success">
              <div class="fill" style="width: 85%"></div>
            </div>
            <span class="progress-text">85%</span>
          </div>
        </div>
      </main>

      <!-- Botón flotante -->
      <button class="fab">＋</button>

      <!-- Navegación inferior -->
      <nav class="bottom-nav">
        <a href="#" class="active">🏠<span>Home</span></a>
        <a href="#">📑<span>Subjects</span></a>
        <a href="#">📝<span>Tasks</span></a>
        <a href="#">📖<span>Study</span></a>
        <a href="#">👤<span>Profile</span></a>
      </nav>

    </div>
  `;
}
