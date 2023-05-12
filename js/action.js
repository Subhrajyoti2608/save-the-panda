AFRAME.registerComponent("bowling-balls", {
    init: function () {
      this.throwBall();
    },
    throwBall: function () {
      window.addEventListener("keydown", (e) => {
        if (e.key === "z") {
          var ball = document.querySelector("#ball-p")
  
          ball.setAttribute("visible", true);
  
          
  
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

    removeBall: function(){
       

        var ball = document.querySelector("#ball-p")

        var cage = document.querySelector("#cage-p")

        var text1 = document.querySelector("#text1")

        var text2 = document.querySelector("#text2")


        if(ball.includes(cage)){

        

        cage.setAttribute("visible",false)

        text1.setAttribute("visible",false)

        text2.setAttribute("visible",true)

        }

        //element.removeEventListener("collide",this.removeBall)

        //scene.removeChild(element)
    }


    
  });
  
  