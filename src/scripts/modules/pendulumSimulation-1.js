 export function pendulumOne(){
  const canvas = document.querySelector('canvas')
  const c = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight


  function Ball(x, y, radius, velocity, amplitude) {
      this.x = x
      this.y = y
      this.radius = radius
      this.velocity = velocity
      this.increaseRad = 0
      // this.radian = Math.PI  * this.increaseRad
      this.radian = 1.8
      this.radianVelocity = 0.0
      this.randianAcceleration = 0.0
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
        
        this.x = lines[0].original.x + lines[0].length * Math.sin(this.radian)
        this.y = lines[0].original.y + lines[0].length * Math.cos(this.radian)
        
        if(this.radian < 1.8 || this.radian > 4.4) {
          this.increaseRad = -this.increaseRad
        }

        this.increaseRad += 0.001
        this.radian += this.increaseRad


        // this.randianAcceleration = 0.01 * Math.sin(this.radian)

        // this.radianVelocity += this.randianAcceleration
        // this.radian += this.radianVelocity
      
        // this.radianVelocity *= 0.99
      }
  }


  function Line(){
      this.original = {x: canvas.width/2, y: 50}
      this.length = this.original.y - balls[0].y
      
      this.draw = function(){
          c.beginPath()
          c.moveTo(this.original.x, this.original.y)
          c.lineTo(balls[0].x, balls[0].y)
          c.stroke()
          c.closePath()
          c.lineWidth = 3
      }
  }


  let balls;
  let lines;
  function init() {
      balls = []
      lines = []
      for(let i = 0; i < 1; i++){
        let radius = 40
        let x = randomIntFromRange(radius, canvas.width-radius)
        let y = 350
        let vel = 0.03
        let amp = {
          x : randomIntFromRange(100, 300),
          y : randomIntFromRange(80, 200)
        }

        balls.push(new Ball(x, y, radius, vel, amp))
      }

      for(let i = 0; i < 1; i++){
        lines.push(new Line())
      }
  }


  function animate(){
      c.clearRect(0, 0, canvas.width, canvas.height)

      for(let i = 0; i < balls.length; i++){
        balls[i].update()
      }

       for(let i = 0; i < balls.length; i++){
        lines[i].draw()
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