var sys = require('sys'),
url = require('url'),
http = require('http'),
qs = require('querystring');


var exec = require('child_process').exec;

//Ï¸Û–¼

var USB_IR_SEND = {
    "LIGHT_ON": 0, //Æ–¾
    "LIGHT_OFF": 1,
    "JOUYA_ON": 2,
    "JOUYA_OFF": 3,
    "LIGHT_UP": 4,
    "LIGHT_DOWN": 5,
    "LIGHT_STEP1": 6,   //–¾‚é‚³
    "LIGHT_STEP2": 7,
    "LIGHT_STEP3": 8,
    "LIGHT_STEP4": 9,
    "LIGHT_STEP5": 10,
    "STAGING_LAMP_ON": 11,
    "STAGING_LAMP_OFF": 12,
    "TV_ON": 13,
    "TV_OFF": 14,
    "TV_CH_UP": 15,
    "TV_CH_DOWN": 16,
    "TV_CHIDEGI": 17,
    "TV_BS": 18,
    "TV_CS": 19,
    "PET_FOOD_PLAY": 20,
    "PET_FOOD_ON_OFF": 21,
    "CURTAIN_CLOSE": 22,
    "CURTAIN_OPEN": 23,
    "AUDIO_ON": 24,
    "AUDIO_OFF": 25,
    "AUDIO_PLAY": 26,
    "AUDIO_FFSKIP": 28,
    "AUDIO_REVSKIP": 29,
    "AUDIO_VOL_UP": 30,
    "AUDIO_VOL_DOWN": 31,
    "AIRCON_ON": 32,
    "AIRCON_OFF": 33,
    "AIRCON_UP": 34,
    "AIRCON_DOWN": 35,
    "KASHITU_ON": 36,
    "KASHITU_OFF": 37,
    "THERMOMETER_UP": 38,
    "THERMOMETER_DOWN": 39,
};





http.createServer(function (req, res) {

    var path = "c:/bin/ir.exe";

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
                console.log("ret:" + ret);

            } else {
                console.log("error");
                return false;
            }

        });
    }


}).listen(3000, "127.0.0.1");