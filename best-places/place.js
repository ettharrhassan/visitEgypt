$(document).ready(function(){
    $(".hotels-link").click(function(){
    window.scrollTo(0,155)
    });
    $(".touri-link").click(function(){
        window.scrollTo(0,650)
        });
        $(".beach-link").click(function(){
            window.scrollTo(0,1643)
        });
    });
var scrollIcon=document.querySelector(".toTop");
window.onscroll=function(){
    if(window.pageYOffset>50){
    scrollIcon.style.display="block";
    }
    else{
        scrollIcon.style.display="none";
    }
}
scrollIcon.onclick=function(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}