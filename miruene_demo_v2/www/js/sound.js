// sound


ion.sound({
    sounds: [                       // set sounds names
            { name: "click1" },
            { name: "click2" },
            { name: "click3" },
            { name: "click4" },
            { name: "button03a" },
    ],
    path: "./sounds/",              // set path to sounds
    multiPlay: true,               // playing only 1 sound at once
    volume: "1.0"                   // not so loud please
});

function setBtnSound() {
    // ボタンタップ時 効果音
    $('.btn_tap_sound').bind('touchstart mousedown', function () {
        ion.sound.play("button03a");
        console.log("btn_tap_sound");
    });

}

