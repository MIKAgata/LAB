import {Home} from './pages/home.js'
import {About} from './pages/about.js'

const routes = {
    "/" : Home,
    "about" : About
}

function router() {
    const path = window.location.patchname
    const page = routes[path] || (() => "<h1>404</h1>")

    document.getElementById("app").innerHTML = page()
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState(null, "", e.target.href);
    router();
  }
});

// handle back/forward browser
window.addEventListener("popstate", router);

// load awal
router();