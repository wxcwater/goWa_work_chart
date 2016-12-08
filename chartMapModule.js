var $ = require('jquery');
let districtCode = 'jiangxi_36';
let districtGeoDataPath = './districtGeoData/districtGeoData_'+districtCode;
let districtGeoData = require('./districtGeoData/districtGeoData_jiangxi_36.js')
let mapModule = {
    geoCoordMap:districtGeoData.districtgeoCoordMap,
    arcdMap:districtGeoData.districtArcdMap,
    arnmMap:districtGeoData.districtArnmMap,
    arcdTree:districtGeoData.districtTree,
    getMapGEOJSONByAjax:function(addvcd,callBackFunction,contextPathString){
  		var JSONDataUrl = "/mountainFlood/scripts/echarts/map/"+addvcd+".json";
  		if(contextPathString){
  				JSONDataUrl = contextPathString + "/scripts/echarts/map/"+addvcd+".json";
  		}
  		$.get(JSONDataUrl, function (chinaJson) {
      echarts.registerMap(addvcd, chinaJson);
    	if(callBackFunction){
  			 callBackFunction();
  		}
  });
  }
}
module.exports  = mapModule;
