export default function Onboarding() {
  return `
    <div class="onboarding-container">
      <h1 class="title">EstudiApp</h1>

      <div class="illustration">
        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135755.png" 
             alt="Study Illustration" />
        <p>Study Illustration</p>
      </div>

      <h2 class="subtitle">Organize your study, <br/> reach your goals.</h2>
      <p class="description">
        Take control of your learning journey with smart planning and progress tracking.
      </p>

      <div class="actions">
        <button class="btn btn-primary" data-route="dashboard">Start Up</button>
        <button class="btn btn-outline">Sign Up</button>
      </div>

      <div class="divider">or continue with</div>

      <div class="social-buttons">
        <button class="social"><img src="https://cdn-icons-png.flaticon.com/512/281/281764.png" alt="Google" /></button>
        <button class="social"><img src="https://cdn-icons-png.flaticon.com/512/731/731985.png" alt="Apple" /></button>
        <button class="social"><img src="https://cdn-icons-png.flaticon.com/512/733/733547.png" alt="Facebook" /></button>
      </div>
    </div>
  `;
}
