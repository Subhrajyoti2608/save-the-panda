/*AFRAME.registerComponent("panda",{
    init:function(){

        for(var i = 0; i<10; i++){
            var panda1 = document.createElement("a-entity")
            var panda2 = document.createElement("a-entity")
            var panda3 = document.createElement("a-entity")
            var panda4 = document.createElement("a-entity")
            var panda5 = document.createElement("a-entity")

            var scale = {x:0.007, y:0.007, z:0.007}

            panda1.setAttribute("id","panda1" + i)
            panda2.setAttribute("id","panda2" + i)
            panda3.setAttribute("id","panda3" + i)
            panda4.setAttribute("id","panda4" + i)
            panda5.setAttribute("id","panda5" + i)

            panda1.setAttribute("position",{x:0, y:0.8, z:-6.99})
            panda2.setAttribute("position",{x:2, y:0.8, z:-6.99})
            panda3.setAttribute("position",{x:4, y:0.8, z:-6.99})
            panda4.setAttribute("position",{x:6, y:0.8, z:-6.99})
            panda5.setAttribute("position",{x:8, y:0.8, z:-6.99})

            panda1.setAttribute("scale",scale)
            panda2.setAttribute("scale",scale)
            panda3.setAttribute("scale",scale)
            panda4.setAttribute("scale",scale)
            panda5.setAttribute("scale",scale)

            panda1.setAttribute("gltf-model","./assets/panda/scene.gltf")
            panda2.setAttribute("gltf-model","./assets/panda/scene.gltf")
            panda3.setAttribute("gltf-model","./assets/panda/scene.gltf")
            panda4.setAttribute("gltf-model","./assets/panda/scene.gltf")
            panda5.setAttribute("gltf-model","./assets/panda/scene.gltf")
        
            panda1.setAttribute("rotation",{x:0, y:180, z:0})
            panda2.setAttribute("rotation",{x:0, y:180, z:0})
            panda3.setAttribute("rotation",{x:0, y:180, z:0})
            panda4.setAttribute("rotation",{x:0, y:180, z:0})
            panda5.setAttribute("rotation",{x:0, y:180, z:0})
        
            var sceneEl = document.querySelector("#scene")

            sceneEl.appendChild(panda1)
            sceneEl.appendChild(panda2)
            sceneEl.appendChild(panda3)
            sceneEl.appendChild(panda4)
            sceneEl.appendChild(panda5)
        }
    }
})*/