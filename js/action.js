AFRAME.registerComponent("ball",{
    init: function(){
        this.throwBubbles()
    },
    throwBubbles: function(){
        window.addEventListener("keydown",(e)=>{
            if(e.key === "z"){
                var bubble = document.createElement("a-entity")

                bubble.setAttribute("gltf-model","./assets/ball/scene.gltf")

                bubble.setAttribute("scale",{x:3, y:3, z:3})

                var cam = document.querySelector("#camera")

                pos = cam.getAttribute("position")

                bubble.setAttribute("position",{
                    x:pos.x,
                    y:pos.y,
                    z:pos.z+1
                });

                var camera = document.querySelector("#camera").object3D;

                var direction = new THREE.vector3();
                camera.getWorldDirection(direction);

                bubble.setAttribute("velocity",direction.multiplyScalar(-10))

                var scene = document.querySelector("#scene")

                bubble.setAttribute("dynamic-body",{
                    shape:"sphere",
                    mass:"5"
                })

                scene.appendChild(bubble)
            }
        })
    }
})