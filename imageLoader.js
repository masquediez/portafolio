// imageLoader.js
var jsonData = {
    images: [
        'https://www.mainz.de/freizeit-und-sport/sportpreis-2023.php.media/278798/AdobeStock_JJAVA-4437974.jpeg.scaled/856e0b48f5c9a3bb0c545993575e013a.jpg',
        'https://www.mainz.de/freizeit-und-sport/sportpreis-2023.php.media/278798/AdobeStock_JJAVA-4437974.jpeg.scaled/856e0b48f5c9a3bb0c545993575e013a.jpg',
        'https://www.mainz.de/freizeit-und-sport/sportpreis-2023.php.media/278798/AdobeStock_JJAVA-4437974.jpeg.scaled/856e0b48f5c9a3bb0c545993575e013a.jpg',
        'https://www.mainz.de/freizeit-und-sport/sportpreis-2023.php.media/278798/AdobeStock_JJAVA-4437974.jpeg.scaled/856e0b48f5c9a3bb0c545993575e013a.jpg',
        'https://www.mainz.de/freizeit-und-sport/sportpreis-2023.php.media/278798/AdobeStock_JJAVA-4437974.jpeg.scaled/856e0b48f5c9a3bb0c545993575e013a.jpg',
        'https://www.mainz.de/freizeit-und-sport/sportpreis-2023.php.media/278798/AdobeStock_JJAVA-4437974.jpeg.scaled/856e0b48f5c9a3bb0c545993575e013a.jpg',
        'https://www.mainz.de/freizeit-und-sport/sportpreis-2023.php.media/278798/AdobeStock_JJAVA-4437974.jpeg.scaled/856e0b48f5c9a3bb0c545993575e013a.jpg',
        'https://www.mainz.de/freizeit-und-sport/sportpreis-2023.php.media/278798/AdobeStock_JJAVA-4437974.jpeg.scaled/856e0b48f5c9a3bb0c545993575e013a.jpg',
        'https://www.mainz.de/freizeit-und-sport/sportpreis-2023.php.media/278798/AdobeStock_JJAVA-4437974.jpeg.scaled/856e0b48f5c9a3bb0c545993575e013a.jpg',
        'https://www.mainz.de/freizeit-und-sport/sportpreis-2023.php.media/278798/AdobeStock_JJAVA-4437974.jpeg.scaled/856e0b48f5c9a3bb0c545993575e013a.jpg',
        'https://www.mainz.de/freizeit-und-sport/sportpreis-2023.php.media/278798/AdobeStock_JJAVA-4437974.jpeg.scaled/856e0b48f5c9a3bb0c545993575e013a.jpg',
        'https://www.mainz.de/freizeit-und-sport/sportpreis-2023.php.media/278798/AdobeStock_JJAVA-4437974.jpeg.scaled/856e0b48f5c9a3bb0c545993575e013a.jpg',

    ]
  };
  
  function simulateDatabaseQuery(callback) {
    // Simula una consulta a la base de datos con un tiempo de espera de 2 segundos
    setTimeout(callback, 2000);
  }
  
  function loadImages() {
    var loadingDiv = document.getElementById('loading');
    var imageGrid = document.getElementById('imageGrid');
  
    // Muestra el Ladebildschirm
    loadingDiv.style.display = 'block';
  
    // Simula la consulta a la base de datos
    simulateDatabaseQuery(function () {
      // Oculta el Ladebildschirm después de la consulta a la base de datos
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
  