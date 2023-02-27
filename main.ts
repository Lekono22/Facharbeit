basic.forever(function () {
    if (JoyCar.sonar() > 30) {
        JoyCar.drive(FRDirection.Forward, 60)
    } else {
        if (JoyCar.sonar() < 30) {
            JoyCar.stop(StopIntensity.Intense)
            JoyCar.hazardlights(ToggleSwitch.On)
        }
    }
})
