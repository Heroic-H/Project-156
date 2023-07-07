AFRAME.registerComponent("game-play",{
    schema:{
        elementId:{type:"string",default:"#ring1"}
    },
    update:()=>{
        this.isCollide(this.data.elementId)
    },
    isCollide:(elementId)=>{
        const element=document.querySelector(elementId)
        element.addEventListener("collide",(e)=>{
            if (elementId.includes("#ring")){
                console.log(elementId + " collision");
            }else if(elementId.includes("#hurdle")){
                 console.log("bird collision");
            }
        })
    },
    updateTargets:()=>{
        let element=document.querySelector("#targets")
        let count=element.getAttribute("text").value
        let currentTargets=parseInt(count)
        currentTargets=currentTargets-1
        element.setAttribute("text",{value:currentTargets})
      },
      upadateScore:()=>{
        let element=document.querySelector("#score")
        let count=element.getAttribute("text").value
        let currentScore=parseInt(count)
        currentScore=currentScore+50
        element.setAttribute("text",{value:currentScore})
      },
      gameOver:()=>{
        let planeEl=document.querySelector("#plane_model")
        let element=document.querySelector("#gameOverText")
        element.setAttribute("visible",true)
        planeEl.setAttribute("dynamic-body",{mass:1})
      }
})