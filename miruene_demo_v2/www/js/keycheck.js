
var rep_hits_flag = true; //操作されたかチェック



/*
  return:true 

*/
function key_repeat_check() {
    if (rep_hits_flag) {
        return true;
    }
    rep_hits_flag = true;
    setTimeout(function () {
        console.log("kye enabled");
        rep_hits_flag = false;
    }, 150);
    return false;


}





