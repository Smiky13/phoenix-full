const root = document.getElementById("root") || document.body;
root.innerHTML = `
  <h1>APEX: Protocole Phoenix</h1>
  <button id="enter">Entrer</button>
  <div id="status"></div>
`;
document.getElementById("enter").addEventListener("click", async () => {
  const status = document.getElementById("status");
  const base = import.meta.env.VITE_API_URL;
  if (!base) {
    status.textContent = "Erreur: VITE_API_URL manquante.";
    return;
  }
  const url = base + "/health";
  status.textContent = "Appel: " + url;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      status.textContent = `Erreur HTTP ${res.status}`;
      return;
    }
    const json = await res.json();
    status.textContent = "API répond: " + JSON.stringify(json);
  } catch (e) {
    status.textContent = "Erreur réseau: " + e.message;
  }
});
