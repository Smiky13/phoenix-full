const api = (typeof import.meta !== "undefined" && import.meta.env && import.meta.env.VITE_API_URL)
  ? import.meta.env.VITE_API_URL
  : "https://example-api.onrender.com"; // sera remplacé par l'URL Render

document.getElementById("enter").addEventListener("click", async () => {
  const statusEl = document.getElementById("status");
  statusEl.textContent = "Connexion à l’API...";
  try {
    const res = await fetch(`${api}/health`);
    const json = await res.json();
    statusEl.textContent = "API répond: " + JSON.stringify(json);
  } catch (e) {
    statusEl.textContent = "Erreur de connexion à l’API: " + e.message;
  }
});
