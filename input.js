/*
* all the code for homework 2 goes into this file.
You will attach event handlers to the document, workspace, and targets defined in the html file
to handle mouse, touch and possible other events.

You will certainly need a large number of global variables to keep track of the current modes and states
of the interaction.
*/

let lastClick = null;
let wasDragging = false;
let dragging = false;
let curDrag = null;
let lastState = {l: 0, t: 0, h: 0, w: 0};
const workspace = document.querySelector('#workspace');
const targets = document.querySelectorAll('.target');

// click
workspace.addEventListener('click', function(e){
    console.log('workspace click');
    // put target back of a target and click
    if(wasDragging == true){
        wasDragging = false;
        return;
    }
    if(lastClick != null)
        lastClick.style.backgroundColor = '#f00';
});

document.addEventListener('keydown', function(e){
    if(e.key === 'Escape'){
        console.log('esc');
        if(dragging){
            curDrag.style.left = lastState.l + 'px';
            curDrag.style.top = lastState.t + 'px';
            dragging = false;
            curDrag = null;
        }
    }
});

for(let i = 0; i < targets.length; i++){
    // blue
    targets[i].addEventListener('click', function(e){
        console.log('target click');
        if(wasDragging == true){
            wasDragging = false;
            e.stopPropagation();
            return;
        }
        if(lastClick != null)
            lastClick.style.backgroundColor = '#f00';
        this.style.backgroundColor = '#00f';
        lastClick = this;
        e.stopPropagation();
    });
    
    // drag
    targets[i].addEventListener('mousedown', function(e){
        console.log('mousedown');
        dragging = true;
        curDrag = this;
        lastState.l = this.offsetLeft;
        lastState.t = this.offsetTop;
        e.stopPropagation();
    });

    document.addEventListener('mousemove', function(e){
        if(dragging){
            console.log('mousemove');
            curDrag.style.left = e.pageX - curDrag.offsetWidth / 2 + 'px';
            curDrag.style.top = e.pageY - curDrag.offsetHeight / 2 + 'px';
            wasDragging = true;
        }
    });

    document.addEventListener('mouseup', function(e){
        console.log('mouseup');
        dragging = false;
        curDrag = null;
    });

    //double
    targets[i].addEventListener('dblclick', function(e){
        console.log('dbclick');
        dragging = true;
        curDrag = this;
        e.stopPropagation();
    });
}


// touch
for(let i = 0; i < targets.length; i++){
    // blue
    targets[i].addEventListener('touchstart', function(e){
        console.log('target touchstart');
        e.preventDefault();
        if(wasDragging == true){
            wasDragging = false;
            e.stopPropagation();
            return;
        }
        if(lastClick != null)
            lastClick.style.backgroundColor = '#f00';
        this.style.backgroundColor = '#00f';
        lastClick = this;
        e.stopPropagation();
    });
    
    // drag
    targets[i].addEventListener('mousedown', function(e){
        console.log('mousedown');
        dragging = true;
        curDrag = this;
        lastState.l = this.offsetLeft;
        lastState.t = this.offsetTop;
        e.stopPropagation();
    });

    document.addEventListener('mousemove', function(e){
        if(dragging){
            console.log('mousemove');
            curDrag.style.left = e.pageX - curDrag.offsetWidth / 2 + 'px';
            curDrag.style.top = e.pageY - curDrag.offsetHeight / 2 + 'px';
            wasDragging = true;
        }
    });

    document.addEventListener('mouseup', function(e){
        console.log('mouseup');
        dragging = false;
        curDrag = null;
    });

    //double
    targets[i].addEventListener('dblclick', function(e){
        console.log('dbclick');
        dragging = true;
        curDrag = this;
        e.stopPropagation();
    });
}
