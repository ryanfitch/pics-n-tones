    var synth = new Tone.SimpleSynth({
      "oscillator": {
        "type": "square"
      },
      "envelope": {
        "attack": 0.01,
        "decay": 0.2,
        "sustain": 0.2,
        "release": 0.2,
      }
    }).toMaster();

    $("#tone1").hover(function() {
    console.log("działa");
      synth.triggerAttackRelease("C6", 3).triggerAttackRelease("D5", 2);
    });
    $("#tone2").hover(function() {
      synth.triggerRelease();
    });