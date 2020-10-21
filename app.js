const popRed = document.querySelector("section")

popRed.addEventListener("mouseenter", e => {
  e.preventDefault()
  console.log("test")
  popRed.remove("section")
  popRed.classList.remove("hide")
})
