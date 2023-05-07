AFRAME.registerComponent("food",{
    init: function(){
        this.giveFood()
    },
    giveFood: function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key === "k"){
              var food = document.createElement("a-entity")

              food.setAttribute("gltf-model", "./assets/watermelon/scene.gltf")

              food.setAttribute("scale", { x: 0.5, y: 0.5,  z: 0.5});
  

              var cam = document.querySelector("#camera")

              var pos = cam.getAttribute("position")

              food.setAttribute("position", {
                x: pos.x,
                y: pos.y+0.6,
                z: pos.z-0.6,
              });

              food.setAttribute("static-body",{shape:"circle"})

              var camera = document.querySelector("#camera").object3D

              var direction = new THREE.Vector3()
              camera.getWorldPosition(direction)

              food.setAttribute("velocity",direction.multiplyScalar(-7))

              var scene = document.querySelector("#scene");

              scene.appendChild(food)


            }
        })
    }
})