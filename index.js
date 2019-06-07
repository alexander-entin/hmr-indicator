let centerDefaults = {
    text: '\u27F3',
    style: 'color: #11FF11; font-size: 200px; position: absolute; top: 50%; left: 50%; margin-top: -100px; margin-left: -100px',
}

let faviconDefaults = {
    text: '\u27F3',
    color: '#11FF11',
    font: 'bold 32px serif',
}

let cnt = 0
export default ({ center = centerDefaults, favicon = faviconDefaults, duration = 400 } = {}) => {
    if (!cnt++) return // skip 'real' refresh
    if (center) {
        center = { ...centerDefaults, ...center }
        var $center = document.createElement('span')
        $center.innerText = center.text
        document.body.appendChild($center)
    }
    if (favicon) {
        favicon = { ...faviconDefaults, ...favicon }
        var $favicon = document.querySelector('link[rel="icon"]') || document.querySelector('link[rel="shortcut icon"]') || {}
        $favicon.prev = $favicon.href
        var size = 32
        var canvas = document.createElement('canvas')
        canvas.width = size
        canvas.height = size
        var context = canvas.getContext('2d')
    }
    let tick = 50
    let a = 1
    let go = () => {
        if (center) {
            $center.style = `opacity: ${a};` + center.style
        }
        if (favicon) {
            context.clearRect(0, 0, size, size)
            context.globalAlpha = a
            context.font = favicon.font
            context.textBaseline = 'ideographic'
            context.fillStyle = favicon.color
            context.fillText(favicon.text, 0, size)
            $favicon.href = canvas.toDataURL('image/png')
        }
        a -= tick / duration
        if (a > 0) {
            setTimeout(go, tick)
        } else {
            if (center) {
                document.body.removeChild($center)
            }
            if (favicon) {
                $favicon.href = $favicon.prev
            }
        }
    }
    go()
}
