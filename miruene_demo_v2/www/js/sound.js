// sound


ion.sound({
    sounds: [                       // set sounds names
            {name: "click1"},
    ],
    path: "./sounds/",                // set path to sounds
    multiPlay: true,               // playing only 1 sound at once
    volume: "0.8"                   // not so loud please
});

function setBtnSound() {
    // ボタンタップ時 効果音
    $('.btn_tap_sound').bind('touchstart mousedown', function () {
        ion.sound.play("click1");
        console.log("btn_tap_sound");
    });

}

