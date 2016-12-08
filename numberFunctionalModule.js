
numberFunctionalModulealModule = {
		getExtremum:function(seriesData){
			/*
			*	方法说明：取得seriesData中的最大值最小值
			*	参数说明：        seriesData - 图表option中一个Series的data对象(可以为一维/二维数组)[x,y,z]或者[[x1,y1],[x2,y2]]
				返回结果：  	      [min,max] - 实际数据的最小值最大值数组
				备注：
			*/
			var max = Number.MIN_VALUE;
			var min =Number.MAX_VALUE;
			for(var i = 0;i<seriesData.length;i++){
					var currentItem = seriesData[i];
					if(currentItem instanceof Array){//二维数组 比较第二个值
						if(max<currentItem[1]){
								max = currentItem[1];
						}
						if(min>currentItem[1]){
								min = currentItem[1];
						}
					}else{
						if(max<currentItem){
								max = currentItem;
						}
						if(min>currentItem){
								min = currentItem;
						}
					}
			}
			return [min,max];
		}
};
module.exports  = numberFunctionalModule 
