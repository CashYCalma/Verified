document.addEventListener("DOMContentLoaded", function(){

  const info = document.getElementById("scanInfo");

  if(!info) return;

  const fecha = new Date().toLocaleString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });

  fetch("https://ipapi.co/json/")
    .then(res => res.json())
    .then(data => {
      info.innerHTML = `
        ${fecha}<br>
        🌍 ${data.country_name}
      `;
    })
    .catch(() => {
      info.innerHTML = `
        ${fecha}<br>
        🌍 Location Secured
      `;
    });

});
// ===== DROP DINÁMICO =====
const dropElement = document.getElementById("dropNumber");

const params = new URLSearchParams(window.location.search);
const drop = parseInt(params.get("drop"));

if(!isNaN(drop) && drop >= 1 && drop <= 50){

  if(drop === 1){
    dropElement.textContent = "Esta es la prenda número 1 de 50";
  } else {
    dropElement.textContent = "Esta es la prenda número " + drop + " de 50";
  }

} else {
  dropElement.textContent = "Edición Limitada • 50 Unidades";
}

