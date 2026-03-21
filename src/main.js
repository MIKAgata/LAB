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

