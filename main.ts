input.onGesture(Gesture.Shake, function () {
    Pases += 1
    basic.showNumber(Pases)
})
let Pases = 0
Pases = 0
basic.forever(function () {
    led.plotBarGraph(
    input.acceleration(Dimension.X),
    1023
    )
})
