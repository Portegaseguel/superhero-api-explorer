$(document).ready(function() {
    $('#searchForm').submit(function(event) {
      event.preventDefault(); // Evita el comportamiento por defecto del formulario
      
      // Limpiar mensajes de error y secciones anteriores
      $('#errorMessage').text('');
      $('#heroInfo').empty();
      $('#heroChartContainer').empty();
      
      // Obtener y validar el ID ingresado
      let heroId = $('#heroId').val().trim();
      if ($.isNumeric(heroId)) {
        getHeroData(heroId);
      } else {
        $('#errorMessage').text('Por favor, ingrese un número válido.');
      }
    });
  });
  
  /**
   * Función para obtener los datos del superhéroe desde la API
   * @param {number} heroId - ID del superhéroe a buscar
   */
  function getHeroData(heroId) {
    const accessToken = 'YOUR_SUPERHERO_API_TOKEN'; 
    const apiUrl = `https://superheroapi.com/api.php/${accessToken}/${heroId}`;
    
    $.ajax({
      url: apiUrl,
      type: 'GET',
      dataType: 'json',
      success: function(data) {
        if (data.response === "success") {
          renderHeroData(data);
          renderHeroChart(data);
        } else {
          $('#errorMessage').text('Superhéroe no encontrado. Por favor, verifica el ID ingresado.');
        }
      },
      error: function() {
        $('#errorMessage').text('Error al conectarse con la API. Intente nuevamente más tarde.');
      }
    });
  }
  
  /**
   * Función para renderizar la información del superhéroe en tarjetas de Bootstrap
   * @param {object} hero - Objeto con los datos del superhéroe
   */
  function renderHeroData(hero) {
    let heroCard = `
      <div class="card mb-3" style="max-width: 540px;">
        <div class="row g-0">
          <div class="col-md-4">
            <img src="${hero.image.url}" class="img-fluid rounded-start" alt="${hero.name}">
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">${hero.name}</h5>
              <hr>
              <p class="card-text"><strong>Nombre Completo:</strong> ${hero.biography['full-name']}</p>
              <p class="card-text"><strong>Alias:</strong> ${hero.biography.aliases.join(', ')}</p>
              <p class="card-text"><strong>Ocupación:</strong> ${hero.work.occupation}</p>
              <p class="card-text"><strong>Altura:</strong> ${hero.appearance.height[1]}</p>
              <p class="card-text"><strong>Peso:</strong> ${hero.appearance.weight[1]}</p>
              <p class="card-text"><strong>Publicado por:</strong> ${hero.biography.publisher}</p>
              <p class="card-text"><strong>Alineación:</strong> ${hero.biography.alignment}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    
    $('#heroInfo').html(heroCard);
  }
  
  /**
   * Función para renderizar un gráfico de pastel con las estadísticas del superhéroe
   * @param {object} hero - Objeto con los datos del superhéroe
   */
  function renderHeroChart(hero) {
    const dataPoints = [
      { y: parseInt(hero.powerstats.intelligence), label: "Inteligencia" },
      { y: parseInt(hero.powerstats.strength), label: "Fuerza" },
      { y: parseInt(hero.powerstats.speed), label: "Velocidad" },
      { y: parseInt(hero.powerstats.durability), label: "Durabilidad" },
      { y: parseInt(hero.powerstats.power), label: "Poder" },
      { y: parseInt(hero.powerstats.combat), label: "Combate" }
    ];
    
    const chart = new CanvasJS.Chart("heroChartContainer", {
      animationEnabled: true,
      title: {
        text: `Estadísticas de ${hero.name}`
      },
      data: [{
        type: "pie",
        startAngle: 240,
        yValueFormatString: "##0\"\"",
        indexLabel: "{label} {y}",
        dataPoints: dataPoints
      }]
    });
    
    chart.render();
  }
  
