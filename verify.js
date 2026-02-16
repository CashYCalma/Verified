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
// DROP DINÁMICO PARA NFC
const params = new URLSearchParams(window.location.search);
const drop = params.get("drop");

const dropElement = document.getElementById("dropNumber");

if(drop && drop >= 1 && drop <= 50){
  dropElement.textContent = "Drop 01 • " + drop + " of 50";
} else {
  dropElement.textContent = "Drop 01 • Limited Edition";
}
// NUMERO DE PRENDA DINÁMICO
const params = new URLSearchParams(window.location.search);
const drop = params.get("drop");

const dropElement = document.getElementById("dropNumber");

if(drop && drop >= 1 && drop <= 50){
  dropElement.textContent = "Esta es la prenda número " + drop + " de 50";
} else {
  dropElement.textContent = "Edición Limitada • 50 Unidades";
}
