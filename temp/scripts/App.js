/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/scripts/app.js":
/*!****************************!*\
  !*** ./src/scripts/app.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_circularMotion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/circularMotion */ "./src/scripts/modules/circularMotion.js");
/* harmony import */ var _modules_wavingBall__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/wavingBall */ "./src/scripts/modules/wavingBall.js");
/* harmony import */ var _modules_pendulumSimulation_1__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/pendulumSimulation-1 */ "./src/scripts/modules/pendulumSimulation-1.js");
/* harmony import */ var _modules_pendulumSimulation_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/pendulumSimulation-2 */ "./src/scripts/modules/pendulumSimulation-2.js");
/* harmony import */ var _modules_waterfall__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/waterfall */ "./src/scripts/modules/waterfall.js");
/* harmony import */ var _modules_collisionDetector__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/collisionDetector */ "./src/scripts/modules/collisionDetector.js");
/* harmony import */ var _modules_30_000Particle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/30,000Particle */ "./src/scripts/modules/30,000Particle.js");
/* harmony import */ var _modules_particleText__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/particleText */ "./src/scripts/modules/particleText.js");








 


 
// wavingBall()
// circularMotion()
// pendulumOne()
// pendulumTwo()
// waterfall()
// collisionDetector()
// particles()
Object(_modules_particleText__WEBPACK_IMPORTED_MODULE_7__["particleText"])()




/***/ }),

/***/ "./src/scripts/modules/30,000Particle.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/30,000Particle.js ***!
  \***********************************************/
/*! exports provided: particles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "particles", function() { return particles; });
function particles(){

  let ROWS = 100,
      COLS = 300,
      NUM_PARTICLES = ROWS * COLS,
      THICKNESS = Math.pow( 80, 2 ),
      SPACING = 3,
      MARGIN = 100,
      COLOR = 220,
      DRAG = 0.95,
      EASE = 0.25,
    
      particle,
      canvas,
      mouse,
      stats,
      list,
      ctx,
      tog,
      man,
      dx, dy,
      mx, my,
      d, t, f,
      a, b,
      i, n,
      w, h,
      p, bounds;

  particle = {
  vx: 0,
  vy: 0,
  x: 0,
  y: 0
  };

  function init() {

    canvas = document.querySelector('canvas')
    canvas.width = window.innerWidth 
    canvas.height = window.innerHeight 
    
    ctx = canvas.getContext( '2d' );
    man = false;
    tog = true;

    list = [];

    w = canvas.width = COLS * SPACING + MARGIN * 10;
    h = canvas.height = ROWS * SPACING + MARGIN * 10;

    for ( i = 0; i < NUM_PARTICLES; i++ ) {

      p = Object.create( particle );
      p.x = p.ox = (MARGIN * 2.3) + SPACING * ( i % COLS );
      p.y = p.oy = (MARGIN * 2.3) + SPACING * Math.floor( i / COLS );
      
      list[i] = p;
    }

    window.addEventListener( 'mousemove', function(e) {

      bounds = canvas.getBoundingClientRect();
      mx = e.clientX - bounds.left;
      my = e.clientY - bounds.top;
      man = true;
    });

    // if ( typeof Stats === 'function' ) {
    //   document.body.appendChild( ( stats = new Stats() ).domElement );
    // }
  }

  function step() {

    if ( stats ) stats.begin();

    if ( tog = !tog ) {

      if ( !man ) {

        t = +new Date() * 0.001;
        mx = w * 0.5 + ( Math.cos( t * 2.1 ) * Math.cos( t * 0.9 ) * w * 0.45 );
        my = h * 0.5 + ( Math.sin( t * 3.2 ) * Math.tan( Math.sin( t * 0.8 ) ) * h * 0.45 );
      }
        
      for ( i = 0; i < 30000; i++ ) {
        
        p = list[i];
        
        d = ( dx = mx - p.x ) * dx + ( dy = my - p.y ) * dy;
        f = -THICKNESS / d;

        if ( d < THICKNESS ) {
          t = Math.atan2( dy, dx );
          p.vx += f * Math.cos(t);
          p.vy += f * Math.sin(t);
        }

        p.x += ( p.vx *= DRAG ) + (p.ox - p.x) * EASE;
        p.y += ( p.vy *= DRAG ) + (p.oy - p.y) * EASE;

      }

    } else {

      b = ( a = ctx.createImageData( w, h ) ).data;

      for ( i = 0; i < NUM_PARTICLES; i++ ) {

        p = list[i];
        b[n = ( ~~p.x + ( ~~p.y * w ) ) * 4] = b[n+1] = b[n+2] = COLOR, b[n+3] = 255;
      }

      ctx.putImageData( a, 0, 0 );
    }

    if ( stats ) stats.end();
    
    requestAnimationFrame( step );
    } 

    init();
    step();
}

/***/ }),

