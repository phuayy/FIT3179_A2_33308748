var vg_evmap = "./js/player_origin.json";
vegaEmbed("#Choropleth_map", vg_evmap, {actions: false}).then(function(res){}).catch(console.error);

var vg_radarChart = "./js/s0m_player_radar.json";

// 2. Embed the chart in the div with the ID "Radar_chart"
vegaEmbed("#Radar_chart", vg_radarChart, {actions: false})
  .then(function(res){
    console.log("Radar chart loaded successfully");
  })
  .catch(console.error);
