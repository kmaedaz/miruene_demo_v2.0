// This is a JavaScript file

// シナリオ実行
function scenario_play(scenario_arr){
    console.log(scenario_arr);
    if(!scenario_arr || scenario_arr== undefined){
    	return false;	
	}

    var com_tmp = scenario_arr.shift();
	var next_arr =scenario_arr;
    console.log("next"+next_arr);
    if(!com_tmp){
    	return false;	
    }
    var n=1;
	var caommand =com_tmp.split(":");
	if(!caommand){
		return false;	
	}
    // 項番は読まない
	var key = caommand[1];
	var val = caommand[2];
    var src = caommand[3];

    console.log(key);
    console.log(val);

        if(key=="WAIT")
        {
	        n = val;    
	        console.log("wait:"+n);
            setTimeout( function (){
                scenario_play(next_arr);
            } , n*1000);
        } else if(key=="HIDE") {
            console.log("HIDE"+val);
			$(val).hide();			
            setTimeout(    function (){
                scenario_play(next_arr);
            } , n*300);
        } else if(key=="SHOW") {
            console.log("SHOW"+val);
			$(val).show();
            setTimeout(    function (){
                scenario_play(next_arr);
            } , n*300);

        } else if(key=="IR_COMMAND"){
            console.log("COMMAND"+val);
            sendIRkit_command(val);
            setTimeout(    function (){
                 scenario_play(next_arr);
            } , n*300);
        } else if( key=="VIDEO"){

/*  OUNSEN UI VIDEO　オブジェクトがうまく取得できないので暫定廃止
            
                val ="video#returnhome.movie_field";
                console.log("VIDEO:"+val+"src:"+src);
                console.table( $(val) );
                var video_tmp = document.getElementById("#returnhome");
                console.table( $(video_tmp) );
                console.log( $(video_tmp) );

                var video_tmp =$(val);
                console.log( video_tmp.get(0));
        
                //video_tmp.currentSrc =src;
                video_tmp.src =src;

//                video_tmp.load();
//                video_tmp.play();
*/
                setTimeout(    function (){
                    scenario_play(next_arr);
                } , n);

            } else {
            console.error("err"+key);
            
        }


	return ;
}




// シナリオ実行
function scenario_exec(val){
    var tmp= localStorage.getItem(val);
    var param;
    var param1;
    console.log(tmp);
    if(!tmp)
    {
     return ;    
    }
    try {
        param=  JSON.parse(tmp);
        } catch (e) {
        console.error("erro");
            return false;
        }
        console.log(param);


	console.log(param.PARAM);
	var result1 = param.PARAM.split(",");
	console.log(result1);
    scenario_play(result1);
	return true;

}



