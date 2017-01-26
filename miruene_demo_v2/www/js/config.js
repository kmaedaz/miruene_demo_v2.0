// This is a JavaScript file
// 設定ﾌｧｲﾙ


// 連想配列を生成する
var USB_IR_SEND = {
        "LIGHT_ON": {"NAME":"照明ON","PARAM":""}, //照明
        "LIGHT_BLINK": { "NAME": "照明点滅", "PARAM": "" },
        "LIGHT_OFF": { "NAME": "照明ON", "PARAM": "" },
        "LAMP_ON": {"NAME":"","PARAM":""},
        "LAMP_OFF": {"NAME":"","PARAM":""},
        "LIGHT_UP": { "NAME": "一段明るく", "PARAM": "" },
        "LIGHT_DOWN": { "NAME": "一段暗く", "PARAM": "" },
        "TV_ON": {"NAME":"TVON","PARAM":""},
        "TV_OFF": {"NAME":"TV_OFF","PARAM":""},
        "TV_CH_UP": {"NAME":"","PARAM":""},
        "TV_CH_DOWN": {"NAME":"","PARAM":""},
        "TV_VOL_UP": {"NAME":"","PARAM":""},
        "TV_VOL_DOWN": {"NAME":"","PARAM":""},
        "PET_FEEDER_PLAY": {"NAME":"給餌器エサをあげる","PARAM":""},
        "PET_FEEDER_ON_OFF": {"NAME":"給餌器ON/OFF","PARAM":""},
        "CURTAIN_OPEN": {"NAME":"カーテン開く","PARAM":""},
        "CURTAIN_CLOSE": {"NAME":"カーテン閉じる","PARAM":""},
        "AUDIO_ON": {"NAME":"オーディオON","PARAM":""},
        "AUDIO_OFF": {"NAME":"オーディオOFF","PARAM":""},
        "AUDIO_PLAY": {"NAME":"オーディオ再生","PARAM":""},
        "AUDIO_FFSKIP": {"NAME":"オーディオ送","PARAM":""},
        "AUDIO_REVSKIP": {"NAME":"オーディオ逆戻し","PARAM":""},
        "AUDIO_VOL_UP": {"NAME":"オーディオ音量アップ","PARAM":""},
        "AUDIO_VOL_DOWN": {"NAME":"オーディオ音量ダウン","PARAM":""},
        "AIRCON_ON": {"NAME":"エアコンon","PARAM":""},
        "AIRCON_OFF": {"NAME":"エアコンOFF","PARAM":""},
        "AIRCON_UP": {"NAME":"","PARAM":""},
        "AIRCON_DOWN": {"NAME":"","PARAM":""},
        "PURIFER_ON": {"NAME":"","PARAM":""},
        "PURIFER_OFF": {"NAME":"","PARAM":""},
        "STAGING_LAMP_ON": {"NAME":"","PARAM":""},
        "STAGING_LAMP_OFF": {"NAME":"","PARAM":""},
    };

console.log(IRKit_SEND_PARAM);
console.log(JSON.stringify(IRKit_SEND_PARAM));
