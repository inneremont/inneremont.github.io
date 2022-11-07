var m = document.querySelector("a-marker")
m.addEventListener("markerFound", (e)=>{
console.log("found")
document.getElementById("HeadText").style.visibility = "visible";
    })

m.addEventListener("markerLost", (e)=>{
console.log("lost");
document.getElementById("HeadText").style.visibility = "hidden";
})