AFRAME.registerComponent("bowling-balls", {
  init: function () {
    this.throwBall();
  },
  throwBall: function () {
    window.addEventListener("keydown", (e) => {
      if (e.key === "z") {
        var ball = document.createElement("a-entity")

        ball.setAttribute("gltf-model", "assets/ball/scene.gltf" );

        ball.setAttribute("scale", { x: 1.5, y: 1.5, z: 1.5 })

        var cam = document.querySelector("#camera")

        var pos = cam.getAttribute("position")

        ball.setAttribute("position", {
          x: pos.x,
          y: pos.y - 1.0,
          z: pos.z
        })


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

  removeBullet: function (e) {
    //bullet element
    var element = e.detail.target.el;

    //element which is hit
    var elementHit = e.detail.body.el;

    if (elementHit.id.includes("#cage")) {
      elementHit.setAttribute("visble", false);

      //impulse and point vector
      

      //remove event listener
      element.removeEventListener("collide", this.removeBullet);

      //remove the bullets from the scene
      var scene = document.querySelector("#scene");
      scene.removeChild(element);
    }
  },



});

