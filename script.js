var nav = document.querySelector("nav>i")
var ul = document.querySelector("nav ul")

var flag = 0;
nav.addEventListener("click",()=>{
    if(flag==0){
        ul.style.display = "block";
        flag=1;
    }
    else{
        ul.style.display = "none";
        flag=0;
    }
})