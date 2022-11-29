function myFunction(){
   var navlinks = document.getElementById("links");
   var buttons = document.getElementById("linksbutton");
   var menu =document.getElementById("menu");
   var close =document.getElementById("close");
   menu.classList.toggle("hide");
   close.classList.toggle("hide");
    navlinks.classList.toggle("active");
    buttons.classList.toggle("active");
}
