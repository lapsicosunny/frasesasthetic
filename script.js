function obtenerCitaCelebre() {
  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      console.log(`Cita del día: "${data.content}" - ${data.author}`);
    })
    .catch(error => console.error('Error al obtener la cita:', error));
}
setInterval(obtenerCitaCelebre, 86400000);
obtenerCitaCelebre();

