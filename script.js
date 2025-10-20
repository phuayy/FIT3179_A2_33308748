var vg_evmap = "./js/player_origin.json";
vegaEmbed("#Choropleth_map", vg_evmap, {actions: false}).then(function(res){}).catch(console.error);

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
