// frontend/js/api.js

// Para pruebas locales:
const API = "http://localhost:3000";
// Cuando usen los VPS, pueden cambiar a:
// const API = "http://10.15.99.23:3000";

async function apiGet(url) {
  const res = await fetch(API + url);
  if (!res.ok) throw new Error("Error en GET " + url);
  return res.json();
}

async function apiPost(url, data) {
  const res = await fetch(API + url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error en POST " + url);
  return res.json();
}

async function apiPut(url, data) {
  const res = await fetch(API + url, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Error en PUT " + url);
  return res.json();
}

async function apiDelete(url) {
  const res = await fetch(API + url, { method: "DELETE" });
  if (!res.ok) throw new Error("Error en DELETE " + url);
  return res.json();
}
