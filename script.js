var vg_evmap = "./js/player_origin.json";
vegaEmbed("#Choropleth_map", vg_evmap, {actions: false}).then(function(res){}).catch(console.error);

var vg_radarChart = "./js/s0m_player_radar_v2.json";

vegaEmbed("#Radar_chart", vg_radarChart, {actions: false}).then(function(res){}).catch(console.error);
