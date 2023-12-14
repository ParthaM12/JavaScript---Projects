//selecting popup-box,overlay,,button
var popupoverlay = document.querySelector(".popup-overlay")
var popupbox = document.querySelector(".popup-box")
var popupbutton = document.getElementById("add-popup-button")

popupbutton.addEventListener("click",function(){
    popupoverlay.style.display = "block"
    popupbox.style.display = "block"
})
//selecting cancel button
var cancelbtn = document.getElementById("cancel-popup")
cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
}) 

//select container,add book,book title, book author, book description
var container = document.querySelector(".container")
var addbook = document.getElementById("add-book")
var booktitle = document.getElementById("book-title-input")
var author = document.getElementById("book-author-input")
var description = document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div = document.createElement("div")
    div.setAttribute("class", "book-container")
    div.innerHTML = `<h2>${booktitle.value}</h2>
    <h5 style="color: yellow;">${author.value}</h2>
    <p>${description.value}</p>
    <button onclick ="deletebook(event)">Delete</button>`
    container.append(div)
    popupoverlay.style.display = "none"
    popupbox.style.display = "none"
})

function deletebook(event) {
    event.target.parentElement.remove()
}