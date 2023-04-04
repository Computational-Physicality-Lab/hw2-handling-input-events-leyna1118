/*
* all the code for homework 2 goes into this file.
You will attach event handlers to the document, workspace, and targets defined in the html file
to handle mouse, touch and possible other events.

You will certainly need a large number of global variables to keep track of the current modes and states
of the interaction.
*/

let lastBlue = null;

const workspace = document.querySelector('#workspace');
workspace.addEventListener('click', function(e){
    console.log("unblue");
    if(lastBlue != null)
    lastBlue.style.backgroundColor = '#f00';
});

const targets = document.querySelectorAll('.target');
for(let i = 0; i < targets.length; i++){
    // blue
    targets[i].addEventListener('click', function(e){
        console.log("blue");
        if(lastBlue != null)
            lastBlue.style.backgroundColor = '#f00';
        this.style.backgroundColor = '#00f';
        lastBlue = this;
        e.stopPropagation();
    });
    
    // drag
    let dragging = false;
    let lastDrag = null;
    targets[i].addEventListener('mousedown', function(e){
        dragging = true;
        lastDrag = this;
        e.stopPropagation();
    });

    document.addEventListener('mousemove', function(e){
        if(dragging){
            lastDrag.style.left = e.pageX - lastDrag.offsetWidth / 2 + 'px';
            lastDrag.style.top = e.pageY - lastDrag.offsetHeight / 2 + 'px';
        }
    });

    document.addEventListener('mouseup', function(e){
        dragging = false;
        lastDrag = null;
    });

    
}