/***/ "./src/scripts/modules/circularMotion.js":
/*!***********************************************!*\
  !*** ./src/scripts/modules/circularMotion.js ***!
  \***********************************************/
/*! exports provided: circularMotion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "circularMotion", function() { return circularMotion; });
function circularMotion(){
  const canvas = document.querySelector('canvas')
  const c = canvas.getContext('2d')
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight


  let mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
  }


  function Ball(x, y, radius, dx, color, radians) {
      this.x = x
      this.y = y 
      this.radius = radius
      this.color = color
      this.dx = dx
      this.radians = radians
      this.velocity = 0.02

      this.draw = function(){
        c.beginPath()
        c.strokeStyle = this.color
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        c.stroke()
        c.lineWidth = 10
        c.closePath()
      }

      this.update = function(){
        this.draw()
        
        this.radians += this.velocity 
        this.x = x + Math.cos(this.radians) * 200
        this.y = y + Math.sin(this.radians) * 80

    }
  }



  let ballArr;
  function init(){
    ballArr = []
    let radians = 0
    for( let i =0; i < 10; i++) {   
      radians += 30
      ballArr.push(new Ball(canvas.width/2, canvas.height/2, 50, 3, "pink", radians))
    }
  }
  
  
  function animate(){
    c.clearRect(0, 0, canvas.width, canvas.height)
    // c.fillRect(0, 0, canvas.width, canvas.height)
    requestAnimationFrame(animate)
    
    for(let i = 0; i < ballArr.length; i++) {
      ballArr[i].update()   
    }
  }

  init()
  animate() 




  window.addEventListener('mousemove', function(e) {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  })
  
  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    
    init()
  })

  function randomIntFromRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
}

/***/ }),

/***/ "./src/scripts/modules/collisionDetector.js":
/*!**************************************************!*\
  !*** ./src/scripts/modules/collisionDetector.js ***!
  \**************************************************/
/*! exports provided: collisionDetector */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionDetector", function() { return collisionDetector; });
function collisionDetector(){
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


/***/ }),

/***/ "./src/scripts/modules/particleText.js":
/*!*********************************************!*\
  !*** ./src/scripts/modules/particleText.js ***!
  \*********************************************/
/*! exports provided: particleText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "particleText", function() { return particleText; });
function particleText(){

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
















/***/ }),

/***/ "./src/scripts/modules/pendulumSimulation-1.js":
/*!*****************************************************!*\
  !*** ./src/scripts/modules/pendulumSimulation-1.js ***!
  \*****************************************************/
/*! exports provided: pendulumOne */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pendulumOne", function() { return pendulumOne; });
 function pendulumOne(){
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

/***/ }),

/***/ "./src/scripts/modules/pendulumSimulation-2.js":
/*!*****************************************************!*\
  !*** ./src/scripts/modules/pendulumSimulation-2.js ***!
  \*****************************************************/
/*! exports provided: pendulumTwo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pendulumTwo", function() { return pendulumTwo; });
function pendulumTwo(){
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

/***/ }),

/***/ "./src/scripts/modules/waterfall.js":
/*!******************************************!*\
  !*** ./src/scripts/modules/waterfall.js ***!
  \******************************************/
/*! exports provided: waterfall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterfall", function() { return waterfall; });
function waterfall(){
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


/***/ }),

/***/ "./src/scripts/modules/wavingBall.js":
/*!*******************************************!*\
  !*** ./src/scripts/modules/wavingBall.js ***!
  \*******************************************/
/*! exports provided: wavingBall */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wavingBall", function() { return wavingBall; });
function wavingBall(){
   
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

/***/ })

/******/ });