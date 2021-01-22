function initialize() {
    var options = {atmosphere: true, center: [0, 0], zoom: 0};
    var earth = new WE.map('canvas', options);
    WE.tileLayer('https://webglearth.github.io/webglearth2-offline/{z}/{x}/{y}.jpg', {
      minZoom: 0,
      maxZoom: 5,
      attribution: 'NASA'
    }).addTo(earth);
    var marker = WE.marker([28.512194, -13.866867]).addTo(earth);
        marker.bindPopup("<b>Machangos corporation</b><br><span style='font-size:10px;color:#999'>Come see us</span>", {maxWidth: 150, closeButton: true});
  }
