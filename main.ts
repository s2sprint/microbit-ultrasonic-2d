let rad = 0
let len = 0
let x = 0
let y = 0
basic.forever(function () {
    rad = input.compassHeading() / 360 * 6.28318
    len = grove.measureInCentimeters(DigitalPin.P0)
    x = len * Math.cos(rad)
    y = len * Math.sin(rad)
    serial.writeLine("x:" + x)
    serial.writeLine("y:" + y)
    basic.pause(100)
})
