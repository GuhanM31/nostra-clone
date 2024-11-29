var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var menu = document.getElementById("menu")

menuicon.addEventListener("click",function () {
    sidenav.style.left=0
})

var closenav = document.getElementById("closenav")
 closenav.addEventListener("click",function() {
    sidenav.style.left="-50%"   
 })

 var closex = document.getElementById("closenav")
 closex.addEventListener("click",function() {
    menu.style.top="-10%"  
 })

