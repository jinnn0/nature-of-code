export function collisionDetector(){
  const canvas = document.querySelector('canvas')
  const c = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight

  let mouse = {x: undefined, y: undefined}
  
  function Circle(x, y, radius){
    this.x = x
    this.y = y
    this.radius = radius
    this.color = "pink"
    this.velocity = {x: randomNum(0.5, 1), y: randomNum(0.5, 1)}
    this.mass = 1

    this.draw = function(){
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

    this.update = circleArr => {
      this.draw()

      if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
        this.velocity.x = -this.velocity.x
      }

      if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
        this.velocity.y = -this.velocity.y
      }

      this.x += this.velocity.x
      this.y += this.velocity.y 

      for(let i = 0; i < circleArr.length; i++){
        if(this === circleArr[i]) continue 
        
        if(distance(this.x, this.y, circleArr[i].x, circleArr[i].y) 
            <= (this.radius + circleArr[i].radius)) {

          resolveCollision(this, circleArr[i])
        } 
      }

      if(distance(mouse.x, mouse.y, this.x, this.y) < 50){
        this.radius += 1
      } else if(this.radius > 30) {
          this.radius -= 1
        } 
     }
  }


  let circleArr 
  function init(){
    circleArr = []

    for(let i = 0; i < 60; i++) {
      let radius = randomIntFromRange(20, 40)
      let x = randomIntFromRange(radius, canvas.width - radius)
      let y = randomIntFromRange(radius, canvas.height - radius)

      if(i !== 0) {
        for(let j = 0; j < circleArr.length; j++){
          if(distance(x, y, circleArr[j].x, circleArr[j].y) - (radius + circleArr[j].radius) < 0){
            x = randomIntFromRange(radius, canvas.width - radius)
            y = randomIntFromRange(radius, canvas.height - radius)

             j = -1
          }
        }
      }
      circleArr.push(new Circle(x, y, radius))
    }
  }

  
  function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height) 

    for(let i = 0; i < circleArr.length; i++) {
        circleArr[i].draw(circleArr)      
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

  window.addEventListener('mousemove', function(e){
    mouse.x = e.clientX
    mouse.y = e.clientY
  })

  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  } 

  function randomNum(min, max) {
    return Math.random() * (max - min + max) + min
  }

  function distance(x1, y1, x2, y2) {
    let xDist = x2 - x1;
    let yDist = y2 - y1;
    
    return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2))
  }

  function rotate(velocity, angle) {
    const rotatedVelocities = {
        x: velocity.x * Math.cos(angle) - velocity.y * Math.sin(angle),
        y: velocity.x * Math.sin(angle) + velocity.y * Math.cos(angle)
    };

    return rotatedVelocities;
}

 function resolveCollision(particle, otherParticle) {

    const xVelocityDiff = particle.velocity.x - otherParticle.velocity.x;
    const yVelocityDiff = particle.velocity.y - otherParticle.velocity.y;

    const xDist = otherParticle.x - particle.x;
    const yDist = otherParticle.y - particle.y;

    // Prevent accidental overlap of particles
    if (xVelocityDiff * xDist + yVelocityDiff * yDist >= 0) {

        // Grab angle between the two colliding particles
        const angle = -Math.atan2(otherParticle.y - particle.y, otherParticle.x - particle.x);

        // Store mass in var for better readability in collision equation
        const m1 = particle.mass;
        const m2 = otherParticle.mass;

        // Velocity before equation
        const u1 = rotate(particle.velocity, angle);
        const u2 = rotate(otherParticle.velocity, angle);

        // Velocity after 1d collision equation
        const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
        const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };

        // Final velocity after rotating axis back to original location
        const vFinal1 = rotate(v1, -angle);
        const vFinal2 = rotate(v2, -angle);

        // Swap particle velocities for realistic bounce effect
        particle.velocity.x = vFinal1.x;
        particle.velocity.y = vFinal1.y;

        otherParticle.velocity.x = vFinal2.x;
        otherParticle.velocity.y = vFinal2.y;
    }
  }
}
