AFRAME.registerComponent("bowling-balls", {
    init: function () {
      this.throwBall();
    },
    throwBall: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var  ball = document.createElement("a-entity");
  
          ball.setAttribute("gltf-model", "./assets/ball/scene.gltf");
  
          ball.setAttribute("scale", { x: 1.5, y: 1.5,  z: 1.5});
  
          var cam = document.querySelector("#camera");
  
          pos = cam.getAttribute("position");
  
          ball.setAttribute("position", {
            x: pos.x,
            y: pos.y-0.6,
            z: pos.z,
          });
  
          var camera = document.querySelector("#camera").object3D;
  
          //get the camera direction as Three.js Vector
          var direction = new THREE.Vector3();
          camera.getWorldDirection(direction);
  
          //set the velocity and it's direction
          ball.setAttribute("velocity", direction.multiplyScalar(-10));
  
          var scene = document.querySelector("#scene");
  
          //set the ball as the dynamic entity
          ball.setAttribute("dynamic-body", {
            shape: "sphere",
            mass: "10",
          });
  
          //add the collide event listener to the ball
          ball.addEventListener("collide", this.removeBall);
  
          scene.appendChild(ball);
        }
      });
    },

    removeBall: function(e){
        var scene = document.querySelector("#scene")

        var element = e.detail.target.el 

        var elementHit = e.detail.body.el

        var cage = document.querySelector("#cage-p")

        var text1 = document.querySelector("#text1")

        var text2 = document.querySelector("#text2")

        cage.setAttribute("visible",false)

        text1.setAttribute("visible",false)

        text2.setAttribute("visible",true)

        element.removeEventListener("collide",this.removeBall)

        scene.removeChild(element)
    }


    
  });
  
  