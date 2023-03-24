

function click( e )
{
    if(e.target.tagName.toLowerCase() == "a"){

        if(e.ctrlKey){
            alert("This event was triggered because you clicked on the anchor tag!");
        }
        else if(e.shiftKey){
            alert("The event name that triggered this event is 'click' ");
        }
        
    }

    else if(e.target.tagName.toLowerCase() == "p"){

        if(e.ctrlKey){
            alert("This event was triggered because you clicked on the paragraph tag!");
        }
        else if(e.shiftKey){
            alert("The event name that triggered this event is 'click' ");
        }

    }

    else if(e.target.tagName.toLowerCase() == "li"){

        if(e.ctrlKey){
            alert("This event was triggered because you clicked on the list tag!");
        }
        else if(e.shiftKey){
            alert("The event name that triggered this event is 'click' ");
        }

    }
}

document.addEventListener("click",click,false);