/** Tilt effect strength */
const base = .01

/**
 * Adds tilt effect to element
 * @param {Element} element 
 */
export function addTiltOnHover(element) {
    element.addEventListener('mousemove', hoverHandler)
    element.addEventListener('mouseout', () => {
        element.style.cssText = `--rX:0turn; --rY:0turn;`
    })
    function hoverHandler(event) {
        let x = (2 * event.layerX) / element.offsetWidth - 1
        let y = (2 * event.layerY) / element.offsetHeight - 1
        let css = `--rX:${y * base}turn; --rY:${-x * base}turn;`
        this.style.cssText = css
    }
}



