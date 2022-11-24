input.onButtonPressed(Button.A, function () {
    motor.turnRight(50)
    basic.pause(2000)
    motor.stop()
})
basic.showIcon(IconNames.Happy)
basic.forever(function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    basic.showString("A")
})
