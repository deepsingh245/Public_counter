// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked

let countEl = document.getElementById("count-el")



let count=0
function increment(){
    count=count+1
    countEl.innerText=count
    
    }   

    
let saveEl=document.getElementById("save-el")
function save(){
    console.log(count)
    saveEl.innerText+= " - "+count
    count=0
    countEl.innerText=count
}

