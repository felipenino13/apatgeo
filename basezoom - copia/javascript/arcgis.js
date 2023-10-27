require([
    "esri/config", 
    "esri/Map", 
    "esri/views/MapView",

    //add modules graphic for polygons
    "esri/Graphic",
    "esri/layers/GraphicsLayer",
    "esri/layers/FeatureLayer",
    
    //add module search
    "esri/widgets/Search",
    "esri/core/reactiveUtils",
    "esri/views/SceneView",

    //"esri/widgets/Legend",
    "esri/views/BasemapView",
    
  ], 

  function(esriConfig, Map, MapView, Graphic, GraphicsLayer, FeatureLayer, Search, reactiveUtils, SceneView,/*Legend*/BasemapView,) {

    //Config Key
    esriConfig.apiKey = "AAPKc5fe3b3fae3f4c57b616984758b6af86B8CQSYmJhYyx5P8UNpF_iXbhrOQ0qC2SaYMp8ygcbbXOdIxvzQK-vvxz3k9FWXUp";
    

    //Create a map
    const map = new Map({
      basemap: "arcgis-light-gray", // Basemap layer service
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

    


    /*renderer capa de colores estilos ufh*/
    const ufhRenderer = {
      type: "class-breaks",
      field: "clase_ufh",
      normalizationField: "EDUCBASECY",
      legendOptions: {
        title: "Tipos de Unidades Físicas Homogéneas"
      },
      defaultSymbol: {
        type: "simple-fill",
        color: [255, 255, 255, 0.5],
        //style: "backward-diagonal",
        outline: {
          width: 0.5,
          color: [50, 50, 50, 0.5]
        },
      },
      defaultLabel: "no data",
        classBreakInfos: [            

          {
            minValue: 1,
            maxValue: 2,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [78, 75, 135, 0.5],
              //"label": "hola como estas",
              outline: {
                color: [78, 75, 135, 0.5],
                width: 1 
              }
            },
            label: "Excelente"
          },
          {
            minValue: 2,
            maxValue: 3,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [0, 166, 255, 0.5],
              outline: {
                color: [0, 166, 255, 0.5],
                width: 1 
              }
            },
            label: "Muy Buena"
          },
          {
            minValue: 3,
            maxValue: 4,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [45, 149, 192, 0.5],
              outline: {
                color: [45, 149, 192, 0.5],
                width: 1 
              }
            },
            label: "Buena"
          },
          {
            minValue: 4,
            maxValue: 5,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [153, 193, 212, 0.5],
              outline: {
                color: [153, 193, 212, 0.5],
                width: 1 
              }
            },
            label: "Moderadamente buena"
          },
          {
            minValue: 5,
            maxValue: 6,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [26, 107, 66, 0.5],
              outline: {
                color: [26, 107, 66, 0.5],
                width: 1 
              }
            },
            label: "Moderadamente buena a mediana"
          },
          {
            minValue: 6,
            maxValue: 7,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [162, 193, 63, 0.5],
              //agregar borde al fill
              outline: {
                // Configuración del borde
                color: [162, 193, 63, 0.5], // Color del borde
                width: 1 // Ancho del borde
              }
            },
            label: "Mediana"
          },
          
          {
            minValue: 7,
            maxValue: 8,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [245, 229, 170, 0.5],
              outline: {
                color: [245, 229, 170, 0.5],
                width: 1 
              }
            },
            label: "Mediana a regular"
          },
          {
            minValue: 8,
            maxValue: 9,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [250, 216, 91, 0.5],
              outline: {
                color: [250, 216, 91, 0.5],
                width: 1 
              }
            },
            label: "Regular"
          },
          {
            minValue: 9,
            maxValue: 10,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [251, 129, 72, 0.5],
              outline: {
                color: [251, 129, 72, 0.5],
                width: 1 
              }
            },
            label: "Regular a mala"
          },
          {
            minValue: 10,
            maxValue: 11,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [251, 119, 169, 0.5],
              outline: {
                color: [251, 119, 169, 0.5],
                width: 1 
              }
            },
            label: "Mala"
          },
          {
            minValue: 11,
            maxValue: 12,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [255, 78, 130, 0.5],
              outline: {
                color: [255, 78, 130, 0.5],
                width: 1 
              }
            },
            label: "Mala a muy mala"
          },
          {
            minValue: 12,
            maxValue: 13,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [161, 71, 29, 0.5],
              outline: {
                color: [161, 71, 29, 0.5],
                width: 1 
              }
            },
            label: "Muy mala"
          },
          {
            minValue: 13,
            maxValue: 14,
            symbol: {
              "type": "simple-fill",
              "width": "1.5px",
              "color": [75, 51, 32, 0.5],
              outline: {
                color: [75, 51, 32, 0.5],
                width: 1 
              }
            },
            label: "Improductiva"
          },
          
        ]

        
    } 



    
    

    


    

      /*UFH de Pradera*/
      const ufhPradera = new FeatureLayer({
        url: "https://services6.arcgis.com/4bqDruSLRri6LXWK/arcgis/rest/services/shppraderaufhsaplicables/FeatureServer/0",
        renderer: ufhRenderer,
        popupTemplate: {
          title:"{simb_final} <p class='ufh{clase_ufh}'>{apreciacion}</p>",
          content:infoufhpop,
        },
        elevationInfo: "relative-to-scene",
      });
      
      map.add(ufhPradera);
      
    });
    
    
  
      




