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
