'use strict';

// CONSTANTS / VARIABLES
// const elements; - SyntaxError: missing = in const declaration
const elements = {};

// FUNCTIONS
const dom12 = {
    create(content, type, parent, classes) {
        const newEl = document.createElement(type);
        if (content) newEl.innerHTML = content;
        if (classes) newEl.className = classes;
        if (parent) parent.append(newEl);
        return newEl;
    },
    $(selector) {
        return document.querySelector(selector);
    },
    $$(selector) {
        return Array.from(document.querySelectorAll(selector));
    },
}

const domMapping = () => {
    // form is self created
    // '#formNewContent': CSS syntax
    elements.form = dom123.$('#formNewContent');
    // elements.form = dom12.$();
    console.log('domMapping', elements.form)
}

const appendContent = content => {
    // Q: where to get the keyname 'contents'? From Storage?
    for (let i = 0; i < localStorage.length; i++) {
        console.log('localStoragekeys', (localStorage.key(i)));
        console.log('localStoragevalues', localStorage.getItem(localStorage.key(i)));
    }
    
    // 3:
    let loadedContents = localStorage.getItem('contents');
    console.log('loadedContents from localStorage getItem', loadedContents)
    
    // Q: Are contents exactly the parsed loadedContents? 
    let contents = loadedContents ? JSON.parse(loadedContents) : [];
    // 4: Darstellungsfehler von der Console
    console.log('contents as json parsed loaded contents', contents)
    // ...: Kopie von Objekte
    console.log('contents as json parsed loaded contents...', {...contents})

    // 5: After data from Entries
    contents.push(content);
    console.log('Contents pushed', contents)

    // 6: After Content pushed
    localStorage.setItem('contents', JSON.stringify(contents));
    console.log('localStorage Item set by stringifying contents', localStorage)
}

const handleEnter = evt => {
    evt.preventDefault();

    // 1: After Enter
    let data = new FormData(elements.form);
    console.log('new FormData', data)

    // 2: After new FormData
    data = Object.fromEntries(data);
    console.log('data from Entries', data)

    // 
    appendContent(data);
    console.log('appendContent finished')

    // 7: After data append to Content
    elements.form.reset();
    console.log('form from elements reset', elements.form)
}

const appendEventlisteners = () => {
    // 0: Upon button clicked
    // 'submit' as string HTMLFormElement event type
    elements.form.addEventListener('submit', handleEnter);
    console.log('Eventlisteners appended')
}



const init = () => {
    // 00: initialise at the beginning
    domMapping();
    appendEventlisteners();
}

// INIT
init();