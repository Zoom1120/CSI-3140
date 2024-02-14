var myInterval;
var two = document.getElementById('pic');
document.addEventListener("mousedown", mouseDown, false);


document.addEventListener("click", jude ,false);


function jude(e){

    var one = document.getElementById('one');
    let x = e.clientX - 60; 
    let y = e.clientY - 75;
    one.innerHTML = "<p> ( " + x + ", " + y + ") </p>";
    var two = document.getElementById('pic');
    two.style.top = "200px";
    two.style.top = y.toString() + "px";
    two.style.left = x.toString() + "px";
    console.log(y.toString());

}

function moveImage(e){
    let x = e.clientX - 60; 
    let y = e.clientY - 75;
    two.style.top = y.toString() + "px";
    two.style.left = x.toString() + "px";
}

function mouseUp(e){
    clearInterval(myInterval);
}

function mouseMove(e){
    myInterval = setInterval(moveImage, 1000);
}

function mouseDown(e){

    //if(e.target.tagName.toLowerCase() == 'img'){

        document.addEventListener("mouseMove", mouseMove, false);
        document.addEventListener("mouseup", mouseUp, false);


    //}

}
