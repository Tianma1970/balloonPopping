const balloonsEl = document.querySelector(".balloons")

let poppedBalloons = 0

balloonsEl.addEventListener("mouseover", event => {
  if (event.target.classList.contains("balloon")) {
    console.log("ballon")
    event.target.classList.add("popped")
    event.target.querySelector("p").classList.remove("hide")

    if (event.target.classList.contains("popped")) {
      poppedBalloons++
    } else {
      return
    }
    console.log(poppedBalloons)
    if (poppedBalloons > 24) {
      document.write("YAY!")
    }
  } else {
    //console.log("not ballon")
    return
  }
})
//console.log(poppedBalloons)

console.log(poppedBalloons)
//document.body.appendChild(poppMsg)
