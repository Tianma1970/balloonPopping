const balloonsEl = document.querySelector(".balloons")

let poppedBalloons = 0

balloonsEl.addEventListener("mouseover", event => {
  if (event.target.classList.contains("balloon")) {
    console.log("ballon")
    event.target.classList.add("popped")
    event.target.querySelector("p").classList.remove("hide")
    poppedBalloons++
    if (poppedBalloons > 4) {
      document.write("YAY!")
    }
  } else {
    console.log("not ballon")
  }
})
//console.log(poppedBalloons)

console.log(poppedBalloons)
//document.body.appendChild(poppMsg)
