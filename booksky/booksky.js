
var popupboxbackground=document.querySelector(".popupbackground")
var popupbox=document.querySelector(".popupbox")
var plusbutton=document.querySelector(".plusbutton")
plusbutton.addEventListener("click",function(event){
    popupboxbackground.style.display="block"
    popupbox.style.display="block"
})
var cancelpopup=document.getElementById("cancelpopup")
cancelpopup.addEventListener("click",function(){
    popupboxbackground.style.display="none"
    popupbox.style.display="none"
})

var popupaddbutton=document.getElementById("popupaddbutton")
var booktitle=document.getElementById("bookname")
var authorname=document.getElementById("authorname")
var description=document.getElementById("description")
var container=document.querySelector(".container")
popupaddbutton.addEventListener("click",function(){
    var div=document.createElement("div")
    div.setAttribute("class","bookadd")
    div.innerHTML=`<h2>${booktitle.value}</h2>
        <h3>${authorname.value}</h3>
        <p>${description.value}</p>
        <button onclick="deletebook(event)">Delete</button>`

    container.append(div)
    popupboxbackground.style.display="none"
    popupbox.style.display="none"
})

var Deletebook=document("bookdelete")
function deletebook(event){
    event.target.parentElement.remove()
}

