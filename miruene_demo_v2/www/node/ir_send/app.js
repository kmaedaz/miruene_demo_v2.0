var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');

var fs = require('fs');


var app = express();

var exec = require('child_process').exec;

//œ∏€ñº
var USB_IR_SEND = {
    "LIGHT_ON": 0, //è∆ñæ
    "LIGHT_OFF": 1,
    "JOUYA_ON": 2,
    "JOUYA_OFF": 3,
    "LIGHT_UP": 4,
    "LIGHT_DOWN":5,
    "LIGHT_STEP1": 6,   //ñæÇÈÇ≥
    "LIGHT_STEP2": 7,
    "LIGHT_STEP3": 8,
    "LIGHT_STEP4": 9,
    "LIGHT_STEP5": 10,
    "STAGING_LAMP_ON": 11,
    "STAGING_LAMP_OFF":12,
    "TV_ON": 13,
    "TV_OFF":14,
    "TV_CH_UP": 15,
    "TV_CH_DOWN": 16,
    "TV_CHIDEGI":17,
    "TV_BS":18,
    "TV_CS":19,
    "PET_FOOD_PLAY":20,
    "PET_FOOD_ON_OFF": 21,
    "CURTAIN_CLOSE":22,
    "CURTAIN_OPEN":23,
    "AUDIO_ON": 24,
    "AUDIO_OFF": 25,
    "AUDIO_PLAY": 26,
    "AUDIO_FFSKIP": 28,
    "AUDIO_REVSKIP":29,
    "AUDIO_VOL_UP": 30,
    "AUDIO_VOL_DOWN":31,
    "AIRCON_ON":32,
    "AIRCON_OFF":33,
    "AIRCON_UP": 34,
    "AIRCON_DOWN": 35,
    "KASHITU_ON": 36,
    "KASHITU_OFF":37,
    "THERMOMETER_UP" : 38,
    "THERMOMETER_DOWN":39,
};







// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', index);
//app.use('/users', users);


// TEST
app.get('/endpoint', function (req, res) {
    console.log('body: ' + req.body);


    exec("C:/WINDOWS/system32/notepad.exe");
/*
    var    obj = JSON.parse(req.body)
        var macro_name = obj.name;
        if (USB_IR_SEND[macro_name]) {
            var exe_code = USB_IR_SEND[macro_name];


        } else {
            return false;
        }
*/

});



app.post('/endpoint', function (req, res) {
    console.log('body: ' + req.body);
    var path = "c:/bin/ir.exe";

        var    obj = JSON.parse(req.body)
            var macro_name = obj.name;
            if (USB_IR_SEND[macro_name]) {
                var exe_code = USB_IR_SEND[macro_name];
                var command = path + " " + exe_code;
                exec(command);
            } else {
                console.log("error");
                return false;
            }
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
