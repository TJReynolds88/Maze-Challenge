var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

ctx.fillStyle = 'black';
ctx.fillRect(0, 0, 500, 500);

var drawing = false;
var playing = false;

canvas.addEventListener('mousedown', function (event) {
    drawing = true
    playing = false

    ctx.fillRect(0, 0, 500, 500)

    ctx.lineWidth = 10
    ctx.lineCap = 'round'
    ctx.strokeStyle = 'white'

    ctx.beginPath()
    ctx.moveTo(event.offsetX, event,offsetY)
})

canvas.addEventListener('mousemove', function (event) {
    if (drawing) {
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke()
    }
    if (playing) {
        var insideLine = 
            ctx.isPointInStroke(event.offsetX, event.offsetY)
        if (!insideLine) {
            playing = false
            alert('You Lose!')
            ctx.strokeStyle = 'red'
            ctx.stroke()
        }
    }
})

canvas.addEventListener('mouseup', function (event) {
    drawing = false
    playing = true
})