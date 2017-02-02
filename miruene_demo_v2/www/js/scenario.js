// This is a JavaScript file

// シナリオ実行

var scenario_data = {

    "SCENARIO_HEATPROTECT": {
        "NAME": "熱中症予防",
        "PARAM": "1:HIDE:#scene_top_button,4:IR_COMMAND:CURTAIN_OPEN,6:IR_COMMAND:THERMOMETER_UP,6:WAIT:4,7:IR_COMMAND:AIRCON_ON,6:WAIT:5,5:IR_COMMAND:CURTAIN_CLOSE,6:IR_COMMAND:THERMOMETER_DOWN,8:SHOW:#scene_top_button"

    },

    "SCENARIO_CRIMEDEFEND": {
        "NAME": "防犯",
        "PARAM": "0:HIDE:#scene_top_button,4:IR_COMMAND:CURTAIN_OPEN,2:WAIT:2,1:IR_COMMAND:STAGING_LAMP_OFF,7:IR_COMMAND:CURTAIN_CLOSE,4:WAIT:2,4:IR_COMMAND:LIGHT_ON, 8:SHOW:#scene_top_button"
    },

    "SCENARIO_WAKEUP": {
        "NAME": "起床",
        "PARAM": "0:HIDE:#scene_top_button,1:IR_COMMAND:CURTAIN_CLOSE,2:WAIT:4,3:IR_COMMAND:AUDIO_PLAY,4:WAIT:3, 5:IR_COMMAND:CURTAIN_OPEN, 6:SHOW:#scene_top_button"
    },

    "SCENARIO_OUTING": {
        "NAME": "外出",
        "PARAM": "1:HIDE:#scene_top_button,3:IR_COMMAND:LIGHT_ON,4:IR_COMMAND:AIRCON_ON,5:WAIT:5,6:IR_COMMAND:AIRCON_OFF,5:WAIT:3,1:IR_COMMAND:JOUYA_ON,9:IR_COMMAND:LIGHT_OFF,7:SHOW:#scene_top_button"
    },

    "SCENARIO_RETURNING": {
        "NAME": "帰宅",
        "PARAM": "1:HIDE:#scene_top_button,1:WAIT:4,5:IR_COMMAND:AIRCON_ON, 6:WAIT:3, 4:IR_COMMAND:LIGHT_ON"
    },


    "SCENARIO_POST_HEATPROTECT": {
        "NAME": "熱中症予防後処理",
        "PARAM": "1:IR_COMMAND:THERMOMETER_DOWN,1:WAIT:1,2:IR_COMMAND:CURTAIN_OPEN,1:WAIT:2,3:IR_COMMAND:AIRCON_OFF,4:IR_COMMAND:AIRCON_ACONOFF"
    },

    "SCENARIO_POST_CRIMEDEFEND": {
        "NAME": "防犯後処理",
        "PARAM": "1:IR_COMMAND:STAGING_LIGHT_OFF, 2:IR_COMMAND:LIGHT_OFF,1:WAIT:1,3:IR_COMMAND:CURTAIN_OPEN"
    },

    "SCENARIO_POST_WAKEUP": {
        "NAME": "起床後処理",
        "PARAM": "3:IR_COMMAND:AUDIO_ACONOFF, 4:IR_COMMAND:CURTAIN_OPEN,5:WAIT:1,6:IR_COMMAND:LIGHT_OFF"
    },

    "SCENARIO_POST_OUTING": {
        "NAME": "外出後処理",
        "PARAM": "1:IR_COMMAND:LIGHT_OFF,2:IR_COMMAND:AIRCON_OFF,3:IR_COMMAND:CURTAIN_OPEN"
    },

    "SCENARIO_POST_RETURNING": {
        "NAME": "帰宅後処理", "PARAM": "1:IR_COMMAND:AIRCON_OFF"
    },

    "SCENARIO_POST_TV_RETURNING": {
        "NAME": "帰宅後処理", "PARAM": "1:IR_COMMAND:TV_ACONOFF"
    },

    "SCENARIO_POST_AUDIO_RETURNING": {
        "NAME": "帰宅後処理", "PARAM": "1:IR_COMMAND:AUDIO_ACONOFF"
    },


    "KIKI_ALL_RESET": {
        "NAME": "シナリオ全初期化",
        "PARAM": "3:IR_COMMAND:AIRCON_OFF,7:IR_COMMAND:AUDIO_ACONOFF,0:IR_COMMAND:TV_ACONOFF,1:IR_COMMAND:JOUYA_ON,9:IR_COMMAND:LIGHT_OFF "
     },

    "SCENARIO_ALL_RESET": {
        "NAME": "シナリオ全初期化",
        "PARAM": "4:IR_COMMAND:KASHITU_OFF,1:IR_COMMAND:JOUYA_ON,9:IR_COMMAND:LIGHT_OFF"
     },

    "SCENARIO_TOP_RESET": {
        "NAME": "シナリオトップページ",
        "PARAM": "4:IR_COMMAND:AIRCON_ACONOFF,4:IR_COMMAND:KASHITU_OFF,1:IR_COMMAND:JOUYA_ON,9:IR_COMMAND:LIGHT_OFF,1:IR_COMMAND:TV_ACONOFF,1:IR_COMMAND:AUDIO_ACONOFF"
     },


    "KIKI_LIGHT_OFFT": {
        "NAME": "照明",
        "PARAM": "1:IR_COMMAND:JOUYA_ON,2:IR_COMMAND:LIGHT_OFF,3:IR_COMMAND:AIRCON_OFF"
     },

};


function scenario_play(scenario_arr) {
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
            sendIRUSB_command(val);
            setTimeout(    function (){
                 scenario_play(next_arr);
            } , n*1300);
        } else if( key=="VIDEO"){
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

                video_tmp.play();
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
    var tmp = scenario_data;
    var param;
    var param1;
    console.log(tmp);

    
    var param = tmp[val];

    var result1 = param.PARAM.split(",");
    console.log("-------------------------");

    console.log(result1);


    scenario_play(result1);
	return true;

}



