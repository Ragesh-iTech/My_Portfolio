// menu bar toggle coding concept
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu(){
    if(menuList.style.maxHeight == "0px")
        {
            menuList.style.maxHeight = "300px";
        }
        else
        {
            menuList.style.maxHeight = "0px";
        }     
}

// text typing animantion code conpepts

const typed =  new Typed(".sec-text", {
    strings : ["Full-Stack Developer","Freelancer", "Programmer", "Designer"],
    typedSpeed : 150,
    backSpeed : 150,
    loop : true
})



