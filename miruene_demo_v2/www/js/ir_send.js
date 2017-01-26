// This is a JavaScript file

// Irkit


// コマンド送信
// 引数にキー名を指定
// return true:success false:Failure
function sendIRUSB_command(val) {
    console.log("sendIRUSB_command" + val);
       //local IP
       $.ajax({
            type     : "POST",
            url: "http://localhost:3000/",
            data: {
                name: val
            }, complete: function (jqxhr, status) {
                console.log("complete: ", jqxhr, status);
            },
            success: function(res) {
                    console.log(res);
            },
      error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.error("XMLHttpRequest : " + XMLHttpRequest.status);
         },

        });
    return true;
};

