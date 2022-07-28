const price = document.querySelector(".price")
let priceOne = "$15"
let priceTwo = "$25"

function firstPrice(){
    firstValue()
}

function firstValue(){
    price.innerText = priceOne
}

// ############################

function secondPrice(){
    secondValue()
}

function secondValue(){
    price.innerText = priceTwo
}

// ########################################################

const quantity = document.querySelector(".quantity")
let counter = 1

function add() {
  if (counter < 100) {
    counter = counter + 1
    screen()
  }
}

function remove() {
  if (counter > 0) {
    counter = counter - 1
    screen()
  }
}

function screen () {
    quantity.innerText = counter
}