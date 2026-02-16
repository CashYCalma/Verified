document.addEventListener("DOMContentLoaded", function(){

  // ===== FECHA + PAÍS (VERSIÓN GITHUB SEGURA) =====
const info = document.getElementById("scanInfo");

const fecha = new Date().toLocaleString("en-US", {
  year:"numeric",
  month:"long",
  day:"numeric",
  hour:"2-digit",
  minute:"2-digit",
  second:"2-digit"
});

fetch("https://api.country.is/")
  .then(res => res.json())
  .then(data => {

    const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    const countryName = regionNames.of(data.country);

    info.innerHTML = fecha + "<br>🌍 " + countryName;

  })
  .catch(() => {
    info.innerHTML = fecha + "<br>🌍 Verified Location";
  });


  // ===== DROP DINÁMICO =====
  const dropElement = document.getElementById("dropNumber");

  if(dropElement){
    const params = new URLSearchParams(window.location.search);
    const drop = parseInt(params.get("drop"));

    if(!isNaN(drop) && drop >= 1 && drop <= 50){
      dropElement.textContent = "Esta es la prenda número " + drop + " de 50";
    } else {
      dropElement.textContent = "Edición Limitada • 50 Unidades";
    }
  }

});
