const popRed = document.querySelector(".balloonRed")
const ploppTextRed = popRed.querySelector(".hide")

popRed.addEventListener("mouseenter", () => {
  ploppTextRed.classList.remove("hide")

  popRed.classList.add("popped")
  console.log("test")
})
//Plopp the blue balloon
const popBlue = document.querySelector(".balloonBlue")
const ploppTextBlue = popBlue.querySelector(".hideBlue")

popBlue.addEventListener("mouseenter", () => {
  ploppTextBlue.classList.remove("hideBlue")
  popBlue.classList.add("popped")
})

//Plopp the Yellow balloon
const popYellow = document.querySelector(".balloonYellow")
const ploppTextYellow = popYellow.querySelector(".hideYellow")

popYellow.addEventListener("mouseenter", () => {
  ploppTextYellow.classList.remove("hideYellow")
  popYellow.classList.add("popped")
})
