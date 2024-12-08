const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

const btn = document.querySelector("#btn")
let passOne = document.querySelector("#passOne")
let passTwo = document.querySelector("#passTwo")

let randomIndexOne = 0
let randomIndexTwo = 0


function myFunction() {
    passOne.textContent = ""
    passTwo.textContent = ""
    for(let i = 0; passOne.textContent.length < 15; i++) {
        randomIndexOne = Math.floor(Math.random() * characters.length)
        passOne.textContent += characters[randomIndexOne]

        randomIndexTwo = Math.floor(Math.random() * characters.length)
        passTwo.textContent += characters[randomIndexTwo]
    }
}