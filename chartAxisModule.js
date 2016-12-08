require('./numberFunctionalModule');
axisModule = {
		zAxisIntervals : [0.5,1,1.5,2,2.5,5,10,15,20,25,50,100,150,200,250,500,1000],
		qAxisIntervals : [5,10,50,100,10,200,300,400,500,600,700,800,900,1000,2000,3000,4000,5000,10000],
		pAxisIntervals : [0.5,1,1.5,2,2.5,3,3.5,4,4.5,5,5.5,6,6.5,7,7.5,8],

		ruleTheYAxis:function(option,ruleYAxisIndex,axisPurpose,spiltNumber){
					/*
					*	方法说明：规矩y轴的最大最小值及给定明确间隔
					*	参数说明：        option - 需要规范化的图表option
										 ruleYAxisIndex - 需要规范化的轴下标(一个option中可以拥有两条y轴)
										    axisPurpose - 轴用处(分为水位轴,流量轴,雨量轴 取值为'Z','Q','P')
												splitNumber - 给定分割数(可以通过给定分割数来确定间隔及最大最小值,主要用于满足图表需要两个坐标轴分割数字一样的需求)
						返回结果：
									{ruledOption:option,arguments:{min,max,interval,splitNumber}} - 返回对象包含规范化处理后的option及规范相关参数以方便其他处理使用
						备注：
					*/
					var currentUseAxisIntervals;
					switch(axisPurpose){//判断用途,取用相对应的间隔数组
							case 'Z':
								currentUseAxisIntervals = axisModule.zAxisIntervals;
							  break;
							case 'Q':
							  currentUseAxisIntervals = axisModule.qAxisIntervals;
							  break;
							case 'P':
							  currentUseAxisIntervals = axisModule.pAxisIntervals;
							  break;
							default:
							  alert('给定参数错误');return;
					}

					var ruleUseSeries = option.series.map(function(item){//获得与目标轴相关的series数据
								if(item.hasOwnProperty('yAxisIndex')&&item.yAxisIndex==ruleYAxisIndex){
						    	return item;
								}
					});


					var max = Number.MIN_VALUE;
					var min = Number.MAX_VALUE;
					for(var i = 0;i<ruleUseSeries.length;i++){//循环涉及的series获取N个数据的极值
						if(typeof(ruleUseSeries[i])!="undefined"){
							var tempExtremumArray = numberFunctionalModule.getExtremum(ruleUseSeries[i].data);
							if(min>tempExtremumArray[0]){
								min = tempExtremumArray[0];
							}
							if(max<tempExtremumArray[1]){
								max = tempExtremumArray[1];
							}
						}
					}

					var ruledextremumArray = axisModule.getRuledextremum(max,min,axisPurpose);//规范化最大值最小值
					max = ruledextremumArray[1];
					min = ruledextremumArray[0];

					if (typeof(spiltNumber) == "undefined") {//即不给定分割段数的规范化方法
							var currentIntervalsIndex = 0;
							var extremumDifference = max - min;
							var currentSplitNumber = extremumDifference/currentUseAxisIntervals[currentIntervalsIndex];
							while(currentSplitNumber>11){
								currentIntervalsIndex++;
									currentSplitNumber = extremumDifference/currentUseAxisIntervals[currentIntervalsIndex];

							}
							max = min + currentUseAxisIntervals[currentIntervalsIndex] * currentSplitNumber;
					}else{
							var currentIntervalsIndex = 0;
							var addedMax = min+currentUseAxisIntervals[currentIntervalsIndex]*spiltNumber;
							while(addedMax<max){
								currentIntervalsIndex++;
								addedMax = min+currentUseAxisIntervals[currentIntervalsIndex]*spiltNumber;
							}
							max = addedMax;
					}
					//ruledextremumArray = axisModule.getRuledextremumForNew(max,min,axisPurpose,currentUseAxisIntervals[currentIntervalsIndex]);//在此规范化最大值最小值
					//max = ruledextremumArray[1];
					//min = ruledextremumArray[0];
					option.yAxis[ruleYAxisIndex].max = max;
					option.yAxis[ruleYAxisIndex].min = min;
					option.yAxis[ruleYAxisIndex].interval =  currentUseAxisIntervals[currentIntervalsIndex];
					return {ruledOption:option,arguments:{max:max,min:min,SplitNumber:currentSplitNumber}};
					//es 6 : return [option,max,min,currentSplitNumber];
		},
		getRuledextremum:function(max,min,axisPurpose){
					/*
					*	方法说明：规范化最大最小值
					*	参数说明：        max - 需要规范的最大值(数据实际最大值)
										 				 min - 需要规范的最小值(数据实际最小值)
												 purpose - 规范目的
						返回结果：  [min,max] - 规范化过后的最小最大值数组(ES6预计可更改为解构赋值结构)
						备注：
					*/
					var ruleNumber;
					var adds;
					switch(axisPurpose){//判断用途,取用相对应的规范化除数
							case 'Z':
								ruleNumber = 0.5;
								adds = 0.1;
							  break;
							case 'Q':
							  ruleNumber = 10;
								adds = 1;
							  break;
							case 'P':
							  ruleNumber = 0.5;
								adds = 0.1;
							  break;
							default:
							  alert('给定参数错误');return;
					}

							max = Math.ceil(max);




						min = Math.floor(min);


					while(max%ruleNumber!=0){
							max = max + adds;
					}
					while(min%ruleNumber!=0&&min>0){
							min = min - adds;
					}
					if(min<0){
						min = 0;
					}
					return [min,max];
					//es 6 : return [min,max];
		},
		getRuledextremumForNew:function(max,min,axisPurpose,interval){
			/*
			*	方法说明：再次规范化最大最小值
			*	参数说明：        max - 需要规范的最大值(数据实际最大值)
								 				 min - 需要规范的最小值(数据实际最小值)
										 purpose - 规范目的
										 interval -间隔
				返回结果：  [min,max] - 规范化过后的最小最大值数组(ES6预计可更改为解构赋值结构)
				备注：
			*/
			var ruleNumber;
			var adds;
			switch(axisPurpose){//判断用途,取用相对应的规范化除数
					case 'Z':
						ruleNumber = 0.5;
						adds = 0.1;
					  break;
					case 'Q':
					  ruleNumber = 10;
						adds = 1;
					  break;
					case 'P':
					  ruleNumber = 0.5;
						adds = 0.1;
					  break;
					default:
					  alert('给定参数错误');return;
			}
			if(interval==0.2){
				if(max-Math.floor(max)>=0.5){
					if(max-Math.floor(max)-0.5>0.2){
						max = Math.ceil(max);
					}else{
						max = Math.floor(max)+0.7;
					}

			      }else{
			    	  if(max-Math.floor(max)>0.3){
							max = Math.floor(max)+0.5;
						}else{
							max = Math.floor(max)+0.3;
						}
			      }
				if(min-Math.floor(min)>=0.5){
					if(min-Math.floor(min)-0.5>0.2){
						min = Math.floor(min)+0.7;
					}else{
						min = Math.floor(min)+0.5;
					}
				}else{
					if(min-Math.floor(min)>0.3){
						min = Math.floor(min)+0.3;
					}else{
						min = Math.floor(min);
					}
				}
		   }else if(interval==0.5){
				if(max-Math.floor(max)>=0.5){
					max = Math.ceil(max);

			       }else{
				    max = Math.floor(max)+0.5;
			     }
			    if(min-Math.floor(min)>=0.5){

			        min = Math.floor(min)+0.5;
			       }else{

				    min = Math.floor(min);
			    }

			}else{
				max = Math.ceil(max);
				min = Math.floor(min);
			}


			while(max%ruleNumber!=0){
					max = max + adds;
			}
			while(min%ruleNumber!=0&&min>0){
					min = min - adds;
			}
			if(min<0){
				min = 0;
			}
			return [min,max];
			//es6: return [min,max];
}

};
module.exports = axisModule;
