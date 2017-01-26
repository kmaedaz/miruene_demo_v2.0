var sys = require('sys'),
url = require('url'),
http = require('http'),
qs = require('querystring');


var exec = require('child_process').exec;

//Ï¸Û–¼

var USB_IR_SEND = {
    "LIGHT_ON": 1, //Æ–¾
    "LIGHT_OFF": 3,
    "JOUYA_ON": 4,
    "JOUYA_OFF": 3,
    "LIGHT_UP": 4,
    "LIGHT_DOWN": 5,
    "LIGHT_STEP1": 26,   //–¾‚é‚³
    "LIGHT_STEP2": 27,
    "LIGHT_STEP3": 28,
    "LIGHT_STEP4": 29,
    "LIGHT_STEP5": 30,
    "STAGING_LAMP_ON": 26,
    "STAGING_LAMP_OFF": 27,
    "TV_ON": 7,
    "TV_OFF": 14,
    "TV_CH_UP": 8,
    "TV_CH_DOWN": 9,
    "TV_CHIDEGI": 10,
    "TV_BS": 11,
    "TV_CS": 19,
    "PET_FOOD_PLAY": 12,
    "PET_FOOD_ON_OFF": 21,
    "CURTAIN_CLOSE": 14,
    "CURTAIN_OPEN": 13,
    "AUDIO_ON": 15,
    "AUDIO_OFF": 17,
    "AUDIO_PLAY": 16,
    "AUDIO_FFSKIP": 18,
    "AUDIO_REVSKIP": 19,
    "AUDIO_VOL_UP": 30,
    "AUDIO_VOL_DOWN": 31,
    "AIRCON_ON": 20,
    "AIRCON_OFF": 33,
    "AIRCON_UP": 34,
    "AIRCON_DOWN": 35,
    "KASHITU_ON": 24,
    "KASHITU_OFF": 25,
    "THERMOMETER_UP": 22,
    "THERMOMETER_DOWN": 23,
};


var SCENARIO_DATA = {

    "SCENARIO_HEATPROTECT": {
        "NAME": "”M’†Ç—\–h",
        "PARAM": "1:HIDE:.scene_top_button, 2:WAIT:1,3:IR_COMMAND:THERMOMETER_UP, 4:WAIT:4, 6:IR_COMMAND:AIRCON_ON, 7:SHOW:.scene_top_button"
    },

    "SCENARIO_CRIMEDEFEND": {
        "NAME": "–h”Æ",
        "PARAM": "0:HIDE:.scene_top_button,1:IR_COMMAND:STAGING_LIGHT_ON, 2:WAIT:4, 3:SHOW:.scenario-shomei, 3:IR_COMMAND:STAGING_LIGHT_OFF, 4:WAIT:2, 7:IR_COMMAND:CURTAIN_CLOSE, 8:SHOW:.scene_top_button"
    },

    "SCENARIO_WAKEUP": {
        "NAME": "‹N°",
        "PARAM": "0:HIDE:.scene_top_button,1:IR_COMMAND:CURTAIN_CLOSE,2:WAIT:4,3:IR_COMMAND:AUDIO_PLAY,4:WAIT:2, 5:IR_COMMAND:CURTAIN_OPEN, 6:SHOW:.scene_top_button"
    },

    "SCENARIO_OUTING": {
        "NAME": "ŠOo",
        "PARAM": "0:HIDE:.scene_top_button,2:WAIT:1,3:IR_COMMAND:LIGHT_ON,4:WAIT:1, 3:IR_COMMAND:AIRCON_ON,4:WAIT:5, 6:IR_COMMAND:AIRCON_OFF,7:WAIT:3,8:IR_COMMAND:LIGHT_OFF,12:SHOW:.scene_top_button"
    },

    "SCENARIO_RETURNING": {
        "NAME": "‹A‘î",
        "PARAM": "1:HIDE:.scene_top_button,2:WAIT:5,4:IR_COMMAND:LIGHT_ON, 3:WAIT:3, 5:IR_COMMAND:AIRCON_ON, 6:SHOW:.scene_top_button"
    },

    "SCENARIO_POST_HEATPROTECT": {
        "NAME": "”M’†Ç—\–hŒãˆ—",
        "PARAM": "0:HIDE:.scene_top_button,1:IR_COMMAND:THERMOMETER_DOWN,2:IR_COMMAND:CURTAIN_OPEN,3:IR_COMMAND:AIRCON_ON"
    },

    "SCENARIO_POST_CRIMEDEFEND": {
        "NAME": "–h”ÆŒãˆ—",
        "PARAM": "1:IR_COMMAND:STAGING_LIGHT_OFF, 2:IR_COMMAND:LIGHT_OFF,3:IR_COMMAND:CURTAIN_OPEN"
    },

    "SCENARIO_POST_WAKEUP": {
        "NAME": "‹N°Œãˆ—",
        "PARAM": "1:IR_COMMAND:AUDIO_STOP,2:WAIT:1,3:IR_COMMAND:AUDIO_OFF, 4:IR_COMMAND:CURTAIN_CLOSE,5:WAIT:1,6:IR_COMMAND:LIGHT_OFF"
    },
    "SCENARIO_POST_OUTING": {
        "NAME": "ŠOoŒãˆ—",
        "PARAM": "1:IR_COMMAND:LIGHT_OFF,2:IR_COMMAND:AIRCON_OFF,3:IR_COMMAND:CURTAIN_OPEN"
    },
    "SCENARIO_POST_RETURNING": {
        "NAME": "‹A‘îŒãˆ—", "PARAM": "1:IR_COMMAND:AIRCON_OFF,1:IR_COMMAND:LIGHT_OFF"
    },
    "SCENARIO_ALLT_RESET": {
        "NAME": "ƒVƒiƒŠƒI‘S‰Šú‰»", "PARAM": "1:IR_COMMAND:AIRCON_OFF,2:IR_COMMAND:PURIFER_OFF,3:IR_COMMAND:TV_ACONOFF,4:IR_COMMAND:AUDIO_ACONOFF"
    },
}



http.createServer(function (req, res) {

    var path = "C:/Users/admin/Documents/Release/ir.exe";

    if (req.method == 'POST') {
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {

            var POST = qs.parse(body);

            console.log(POST.name);
            var macro_name = POST.name;

            if (USB_IR_SEND[macro_name] >=0) {
                var exe_code = USB_IR_SEND[macro_name];
                var command = path + " " + exe_code;
                console.log("command:" + command);
                var ret=exec(command);
                //console.table(ret);

            } else {
                console.log("error");
                return false;
            }

        });
    } else if (req.method == 'GET') {
//‹@”\‚µ‚Ä‚È‚¢
        console.log("aaa");
        var url_parts = url.parse(req.url, true);
        console.log(url_parts.query);
        var body = '';
        req.on('data', function (data) {
            body += data;
        });
        req.on('end', function () {

            res.contentType("application/json");
            res.end(JSON.stringify({ "test": "hoge" }));

            if (SCENARIO_DATA[macro_name] >= 0) {
                var script_code = SCENARIO_DATA[macro_name];
                res.end(JSON.stringify(script_code));


            } else {
                console.log("error");
                return false;
            }

        });
    }







}).listen(3000, "127.0.0.1");