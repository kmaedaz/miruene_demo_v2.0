
var rep_hits_flag = true; //�A�ł��ꂽ���`�F�b�N

var opration_flag = false; //���삪��������
/*
  �A�Ŗh�~
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



/*
  ���삪�Ȃ��ꍇ�͑J�ڂ���
  return:true 

*/

function opration_check(val,scenario) {
    if (!opration_flag) {
        console.log("return URL"+val);
        if(scenario){       
            scenario_exec(scenario);
                setTimeout( function (){
                location.href = val;
            } , 3000); 
        } else {
            location.href = val;
        }

    } else {
        console.log("returnURL:"+val);
    }
    opration_flag = false;
    return true;
}


/*
  �E�F�C�g�����đJ��

*/

function wait_location(href,n) {

	setTimeout( function (){
		location.href = href;
	} , n);

}


