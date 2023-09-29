'use strict';

// CONSTANTS / VARIABLES
const elements = {};

// FUNCTIONS
const domMapping = () => {
    elements.form = dom.$('#formNewContent');
    console.log('domMapping', elements.form)
}

const appendContent = content => {
    let loadedContents = localStorage.getItem('contents');
    let contents = loadedContents ? JSON.parse(loadedContents) : [];
    
    contents.push(content);
    console.log('Contents pushed', contents)

    localStorage.setItem('contents', JSON.stringify(contents));
    console.log('localStorage Item set', localStorage)
}

const handleEnter = evt => {
    evt.preventDefault();
    let data = new FormData(elements.form);
    console.log('new FormData', data)

    data = Object.fromEntries(data);
    console.log('data from Entries', data)

    appendContent(data);
    console.log('data append to Content')

    elements.form.reset();
    console.log('form from elements reset', elements.form)
}

const appendEventlisteners = () => {
    // Q: Why it does not work with Enter? 'enter' gibt es nicht.
    elements.form.addEventListener('submit', handleEnter);
    console.log('Eventlisteners appended')
}

const init = () => {
    domMapping();
    appendEventlisteners();
}

// INIT
init();