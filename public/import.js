const listOne = document.getElementById("be")
const listTwo = document.getElementById("two")
const list = document.querySelectorAll("ul li")



listOne.addEventListener("click", function(){
listTwo.classList.remove("first")
    listOne.classList.add("first")
})

listTwo.addEventListener("click", function(){
    listOne.classList.remove("first")
    listTwo.classList.add("first")
  
})