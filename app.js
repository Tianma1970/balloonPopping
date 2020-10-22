const popRed = document.querySelector("section")
const ploppText = popRed.querySelector("p")

popRed.addEventListener("mouseenter", () => {
  ploppText.classList.remove("hide")

  popRed.classList.add("popped")
  console.log("test")
})
