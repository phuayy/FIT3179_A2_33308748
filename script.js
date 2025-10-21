var vg_evmap = "./js/player_origin.json";
vegaEmbed("#Choropleth_map", vg_evmap, {actions: false}).then(function(res){}).catch(console.error);

var vg_map_wins = "./js/nrg_map_wins_barchart.json"; 

vegaEmbed("#map_wins_barchart", vg_map_wins, {actions: false})
  .then(function(res){ 
    console.log("Map Wins Bar Chart loaded successfully"); 
  })
  .catch(console.error);

// Embed s0m's chart
var vg_s0m_radar = "./js/s0m_player_radar.json";
vegaEmbed("#s0m_radar", vg_s0m_radar, {actions: false})
  .then(res => console.log("s0m chart loaded"))
  .catch(console.error);

// Embed Ethan's chart
var vg_Ethan_radar = "./js/Ethan_player_radar.json";
vegaEmbed("#Ethan_radar", vg_Ethan_radar, {actions: false})
  .then(res => console.log("Ethan chart loaded"))
  .catch(console.error);
  
// Embed brawk's chart
var vg_brawk_radar = "./js/brawk_player_radar.json";
vegaEmbed("#brawk_radar", vg_brawk_radar, {actions: false})
  .then(res => console.log("brawk chart loaded"))
  .catch(console.error);

// Embed skuba's chart
var vg_skuba_radar = "./js/skuba_player_radar.json";
vegaEmbed("#skuba_radar", vg_skuba_radar, {actions: false})
  .then(res => console.log("skuba chart loaded"))
  .catch(console.error);

// Embed mada's chart
var vg_mada_radar = "./js/mada_player_radar.json";
vegaEmbed("#mada_radar", vg_mada_radar, {actions: false})
  .then(res => console.log("mada chart loaded"))
  .catch(console.error);

var vg_tornado = "./js/nrg_vs_others_performance.json";
vegaEmbed("#nrg_vs_others_performance", vg_tornado, {actions: false})
  .then(res => console.log("Team comparison chart loaded"))
  .catch(console.error);

var vg_radar = "./js/joined_radar_chart.json";
vegaEmbed("#player_radar_chart_container", vg_radar, {actions: false})
  .then(function(res) {
    // This code runs *after* the chart is created
    const controlsContainer = document.getElementById('radar-chart-controls');
    const vegaBindings = document.querySelector('#player_radar_chart_container .vega-bindings');
    
    if (controlsContainer && vegaBindings) {
      controlsContainer.appendChild(vegaBindings);
      
      // --- NEW: Apply Player Colors to Controls ---
      try {
        const view = res.view;
        const colorScale = view.scale('color');
        const players = colorScale.domain();
        const colors = colorScale.range();
        
        // Create a map of player names to their colors
        const colorMap = {};
        players.forEach((player, i) => {
          colorMap[player] = colors[i];
        });

        // Find all the label elements and apply the colors
        const controlElements = controlsContainer.querySelectorAll('.vega-bind');
        controlElements.forEach(element => {
          const label = element.querySelector('label');
          if (label) {
            const playerName = label.textContent;
            const playerColor = colorMap[playerName];
            if (playerColor) {
              // Use a CSS variable for cleaner styling
              element.style.setProperty('--player-color', playerColor);
            }
          }
        });
      } catch (e) {
        console.error("Could not apply colors to radar controls:", e);
      }
    }
    
    console.log("Combined radar chart loaded and controls moved successfully");
  })
  .catch(console.error);
