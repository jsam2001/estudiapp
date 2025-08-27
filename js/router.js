import Dashboard from "./components/dashboard.js";
import Estadisticas from "./components/estadisticas.js";
import Habitos from "./components/habitos.js";
import Materias from "./components/materias.js";
import Onboarding from "./components/onboarding.js";
import Perfil from "./components/perfil.js";
import Tareas from "./components/tareas.js";
import Tecnicas from "./components/tecnicas.js";

const routes = {
  dashboard: Dashboard,
  estadisticas: Estadisticas,
  habitos: Habitos,
  materias: Materias,
  onboarding: Onboarding,
  perfil: Perfil,
  tareas: Tareas,
  tecnicas: Tecnicas,
};

const app = document.getElementById("app");

export function navigate(route) {
  const component = routes[route];
  if (component) {
    app.innerHTML = component(); 
    window.history.pushState({}, "", `#${route}`);
  }
}

document.addEventListener("click", (e) => {
  const route = e.target.closest("[data-route]")?.getAttribute("data-route");
  if (route) {
    navigate(route);
  }
});

window.addEventListener("popstate", () => {
  const route = window.location.hash.replace("#", "") || "onboarding";
  navigate(route);
});

const initialRoute = window.location.hash.replace("#", "") || "onboarding";
navigate(initialRoute);
