// Año
document.getElementById("year").textContent = new Date().getFullYear();

// Obtener ID desde la URL
// Ejemplo: ?id=CYC-000123
const params = new URLSearchParams(window.location.search);
const id = params.get("id") || "CYC-UNKNOWN";

// Mostrar ID
document.getElementById("itemId").textContent = id;

// (Opcional futuro)
// Aquí luego puedes:
// - enviar el ID a Google Sheets
// - marcar primer escaneo
// - detectar duplicados