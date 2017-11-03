var position = -0.0008;

function openNewWin(){
    var win = window.open("index.html");
}
var m = setInterval(ChangePosition,20); 
function ChangePosition(){
    var Simg = document.getElementsByClassName("img");
    for(var i=0;i<Simg.length;i++){
        img = Simg[i];
        img.style.left = position+"px";
        position = position-0.0008;
    }
}
/*function scrollImg(){    
    var m = setInterval(ChangePosition,100); 
    var Simg = document.getElementsByClassName("img");
    for(var i=0;i<Simg.length;i++){
        img = Simg[i];
        img.onmouseover = clearInterval(m);
        img.onmouseout = setInterval(ChangePosition,100);

    }   
}*/
function WritePhoto(){
var re = "";
for(var i = 1;i<100;i++){
    re +='<div class="img photo1">'+'</div>'
        +'<div class="img photo2">'+'</div>'
        +'<div class="img photo3">'+'</div>'
        +'<div class="img photo4">'+'</div>'
        +'<div class="img photo5">'+'</div>'
        +'<div class="img photo6">'+'</div>'
}
document.getElementById("fuzhu").innerHTML = re;
}
WritePhoto();


    

 


