(() => {
  const container = document.getElementById('location-map');
  if (location.protocol === 'file:') {
    container.innerHTML = '<p class="map-loading">Pour afficher la carte interactive, ouvrez l’aperçu local du site. Le lien Google Maps reste disponible ci-dessous.</p>';
    return;
  }
  if (!window.L) {
    container.innerHTML = '<p class="map-loading">La carte est indisponible. Retrouvez l’adresse sur Google Maps ci-dessous.</p>';
    return;
  }
  container.replaceChildren();
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const map = L.map(container, {scrollWheelZoom:false, zoomAnimation:!reduced, fadeAnimation:!reduced, markerZoomAnimation:!reduced}).setView([50.4651293,4.0487823],16);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom:19, attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'}).addTo(map);
  L.marker([50.4651293,4.0487823],{icon:L.divIcon({className:'dor-marker',html:'<span></span>',iconSize:[24,24],iconAnchor:[12,12]}),title:"Boulangerie-pâtisserie D’Or",alt:"D’Or, Chaussée du Roeulx 1205"}).addTo(map).bindPopup('<strong>Boulangerie-pâtisserie D’Or</strong><br>Chaussée du Roeulx 1205<br>7021 Havré').openPopup();
  container.querySelector('.leaflet-control-zoom-in').setAttribute('aria-label','Zoomer');
  container.querySelector('.leaflet-control-zoom-out').setAttribute('aria-label','Dézoomer');
})();
