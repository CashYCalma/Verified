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
// DROP DINÁMICO 100% FUNCIONAL
document.addEventListener("DOMContentLoaded", function(){

  const dropElement = document.getElementById("dropNumber");
  if(!dropElement) return;

  const params = new URLSearchParams(window.location.search);
  const drop = parseInt(params.get("drop"));

  if(!isNaN(drop) && drop >= 1 && drop <= 50){

    if(drop === 1){
      dropElement.textContent = drop + " de 50 unidades";
    } else {
      dropElement.textContent = drop + " de 50 prendas";
    }

  } else {
    dropElement.textContent = "Edición Limitada • 50 Unidades";
  }

});
