//
// 赤外線送信パラメータをクラウドにアップします
// npm install ncmb --save
//
var fs = require('fs');

var NCMB = require("ncmb");
var ncmb = new NCMB("0ce7cfdb2fed18bd944053b9bf79beef74f3c75a6068ff6f805564518aa970a4","996ca0646cd9fccc63b95adb74b06f4f1c11cf4b6da21e12243bf961d5fee46b");

var Miruene = ncmb.DataStore("miruene") ;
var obj = JSON.parse(fs.readFileSync('data.json', 'utf8'))

console.log(obj);

Object.keys(obj).forEach(function(key) {
  var val = this[key]; // this は obj
  console.log(key, val);

     var tempLog = new Miruene() ;
		// 配列から削除
             tempLog
             .set("date",(new Date()))
             .set("KEY",key)
             .set("VALUE",JSON.stringify(val))
             .save()
             .then(function(tempLog){
//	           tempLog.set("KEY", true);
               console.log("message is saved.");
//               return  tempLog.update();
             })
            .then(function(tempLog){
           })
            .catch(function(err){
		      // エラー処理
			console.log("NIFTY DB ERROR!");
		    }) ;
}, obj);


// 配列から削除
//gameScore.remove("skills", "flying");


