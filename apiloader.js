function loadImages() {
    var loadingDiv = document.getElementById('loading');
    var imageGrid = document.getElementById('imageGrid');
  
    // Muestra el Ladebildschirm
    loadingDiv.style.display = 'block';
  
    // Simula la llamada a la API
    simulateApiCall(function () {
      // Oculta el Ladebildschirm después de la llamada a la API
      loadingDiv.style.display = 'none';
  
      // Itera a través de las URL de las imágenes en el objeto JSON
      jsonData.images.forEach(function (imageUrl) {
        var imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';
  
        var imageElement = document.createElement('img');
        imageElement.src = imageUrl;
  
        imageContainer.appendChild(imageElement);
        imageGrid.appendChild(imageContainer);
      });
    });
  }
  