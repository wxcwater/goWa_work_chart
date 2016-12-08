let chartBase = {
    divDomElement:[],
	chartInstance:[],
	init : function(divId){
		var tempDivDomElement = document.getElementById(divId);
		this.divDomElement.push(tempDivDomElement);
		this.chartInstance.push(echarts.init(tempDivDomElement));
	},
	chartAddEventListener:function(eventName,handlerFunction,chartIndex,chartInstanceIndex){
		if(!chartInstanceIndex){
			chartInstanceIndex = 0;
		}
		this.divDomElement[chartInstanceIndex].addEventListener(eventName,handlerFunction);
	},
	chartInstanceAddEventListener:function(eventName,handlerFunction,chartInstanceIndex){
		if(!chartInstanceIndex){
			chartInstanceIndex = 0;
		}
		this.chartInstance[chartInstanceIndex].on(eventName,handlerFunction);

	},
	chartResize:function(){
		for(var index = 0;index<this.chartInstance.length;index++){
			 this.chartInstance[index].resize();
		}
	},
	startDataZoomSelect:function(){
		for(var index = 0;index<this.chartInstance.length;index++){
			this.chartInstance[index].dispatchAction({
								 type: 'takeGlobalCursor',
								 key: 'dataZoomSelect',
								 dataZoomSelectActive: true
						 });
		}
	},
	restore:function(){
		for(var index = 0;index<this.chartInstance.length;index++){
			this.chartInstance[index].dispatchAction({
				type: 'restore'
			});
		}
	},
	stopDataZoomSelect:function(){
		for(var index = 0;index<this.chartInstance.length;index++){
			this.chartInstance[index].dispatchAction({
								 type: 'takeGlobalCursor',
								 key: 'dataZoomSelect',
								 dataZoomSelectActive: false
						 });
		}
	}
}
module.exports = chartBase;