import { getCustomProperty, incrementCustomProperty, setCustomProperty } from "./updateCustomProperty.js"
const SPEED = 0.075
const groundElems = document.querySelectorAll('[data-ground]')
export function setupGround(){
    setCustomProperty(groundElems[0], "--left", 0)
    setCustomProperty(groundElems[1], "--left",300)

}
export function updateGround(delta){
  groundElems.forEach(ground => {
    incrementCustomProperty(ground, "--left", delta * SPEED*-1)
    if(getCustomProperty(ground, "--left") <=  -300){
        incrementCustomProperty(ground, "--left", 600)
    }
  })
}