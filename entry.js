let chartBase = require('./chartBase_echart');
soilChart = {
	
	getMarkLineSeries:function(value,markLineName){
		var series;
		var tdata=this.chartInstance[0].getOption().series[0].data;
		var startDate=tdata[0][0];
		var endDate=tdata[tdata.length-1][0];
		var tenOne = (endDate - startDate)/10;
		if(markLineName=='warning'){
			series = {
						name : '警戒水位',
						type : 'line',

						large : false,
						symbolSize : 3,
						symbol : 'circle',
						largeThreshold : 2000,
						yAxisIndex:0,
						itemStyle : {
							normal : {
								color : 'red',

								lineStyle : {

									type : 'solid',
									width : 1
								}

							}
						},
						data : [[startDate,value],[endDate,value]],
						markPoint : {}
					};
			series.markPoint = {
						label : {
							normal : {
								formatter : function(value) {
									str = '警戒水位:'
											+ Number(value.value)
													.toFixed(2);
									return str;
								}

							}
						},
						data : [

						{
							coord : [
									(startDate+tenOne*2),
									Number(
											value)
											.toFixed(2) ],
							value : Number(
									value)
									.toFixed(2),
							name : '水位',
							symbol : 'rect',
							symbolOffset:[0,0],
							symbolSize : [ 90, 25 ]
						} ]
					};

		  }else if(markLineName=='ensure'){
				series = {
						name : '保证水位',
						type : 'line',
						large : false,
						symbolSize : 3,
						yAxisIndex:0,
						symbol : 'circle',
						largeThreshold : 2000,
						itemStyle : {
							normal : {
								color : 'orange',

								lineStyle : {

									type : 'solid',
									width : 1
								}

							}
						},
						data : [[startDate,value],[endDate,value]],
						markPoint : {}
					};
				series.markPoint = {
						label : {
							normal : {
								formatter : function(value) {
									str = '保证水位:'
											+ Number(value.value)
													.toFixed(2);
									return str;
								}

							}
						},
						data : [

						{
							coord : [
									(startDate+tenOne*4),
									Number(
											value)
											.toFixed(2) ],
							value : Number(
									value)
									.toFixed(2),
							name : '水位',
							symbol : 'rect',
							symbolOffset:[0,0],
							symbolSize : [ 90, 25 ]
						} ]
					};

		   }else if(markLineName=='hismaxhigh'){
			   series = {
						name : '历史最高水位',
						type : 'line',

						large : false,
						symbolSize : 3,
						yAxisIndex:0,
						symbol : 'circle',
						largeThreshold : 2000,
						itemStyle : {
							normal : {
								color : 'green',

								lineStyle : {

									type : 'solid',
									width : 1
								}

							}
						},
						data : [[startDate,value],[endDate,value]],
						markPoint : {}
					};
				series.markPoint = {
						label : {
							normal : {
								formatter : function(value) {
									str = '历史最高:'
											+ Number(value.value)
													.toFixed(2);
									return str;
								}

							}
						},
						data : [

						{
							coord : [
									(startDate+tenOne*6),
									Number(
											value)
											.toFixed(2) ],
							value : Number(
									value)
									.toFixed(2),
							name : '水位',
							symbol : 'rect',
							symbolOffset:[0,0],
							symbolSize : [ 90, 25 ]
						} ]
					};

		   }else if(markLineName=='hisminhigh'){
			   series = {
						name : '历史最低水位',
						type : 'line',

						large : false,
						symbolSize : 3,
						yAxisIndex:0,
						symbol : 'circle',
						largeThreshold : 2000,
						itemStyle : {
							normal : {
								color : 'gray',

								lineStyle : {

									type : 'solid',
									width : 1
								}

							}
						},
						data : [[startDate,value],[endDate,value]],
						markPoint : {}
					};
				series.markPoint = {
						label : {

							normal : {
								postion:[0,50],
								formatter : function(value) {
									str = '历史最低:'
											+ Number(value.value)
													.toFixed(2);
									return str;
								}

							}
						},
						data : [

						{
							coord : [
										(startDate+tenOne*8),
									Number(
											value)
											.toFixed(2) ],
							value : Number(
									value)
									.toFixed(2),
							name : '水位',
							symbol : 'rect',
							symbolOffset:[0,0],
							symbolSize : [ 90, 25 ]
						} ]
					};

		   }else if(markLineName=='normal'){
			   series = {
						name : '正常高水位',
						type : 'line',

						large : false,
						symbolSize : 3,
						yAxisIndex:0,
						symbol : 'circle',
						largeThreshold : 2000,
						itemStyle : {
							normal : {
								color : 'green',

								lineStyle : {

									type : 'solid',
									width : 1
								}

							}
						},
						data : [[startDate,value],[endDate,value]],
						markPoint : {}
					};
				series.markPoint = {
						label : {
							normal : {
								formatter : function(value) {
									str = '正常高:'
											+ Number(value.value)
													.toFixed(2);
									return str;
								}

							}
						},
						data : [

						{
							coord : [
									(startDate+tenOne*2),
									Number(
											value)
											.toFixed(2) ],
							value : Number(
									value)
									.toFixed(2),
							name : '水位',
							symbol : 'rect',
							symbolOffset:[0,0],
							symbolSize : [ 100, 25 ]
						} ]
					};

		   }else if(markLineName=='fsltdz'){
			   series = {
						name : '汛限水位',
						type : 'line',

						large : false,
						symbolSize : 3,
						yAxisIndex:0,
						symbol : 'circle',
						largeThreshold : 2000,
						itemStyle : {
							normal : {
								color : 'red',

								lineStyle : {

									type : 'solid',
									width : 1
								}

							}
						},
						data : [[startDate,value],[endDate,value]],
						markPoint : {}
					};
				series.markPoint = {
						label : {
							normal : {
								formatter : function(value) {
									str = '汛限水位:'
											+ Number(value.value)
													.toFixed(2);
									return str;
								}

							}
						},
						data : [

						{
							coord : [
									(startDate+tenOne*6),
									Number(
											value)
											.toFixed(2) ],
							value : Number(
									value)
									.toFixed(2),
							name : '水位',
							symbol : 'rect',
							symbolOffset:[0,0],
							symbolSize : [ 110, 25 ]
						} ]
					};

		   }else if(markLineName=='hismax'){
			   series = {
						name : '历史最高库水位',
						type : 'line',

						large : false,
						symbolSize : 3,
						yAxisIndex:0,
						symbol : 'circle',
						largeThreshold : 2000,
						itemStyle : {
							normal : {
								color : 'red',

								lineStyle : {

									type : 'solid',
									width : 1
								}

							}
						},
						data : [[startDate,value],[endDate,value]],
						markPoint : {}
					};
				series.markPoint = {
						label : {
							normal : {
								formatter : function(value) {
									str = '历史最高:'
											+ Number(value.value)
													.toFixed(2);
									return str;
								}

							}
						},
						data : [

						{
							coord : [
									(startDate+tenOne*6),
									Number(
											value)
											.toFixed(2) ],
							value : Number(
									value)
									.toFixed(2),
							name : '水位',
							symbol : 'rect',
							symbolOffset:[0,0],
							symbolSize : [ 110, 25 ]
						} ]
					};

		   }else if(markLineName=='die'){
			   series = {
						name : '死水位',
						type : 'line',

						large : false,
						symbolSize : 3,
						yAxisIndex:0,
						symbol : 'circle',
						largeThreshold : 2000,
						itemStyle : {
							normal : {
								color : 'blue',

								lineStyle : {

									type : 'solid',
									width : 1
								}

							}
						},
						data : [[startDate,value],[endDate,value]],
						markPoint : {}
					};
				series.markPoint = {
						label : {
							normal : {
								formatter : function(value) {
									str = '死水位:'
											+ Number(value.value)
													.toFixed(2);
									return str;
								}

							}
						},
						data : [

						{
							coord : [
									(startDate+tenOne*3),
									Number(
											value)
											.toFixed(2) ],
							value : Number(
									value)
									.toFixed(2),
							name : '水位',
							symbol : 'rect',
							symbolOffset:[0,0],
							symbolSize : [ 90, 25 ]
						} ]
					};

		   }else if(markLineName=='damel'){
			   series = {
						name : '坝顶高程',
						type : 'line',

						large : false,
						symbolSize : 3,
						yAxisIndex:0,
						symbol : 'circle',
						largeThreshold : 2000,
						itemStyle : {
							normal : {
								color : '#CD9B1D',

								lineStyle : {

									type : 'solid',
									width : 1
								}

							}
						},
						data : [[startDate,value],[endDate,value]],
						markPoint : {}
					};
				series.markPoint = {
						label : {
							normal : {
								formatter : function(value) {
									str = '坝顶高程:'
											+ Number(value.value)
													.toFixed(2);
									return str;
								}

							}
						},
						data : [

						{
							coord : [
									(startDate+tenOne*5),
									Number(
											value)
											.toFixed(2) ],
							value : Number(
									value)
									.toFixed(2),
							name : '水位',
							symbol : 'rect',
							symbolOffset:[0,0],
							symbolSize : [ 90, 25 ]
						} ]
					};

		   }else if(markLineName=='actz'){
			   series = {
						name : '兴利水位',
						type : 'line',

						large : false,
						symbolSize : 3,
						yAxisIndex:0,
						symbol : 'circle',
						largeThreshold : 2000,
						itemStyle : {
							normal : {
								color : '#00EE76',

								lineStyle : {

									type : 'solid',
									width : 1
								}

							}
						},
						data : [[startDate,value],[endDate,value]],
						markPoint : {}
					};
				series.markPoint = {
						label : {
							normal : {
								formatter : function(value) {
									str = '兴利水位:'
											+ Number(value.value)
													.toFixed(2);
									return str;
								}

							}
						},
						data : [

						{
							coord : [
									(startDate+tenOne*7),
									Number(
											value)
											.toFixed(2) ],
							value : Number(
									value)
									.toFixed(2),
							name : '水位',
							symbol : 'rect',
							symbolOffset:[0,0],
							symbolSize : [ 90, 25 ]
						} ]
					};

		   }else if(markLineName=='ckflz'){
			   series = {
						name : '校核水位',
						type : 'line',

						large : false,
						symbolSize : 3,
						yAxisIndex:0,
						symbol : 'circle',
						largeThreshold : 2000,
						itemStyle : {
							normal : {
								color : '#40E0D0',

								lineStyle : {

									type : 'solid',
									width : 1
								}

							}
						},
						data : [[startDate,value],[endDate,value]],
						markPoint : {}
					};
				series.markPoint = {
						label : {
							normal : {
								formatter : function(value) {
									str = '校核水位:'
											+ Number(value.value)
													.toFixed(2);
									return str;
								}

							}
						},
						data : [

						{
							coord : [
									(startDate+tenOne*9),
									Number(
											value)
											.toFixed(2) ],
							value : Number(
									value)
									.toFixed(2),
							name : '水位',
							symbol : 'rect',
							symbolOffset:[0,0],
							symbolSize : [ 90, 25 ]
						} ]
					};

		   }else{

		   }
		return series;
	},
	removeZqline:function(){
		var Option;
		Option = soilChart.chartInstance[0].getOption();
			for(var i=0;i<Option.series.length;i++){
				if(Option.series[i].xAxisIndex == 0){
					Option.series.splice(i, 1);
					i=0;
				}
			}
			soilChart.chartInstance[0].setOption(Option,true);
			return Option;

		},
	removeRiverBedline:function(){
		var Option;
		Option = soilChart.chartInstance[0].getOption();
			for(var i=0;i<Option.series.length;i++){
				if(Option.series[i].xAxisIndex == 1){
					Option.series.splice(i, 1);
				}
			}
			soilChart.chartInstance[0].setOption(Option,true);
			return Option;

		},

	//添加标注线
	addMarkLine:function(data,markLineName){
	  var series=this.getMarkLineSeries(data,markLineName);
	  this.addSerieToChart(series,0);
	},
	addSerieToChart:function(Series,chartIndex){
			var oldOption = soilChart.chartInstance[chartIndex].getOption();
		    oldOption.series.push(Series);
			var result = soilChart.AxisFunction.ruleTheYAxis(oldOption,0,'Z');
			var newOption = result.ruledOption;
			// to_do list 其他轴或相关操作
			soilChart.chartInstance[chartIndex].setOption(newOption,true);

	},
	//移除标注线
	removeMarkLine:function(choiceline){
		var option=this.removeSerieToChart(choiceline);
		var result = soilChart.AxisFunction.ruleTheYAxis(option,0,'Z');
		var newOption = result.ruledOption;
		soilChart.chartInstance[0].setOption(newOption,true);
	},
	removeSeriesFromeChart:function(seriesName,chartIndex){
		var oldOption = soilChart.chartInstance[chartIndex].getOption();
		var removedSeries = [];
		for(var i = 0;i<oldOption.series.length;i++){
				if(oldOption.series[i].name!=seriesName){
						removedSeries.push(oldOption.series[i]);
				}
		}
		oldOption.series = removedSeries;
		soilChart.chartInstance[chartIndex].setOption(oldOption,true);
	},
	removeSerieToChart:function(choiceline){
		var oldOption;
		if(choiceline=='warning'){
			oldOption = soilChart.chartInstance[0].getOption();
			for(var i=0;i<oldOption.series.length;i++){
				if(oldOption.series[i].name=="警戒水位"){
					oldOption.series.splice(i, 1);
				}
			}

		}else if(choiceline=='ensure'){
			oldOption = soilChart.chartInstance[0].getOption();
			for(var i=0;i<oldOption.series.length;i++){
				if(oldOption.series[i].name=="保证水位"){
					oldOption.series.splice(i, 1);
				}

			}
		}else if(choiceline=='hismaxhigh'){
			oldOption = soilChart.chartInstance[0].getOption();
			for(var i=0;i<oldOption.series.length;i++){
				if(oldOption.series[i].name=="历史最高水位"){
					oldOption.series.splice(i, 1);
				}
			}

		}else if(choiceline=='hisminhigh'){
			oldOption = soilChart.chartInstance[0].getOption();
			for(var i=0;i<oldOption.series.length;i++){
				if(oldOption.series[i].name=="历史最低水位"){
					oldOption.series.splice(i, 1);
				}
			}

		}else if(choiceline=='normal'){
			oldOption = soilChart.chartInstance[0].getOption();
			for(var i=0;i<oldOption.series.length;i++){
				if(oldOption.series[i].name=="正常高水位"){
					oldOption.series.splice(i, 1);
				}
			}

		}else if(choiceline=='hismax'){
			oldOption = soilChart.chartInstance[0].getOption();
			for(var i=0;i<oldOption.series.length;i++){
				if(oldOption.series[i].name=="历史最高库水位"){
					oldOption.series.splice(i, 1);
				}
			}

		}else if(choiceline=='die'){
			oldOption = soilChart.chartInstance[0].getOption();
			for(var i=0;i<oldOption.series.length;i++){
				if(oldOption.series[i].name=="死水位"){
					oldOption.series.splice(i, 1);
				}
			}

		}else if(choiceline=='damel'){
			oldOption = soilChart.chartInstance[0].getOption();
			for(var i=0;i<oldOption.series.length;i++){
				if(oldOption.series[i].name=="坝顶高程"){
					oldOption.series.splice(i, 1);
				}
			}

		}else if(choiceline=='fsltdz'){
			oldOption = soilChart.chartInstance[0].getOption();
			for(var i=0;i<oldOption.series.length;i++){
				if(oldOption.series[i].name=="汛限水位"){
					oldOption.series.splice(i, 1);
				}
			}


		}else if(choiceline=='actz'){
			oldOption = soilChart.chartInstance[0].getOption();
			for(var i=0;i<oldOption.series.length;i++){
				if(oldOption.series[i].name=="兴利水位"){
					oldOption.series.splice(i, 1);
				}
			}

		}else if(choiceline=='ckflz'){
			oldOption = soilChart.chartInstance[0].getOption();
			for(var i=0;i<oldOption.series.length;i++){
				if(oldOption.series[i].name=="校核水位"){
					oldOption.series.splice(i, 1);
				}
			}

		}else{

		}
		return oldOption;
	},





	translateJsonTocategory_ValueSeriesData:function(dataArray,xPropertyName,propertyNames){
		var resultArray= [];
		var xAxisData = [];
		var yAxisData = {};
		for(var i  = 0;i<dataArray.length;i++){
			xAxisData.push(dataArray[i][xPropertyName]);
			for(var index = 0;index<propertyNames.length;index++){
				if(!yAxisData[propertyNames[index]]){
						yAxisData[propertyNames[index]] = [];
					}
				if(dataArray[i][propertyNames[index]]==null){

					yAxisData[propertyNames[index]].push(0);
			}else{
				yAxisData[propertyNames[index]].push(Number(dataArray[i][propertyNames[index]]));
			}
			}
		}
		resultArray.push(xAxisData);
		for(var index = 0;index<propertyNames.length;index++){
			resultArray.push(yAxisData[propertyNames[index]]);
		}
		return resultArray;
    },
    //转换
	translateJsonToDate_ValueSeriesData:function(dataArray,timePropertyNames,propertyNames){
		var result = {};
		for(var index = 0;index<propertyNames.length;index++){
			var seriesData = [];
	    	for(var i = 0;i<dataArray.length;i++){
	    		seriesData.push(this.translateObjToArraydata(dataArray[i],timePropertyNames,propertyNames[index]));
	    	}
	    	result[propertyNames[index]] = seriesData;
		}
    	return result;
	},
	translateJsonToDateAtHour_ValueSeriesData:function(dataArray,timePropertyNames,propertyNames){
		var result = {};
		for(var index = 0;index<propertyNames.length;index++){
			var seriesData = [];
	    	for(var i = 0;i<dataArray.length;i++){
	    		seriesData.push(this.translateObjToArraydataAtHour(dataArray[i],timePropertyNames,propertyNames[index]));
	    	}
	    	result[propertyNames[index]] = seriesData;
		}
    	return result;
	},
	translateJsonToValue_ValueSeriesData:function(dataArray,XPropertyNames,propertyNames){
		var result = {};
		for(var index = 0;index<propertyNames.length;index++){
			var seriesData = [];
				for(var i = 0;i<dataArray.length;i++){
					seriesData.push([dataArray[i][XPropertyNames],dataArray[i][propertyNames[index]]]);
				}
				result[propertyNames[index]] = seriesData;
		}
			return result;//{z:[[q,z],[q,z]]}
	},
	translateObjToArraydata:function(obj,timePropertyNames,propertyName){  //到分钟
    	var result = [];
    	result.push(this.translateStringToDate(obj[timePropertyNames]));
    	result.push(Number(obj[propertyName]));
    	return result;
    },
    translateObjToArraydataAtHour:function(obj,timePropertyNames,propertyName){  //到小时
    	var result = [];
    	result.push(this.translateStringToDateAtHour(obj[timePropertyNames]));
			// if(Number(obj[propertyName])){
    		result.push(Number(obj[propertyName]));
			// }else{
				// result.push(0);
			// }
    	return result;
    },
    translateStringToDate:function(strTm){
		strTm = strTm.replace(/-/g,"/");
		var date = +new Date(strTm);
		return date;
    },
    translateStringToDateAtHour:function(strTm){
    	var tempStrs = strTm.split(" ");
    	var dateStrs = tempStrs[0].split("-");
    	var year = parseInt(dateStrs[0], 10);
    	var month = parseInt(dateStrs[1], 10) - 1;
    	var day = parseInt(dateStrs[2], 10);
    	var timeStrs = tempStrs[1].split(":");
    	var hour = parseInt(timeStrs [0], 10);
    	var date = +new Date(year, month, day, hour);
		return date;
    },
		translateJsonToZ_ZQData:function(LNNM,Q,Z){
			var arr = [];
			for (var i = 0; i < Q.length; i++){
				arr.push([Q[i],Z[i]]);
			}
			return arr;
		},
		translateJsonToRZ_WData:function(MSTM,W,RZ){
			var arr = [];
			for (var i = 0; i < W.length; i++){
				arr.push([W[i],RZ[i]]);
			}
			return arr;
		},
		translateJsonToRZ_WSFAData:function(MSTM,WSFA,RZ){
			var arr = [];
			for (var i = 0; i < RZ.length; i++){
				arr.push([WSFA[i],RZ[i]]);
			}
			return arr;
		},

		translateJsonToDI_ZBData:function(MSTM,DI,ZB){
			var arr = [];
			for (var i = 0; i < DI.length; i++){
				arr.push([DI[i],ZB[i]]);
			}
			return arr;
		},

		//update为对外接口函数
    updateRChart:function(json,stcd,stnm){
    	var data = this.translateJsonToDate_ValueSeriesData(json.list,'TM',['RSM','SLMAVG','DRP']);

    	this.chartInstance[0].setOption(soilChart.soilChartModel.getrChartOption(stnm,stcd,data['SLMAVG'],data['RSM']));
				console.log(JSON.stringify(soilChart.soilChartModel.getResrvedRainChart(data['DRP']), null, 4));
			this.chartInstance[1].setOption(soilChart.soilChartModel.getResrvedRainChart(data['DRP']));
    },

    updateSChart:function(json,stcd,stnm){
    	var data = this.translateJsonTocategory_ValueSeriesData(json.list,'ADDVNM',['DRO1','DRO2','DRO3','DRO4']);
    	this.chartInstance[0].setOption(soilChart.soilChartModel.getStockChart(data));
    },

		updateProcChart:function(json){
			var data = this.translateJsonToDate_ValueSeriesData(json.rows,'tm',['z','q']);
			this.chartInstance[0].setOption(soilChart.soilChartModel.getProcChartOption(data['z'],data['q']));
		},
		//日雨量
		updateDayRainChart:function(json){
			var data = this.translateJsonTocategory_ValueSeriesData(json.rows,'TM',['DYP']);
			var datasum = 0;
			data.push([]);
			for (var i = 0;i < data[1].length;i++){
				datasum = datasum + data[1][i];
				data[2].push(datasum);
				json.rows[i].SUMDYP = datasum;
			}
			this.chartInstance[0].setOption(soilChart.soilChartModel.getDayRainOption(data));
		},
		//小时雨量
		updateHourRainChart:function(json){
			var data = this.translateJsonTocategory_ValueSeriesData(json.rows,'TM',['DRP']);
			var datasum = 0;
			data.push([]);
			for (var i = 0;i < data[1].length;i++){
				datasum = datasum + data[1][i];
				data[2].push(datasum);
				json.rows[i].SUMDRP = datasum;
			}
			this.chartInstance[0].setOption(soilChart.soilChartModel.getHourRainOption(data));
		},
		//旬月雨情
		updateMonRainChart:function(json){
			var xAxisData =[];
			var seriesDataUTN =[];
			var seriesDataMTN =[];
			var seriesDataLTN =[];
			var seriesDataMNP =[];
			var data= [];
			for (var i = 0;i < json.ROWS.length;i++){
				var mon = json.ROWS[i].TM;
				xAxisData.push(mon);
				if(json.ROWS[i].UTN){
				    seriesDataUTN.push(json.ROWS[i].UTN);
				}else{
				  seriesDataUTN.push('-');
				}
				if(json.ROWS[i].MTN){
				    seriesDataMTN.push(json.ROWS[i].MTN);
				}else{
				  seriesDataMTN.push('-');
				}
				if(json.ROWS[i].LTN){
				    seriesDataLTN.push(json.ROWS[i].LTN);
				}else{
				  seriesDataLTN.push('-');
				}
				if(json.ROWS[i].MNP){
				    seriesDataMNP.push(json.ROWS[i].MNP);
				}else{
				  seriesDataMNP.push('-');
				}
			}
			data.push(xAxisData);
			data.push(seriesDataUTN);
			data.push(seriesDataMTN);
			data.push(seriesDataLTN);
			data.push(seriesDataMNP);
			this.chartInstance[0].setOption(soilChart.soilChartModel.getMonRainOption(data));
		},
		//河道水情查询
		updateWaterQueryChart:function(json,startDate,endDate){
			var data = this.translateJsonToDate_ValueSeriesData(json.rows,'TM',['Z','Q']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var option = soilChart.soilChartModel.getWaterQueryOption(data,startDate,endDate);//基于data获得图表的初始option
		  var result =  soilChart.AxisFunction.ruleTheYAxis(option,0,'Z');
			soilChart.AxisFunction.ruleTheYAxis(option,1,'Q',result.arguments.SplitNumber);
			this.chartInstance[0].setOption(option,true);
		},
		updateHistoryWaterQueryChart:function(nowjson,historyJson,nowStartDate,nowEndDate,startDate,endDate){
			var nowData = this.translateJsonToDate_ValueSeriesData(nowjson.rows,'TM',['Z','Q']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var historyData = this.translateJsonToDate_ValueSeriesData(historyJson.rows,'TM',['Z','Q']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据

			var option = soilChart.soilChartModel.getHistoryWaterQueryOption(nowData,historyData,nowStartDate,nowEndDate,startDate,endDate);//基于data获得图表的初始option
			var result =  soilChart.AxisFunction.ruleTheYAxis(option,0,'Z');
			soilChart.AxisFunction.ruleTheYAxis(option,1,'Q',result.arguments.SplitNumber);
			this.chartInstance[0].setOption(option,false);
		},
		//水库水情查询
		updateWaterQueryChartForRsvr:function(json,startDate,endDate){
			var data = this.translateJsonToDate_ValueSeriesData(json.rows,'TM',['RZ','INQ','W']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var option = soilChart.soilChartModel.getWaterQueryOptionForRsvr(data,startDate,endDate);//基于data获得图表的初始option
		    soilChart.AxisFunction.ruleTheYAxis(option,0,'Z');
			  soilChart.AxisFunction.ruleTheYAxis(option,1,'Q');
			this.chartInstance[0].setOption(option,true);
		},
		//水库水情查询改y轴
		updateWaterQueryChartForRsvrChangeY:function(json,startDate,endDate){
			var data = this.translateJsonToDate_ValueSeriesData(json.rows,'TM',['RZ','INQ','W']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var option = soilChart.soilChartModel.getWaterQueryOptionForRsvrChangeY(data,startDate,endDate);//基于data获得图表的初始option
		    soilChart.AxisFunction.ruleTheYAxis(option,0,'Z');
			  soilChart.AxisFunction.ruleTheYAxis(option,1,'Q');
			this.chartInstance[0].setOption(option,true);
		},
		updateHistoryWaterQueryChartForRsvr:function(json,historyJson,startDate,endDate){
			var data = this.translateJsonToDate_ValueSeriesData(json.rows,'TM',['RZ','INQ','W']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var historydata = this.translateJsonToDate_ValueSeriesData(historyJson.rows,'TM',['RZ','INQ','W']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var option = soilChart.soilChartModel.getHistoryWaterQueryOptionForRsvr(data,historydata,startDate,endDate);//基于data获得图表的初始option
				soilChart.AxisFunction.ruleTheYAxis(option,0,'Z');
				soilChart.AxisFunction.ruleTheYAxis(option,1,'Q');
			this.chartInstance[0].setOption(option,true);
		},
		//水库水情查询改y轴
		updateHistoryWaterQueryChartForRsvrChangeY:function(json,historyJson,startDate,endDate){
			var data = this.translateJsonToDate_ValueSeriesData(json.rows,'TM',['RZ','INQ','W']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var historydata = this.translateJsonToDate_ValueSeriesData(historyJson.rows,'TM',['RZ','INQ','W']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var option = soilChart.soilChartModel.getHistoryWaterQueryOptionForRsvrChangeY(data,historydata,startDate,endDate);//基于data获得图表的初始option
				soilChart.AxisFunction.ruleTheYAxis(option,0,'Z');
				soilChart.AxisFunction.ruleTheYAxis(option,1,'Q');
			this.chartInstance[0].setOption(option,true);
		},
		//河道雨洪图
		updateRandFChart:function(json,startDate,endDate){
			var data = this.translateJsonToDateAtHour_ValueSeriesData(json.rows,'TM',['Z','Q','P']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var Foption = soilChart.soilChartModel.getFandOption(data,startDate,endDate);//基于data获得图表的初始option
			var Roption = soilChart.soilChartModel.getRandOption(data,startDate,endDate);//基于data获得图表的初始option
			soilChart.AxisFunction.ruleTheYAxis(Foption,0,'Z');
			soilChart.AxisFunction.ruleTheYAxis(Foption,1,'Q');
			this.chartInstance[0].setOption(Roption);
			this.chartInstance[1].setOption(Foption);
			echarts.connect([this.chartInstance[0],this.chartInstance[1]]);
		},
		updateHistoryRandFChart:function(json,historyJson,startDate,endDate){
			var data = this.translateJsonToDateAtHour_ValueSeriesData(json.rows,'TM',['Z','Q','P']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var historyData = this.translateJsonToDateAtHour_ValueSeriesData(historyJson.rows,'TM',['Z','Q','P']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var Foption = soilChart.soilChartModel.getHistoryFandOption(data,historyData,startDate,endDate);//基于data获得图表的初始option
			var Roption = soilChart.soilChartModel.getHistoryRandOption(data,historyData,startDate,endDate);//基于data获得图表的初始option
			soilChart.AxisFunction.ruleTheYAxis(Foption,0,'Z');
			soilChart.AxisFunction.ruleTheYAxis(Foption,1,'Q');
			this.chartInstance[0].setOption(Roption);
			this.chartInstance[1].setOption(Foption);
			echarts.connect([this.chartInstance[0],this.chartInstance[1]]);
		},
		updateHistoryRandFChartForRsvr:function(json,historyJson,startDate,endDate){
			var data = this.translateJsonToDateAtHour_ValueSeriesData(json.rows,'TM',['RZ','INQ','P']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var historyData = this.translateJsonToDateAtHour_ValueSeriesData(historyJson.rows,'TM',['RZ','INQ','P']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var Foption = soilChart.soilChartModel.getHistoryFandOptionForRsvr(data,historyData,startDate,endDate);//基于data获得图表的初始option
			var Roption = soilChart.soilChartModel.getHistoryRandOption(data,historyData,startDate,endDate);//基于data获得图表的初始option
			// soilChart.AxisFunction.ruleTheYAxis(Foption,0,'Z');
			// soilChart.AxisFunction.ruleTheYAxis(Foption,1,'Q');
			this.chartInstance[0].setOption(Roption);
			this.chartInstance[1].setOption(Foption);
			echarts.connect([this.chartInstance[0],this.chartInstance[1]]);
		},
		//水库雨洪图
		updateRandFChartForRsvr:function(json,startDate,endDate){
			var data = this.translateJsonToDateAtHour_ValueSeriesData(json.rows,'TM',['RZ','INQ','P']);//将json对象数据转换为图表option使用的[[x1,y1],[x2,y2]]数据
			var Foption = soilChart.soilChartModel.getFandOptionForRsvr(data,startDate,endDate);//基于data获得图表的初始option
			var Roption = soilChart.soilChartModel.getRandOptionForRsvr(data,startDate,endDate);//基于data获得图表的初始option
			this.chartInstance[0].setOption(Roption);
			this.chartInstance[1].setOption(Foption);
			echarts.connect([this.chartInstance[0],this.chartInstance[1]]);
		},
		updatezqRiverChart:function(tranObjzq){
			var data = this.translateJsonToZ_ZQData(tranObjzq.lnnm,tranObjzq.q,tranObjzq.z);
			this.chartInstance[0].setOption(soilChart.soilChartModel.getzqRiverOption(data,tranObjzq.lnnm),true);//setoption true表示不合并
		},
		//库容曲线
		updateRsvrrzwChart:function(tranObjzq){
			var data = this.translateJsonToRZ_WData(tranObjzq.mstm,tranObjzq.w,tranObjzq.rz);
			var dataw = this.translateJsonToRZ_WSFAData(tranObjzq.mstm,tranObjzq.wsfa,tranObjzq.rz);
			this.chartInstance[0].setOption(soilChart.soilChartModel.getrzwRiverOption(data,dataw,tranObjzq.mstm),true);//setoption true表示不合并
		},
		//大断面高程起点距
		updateRiverBedDIZBChart:function(tranObjzq){
			var data = this.translateJsonToDI_ZBData(tranObjzq.mstb,tranObjzq.di,tranObjzq.zb);
			var series = soilChart.soilChartModel.getRiverBedSeries(data,tranObjzq.mstb);
			soilChart.addSerieToChart(series,0);
		},
		//大断面流量水位
		updateRiverBedZQChart:function(tranObjzqD){
			var data = this.translateJsonToDI_ZBData(tranObjzqD.tm,tranObjzqD.q,tranObjzqD.z);
			var series = soilChart.soilChartModel.getRiverBedZQSeries(data,tranObjzqD.lnnm);
			soilChart.addSerieToChart(series,0);

		},
		updateRiverBedZQEmptyChart:function(){
			this.chartInstance[0].setOption(soilChart.soilChartModel.getemptyOption(),true);
		},
		setRiverSectionEmptyChart:function(){
			this.chartInstance[0].setOption(soilChart.soilChartModel.getSectionEmptyOption(),true);
		},
		getSectionSeriesByData:function(sectionData){
			let data = this.translateJsonToDI_ZBData('',sectionData['di'],sectionData['zb']);
			let sectionSeries = {
									name:'断面线',
			            type:'line',
			            
									symbolSize:1,
									symbol:'circle',
									largeThreshold:2000,
									areaStyle: {normal: {opacity:1}},
									itemStyle: {normal: {color: '#c39618',

									lineStyle: {

									type: 'solid',
									width: 1
									}

									}},

									data:data,
			            xAxisIndex:0,
			            yAxisIndex:0,
			            lineStyle:{
		    				normal:{
		    						width:1,
		    						}
								  }
					};
					return sectionSeries;
		},
		getWaterLevelSeriesByData:function(waterData,startIndex,endIndex){
			var WaterLevelSeries = {
									name:'水位',
			            			type:'line',
									symbolSize:3,
									symbol:'circle',
									largeThreshold:2000,
									areaStyle: {normal: {}},
									itemStyle: {normal: {color: '#1d7ad7',

									lineStyle: {

									type: 'solid',
									width: 1
									}

									}},
									data:[[startIndex,waterData],[endIndex,waterData]],
									markPoint : {
					  	label:{
					  		normal:{
					  			formatter:function (value) {
									str = '水位:'+Number(value.value).toFixed(2);
									return str;
								}

					  		}
					  	},
		                data : [


		                    {coord:[0,waterData],value:Number(waterData).toFixed(2), name: '水位',symbol:'rect',symbolOffset:[0,-10],symbolSize:[90,20]}
		                ]
		            },
			            xAxisIndex:0,
			            yAxisIndex:0,
			            lineStyle:{
		    				normal:{
		    						width:1,
		    						}
								  }
					};
					return WaterLevelSeries;
		},
};
soilChart.AxisFunction = require('./chartAxisModule.js');
soilChart.map = require('./chartMapModule.js');
soilChart.soilChartModel = {
	getDayRainOption:function(data){
		var option = {
						    tooltip: {
						        trigger: 'axis',
						        formatter:function(params){
								var num = params[0].value;
								var nums = params[1].value;
								var showTm = params[0].name;
								var result = "日雨量：" + num.toFixed(1)+"<br>" + "累计雨量：" + nums.toFixed(1) +"<br>" + "时间：" + showTm;
								return result;
		}
						    },
						    legend: {
						        data:['累计雨量', '日雨量']
						    },
						    toolbox: {
						        feature: {
						            saveAsImage: {show: true}
						        },
						        right:'5%'
						    },
						    dataZoom: {
						        show: false,
						        start: 0,
						        end: 100
						    },
						    xAxis: [
						        {
						            type: 'category',
						            boundaryGap: true,
						            data: data[0],
						            axisLabel:{
						            	textStyle:{
						        			fontSize:10
						        		}

						            }
						        }

						    ],
						    yAxis: [
						        {
						            type: 'value',
						            scale: true,
						            name: '日雨量',
						            nameLocation:'middle',
						            nameGap:25,
						            min: 0,
						            boundaryGap: [0.2, 0.2]
						        },
						        {
						            type: 'value',
						            scale: true,
						            name: '累计雨量',
						            nameLocation:'middle',
						            nameGap:35,
						            min: 0,
						            boundaryGap: [0.2, 0.2]
						        }
						    ],
						    series: [
						        {
						            name:'日雨量',
						            color: ['#3398DB'],
						            type:'bar',
						            data:data[1]
						        },
						        {
						            name:'累计雨量',
						            color: ['#ff5d22'],
						            type:'line',
						            yAxisIndex:1,
						            data:data[2]
						        }
						    ]
						};

	return option;
	},
	getHourRainOption:function(data){
		var option = {
						    tooltip: {
						        trigger: 'axis',
						        formatter:function(params){
								var numH = params[0].value;
								var numHs = params[1].value;
								var showTmh = params[0].name;
								var result = "雨量：" + numH.toFixed(1)+"<br>" + "累计雨量：" + numHs.toFixed(1) + "<br>" + "时间：" + showTmh + "时";
								return result;
							}
						    },
						    legend: {
						        data:['累计雨量', '雨量']
						    },
						    toolbox: {
						        show: true,
						        feature: {
						            saveAsImage: {}
						        },
						        right:'5%'
						    },
						    dataZoom: {
						        show: false,
						        start: 0,
						        end: 100
						    },
						    xAxis: [
						        {
						            type: 'category',
						            boundaryGap: true,
						            data: data[0],
						            axisLabel:{
						            	textStyle:{
						        			fontSize:9
						        		}

						            }
						        }

						    ],
						    yAxis: [
						        {
						            type: 'value',
						            scale: true,
						            name: '雨量',
						            nameLocation:'middle',
						            nameGap:25,
						            //max: 100,
						            min: 0,
						            boundaryGap: [0.2, 0.2]
						        },
						        {
						            type: 'value',
						            scale: true,
						            name: '累计雨量',
						            nameLocation:'middle',
						            nameGap:35,
						            //max: 100,
						            min: 0,
						            boundaryGap: [0.2, 0.2]
						        }
						    ],
						    series: [
						        {
						            name:'雨量',
						            color: ['#3398DB'],
						            type:'bar',
						            data:data[1]
						        },
						        {
						            name:'累计雨量',
						            color: ['#ff5d22'],
						            type:'line',
						            yAxisIndex:1,
						            data:data[2]
						        }
						    ]
						};

	return option;
	},
	getMonRainOption:function(data){
		var option = {
						    tooltip: {
						        trigger: 'axis'
							},
						    legend: {
						        data:['上旬雨量','中旬雨量','下旬雨量','全月雨量']
						    },
						    toolbox: {
						        feature: {
						            saveAsImage: {show: true}
						        },
						        right:'5%'
						    },
						    dataZoom: {
						        show: false,
						        start: 0,
						        end: 100
						    },
						    xAxis: [
						        {
						            type: 'category',
						            boundaryGap: true,
						            data: data[0],
						            axisLabel:{
						            	textStyle:{
						        			fontSize:10
						        		}

						            }
						        }

						    ],
						    yAxis: [
						        {
						            type: 'value',
						            scale: true,
						            name: '雨 量 (mm)',
						            nameLocation:'middle',
						            nameGap:25,
						            min: 0,
						            boundaryGap: [0.2, 0.2]
						        }
						    ],
						    series: [
						        {
						            name:'上旬雨量',
						            color: ['#a4c4bf'],
						            type:'bar',
						            data:data[1]
						        },
						        {
						            name:'中旬雨量',
						            color: ['#34bdc0'],
						            type:'bar',
						            data:data[2]
						        },
						        {
						            name:'下旬雨量',
						            color: ['#0181c8'],
						            type:'bar',
						            data:data[3]
						        },
						        {
						            name:'全月雨量',
						            color: ['#e14c4a'],
						            type:'bar',
						            data:data[4]
						        }
						    ]
						};
		//console.log(JSON.stringify(option, null, 4));
	return option;
	},
	getRandOption:function(data,startTime,endTime){ //得到河道雨洪图
		var option = {
			    tooltip: {
			        trigger: 'axis',
			    },
			    legend: {
			        data:['降雨量']
			    },
					grid:{
						top:'25%',
						height:'70%'
					},
			    toolbox: {
			        show: true,
			        feature: {
			            saveAsImage: {}
			        },
			        right:'5%'
			    },
			    dataZoom: {
			        show: false,
			        start: 0,
			        end: 100
			    },
			    xAxis: [
			        {
			            type: 'time',
			            splitNumber : 10,
			            axisLabel:{
			            	show:false
			            }
			            // data: [],
			            //min:startTime,
			            //max:endTime,
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            scale: true,
			            name: '降雨量(mm)',
			            nameLocation:'middle',
			            nameGap:25,
			            inverse:true


			        }

			    ],
			    series: [
			        {
			            name:'降雨量',
			            color: ['#3398DB'],
			            type:'bar',
			            data:data['P'],
						yAxisIndex:0

			        }

			    ]
			};
	return option;
	},
	getHistoryRandOption:function(data,historyData,startTime,endTime){ //得到河道雨洪图
		var result = '';
		var option = {
			    tooltip: {
			        trigger: 'axis',
							formatter : function(params) {
							if(params['0'].seriesName=='历史降雨量'){
								result+= '历史时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:MM')+'<br>';
								result+= '降雨量:' + params['0'].data[1] + '<br>';

							}else{
								result = '';
								result+= '当前时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:MM')+'<br>';
								result+= '降雨量:' + params['0'].data[1] + '<br>';

							}

							//result+= '当前时间' + historyData['Z'][Math.floor(Number(params[0].dataIndex/nowData['Z'].length)*historyData['Z'].length)][0];
							return result;
		},
			    },
			    legend: {
			        data:['降雨量','历史降雨量'],
							orient:'vertical',

							left:'right',
							top:'middle'
			    },
					grid:{
						top:'30%',
						height:'50%',
						width:'75%'
					},
			    toolbox: {
			        show: true,
			        feature: {
			            saveAsImage: {}
			        },
			        right:'10%'
			    },
			    dataZoom: {
			        show: false,
			        start: 0,
			        end: 100
			    },
			    xAxis: [
			        {
			            type: 'time',
			            splitNumber : 10,
			            axisLabel:{
			            	show:false
			            }
			            // data: [],
			            //min:startTime,
			            //max:endTime,
			        },
							{
			            type: 'time',
			            splitNumber : 10,
			            axisLabel:{
			            	show:true
			            }
			            // data: [],
			            //min:startTime,
			            //max:endTime,
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            scale: true,
			            name: '降雨量(mm)',
			            nameLocation:'middle',
			            nameGap:25,
			            inverse:true


			        }

			    ],
			    series: [
			        {
			            name:'降雨量',

			            type:'bar',
			            data:data['P'],
						yAxisIndex:0

					},
					{
							name:'历史降雨量',

							type:'bar',
							data:historyData['P'],
							yAxisIndex:0,
							xAxisIndex:1

					}

			    ]
			};
	return option;
	},
	getRandOptionForRsvr:function(data,startTime,endTime){  //得到水库雨洪图
		var option = {
			    tooltip: {
			        trigger: 'axis',
			    },
			    legend: {
			        data:['降雨量']
			    },
					grid:{
						top:'20%',
						height:'70%'
					},
			    toolbox: {
			        show: true,
			        feature: {
			            saveAsImage: {}
			        },
			        right:'5%'
			    },
			    dataZoom: {
			        show: false,
			        start: 0,
			        end: 100
			    },
			    xAxis: [
			        {
			            type: 'time',
			            splitNumber : 10,


			            axisLabel:{
			            	show:false
			            }
			            // data: [],
			            //min:startTime,
			            //max:endTime,
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            scale: true,
			            name: '降雨量(mm)',
			            nameLocation:'middle',
			            nameGap:25,
			            inverse:true


			        }

			    ],
			    series: [
			        {
			            name:'降雨量',
			            color: ['#3398DB'],
			            type:'bar',
			            data:data['P'],
						yAxisIndex:0

			        }

			    ]
			};
	return option;
	},
	getFandOption:function(data,startTime,endTime){   //得到河道雨洪图
		var option = {
			    tooltip: {
			        trigger: 'axis',
			    },
			    legend: {
			        data:['水位', '流量']
			    },
					grid:{
						top:'10%'
					},
			    dataZoom: {
			        show: false,
			        start: 0,
			        end: 100
			    },
			    xAxis: [
			        {
			            type: 'time',
			            splitNumber : 10,
			            // data: [],
			            //min:startTime,
			            //max:endTime,
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            scale: true,
			            nameLocation:'middle',
			            nameGap:25,
			            name: '水位(m)'


			        },
			        {
			            type: 'value',
			            scale: true,
			            nameLocation:'middle',
			            nameGap:35,
			            name: '流量(m³/s)'

			        }
			    ],
			    series: [
			        {
			            name:'水位',
			            color: ['#3398DB'],
			            type:'line',
			            data:data['Z'],
						yAxisIndex:0,
						showSymbol:false



			        },
			        {
			            name:'流量',
			            color: ['#ff5d22'],
			            type:'line',
			            yAxisIndex:1,
			            data:data['Q'],
			            showSymbol:false


			        }
			    ]
			};
	return option;
	},
	getHistoryFandOption:function(data,historydata,startTime,endTime){   //得到河道雨洪图
		var option = {
			    tooltip: {
			        trigger: 'axis',
							formatter : function(params) {
							if(params['0'].seriesName=='历史水位'){
								result+= '历史时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:MM')+'<br>';
								result+= '水位:' + params['0'].data[1] + '         ';
								result+= '流量:' + params['1'].data[1] + '<br>';
							}else{
								result = '';
								result+= '当前时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:MM')+'<br>';
								result+= '水位:' + params['0'].data[1] + '         ';
								result+= '流量:' + params['1'].data[1] + '<br>';
							}

							//result+= '当前时间' + historyData['Z'][Math.floor(Number(params[0].dataIndex/nowData['Z'].length)*historyData['Z'].length)][0];
							return result;
		}
			    },
			    legend: {
			        data:['水位', '流量','历史水位','历史流量'],
							orient:'vertical',

							left:'right',
							top:'top'
			    },
					grid:{
						top:10,
						height:'60%',
						width:'75%'
					},
			    dataZoom: {
			        show: false,
			        start: 0,
			        end: 100
			    },
			    xAxis: [
			        {
			            type: 'time',
			            splitNumber : 10,
			            // data: [],
			            //min:startTime,
			            //max:endTime,
			        },
							{
			            type: 'time',
			            splitNumber : 10,
									show:false,
			            // data: [],
			            //min:startTime,
			            //max:endTime,
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            scale: true,
			            nameLocation:'middle',
			            nameGap:25,
			            name: '水位(m)'


			        },
			        {
			            type: 'value',
			            scale: true,
									show:false,
			            nameLocation:'middle',
			            nameGap:35,
			            name: '流量(m³/s)'

			        }
			    ],
			    series: [
			        {
			            name:'水位',
			            color:  ['#ff5d22'],
			            type:'line',
			            data:data['Z'],
						yAxisIndex:0,
						showSymbol:false



			        },
			        {
			            name:'流量',
			            color:['#3398DB'],
			            type:'line',
			            yAxisIndex:1,
			            data:data['Q'],
			            showSymbol:false


			        },
							{
			            name:'历史水位',

			            type:'line',
			            data:historydata['Z'],
									yAxisIndex:0,
									xAxisIndex:1,
									showSymbol:false



			        },
			        {
			            name:'历史流量',

			            type:'line',
			            yAxisIndex:1,
									xAxisIndex:1,
			            data:historydata['Q'],
			            showSymbol:false


			        }
			    ]
			};
	return option;
	},
	getHistoryFandOptionForRsvr:function(data,historydata,startTime,endTime){   //得到河道雨洪图
		var option = {
			    tooltip: {
			        trigger: 'axis',
							formatter : function(params) {
							if(params['0'].seriesName=='历史水位'){
								result+= '历史时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:MM')+'<br>';
								result+= '水位:' + params['0'].data[1] + '         ';
								result+= '流量:' + params['1'].data[1] + '<br>';
							}else{
								result = '';
								result+= '当前时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:MM')+'<br>';
								result+= '水位:' + params['0'].data[1] + '         ';
								result+= '流量:' + params['1'].data[1] + '<br>';
							}

							//result+= '当前时间' + historyData['Z'][Math.floor(Number(params[0].dataIndex/nowData['Z'].length)*historyData['Z'].length)][0];
							return result;
		}
			    },
			    legend: {
			        data:['水位', '流量','历史水位','历史流量'],
							orient:'vertical',

							left:'right',
							top:'top'
			    },
					grid:{
						top:10,
						height:'60%',
						width:'75%'
					},
			    dataZoom: {
			        show: false,
			        start: 0,
			        end: 100
			    },
			    xAxis: [
			        {
			            type: 'time',
			            splitNumber : 10,
			            // data: [],
			            //min:startTime,
			            //max:endTime,
			        },
							{
			            type: 'time',
			            splitNumber : 10,
									show:false,
			            // data: [],
			            //min:startTime,
			            //max:endTime,
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            scale: true,
			            nameLocation:'middle',
			            nameGap:25,
			            name: '水位(m)'


			        },
			        {
			            type: 'value',
			            scale: true,
									show:false,
			            nameLocation:'middle',
			            nameGap:35,
			            name: '流量(m³/s)'

			        }
			    ],
			    series: [
			        {
			            name:'水位',
			            color:  ['#ff5d22'],
			            type:'line',
			            data:data['RZ'],
						yAxisIndex:0,
						showSymbol:false



			        },
			        {
			            name:'流量',
			            color:['#3398DB'],
			            type:'line',
			            yAxisIndex:1,
			            data:data['INQ'],
			            showSymbol:false


			        },
							{
			            name:'历史水位',

			            type:'line',
			            data:historydata['RZ'],
									yAxisIndex:0,
									xAxisIndex:1,
									showSymbol:false



			        },
			        {
			            name:'历史流量',

			            type:'line',
			            yAxisIndex:1,
									xAxisIndex:1,
			            data:historydata['INQ'],
			            showSymbol:false


			        }
			    ]
			};
	return option;
	},
	getFandOptionForRsvr:function(data,startTime,endTime){   //得到水库雨洪图
		var option = {
			    tooltip: {
			        trigger: 'axis',
			    },
			    legend: {
			        data:['库水位', '入库流量']
			    },
					grid:{
						top:'10%'
					},
			    dataZoom: {
			        show: false,
			        start: 0,
			        end: 100
			    },
			    xAxis: [
			        {
			            type: 'time',
			            splitNumber : 10,
			            // data: [],
			            //min:startTime,
			            //max:endTime,
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            scale: true,
			            nameLocation:'middle',
			            nameGap:25,
			            name: '库水位(m)'

			        },
			        {
			            type: 'value',
			            scale: true,
			            nameLocation:'middle',
			            nameGap:25,
			            name: '入库流量(m³/s)'

			        }
			    ],
			    series: [
			        {
			            name:'库水位',
			            color: ['#3398DB'],
			            type:'line',
			            data:data['RZ'],
						yAxisIndex:0,
						showSymbol:false

			        },
			        {
			            name:'入库流量',
			            color: ['#ff5d22'],
			            type:'line',
			            yAxisIndex:1,
			            data:data['INQ'],
			            showSymbol:false

			        }
			    ]
			};
	return option;
	},
	getWaterQueryOption:function(data,startTime,endTime){ //得到河道水情过程线
		var option = {
						    tooltip: {
						        trigger: 'axis',
										formatter : function(params) {
												var result = '';
												result+= '时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:mm')+'<br>';
												result+= '水位:' + params['0'].data[1] + '<br>';
												result+= '流量:' + params['1'].data[1] + '<br>';


										//result+= '当前时间' + historyData['Z'][Math.floor(Number(params[0].dataIndex/nowData['Z'].length)*historyData['Z'].length)][0];
										return result;
										}
						    },
						    legend: {
						        data:['水位', '流量']
						    },
						    toolbox: {
						        show: true,
						        feature: {
						            saveAsImage: {}
						        },
						        right:'5%'
						    },
						    dataZoom: {
						        show: false,
						        start: 0,
						        end: 100
						    },
						    xAxis: [
						        {
						            type: 'time',
						            splitNumber : 10,
						            // data: [],
						            //min:startTime,
						            //max:endTime,
						        }
						    ],
						    yAxis: [
						        {
						            type: 'value',
						            scale: true,
						            name: '水位(m)',
						            max: 'dataMax',
						            min: 'dataMin',
						            nameLocation:'middle',
						            nameGap:25,
						            boundaryGap: ['1%', '1%'],
						            interval:0.05
						        },
						        {
						            type: 'value',
						            scale: true,
						            name: '流量(m³/s)',
						            nameLocation:'middle',
						            nameGap:40,
						            max: 'dataMax',
						            min: 'dataMin',
						            //max: 100,
						            boundaryGap: ['1%', '1%'],
						            interval:100
						        }
						    ],
						    series: [
						        {
						            name:'水位',
						            color: ['#3398DB'],
						            type:'line',
						            data:data['Z'],
									yAxisIndex:0,
									showSymbol:false,
						            markLine:{
						            	data:[
						            	 ],
						            	animation:true

						            }
						        },
						        {
						            name:'流量',
						            color: ['#ff5d22'],
						            type:'line',
						            yAxisIndex:1,
						            data:data['Q'],
						            showSymbol:false,
						            markLine:{
						            	data:[
						            	 ],
						            	animation:true

						            }
						        }
						    ]
						};
				return option;
	},
	getHistoryWaterQueryOption:function(nowData,historyData,nowStartDate,nowEndDate,startTime,endTime){ //得到河道水情过程线
		var result = '';
		var option = {
						    tooltip: {
						        trigger: 'axis',
										formatter : function(params) {
										if(params['0'].seriesName=='历史水位'){
											result+= '历史时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:MM')+'<br>';
											result+= '水位:' + params['0'].data[1] + '<br>';
											result+= '流量:' + params['1'].data[1] + '<br>';
										}else{
											result = '';
											result+= '当前时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:MM')+'<br>';
											result+= '水位:' + params['0'].data[1] + '<br>';
											result+= '流量:' + params['1'].data[1] + '<br>';
										}

										//result+= '当前时间' + historyData['Z'][Math.floor(Number(params[0].dataIndex/nowData['Z'].length)*historyData['Z'].length)][0];
										return result;
					},
						    },
						    legend: {
						        data:['水位', '流量','历史水位','历史流量'],
										top:0
						    },
						    toolbox: {
						        show: true,
						        feature: {
						            saveAsImage: {}
						        }
						    },
						    dataZoom: {
						        show: false,
						        start: 0,
						        end: 100
						    },
								grid:{
									top:'30%'
								},
						    xAxis: [
						        {
						            type: 'time',
						            splitNumber : 10//,
						            // data: [],
						            //min:startTime,
						            //max:endTime,
						        },
										{
						            type: 'time',
						            splitNumber : 10//,
						            // data: [],
						            //min:startTime,
						            //max:endTime,
						        }
						    ],
						    yAxis: [
						        {
						            type: 'value',
						            scale: true,
						            name: '水位(m)',
												nameLocation:'middle',
						            max: 'dataMax',
						            min: 'dataMin',
						            boundaryGap: ['1%', '1%'],
						            interval:0.05
						        },
						        {
						            type: 'value',
						            scale: true,
						            name: '流量(m³/s)',
												nameLocation:'middle',
						            max: 'dataMax',
						            min: 'dataMin',
						            //max: 100,
						            boundaryGap: ['1%', '1%'],
						            interval:100
						        }
						    ],
						    series: [
									{
											name:'水位',
											color: ['#ff5d22'],
											type:'line',
											data:nowData['Z'],
								yAxisIndex:0,
								showSymbol:false,
											markLine:{
												data:[
												 ],
												animation:true

											}
									},
									{
											name:'流量',
											color: ['#3398DB'],
											type:'line',
											yAxisIndex:1,
											data:nowData['Q'],
											showSymbol:false,
											markLine:{
												data:[
												 ],
												animation:true

											}
									},
						        {
						            name:'历史水位',
						            //color: ['#3398DB'],
						            type:'line',
						            data:historyData['Z'],
									yAxisIndex:0,
									xAxisIndex:1,
									showSymbol:false,
						            markLine:{
						            	data:[
						            	 ],
						            	animation:true

						            }
						        },
						        {
						            name:'历史流量',
						            //color: ['#ff5d22'],
						            type:'line',
						            yAxisIndex:1,
												xAxisIndex:1,
						            data:historyData['Q'],
						            showSymbol:false,
						            markLine:{
						            	data:[
						            	 ],
						            	animation:true

						            }
						        }
						    ]
						};
				return option;
	},
	getWaterQueryOptionForRsvr:function(data,startTime,endTime){ //得到水库水情过程线
		var option = {
			    tooltip: {
			        trigger: 'axis',
							formatter : function(params) {
									var result = '';
									result+= '时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:mm')+'<br>';
									result+= '水位:' + params['0'].data[1] + '<br>';
									result+= '入库流量:' + params['1'].data[1] + '<br>';


							//result+= '当前时间' + historyData['Z'][Math.floor(Number(params[0].dataIndex/nowData['Z'].length)*historyData['Z'].length)][0];
							return result;
							}
			    },
			    legend: {
			        data:['库水位', '入库流量']
			    },
			    toolbox: {
			        show: true,
			        feature: {
			            saveAsImage: {}
			        }
			    },
			    dataZoom: {
			        show: false,
			        start: 0,
			        end: 100
			    },
			    xAxis: [
			        {
			            type: 'time',
			            splitNumber : 10,
			            // data: [],
			            //min:startTime,
			            //max:endTime,
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            scale: true,
			            name: '库水位(m)',
			            max: 'dataMax',
			            min: 'dataMin',
			            boundaryGap: ['1%', '1%'],
			            interval:0.01
			        },
			        {
			            type: 'value',
			            scale: true,
			            name: '入库流量(m³/s)',
			            max: 'dataMax',
			            min: 'dataMin',
			            //max: 100,
			            boundaryGap: ['1%', '1%'],
			            interval:100
			        }
			    ],
			    series: [
			        {
			            name:'库水位',
			            color: ['#3398DB'],
			            type:'line',
			            data:data['RZ'],
						yAxisIndex:0,
						showSymbol:false,
			            markLine:{
			            	data:[
			            	 ],
			            	animation:true

			            }
			        },
			        {
			            name:'入库流量',
			            color: ['#ff5d22'],
			            type:'line',
			            yAxisIndex:1,
			            data:data['INQ'],
			            showSymbol:false,
			            markLine:{
			            	data:[
			            	 ],
			            	animation:true

			            }
			        }
			    ]
			};
	return option;
},
getHistoryWaterQueryOptionForRsvr:function(data,historydata,startTime,endTime){ //得到水库水情过程线
	var result = '';
	var option = {
				tooltip: {
						trigger: 'axis',
						formatter : function(params) {
						if(params['0'].seriesName=='历史水位'){
							result+= '历史时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:MM')+'<br>';
							result+= '水位:' + params['0'].data[1] + '<br>';
							result+= '入库流量:' + params['1'].data[1] + '<br>';
						}else{
							result = '';
							result+= '当前时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:MM')+'<br>';
							result+= '水位:' + params['0'].data[1] + '<br>';
							result+= '入库流量:' + params['1'].data[1] + '<br>';
						}

						//result+= '当前时间' + historyData['Z'][Math.floor(Number(params[0].dataIndex/nowData['Z'].length)*historyData['Z'].length)][0];
						return result;
	},
				},
				legend: {
						data:['水位', '入库流量','历史水位', '历史入库流量']
				},
				toolbox: {
						show: true,
						feature: {
								saveAsImage: {}
						}
				},
				grid:{
					top:'30%'
				},
				dataZoom: {
						show: false,
						start: 0,
						end: 100
				},
				xAxis: [
						{
								type: 'time',
								splitNumber : 10,
								// data: [],
								//min:startTime,
								//max:endTime,
						},{
								type: 'time',
								splitNumber : 10,
								// data: [],
								//min:startTime,
								//max:endTime,
						}
				],
				yAxis: [
						{
								type: 'value',
								scale: true,
								name: '水位(m)',
								nameLocation:'middle',
								max: 'dataMax',
								min: 'dataMin',
								boundaryGap: ['1%', '1%'],
								interval:0.01
						},
						{
								type: 'value',
								scale: true,
								name: '流量(m³/s)',
								nameLocation:'middle',
								max: 'dataMax',
								min: 'dataMin',
								//max: 100,
								boundaryGap: ['1%', '1%'],
								interval:100
						}
				],
				series: [
						{
								name:'水位',
								color: ['#ff5d22'],
								type:'line',
								data:data['RZ'],
					yAxisIndex:0,
					showSymbol:false,
								markLine:{
									data:[
									 ],
									animation:true

								}
						},
						{
								name:'入库流量',
								color: ['#3398DB'],
								type:'line',
								yAxisIndex:1,
								data:data['INQ'],
								showSymbol:false,
								markLine:{
									data:[
									 ],
									animation:true

								}
						},
						{
								name:'历史水位',

								type:'line',
								data:historydata['RZ'],
					yAxisIndex:0,
					xAxisIndex:1,
					showSymbol:false,
								markLine:{
									data:[
									 ],
									animation:true

								}
						},
						{
								name:'历史入库流量',

								type:'line',
								yAxisIndex:1,
								xAxisIndex:1,
								data:historydata['INQ'],
								showSymbol:false,
								markLine:{
									data:[
									 ],
									animation:true

								}
						}
				]
		};
return option;
},
    getWaterQueryOptionForRsvrChangeY:function(data,startTime,endTime){ //得到改变y轴后的水库水情过程线
		var option = {
			    tooltip: {
			        trigger: 'axis',
							formatter : function(params) {
									var result = '';
									result+= '时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:mm')+'<br>';
									result+= '水位:' + params['0'].data[1] + '<br>';
									result+= '蓄水量:' + params['1'].data[1] + '<br>';


							//result+= '当前时间' + historyData['Z'][Math.floor(Number(params[0].dataIndex/nowData['Z'].length)*historyData['Z'].length)][0];
							return result;
							}
			    },
			    legend: {
			        data:['库水位', '蓄水量']
			    },
			    toolbox: {
			        show: true,
			        feature: {
			            saveAsImage: {}
			        }
			    },
			    dataZoom: {
			        show: false,
			        start: 0,
			        end: 100
			    },
			    xAxis: [
			        {
			            type: 'time',
			            splitNumber : 10,
			            // data: [],
			            //min:startTime,
			            //max:endTime,
			        }
			    ],
			    yAxis: [
			        {
			            type: 'value',
			            scale: true,
			            name: '库水位(m)',
			            max: 'dataMax',
			            min: 'dataMin',
			            boundaryGap: ['1%', '1%'],
			            interval:0.01
			        },
			        {
			            type: 'value',
			            scale: true,
			            name: '蓄水量(百万m³)',
			            max: 'dataMax',
			            min: 'dataMin',
			            //max: 100,
			            boundaryGap: ['1%', '1%'],
			            interval:100
			        }
			    ],
			    series: [
			        {
			            name:'库水位',
			            color: ['#3398DB'],
			            type:'line',
			            data:data['RZ'],
						yAxisIndex:0,
						showSymbol:false,
			            markLine:{
			            	data:[
			            	 ],
			            	animation:true

			            }
			        },
			        {
			            name:'蓄水量',
			            color: ['#ff5d22'],
			            type:'line',
			            yAxisIndex:1,
			            data:data['W'],
			            showSymbol:false,
			            markLine:{
			            	data:[
			            	 ],
			            	animation:true

			            }
			        }
			    ]
			};
	return option;
},
getHistoryWaterQueryOptionForRsvrChangeY:function(data,historyData,startTime,endTime){ //得到改变y轴后的水库水情过程线
var result = '';
var option = {
			tooltip: {
					trigger: 'axis',
					formatter : function(params) {
					if(params['0'].seriesName=='历史水位'){
						result+= '历史时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:MM')+'<br>';
						result+= '水位:' + params['0'].data[1] + '<br>';
						result+= '蓄水量:' + params['1'].data[1] + '<br>';
					}else{
						result = '';
						result+= '当前时间:' + FormatDate(new Date(params['0'].data[0]), 'yyyy-MM-dd HH:MM')+'<br>';
						result+= '水位:' + params['0'].data[1] + '<br>';
						result+= '蓄水量:' + params['1'].data[1] + '<br>';
					}

					//result+= '当前时间' + historyData['Z'][Math.floor(Number(params[0].dataIndex/nowData['Z'].length)*historyData['Z'].length)][0];
					return result;
}
			},
			legend: {
					data:['水位', '蓄水量','历史水位','历史蓄水量']
			},
			grid:{
				top:'30%'
			},
			toolbox: {
					show: true,
					feature: {
							saveAsImage: {}
					}
			},
			dataZoom: {
					show: false,
					start: 0,
					end: 100
			},
			xAxis: [
					{
							type: 'time',
							splitNumber : 10
							// data: [],
							//min:startTime,
							//max:endTime,
					},
					{
							type: 'time',
							splitNumber : 10
							// data: [],
							//min:startTime,
							//max:endTime,
					}
			],
			yAxis: [
					{
							type: 'value',
							scale: true,
							name: '库水位(m)',
							nameLocation:'middle',
							max: 'dataMax',
							min: 'dataMin',
							boundaryGap: ['1%', '1%'],
							interval:0.01
					},
					{
							type: 'value',
							scale: true,
							name: '蓄水量(百万m³)',
							nameLocation:'middle',
							max: 'dataMax',
							min: 'dataMin',
							//max: 100,
							boundaryGap: ['1%', '1%'],
							interval:100
					}
			],
			series: [
					{
							name:'水位',
							color: ['#3398DB'],
							type:'line',
							data:data['RZ'],
				yAxisIndex:0,
				showSymbol:false,
							markLine:{
								data:[
								 ],
								animation:true

							}
					},
					{
							name:'蓄水量',
							color: ['#ff5d22'],
							type:'line',
							yAxisIndex:1,
							data:data['W'],
							showSymbol:false,
							markLine:{
								data:[
								 ],
								animation:true

							}
					},
					{
							name:'历史水位',
							color: ['#3398DB'],
							type:'line',
							data:historyData['RZ'],
				yAxisIndex:0,
				xAxisIndex:1,
				showSymbol:false,
							markLine:{
								data:[
								 ],
								animation:true

							}
					},
					{
							name:'历史蓄水量',
							color: ['#ff5d22'],
							type:'line',
							yAxisIndex:1,
							xAxisIndex:1,
							data:historyData['W'],
							showSymbol:false,
							markLine:{
								data:[
								 ],
								animation:true

							}
					}
			]
	};
return option;
},
	getzqRiverOption:function(data,LNNM){
		var qmin = Number.MAX_VALUE;
		var qmax = Number.MIN_VALUE;
		var max = Number.MIN_VALUE;
		var min = Number.MAX_VALUE;
		for(var i = 0;i<data.length;i++){
		    if(qmax<data[i][0]){
		      qmax = data[i][0];
		    }
		    if(qmin>data[i][0]){
		      qmin = data[i][0];
		    }
		}
		if(qmax==0){
			qmax = 10;
		}
		//qmin = qmax;
		//min = max;
		for(var i = 0;i < data.length;i++){
		    if(max < data[i][1]){
		      max = data[i][1];
		    }
		    if(min > data[i][1]){
		      min = data[i][1];
		    }
		}
		zsplitNumber = 10;
		if(max-min>5){//可控制条件测试效果
			min = min-(min%5);
			max = (max+5)-((max+5)%5);

		}else{
			min = min-(min%0.5);
			max = (max+0.5)-((max+0.5)%0.5);
			zsplitNumber = (max-min)/0.5;

		}

		qsplitNumber = 10;
		if(qmax-qmin>5){//可控制条件测试效果
			qmin = qmin-(qmin%5);
			qmax = (qmax+5)-((qmax+5)%5);
			var n = 1;
			qsplitNumber = (qmax-qmin)/(5*n);
			while(qsplitNumber>10){
				n=n*10;
				qsplitNumber = (qmax-qmin)/(5*n);
			}
			qsplitNumber = qsplitNumber;
		}else{
			qmin = qmin-(qmin%0.5);
			qmax = (qmax+0.5)-((qmax+0.5)%0.5);
			qsplitNumber = (qmax-qmin)/0.5;

		}

		var nameTitle
		if(LNNM =='尚无数据'){
			nameTitle = '尚无数据';
		}else{
			nameTitle = stnm + LNNM + '关系曲线';
		}
		var option =
		{
			color:['#c23531',  '#314656',  '#61a0a8',  '#dd8668',  '#91c7ae',   '#6e7074','#61a0a8', '#bda29a', '#44525d', '#c4ccd3'],
			title : {
				text: nameTitle,
				x:'center',
				y:15,
				textStyle:{
					fontFamily:'宋体',
					fontStyle:'normal'
				}
			},

		tooltip : {
			show:true,//test用
			trigger: 'axis',
			showContent:'true',
			axisPointer:{
				type: 'cross',
	    		crossStyle: {
			        color: 'black',
			        width: 1,
			        type: 'dashed'
			    }
			},
			formatter: function (value) {
							// Function formatter
							return value.toFixed(1) + '';
						}

		},
			legend: {
			 data:[LNNM],
			 y:'bottom'
			},
			dataZoom : {
				show : false,
				realtime : true,
				start : 0,
				end : 100
			},
			toolbox: {
				show : true,
				feature : {
					mark : {show: false},
					dataView : {show: false},
					magicType : {show: false, type: ['line', 'bar']},
					restore : {show: false},
					saveAsImage : {show: true, type : 'jpeg'}
				}
			},
			xAxis : [
				{
					type : 'value',
					name:'流量(m³/s)',
					min:qmin,
					max:qmax,
					nameTextStyle:{
						fontSize:10
					},
					nameLocation:'middle',
		            nameGap:20,
					splitNumber:qsplitNumber,
					position: 'bottom',
					boundaryGap: true,
					axisLine : {    // 轴线
						show: true,
						lineStyle: {
						color: 'black',
						type: 'solid',
						width: 1
						}
					},
					axisTick : {    // 轴标记
						show:true,
						//interval:Math.floor(realbi.length/50),
						length: 2,
						lineStyle: {
							color: '#ccc',
							type: 'solid',
							width: 1
						}
					},
					axisLabel : {
						//interval:Math.floor(realbi.length/10),    // {number}
						margin: 1,
						textStyle: {
						fontFamily: 'Calibri',
						fontSize: 10,
						color:'#3D3D3D',
						fontStyle: 'normal'
						}
					},
					splitLine : {
						show:true,
						lineStyle: {
							color: '#ccc',
							type: 'solid',
							width: 1
						}
					},
					splitArea : {
						show: false,
						areaStyle:{
							color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
						}
					}

				}
			],
			yAxis : [
				{
					type : 'value',
					name:'水位(m)',
					max : max,
					min : min,
					nameTextStyle:{
						fontSize:10
					},
					nameLocation:'middle',
		            nameGap:30,
					splitNumber: zsplitNumber,
					position :'left',
					axisLine : {    // 轴线
						show: true,
						lineStyle: {
						color: 'black',
						type: 'solid',
						width: 1
						}
					},
					axisLabel : {
						show:true,
						//interval:Math.floor(realbi.length/10),    // {number}
						margin: 1,
						formatter: function (value) {
							if(value==0){
								return '0';
							}
							return value.toFixed(2)+'';
						},
						textStyle: {
							fontFamily: 'Calibri',
							fontSize: 10,
							color:'#3D3D3D',
							fontStyle: 'normal'
						}
					},
					splitLine : {
						show: true
					}
				}
				],
				series :[
					        {
					            name:LNNM,
					            type:'line',
					            data:data,
					            symbol: 'none'
					        }
					    ]
			};
				return option;
	},
	//库容曲线chart
	getrzwRiverOption:function(data,dataw,MSTM){
		var qmin = Number.MAX_VALUE;
		var qmax = Number.MIN_VALUE;
		var max = Number.MIN_VALUE;
		var min = Number.MAX_VALUE;
		for(var i = 0;i<data.length;i++){
		    if(qmax<data[i][0]){
		      qmax = data[i][0];
		    }
		    if(qmin>data[i][0]){
		      qmin = data[i][0];
		    }
		}
		if(qmax==0){
			qmax = 10;
		}
		//qmin = qmax;
		//min = max;
		for(var i = 0;i < data.length;i++){
		    if(max < data[i][1]){
		      max = data[i][1];
		    }
		    if(min > data[i][1]){
		      min = data[i][1];
		    }
		}
		zsplitNumber = 10;
		if(max-min>5){//可控制条件测试效果
			min = min-(min%5);
			max = (max+5)-((max+5)%5);

		}else{
			min = min-(min%0.5);
			max = (max+0.5)-((max+0.5)%0.5);
			zsplitNumber = (max-min)/0.5;

		}

		qsplitNumber = 10;
		if(qmax-qmin>5){//可控制条件测试效果
			qmin = qmin-(qmin%5);
			qmax = (qmax+5)-((qmax+5)%5);
			var n = 1;
			qsplitNumber = (qmax-qmin)/(5*n);
			while(qsplitNumber>10){
				n=n*10;
				qsplitNumber = (qmax-qmin)/(5*n);
			}
			qsplitNumber = qsplitNumber;
		}else{
			qmin = qmin-(qmin%0.5);
			qmax = (qmax+0.5)-((qmax+0.5)%0.5);
			qsplitNumber = (qmax-qmin)/0.5;

		}

		var nameTitle
		if(MSTM =='尚无数据'){
			nameTitle = '尚无数据';
		}else{
			nameTitle = stnm + '关系曲线';
		}
		var option =
		{
			color:['#c23531',  '#314656',  '#61a0a8',  '#dd8668',  '#91c7ae',   '#6e7074','#61a0a8', '#bda29a', '#44525d', '#c4ccd3'],
			title : {
				text: nameTitle,
				x:'center',
				y:-10,
				textStyle:{
					fontFamily:'宋体',
					fontStyle:'normal'
				}
			},

		tooltip : {
			show:true,//test用
			trigger: 'axis',
			showContent:'true',
			axisPointer:{
				type: 'cross',
	    		crossStyle: {
			        color: 'black',
			        width: 1,
			        type: 'dashed'
			    }
			},
			formatter: function (value) {
							// Function formatter
							return value.toFixed(1) + '';
						}

		},
			legend: {
			 data:[MSTM],
			 y:'bottom'
			},
			dataZoom : {
				show : false,
				realtime : true,
				start : 0,
				end : 100
			},
			toolbox: {
				show : true,
				feature : {
					mark : {show: false},
					dataView : {show: false},
					magicType : {show: false, type: ['line', 'bar']},
					restore : {show: false},
					saveAsImage : {show: true, type : 'jpeg'}
				}
			},
			xAxis : [
				{
					type : 'value',
					name:'蓄水量(百万m³)',
					min:qmin,
					max:qmax,
					nameLocation:'middle',
		            nameGap:15,
					splitNumber:qsplitNumber,
					position: 'bottom',
					boundaryGap: true,
					nameTextStyle:{
					fontSize:10
				},
					axisLine : {    // 轴线
						show: true,
						lineStyle: {
						color: 'black',
						type: 'solid',
						width: 1
						}
					},
					axisTick : {    // 轴标记
						show:true,
						//interval:Math.floor(realbi.length/50),
						length: 2,
						lineStyle: {
							color: '#ccc',
							type: 'solid',
							width: 1
						}
					},
					axisLabel : {
						//interval:Math.floor(realbi.length/10),    // {number}
						margin: 1,
						textStyle: {
						fontFamily: 'Calibri',
						fontSize: 10,
						color:'#3D3D3D',
						fontStyle: 'normal'
						}
					},
					splitLine : {
						show:true,
						lineStyle: {
							color: '#ccc',
							type: 'solid',
							width: 1
						}
					},
					splitArea : {
						show: false,
						areaStyle:{
							color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
						}
					}

				},
				{
					type : 'value',
					name:'水位面积(m²)',
					nameLocation:'middle',
		            nameGap:10,
		            max:qmax,
		            min:qmin,
		        	nameTextStyle:{
						fontSize:10
					},
					position: 'top',
					boundaryGap: true,
					axisLine : {    // 轴线
						show: true,
						lineStyle: {
						color: 'black',
						type: 'solid',
						width: 1
						}
					},
					axisTick : {    // 轴标记
						show:true,
						//interval:Math.floor(realbi.length/50),
						length: 2,
						lineStyle: {
							color: '#ccc',
							type: 'solid',
							width: 1
						}
					},
					axisLabel : {
						//interval:Math.floor(realbi.length/10),    // {number}
						margin: 1,
						textStyle: {
						fontFamily: 'Calibri',
						fontSize: 10,
						color:'#3D3D3D',
						fontStyle: 'normal'
						}
					},
					splitLine : {
						show:true,
						lineStyle: {
							color: '#ccc',
							type: 'solid',
							width: 1
						}
					},
					splitArea : {
						show: false,
						areaStyle:{
							color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
						}
					}

				}
			],
			yAxis : [
				{
					type : 'value',
					name:'水位(m)',
					max : max,
					min : min,
					nameLocation:'middle',
		            nameGap:20,
		            nameTextStyle:{
						fontSize:10
					},
					splitNumber: zsplitNumber,
					position :'left',
					axisLine : {    // 轴线
						show: true,
						lineStyle: {
						color: 'black',
						type: 'solid',
						width: 1
						}
					},
					axisTick : {    // 轴标记
						show:true,
						//interval:Math.floor(realbi.length/50),
						length: 2,
						lineStyle: {
							color: '#ccc',
							type: 'solid',
							width: 1
						}
					},
					axisLabel : {
						show:true,
						//interval:Math.floor(realbi.length/10),    // {number}
						margin: 1,
						formatter: function (value) {
							if(value==0){
								return '0';
							}
							return value.toFixed(2)+'';
						},
						textStyle: {
							fontFamily: 'Calibri',
							fontSize: 10,
							color:'#3D3D3D',
							fontStyle: 'normal'
						}
					},
					splitLine : {
						show: true
					}
				}
				],
				series :[
					        {
					            name:MSTM,
					            type:'line',
					            data:data,
					            symbol: 'none'
					        },
					        {
					            name:MSTM,
					            type:'line',
					            data:dataw,
					            symbol: 'none'
					        },
					    ]
			};
				return option;
	},
	getSectionEmptyOption:function(){					//大断面起点距高程
			var Option =
			{
				animation:false,
				color:['#c23531',  '#314656',  '#61a0a8',  '#dd8668',  '#91c7ae',   '#6e7074','#61a0a8', '#bda29a', '#44525d', '#c4ccd3'],
				title : {
					text: '',
					x:'center',
					y:15,
					textStyle:{
						fontFamily:'宋体',
						fontStyle:'normal'
					}
				},

			tooltip : {
				show:false,//test用
				trigger: 'axis',
				formatter: function (value) {
								// Function formatter
								return value.toFixed(1) + '';
							}

			},
				legend: {
				 data:''
				},
				dataZoom : {
					show : false,
					realtime : false,
					start : 0,
					end : 100
				},
				toolbox: {
					show : true,
					feature : {
						mark : {show: false},
						dataView : {show: false},
						magicType : {show: false, type: ['line', 'bar']},
						restore : {show: false},
						saveAsImage : {show: true, type : 'jpeg'}
					}
				},
				xAxis : [
					{
						type : 'value',
						name:'起点距(m)',
						min:'dataMin',
						max:'dataMax',
						nameLocation:'middle',
			            nameGap:25,
			            position: 'bottom',
						boundaryGap: true,
						axisLine : {    // 轴线
							show: true,
							lineStyle: {
							color: 'black',
							type: 'solid',
							width: 1
							}
						},
						axisTick : {    // 轴标记
							show:true,
							//interval:Math.floor(realbi.length/50),
							length: 7,
							lineStyle: {
								color: '#ccc',
								type: 'solid',
								width: 1
							}
						},
						axisLabel : {
							//interval:Math.floor(realbi.length/10),    // {number}
							margin: 8,
							textStyle: {
							fontFamily: 'Calibri',
							fontSize: 11.5,
							color:'#3D3D3D',
							fontStyle: 'normal'
							}
						},
						splitLine : {
							show:true,
							lineStyle: {
								color: '#ccc',
								type: 'solid',
								width: 1
							}
						},
						splitArea : {
							show: false,
							areaStyle:{
								color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
							}
						}

					}

				],
				yAxis : [
					{
						type : 'value',
						name:'水位(m)',
						nameLocation:'middle',
			    	nameGap:35,
						max:10,
						min:0,
						axisLine : {    // 轴线
							show: true,
							lineStyle: {
							color: 'black',
							type: 'solid',
							width: 1
							}
						},
						axisLabel : {
							show:true,
							//interval:Math.floor(realbi.length/10),    // {number}
							margin: 8,
							formatter: function (value) {
								if(value==0){
									return '0';
								}
								return value.toFixed(2)+'';
							},
							textStyle: {
								fontFamily: 'Calibri',
								fontSize: 11.5,
								color:'#3D3D3D',
								fontStyle: 'normal'
							}
						},
						splitLine : {
							show: false
						}
					}
					],
					series :[]
				};

					return Option;
		},
	//断面
getemptyOption:function(){					//大断面起点距高程
		var Option =
		{
			color:['#c23531',  '#314656',  '#61a0a8',  '#dd8668',  '#91c7ae',   '#6e7074','#61a0a8', '#bda29a', '#44525d', '#c4ccd3'],
			title : {
				text: '',
				x:'center',
				y:15,
				textStyle:{
					fontFamily:'宋体',
					fontStyle:'normal'
				}
			},

		tooltip : {
			show:false,//test用
			trigger: 'axis',
			formatter: function (value) {
							// Function formatter
							return value.toFixed(1) + '';
						}

		},
			legend: {
			 data:''
			},
			dataZoom : {
				show : false,
				realtime : false,
				start : 0,
				end : 100
			},
			toolbox: {
				show : true,
				feature : {
					mark : {show: false},
					dataView : {show: false},
					magicType : {show: false, type: ['line', 'bar']},
					restore : {show: false},
					saveAsImage : {show: true, type : 'jpeg'}
				}
			},
			xAxis : [
				{
					type : 'value',
					name:'起点距(m)',
					nameLocation:'middle',
		            nameGap:25,
		            max:'dataMax',
		            min:'dataMin',
		            position: 'bottom',
					boundaryGap: true,
					axisLine : {    // 轴线
						show: true,
						lineStyle: {
						color: 'black',
						type: 'solid',
						width: 1
						}
					},
					axisTick : {    // 轴标记
						show:true,
						//interval:Math.floor(realbi.length/50),
						length: 7,
						lineStyle: {
							color: '#ccc',
							type: 'solid',
							width: 1
						}
					},
					axisLabel : {
						//interval:Math.floor(realbi.length/10),    // {number}
						margin: 8,
						textStyle: {
						fontFamily: 'Calibri',
						fontSize: 11.5,
						color:'#3D3D3D',
						fontStyle: 'normal'
						}
					},
					splitLine : {
						show:true,
						lineStyle: {
							color: '#ccc',
							type: 'solid',
							width: 1
						}
					},
					splitArea : {
						show: false,
						areaStyle:{
							color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
						}
					}

				},
				{
					type : 'value',
					name:'流量(m³/s)',
					nameLocation:'middle',
		            nameGap:25,
		            max:'dataMax',
		            min:'dataMin',
					position: 'top',
					boundaryGap: true,
					axisLine : {    // 轴线
						show: true,
						lineStyle: {
						color: 'black',
						type: 'solid',
						width: 1
						}
					},
					axisTick : {    // 轴标记
						show:true,
						//interval:Math.floor(realbi.length/50),
						length: 7,
						lineStyle: {
							color: '#ccc',
							type: 'solid',
							width: 1
						}
					},
					axisLabel : {
						//interval:Math.floor(realbi.length/10),    // {number}
						margin: 8,
						textStyle: {
						fontFamily: 'Calibri',
						fontSize: 11.5,
						color:'#3D3D3D',
						fontStyle: 'normal'
						}
					},
					splitLine : {
						show:true,
						lineStyle: {
							color: '#ccc',
							type: 'solid',
							width: 1
						}
					},
					splitArea : {
						show: false,
						areaStyle:{
							color:['rgba(144,238,144,0.3)','rgba(135,200,250,0.3)']
						}
					}

				}
			],
			yAxis : [
				{
					type : 'value',
					name:'水位(m)',
					nameLocation:'middle',
					max:'dataMax',
		            min:'dataMin',
		            nameGap:35,
					axisLine : {    // 轴线
						show: true,
						lineStyle: {
						color: 'black',
						type: 'solid',
						width: 1
						}
					},
					axisLabel : {
						show:true,
						//interval:Math.floor(realbi.length/10),    // {number}
						margin: 8,
						formatter: function (value) {
							return value.toFixed(2)+'';
						},
						textStyle: {
							fontFamily: 'Calibri',
							fontSize: 11.5,
							color:'#3D3D3D',
							fontStyle: 'normal'
						}
					},
					splitLine : {
						show: true
					}
				}
				],
				series :[]
			};

				return Option;
	},
	getRiverBedSeries:function(data,name){
		var series;
			series = {
						name:name,
			            type:'line',
			            data:data,
			            symbol: 'emptyCircle',
			            symbolSize:2,
			            xAxisIndex:0,
			            //yAxisIndex:1,
			            lineStyle:{
		    				normal:{
		    						width:1
		    				}
					}
					}
			return series;
	},
	getRiverBedZQSeries:function(data,name){
		var series;
			series = {
						name:name,
			            type:'line',
			            data:data,
			            symbol: 'emptyCircle',
			            symbolSize:2,
			            xAxisIndex:1,
			            yAxisIndex:0,
			            lineStyle:{
		    				normal:{
		    						width:1,
		    						}
								  }
					}
			return series;
	}
}
