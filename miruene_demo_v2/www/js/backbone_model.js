

//RKit
var IrKitParam = Backbone.Model.extend({
    'localStorage': new Backbone.LocalStorage("IrKitParam_collection-backbone"),
    defaults: {
        "IRKit1": {"NAME":"","PARAM":""},
        "IRKit2": {"NAME":"","PARAM":""},
        "CLIENTKEY1": {"NAME":"","PARAM":""},
        "DEVICEID1": {"NAME":"","PARAM":""},
        "CLIENTKEY2": {"NAME":"","PARAM":""},
        "DEVICEID2": {"NAME":"","PARAM":""},
        "LIGHT_ON": {"NAME":"","PARAM":""}, //照明
        "LIGHT_BLINK": {"NAME":"","PARAM":""},
        "LIGHT_OFF": {"NAME":"","PARAM":""},
        "LAMP_ON": {"NAME":"","PARAM":""},
        "LAMP_OFF": {"NAME":"","PARAM":""},
        "LAMP_UP": {"NAME":"","PARAM":""},
        "LAMP_DOWN": {"NAME":"","PARAM":""},
        "TV_ON": {"NAME":"","PARAM":""},
        "TV_OFF": {"NAME":"","PARAM":""},
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
        "AUDIO_PLAY": {"NAME":"オーディオ","PARAM":""},
        "AUDIO_SKIP": {"NAME":"オーディオ","PARAM":""},
        "AUDIO_VOL_UP": {"NAME":"オーディオ","PARAM":""},
        "AUDIO_VOL_DOWN": {"NAME":"オーディオ","PARAM":""},

        "AIRCON_ON": {"NAME":"","PARAM":""},
        "AIRCON_OFF": {"NAME":"","PARAM":""},

        "AIRCON_UP": {"NAME":"","PARAM":""},
        "AIRCON_DOWN": {"NAME":"","PARAM":""},

        "PURIFER_ON": {"NAME":"","PARAM":""},
        "PURIFER_OFF": {"NAME":"","PARAM":""},
        "STAGING_LAMP_ON": {"NAME":"","PARAM":""},
        "STAGING_LAMP_OFF": {"NAME":"","PARAM":""},
    },
/**
    initialize: function (attrs, options) {
    },
    validate: function (attrs) {
        if (attrs.text.length === 0) {
            return "本文が入力されていません";
        }
    }
**/

});

/**
 * IrKitParamModelのCollection
 */
IrKitParamCollection = Backbone.Collection.extend( {
        'model': IrKitParam,
        // Backbone.LocalStorageの引数はlocalStorageに保存される際のキーです

} );
