'use strict';

// CONSTANTS / VARIABLES
// const elements; - SyntaxError: missing = in const declaration
const elements = {};

// FUNCTIONS
const validate = () => {
    let isok = true;
    for (let i = 0; i < document.getElementById("formNewContent").elements.length - 1; i++) {
        let input = document.getElementById("formNewContent").elements[i]
        input.classList.remove("err") 
        if (input.value == "") {
            input.classList.add("err") 
            alert(("Please fill out the empty field"));
            isok = false;
        }
    }
    return isok;
}

const domMapping = () => {
    elements.form = dom123.$('#formNewContent'); // '#formNewContent': CSS syntax
    console.log('domMapping', elements.form)
}

const appendContent = content => {
    for (let i = 0; i < localStorage.length; i++) {
        console.log('localStoragekeys', (localStorage.key(i))); // keys of localStorage
        console.log('localStoragevalues', localStorage.getItem(localStorage.key(i))); // values of localStorage
    }

    let loadedContents = localStorage.getItem('contents');
    console.log('loadedContents from localStorage getItem', loadedContents)
    let contents = loadedContents ? JSON.parse(loadedContents) : [];
    // Darstellungsfehler von der Console
    console.log('contents as json parsed loaded contents', contents)
    // ...: Kopie von Objekte
    console.log('contents as json parsed loaded contents...', { ...contents })

    contents.push(content);
    localStorage.setItem('contents', JSON.stringify(contents));
}

const handleEnter = evt => {
    evt.preventDefault();
    
    if (validate()) {
        let data = new FormData(elements.form);
        data = Object.fromEntries(data);
        appendContent(data);
        elements.form.reset();
    }
}

const appendEventlisteners = () => {
    elements.form.addEventListener('submit', handleEnter); // 'submit' as string HTMLFormElement event type
}

const init = () => {
    domMapping();
    appendEventlisteners();
}

// INIT
init();