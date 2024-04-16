input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        . . # . .
        . # . . .
        # # # # #
        . # . . .
        . . # . .
        `)
    Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Go)
})
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
Kitronik_STOPbit.trafficLightState(Kitronik_STOPbit.LightStates.Stop)
