export function waterfall(){
    const canvas = document.querySelector('canvas')
    const c = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    function Circle(x, y, radius, velocity, acceleration){

      this.x = x
      this.y = y
      this.radius = radius
      this.velocity = velocity
      this.acceleration = acceleration
      this.lifespan = 1
      this.angle =  Math.atan2(this.y, this.x);
      this.length = Math.sqrt(this.x * this.x + this.y * this.y)

      this.draw = function(){
          c.beginPath()
          c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
          c.fillStyle = `rgba(250, 205, 221, ${this.lifespan})`
          c.fill()
      }

      this.update = function(){
        this.draw()

        this.velocity.y += this.acceleration
        this.x += this.velocity.x
        this.y += this.velocity.y
        this.lifespan -= 0.005

        this.angle += 0.01
        // this.x += (Math.cos(this.angle) * this.length) * 0.01
        // this.y += (Math.sin(this.angle) * this.length) * 0.01
      }

      this.windForce = function(){
        this.x += 2
      }
    }

    let circleArr = []
    // function init(){

    //   for(let i = 0; i < 30; i++) {
    //     let x = canvas.width / 2
    //     let y = 100
    //     let velocity = {x: randomNum(-1, 1), y: randomNum(-2, 0)}
    //     let acceleration = 0.08
    //     // let acceleration = randomNum(0.01, 0.1)
    //     circleArr.push(new Circle(x, y, 22, velocity, acceleration))
    //   }
    // }

    
    function animate(){
      c.clearRect(0, 0, canvas.width, canvas.height) 

      let x = canvas.width / 2
      let y = 100
      let velocity = {x: randomNum(-1, 1), y: randomNum(-2, 0)}
      let acceleration = 0.08
      circleArr.push(new Circle(x, y, 22, velocity, acceleration))

      for(let i = 0; i < circleArr.length; i++) {
          circleArr[i].update()
          
          if(circleArr[i].lifespan <= 0){
            circleArr.shift()
          }
      }

      requestAnimationFrame(animate)
    }
    
    // init()
    animate()



    window.addEventListener('resize', function() {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      
      // init()
    })

    // window.addEventListener('mousemove', function(){
    //   for(let i = 0; i < circleArr.length; i++) {
    //       circleArr[i].windForce()
    //    }
    //    console.log("mousedown");
    // })

    function randomIntFromRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
    } 

    function randomNum(min, max) {
      return Math.random() * (max - min + max) + min
    }
}
