const balloonsEl = document.querySelector(".balloons")

let poppedBalloons = 0

balloonsEl.addEventListener("mouseover", event => {
  if (event.target.classList.contains("balloon")) {
    console.log("ballon")
    event.target.querySelector("p").classList.remove("hide")

    if (!event.target.classList.contains("popped")) {
      poppedBalloons++
    }
    if (poppedBalloons === 24) {
      document.write("YAY!")
    }
    event.target.classList.add("popped")

    console.log(poppedBalloons)
  }
})

console.log(poppedBalloons)
