input.onButtonPressed(Button.A, function () {
    trial = 1
    basic.pause(1000)
    trial = 0
})
let trial = 0
let X = [
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1,
0,
0,
0,
0
]
let Y = [
0,
0,
0,
0,
0,
1,
2,
3,
4,
4,
4,
4,
4,
3,
2,
1,
1
]
basic.forever(function () {
    for (let index = 0; index <= X.length - 1; index++) {
        if (trial == 1) {
            basic.showLeds(`
                # # # # #
                # . . . #
                # . . . #
                # . . . #
                # # # # #
                `)
        }
        basic.clearScreen()
        led.plot(X[index], Y[index])
        basic.pause(500)
    }
})
