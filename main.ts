input.onButtonPressed(Button.A, function () {
    music.setBuiltInSpeakerEnabled(true)
    music.setTempo(108)
    for (let index = 0; index < 3; index++) {
        music.playTone(262, music.beat(BeatFraction.Whole) / 3)
    }
    music.playTone(392, music.beat(BeatFraction.Whole) / 3)
    music.playTone(294, music.beat(BeatFraction.Whole) / 3)
    for (let index = 0; index < 2; index++) {
        music.playTone(523, music.beat(BeatFraction.Whole) / 3)
        music.playTone(494, music.beat(BeatFraction.Whole) / 3)
        music.playTone(440, music.beat(BeatFraction.Whole) / 3)
        music.playTone(784, music.beat(BeatFraction.Whole) / 3)
        music.playTone(587, music.beat(BeatFraction.Double))
    }
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(523, music.beat(BeatFraction.Double))
    music.playTone(440, music.beat(BeatFraction.Double))
})
