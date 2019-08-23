export function wavingBall(){
   
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
 

    function Circle(x, y, radius, color, velocity, amplitude, startRadian) {
        this.x = x
        this.y = y
        this.color = color
        this.radius = radius
        this.velocity = velocity
        this.amplitude = amplitude
        this.acceleration = 0.001

        this.radian = startRadian


        this.draw = function(){
          c.beginPath()
          c.fillStyle = color
          c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
          c.lineWidth = 3
          c.stroke()
          c.fill()
          c.closePath()
        }

        this.update = function(){
          this.draw()

          this.radian += this.velocity
          this.y = y + Math.sin(this.radian) * this.amplitude
      }
    }



    let circleArr;
    function init(){
      circleArr = []
      let radius = 25
      let x = radius
      let radian = 0
      let y = 200
      let color = "rgba(140, 140, 140)"
      let velocity = 0.05
      let amplitude = 100

      for( let i =0; i < 24; i++ ) {  
        circleArr.push(new Circle(x, y, radius, color, velocity, amplitude, radian))
        x += radius * 2

        radian += Math.PI /10
        // radian += 50
      }
    }


    function animate(){
      c.clearRect(0, 0, canvas.width, canvas.height)

      for(let i = 0; i < circleArr.length; i++) {
        circleArr[i].update()   
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
      return Math.floor(Math.random() * (max - min + 1) + min);
    } 

    function randomNum(min, max) {
      return Math.random() * (max - min + max) + min
    }
}