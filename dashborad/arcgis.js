require([
  "esri/config", 
  "esri/Map", 
  "esri/views/MapView"
  
], 

function(esriConfig, Map, MapView) {

  //Config Key
  esriConfig.apiKey = "AAPKc5fe3b3fae3f4c57b616984758b6af86B8CQSYmJhYyx5P8UNpF_iXbhrOQ0qC2SaYMp8ygcbbXOdIxvzQK-vvxz3k9FWXUp";
  

  //Create a map
  const map = new Map({
    basemap: "arcgis-topographic", // Basemap layer service
    ground: "world-elevation",
    //basemap: "arcgis-dark-gray",
    //basemap: "arcgis-navigation" //navigation
  });

  let view = new MapView({
    map: map,
    // center Colombia
    center: [-74.635, 4.636], // Longitude, latitude
    zoom: 6, // Zoom level
    container: "viewDiv" // Div element
  });

} 
);

