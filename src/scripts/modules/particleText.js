export function particleText(){

	let canvas = document.querySelector("canvas")
  let c = canvas.getContext("2d")

  let ww = canvas.width = window.innerWidth
  let wh = canvas.height = window.innerHeight
  let form = document.querySelector('form')
  let text = form.querySelector(".text")
  let textMessage = text.value


  let mouse = {x: undefined, y: undefined}

  function Particle(x, y, r, accX, accY){
    this.x = randomIntFromRange(r, ww-r)
    this.y = randomIntFromRange(r, wh-r)
    this.r = r
    this.color = "black"
    this.velocity = {x: randomIntFromRange(-10, 10), y: randomIntFromRange(-10, 10)}
    this.dest = {x : x, y : y}
    // this.accX = 0;
    // this.accY = 0;
    this.accX = accX;
    this.accY = accY;
    // this.friction = Math.random() * 0.05 + 0.94;
    this.friction = randomNumDecimal(0.94, 0.98)
    
    this.X = 100
    this.Y = 300

    this.draw = function(){
      
      c.beginPath()
      c.arc(this.x, this.y, this.r, 0, Math.PI * 2)
      // c.arc(this.dest.x, this.dest.y, this.r, 0, Math.PI * 2)
      c.fillStyle = this.color
      c.fill()
      c.closePath()

      c.beginPath()
      c.arc(mouse.x, mouse.y, 50, 0, Math.PI * 2)
      c.fill()
      c.closePath()
    }

    this.update = function(){
      this.draw()

      this.X += 1
      this.y += 1

      if(this.x + this.r > ww || this.x - this.r < 0){
        this.velocity.x = -this.velocity.x
      }

      if(this.y + this.r > wh || this.y - this.r < 0){
        this.velocity.y = -this.velocity.y
      }

      // need a explanation for this line below 
      // why the distances are divide by 500 ??
      this.accX = (this.dest.x - this.x) / 300;
      this.accY = (this.dest.y - this.y) / 300;

      this.velocity.x += this.accX;
      this.velocity.y += this.accY;

      this.velocity.x *= this.friction;
      this.velocity.y *= this.friction;

      this.x += this.velocity.x;
      this.y += this.velocity.y;

      if(dist(this.x, this.y, mouse.x, mouse.y) < 70){
        this.accX = (this.x - mouse.x) / 30;
        this.accY = (this.y - mouse.y) / 30;
        // this.accX = randomNumDecimal(-20, 20)
        // this.accY = randomNumDecimal(-20, 20)
        this.velocity.x += this.accX;
        this.velocity.y += this.accY;
      }
    }

}

  let particles;
  function init(){
    particles = []
  
    c.font = `bold ${ww/10}px sans-serif`;
    c.fillStyle = "black"
    c.textAlign = "center"
    c.fillText(textMessage, ww/2, wh/2)

    let imgData = c.getImageData(0, 0, ww, wh)
    let data = imgData.data


    for(let i = 0; i < ww; i += 5){
      for(let j = 0; j < wh; j += 5){
        if(data[((ww * j + i) * 4) + 3]){
          let x = i + randomNumDecimal(0, 3)
          let y = j + randomNumDecimal(0, 3)
          let r = randomNumDecimal(1, 1.5)
          let accX = randomNumDecimal(-3, 0.2)
          let accY = randomNumDecimal(-3, 0.2)

          particles.push(new Particle(x, y, r, accX, accY))
        } 
      }
    }
  }


  function animate(){
    c.clearRect(0, 0, ww, wh)

    for(let i = 0; i < particles.length; i++){
      particles[i].update()
    }

    requestAnimationFrame(animate)
  }

  init()
  animate()

  form.addEventListener('submit', function(e){
    e.preventDefault()
    textMessage = text.value

    c.clearRect(0, 0, ww, wh)
    init(textMessage)
    animate()
  })

  console.log(particles[0].accX);
  console.log(particles[24].accX);
  console.log(particles[78].accX);



  window.addEventListener('resize', function() {
    ww = canvas.width = window.innerWidth
    wh = canvas.height = window.innerHeight
    
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

  function randomNumDecimal(min, max) {
    return Math.random() * (max - min) + min
  }

  function dist(x1, y1, x2, y2){
    let xDist = x1 - x2
    let yDist = y1 - y2

    return Math.sqrt(Math.pow(xDist, 2)+ Math.pow(yDist, 2))
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








// export function particleText(){

// 	let canvas = document.querySelector("#scene"),
//       ctx = canvas.getContext("2d"),
//       mouse = { x: 0, y: 0 },
//       radius = 1;

//   let colors = ["#3F6473", "#84B9BF", "#F2E088", "#BF7154", "#F28585"];

//   let text = document.querySelector(".text");

//   let ww = canvas.width = window.innerWidth;
//   let wh = canvas.height = window.innerHeight;

//   function Particle(x, y){
//     this.x =  Math.random() * ww;
//     this.y =  Math.random() * wh;
//     this.x =  0;
//     this.y =  wh /2;
//     this.dest = {
//       x : x,
//       y : y
//     };
//     this.r =  5;
//     this.vx = (Math.random()-0.5) * 20;
//     this.vy = (Math.random()-0.5) * 20;
//     this.accX = 0;
//     this.accY = 0;
//     this.friction = Math.random() * 0.05 + 0.94;
//     this.color = colors[Math.floor(Math.random()*6)];
//   }

//   Particle.prototype.draw = function(){
//     ctx.fillStyle = this.color;
//     ctx.beginPath();
//     ctx.arc(this.x, this.y, this.r, Math.PI * 2, false);
//     ctx.fill();
//     ctx.closePath();

//     ctx.save()
//     ctx.fillStyle = "black";
//     ctx.beginPath();
//     ctx.arc(mouse.x, mouse.y, 30, Math.PI * 2, false);
//     ctx.fill();
//     ctx.closePath();
//     ctx.restore()
//   }

//   Particle.prototype.render = function() {
//     this.draw()
    
//     this.accX = (this.dest.x - this.x) / 500;
//     this.accY = (this.dest.y - this.y) / 500;

//     this.vx += this.accX;
//     this.vy += this.accY;
//     this.vx *= this.friction;
//     this.vy *= this.friction;

//     this.x += this.vx;
//     this.y +=  this.vy;

//     let a = this.x - mouse.x;
//     let b = this.y - mouse.y;
//     let distance = Math.sqrt( a * a + b * b )

//     if(distance < (radius * 70)){
//       this.accX = (this.x - mouse.x) / 30;
//       this.accY = (this.y - mouse.y) / 30;
//       this.vx += this.accX;
//       this.vy += this.accY;
//     }
//   }



//   function onMouseMove(e){
//     mouse.x = e.clientX;
//     mouse.y = e.clientY;
//   }

//   function onTouchMove(e){
//     if(e.touches.length > 0 ){
//       mouse.x = e.touches[0].clientX;
//       mouse.y = e.touches[0].clientY;
//     }
//   }

//   function onTouchEnd(e){
//     mouse.x = -9999;
//     mouse.y = -9999;
//   }

//   let particles = []
//   function init(){
//     ww = canvas.width = window.innerWidth;
//     wh = canvas.height = window.innerHeight;

//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.font = "bold "+(ww/10)+"px sans-serif";
//     ctx.textAlign = "center";
//     ctx.fillText(text.value, ww/2, wh/2);

//     let data  = ctx.getImageData(0, 0, ww, wh).data;
//     // ctx.globalCompositeOperation = "screen";

//     particles = [];
//     for(let i = 0; i < ww; i += Math.round(ww / 150)){
//       for(let j = 0; j < wh; j += Math.round(ww / 150)){
//         if(data[((i + j * ww) * 4) + 3] > 150){
//           particles.push(new Particle(i, j));
//         }
//       }
//     }

//     // console.log(Math.round(ww / 150));

//   }

//   function onMouseClick(){
//     radius++;
//     if(radius ===5){
//       radius = 0;
//     }
//   }

//   function render() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     for (let i = 0; i < particles.length; i++) {
//       particles[i].render();
//     }

//     requestAnimationFrame(render);
//   };

//   text.addEventListener("keyup", init);
//   window.addEventListener("resize", init);
//   window.addEventListener("mousemove", onMouseMove);
//   window.addEventListener("touchmove", onTouchMove);
//   window.addEventListener("click", onMouseClick);
//   window.addEventListener("touchend", onTouchEnd);

//   init();
//   render()
// }














