import "./style.css";

document.querySelector("#app").innerHTML = `
  <div class="min-h-screen flex flex-col items-center justify-center bg-zinc-950 text-white font-sans">
    <h1 class="text-4xl font-bold tracking-tighter">New Project Ready</h1>
    <p class="text-zinc-400 mt-2">Start editing main.js to build something amazing.</p>
    
    <div class="mt-8 flex gap-4">
      <a href="https://vitejs.dev" target="_blank" class="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors border border-zinc-700">Vite Docs</a>
      <a href="https://tailwindcss.com" target="_blank" class="px-4 py-2 bg-sky-600 hover:bg-sky-500 rounded-lg transition-colors">Tailwind CSS</a>
    </div>
  </div>
`;
