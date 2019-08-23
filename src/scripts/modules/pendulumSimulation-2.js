export function pendulumTwo(){
  const canvas = document.querySelector('canvas')
  const c = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
 

  function Ball(x, y, radius, velocity, amplitude) {
    this.x = x
    this.y = y
    this.radius = radius
    this.velocity = velocity
    this.radian = 1
    this.amplitude = amplitude
    this.center = {x: canvas.width/2, y: canvas.height/2}

    this.draw = function(){
      c.beginPath()
      c.arc(this.x, this.y, this.radius, 0, Math.PI *2)
      c.fillStyle = 'black'
      c.fill()
    }

    this.update = function(){
      this.draw()
      
      this.radian += this.velocity 
      this.x = this.center.x + Math.sin(this.radian) * this.amplitude.x
      this.y = this.center.y + Math.cos(this.radian) * this.amplitude.y
    }
  }


  let balls;
  function init() {
    balls = []
    for(let i = 0; i < 6; i++){
      let radius = randomIntFromRange(10, 50)
      let x = randomIntFromRange(radius, canvas.width-radius)
      let y = randomIntFromRange(radius, canvas.height-radius)
      let vel = randomNum(0.03, 0.05)
      let amp = {
        x : randomIntFromRange(100, 300),
        y: randomIntFromRange(80, 200)
      }

      balls.push(new Ball(x, y, radius, vel, amp))
    }
  }

  function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height)

    for(let i = 0; i < balls.length; i++){
      balls[i].update()

      c.beginPath()
      c.moveTo(canvas.width/2, canvas.height/2)
      c.lineTo(balls[i].x, balls[i].y)
      c.stroke()
      c.closePath()
      c.lineWidth = 3
    }
    requestAnimationFrame(animate)
  }

  init()
  animate()


  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
      
    init()
  })

  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

  function randomNum(min, max) {
    return Math.random() * (max - min + max) + min
  }
}