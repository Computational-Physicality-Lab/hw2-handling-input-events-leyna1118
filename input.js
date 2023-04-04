/*
* all the code for homework 2 goes into this file.
You will attach event handlers to the document, workspace, and targets defined in the html file
to handle mouse, touch and possible other events.

You will certainly need a large number of global variables to keep track of the current modes and states
of the interaction.
*/
let lastBlue = null;

const workspace = document.querySelector('#workspace');
workspace.addEventListener('click', unBlue);
function unBlue(){
    if(lastBlue != null)
        lastBlue.style.backgroundColor = '#f00';
}

const targets = document.querySelectorAll('.target');
for(let i = 0; i < targets.length; i++){
    targets[i].addEventListener('click', blue);
}

function blue(e){
    if(lastBlue != null)
        lastBlue.style.backgroundColor = '#f00';
    this.style.backgroundColor = '#00f';
    lastBlue = this;
    e.stopPropagation();
}