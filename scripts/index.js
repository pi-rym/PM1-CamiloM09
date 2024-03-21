document.getElementById('add-activity').addEventListener('click', function() {
    var title = document.getElementById('activity-title').value;
    var description = document.getElementById('activity-description').value;
    var image = document.getElementById('activity-image').value;
  
    if (title && description && image) {
      var activityCard = document.createElement('div');
      activityCard.classList.add('activity-card');
      activityCard.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <img src="${image}" alt="${title}">
        <button class="delete-btn">Eliminar</button>
      `;
      
      // Añadir evento para eliminar la actividad al botón
      activityCard.querySelector('.delete-btn').addEventListener('click', function() {
        activityCard.remove();
      });
      
      // Añadir la tarjeta de actividad al final del contenedor
      document.getElementById('activities-container').appendChild(activityCard);
  
      // Limpiar los campos después de agregar la actividad
      document.getElementById('activity-title').value = '';
      document.getElementById('activity-description').value = '';
      document.getElementById('activity-image').value = '';
    } else {
      alert('Por favor, completa todos los campos.');
    }
  });
  