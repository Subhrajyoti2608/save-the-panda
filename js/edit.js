AFRAME.registerComponent("target-cage",{
    init: function(){
        for (var i = 1; i <= 20; i++) {
            //id
            var id = `ring${i}`;
      
            //position variables
            var posX = Math.random() * 3 + -1;
            var posY = Math.random() * 2 + -1;
            var posZ = Math.random() * 3 + -1;
      
            var position = { x: posX, y: posY, z: posZ };
      
            //call the function
            this.createCages(id, position);
            this.createPandas(id, position);
          }
    },

    createCages: function(id, position){
        var scene = document.querySelector("#scene")

        var cageEl = document.createElement("a-entity")

        cageEl.setAttribute("id", id)
        ringEl.setAttribute("position", position);
        cageEl.setAttribute("gltf-model","assets/cage/scene.gltf")

        cageEl.setAttribute("static-body")

        cageEl.setAttribute("game-play",{
            elementId : `#${id}`
        })

        scene.appendChild(cageEl)

    }
})