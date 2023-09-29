'use strict';

// CONSTANTS / VARIABLES
const elements = {};

// FUNCTIONS
const domMapping = () => {
    elements.main = dom.$('main');
    console.log('domMapping', elements.main)
}

const render = contents => {

    for (const content of contents) {
        console.log(content);
        const container = dom.create(
            false,
            'div',
            elements.main,
            'container'
        )

        // Input1
        dom.create(
            content.input1,
            'h3',
            container
        )

        // Input2
        dom.create(
            content.input2,
            'p',
            container
        )

        // Input3
        if (content.input3) {
            dom.create(
                content.input3,
                'p',
                container,
                'info'
            )
        }
    }
}

const loadContents = () => {
    let contents = localStorage.getItem('contents');
    return contents ? JSON.parse(contents) : [];
}

const init = () => {
    domMapping();
    render(loadContents());
}

// INIT
// document.addEventListener('DOMContentLoaded', init);
init();