// This is a JavaScript file

// Irkit


// ipアドレスを取得
function getIRkit_IP(val) {
    var ip= localStorage.getItem("IRKIT_IP"+val );
    console.log("IP"+ip);
     return ip;
};

// ipアドレスを設定
function setIRkit_IP(val,ip) {
     var ip=localStorage.setItem("IRKIT_IP"+val,ip );
     return ip;
    console.log("!IP"+ip);


};

// clientkeyを取得
function getIRkit_clientkey(val) {
    console.log("getIRkit_clientkey:"+val);
    var tmp= localStorage.getItem("CLIENTKEY"+val);
    var param;
    try {
        param=  JSON.parse(tmp);
        } catch (e) {
        console.error("erro");
            return false;
        }
    var clientkey = param.PARAM;
     console.log("getIRkit_clientkey"+ clientkey);
     return clientkey;
};

// clientkeyを取得
function getIRkit_deviceid(val) {
    var tmp =localStorage.getItem("DEVICEID"+val );
    var param;
    try {
        param=  JSON.parse(tmp);
        } catch (e) {
        console.error("error");
            return false;
        }
    var deviceid = param["PARAM"];
    console.log("getIRkit_deviceid"+deviceid);
    return deviceid;
};



// passwordを取得
function getIRkit_password(val) {
    var tmp =localStorage.getItem("IRKITPASSWORD"+val );
    var param;
    try {
        param=  JSON.parse(tmp);
        } catch (e) {
        console.error("error");
            return false;
        }
    var password = param["PARAM"];
    console.log("getIRkit_password"+password);
    return password;
};


// コマンド送信
// 引数にキー名を指定
// return true:success false:Failure
function sendIRkit_command(val) {
    console.log("commandIRkit_IP"+val);
    var ret =false;
    var tmp = localStorage.getItem(val );
    if(!tmp){
        console.error("sendIRkit_command");
        return ret;
    }
    console.log(tmp);
    var param;
    try {
        param=  JSON.parse(tmp);
        } catch (e) {
        console.error("sendIRkit_command");
        }
    console.log(param);
    var irkit =param.IRKIT;//IrKit
    var param =param.PARAM;//赤外線データ
    if(param == null){
        console.error("Not found parameter");
		return false;
	}

    console.log(irkit);
    console.table(param);
    var ip;
	if(irkit){
		ip=getIRkit_IP(irkit);
	}
    console.log(ip);
    if(ip){

        var password =getIRkit_password(irkit);
        param = param.replace("{", "{\"password\":\""+password+"\",");
        console.log("sending message: ", param);
       //local IP
       $.ajax({
            type     : "POST",
            url      : "http://" + ip + "/messages",
            data     : param,
            complete : function(jqxhr, status) {
                console.log("complete: ", jqxhr, status);
            },
            success: function(res) {
                    console.log(res);
            },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.error("XMLHttpRequest : " + XMLHttpRequest.status);
         },

        });
    } else{
        // Internet server
        var clientkey = getIRkit_clientkey(irkit);
        var deviceid =  getIRkit_deviceid(irkit);
       $.ajax({
            type     : "POST",
            url      : "https://api.getirkit.com/1" + "/messages",
            data: {
                "clientkey": clientkey,
                "deviceid": deviceid,
                "message": param
            },
            complete : function(jqxhr, status) {
                console.log("complete: ", jqxhr, status);
            },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log("XMLHttpRequest : " + XMLHttpRequest.status);
         },

        });

    }
    return ret;
};


// コマンドダブル送信
// 引数にキー名を指定,
//  
// return true:success false:Failure
function sendIRkit_dbl_command(val,n) {
    console.log("sendIRkit_dbl_command"+val);
    sendIRkit_command(val);
    setTimeout(    function (){
         sendIRkit_command(val);
    } , n); 

}


// 初期化
//  
function sendIRkit_init_command() {
    console.log("sendIRkit_init_command");
    sendIRkit_command("AUDIO_ACONOFF");
    setTimeout(    function (){
         sendIRkit_command("TV_ACONOFF");
    } , 100); 

}

