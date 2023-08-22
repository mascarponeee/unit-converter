const metersToFeet = 3.281 * 1000
const literToGallon = 0.264 * 1000
const kilogramToPound = 2.204 * 1000

const themeBtn = document.querySelector(".mode-switch")
const themeImg = document.querySelector("img")
const inputEl = document.querySelector(".input-section")

const metersFeetEl = document.getElementById("meters-feet")
const feetMetersEl = document.getElementById("feet-meters")
const litersGallonsEl = document.getElementById("liters-gallons")
const gallonsLitersEl = document.getElementById("gallons-liters")
const kilogramPoundEl = document.getElementById("kilos-pounds")
const poundKilogramEl = document.getElementById("pounds-kilos")


themeBtn.addEventListener("click", () => {
  switchTheme()
});

inputEl.addEventListener("input", () => {
  const input = Number(inputEl.value)
  if (input && input > 0) {
    render(input)
  }
})

inputEl.addEventListener("click", () => {
  inputEl.value = ""
  inputEl.style.width = "400px"
})

document.addEventListener( 'click', (e) => {
	const withinBoundaries = e.composedPath().includes(inputEl);
 
	if ( !withinBoundaries  && inputEl.value === "") {
		inputEl.style.width = '117px';
	}
})


function switchTheme() {
  document.body.classList.toggle('dark_theme'); 
  if (document.body.classList.contains('dark_theme')) {
    themeImg.src = "images/dark-theme.svg"
  } else {
    themeImg.src = "images/light-theme.svg"
  }
}

function render(input) {
  document.querySelectorAll(".input-value").forEach((selector) => {
    selector.textContent = input
  })

  metersFeetEl.textContent = `${(input * metersToFeet / 1000).toFixed(3)}`
  feetMetersEl.textContent = `${(input * 1000 / metersToFeet).toFixed(3)}`
  litersGallonsEl.textContent = `${(input * literToGallon / 1000).toFixed(3)}`
  gallonsLitersEl.textContent = `${(input * 1000 / literToGallon).toFixed(3)}`
  kilogramPoundEl.textContent = `${(input * kilogramToPound / 1000).toFixed(3)}`
  poundKilogramEl.textContent = `${(input * 1000 / kilogramToPound).toFixed(3)}`
}