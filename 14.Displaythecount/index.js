//document.getElementByID("count-el").innerText = 5

//change the count-el in the HTML to reflect the new count
//camelCase
let countEl = document.getElementById("count-el") //pass in arguments,which means we are giving the function specific data to work with


console.log(countEl)

let count = 0

function increment(){
    count = count + 1
    countEl.innerText = count
    console.log(count)
}