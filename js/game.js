AFRAME.registerComponent("game-play",{
    schema: {
       elementId: {type:"string", default:"#cage1"}
    },
    init: function(){
        var duration = 300;
        var timerEl = document.querySelector("#timer")
        this.startTimer(duration, timerEl)
    },

    startTimer: function(duration, timerEl){
        var minutes;
        var seconds;

        setInterval(()=>{
            if(duration>=0){
                minutes = parseInt(duration / 60)
                seconds = parseInt(duration % 60)

                if(minutes < 10){
                    minutes = "0" + minutes;
                }
                if(seconds <10){
                    seconds = "0" + seconds;
                }

                timerEl.setAttribute("text",{
                    value : minutes + ":" + seconds
                })

                duration -= 1
            }
            else{
                this.gameOver()
            }
        },1000)
    },


    isCollided: function(elemntId){
      var element = document.querySelector(elemntId)
      element.addEventListener("collide", (e) => {
        if (elemntId.includes("#cage")) {
          element.setAttribute("visible", false);
          this.updateScore();
          this.updateTargets();
        } 
        else {
          this.gameOver();
        }
    });
    },

    updateScore: function () {
        var element = document.querySelector("#score");
        var count = element.getAttribute("text").value;
        var currentScore = parseInt(count);
        currentScore += 50;
        element.setAttribute("text", {
          value: currentScore,
        });
      },

    gameOver: function(){

        var text = document.querySelector("#game_over_text")
        text.setAttribute("visible",true)

        var panda = document.querySelector("#panda-p")
        panda.setAttribute("visible",false)
    }
})