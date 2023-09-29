'use strict';

// CONSTANTS / VARIABLES
const elements = {};

// FUNCTIONS
const domMapping = () => {
    elements.main = dom123.$('main');
    console.log('domMapping', elements.main)
}

const render = contents => {

    for (const content of contents) {
        console.log(content);
        const container = dom123.create(
            false,
            'div',
            elements.main,
            'container'
        )

        // Input1
        dom123.create(
            content.input1,
            'h3',
            container
        )

        // Input2
        dom123.create(
            content.input2,
            'p',
            container
        )

        // Input3
        if (content.input3) {
            dom123.create(
                content.input3,
                'p',
                container,
                'info'
            )
        }
    }
    console.log('rendered')
}

const loadContents = () => {
    let contents = localStorage.getItem('contents');
    console.log('Contents to be loaded')
    return contents ? JSON.parse(contents) : [];
}

const init = () => {
    domMapping();
    render(loadContents());
}

// INIT
// document.addEventListener('DOMContentLoaded', init);
// if defer is used to reference this index.js in HTML, init() is fine
init();