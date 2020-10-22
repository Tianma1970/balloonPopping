const popRed = document.querySelector(".balloonRed")
const ploppTextRed = popRed.querySelector(".hide")

const poppedBalloons = []

popRed.addEventListener("mouseenter", () => {
  ploppTextRed.classList.remove("hide")
  popRed.classList.add("popped")
  poppedBalloons.push(popRed)
})
//console.log(poppedBalloons)

//Plopp the blue balloon
const popBlue = document.querySelector(".balloonBlue")
const ploppTextBlue = popBlue.querySelector(".hideBlue")

popBlue.addEventListener("mouseenter", () => {
  ploppTextBlue.classList.remove("hideBlue")
  popBlue.classList.add("popped")
  poppedBalloons.push(popBlue)
})

//Plopp the Yellow balloon
const popYellow = document.querySelector(".balloonYellow")
const ploppTextYellow = popYellow.querySelector(".hideYellow")

popYellow.addEventListener("mouseenter", () => {
  ploppTextYellow.classList.remove("hideYellow")
  popYellow.classList.add("popped")
  poppedBalloons.push(popYellow)
})

console.log(poppedBalloons)
if ((poppedBalloons.length = 3)) {
  let poppMsg = document.createElement("SPAN")
  document.body.appendChild(poppMsg)
  //alert("YAY!")
}
