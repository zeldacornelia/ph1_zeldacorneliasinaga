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
        led.plot(X[index], Y[index])
        basic.pause(500)
        basic.clearScreen()
    }
})
