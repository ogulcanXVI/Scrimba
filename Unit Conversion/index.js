const input = document.getElementById("input-num")
const button = document.getElementById("convert-btn")

const lengthText = document.querySelector(".length-text")
const volumeText = document.querySelector(".volume-text")
const massText = document.querySelector(".mass-text")

button.addEventListener("click", function() {
    //Length Calculation
    lengthText.textContent = `${input.value} meters = ${(input.value * 3.280839895).toFixed(3)} feet | ${input.value} feet = ${(input.value / 3.280839895).toFixed(3)} meters`

    //Volume Calculation
    volumeText.textContent = `${input.value} liters = ${(input.value / 0.264172).toFixed(3)}gallons | ${input.value} gallons = ${(input.value * 0.264172).toFixed(3)} liters`

    //Mass Calculation
    massText.textContent = `${input.value} kilos = ${(input.value * 2.2).toFixed(3)} pounds | ${input.value} pounds = ${(input.value / 2.2).toFixed(3)} kilos`
})