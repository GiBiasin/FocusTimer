import state from './state.js'
import * as timer from "./timer.js"
import * as elements from './elements.js'
import * as sound from './sounds.js'

const forest = document.getElementById('tree')
const rain = document.getElementById('rain')
const coffee = document.getElementById('coffee')
const fire = document.getElementById('fire')

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')
    timer.countDown()
    sound.buttonPressAudio.play()
}

export function reset() {
    state.isRunning = false
    state.minutes = 0
    state.seconds = 0
    document.documentElement.classList.remove('running')
    timer.updateDisplay()
    sound.buttonPressAudio.play()
}

export function addTime() {
    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)
    minutes = minutes + 5
    state.minutes = minutes
    state.seconds = seconds
    timer.updateDisplay()
}

export function reduceTime() {
    let minutes = Number(elements.minutes.textContent)
    let seconds = Number(elements.seconds.textContent)
    
    minutes = minutes - 5
    if (minutes > -1 && seconds > 0) {
        state.minutes = minutes
        state.seconds = seconds
        timer.updateDisplay()
    }
}

export function forestSound() {
    state.isMute = tree.classList.toggle('secondary')
    if(state.isMute){
        sound.forestSound.play()
        return
    }
    
    sound.forestSound.pause()
}

export function rainSound() {
    state.isMute = rain.classList.toggle('secondary')
    if(state.isMute){
        sound.rainSound.play()
        return
    }
    
    sound.rainSound.pause()
}

export function CoffeeShopSound() {
    state.isMute = coffee.classList.toggle('secondary')
    if(state.isMute){
        sound.coffeeSound.play()
        return
    }
    
    sound.coffeeSound.pause()
}

export function FirePlaceSound() {
    state.isMute = fire.classList.toggle('secondary')
    if(state.isMute){
        sound.fireSound.play()
        return
    }
    
    sound.fireSound.pause()
}