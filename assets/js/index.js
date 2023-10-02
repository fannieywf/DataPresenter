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
        console.log('content: ', content);
        // Object.keys() is built-in
        console.log('length of each content: ', Object.keys(content).length)
        console.log('content keys: ', Object.keys(content))
        console.log('content values: ', Object.values(content))
        
        // content, type, parent, classes
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

// TODO: Multivariate
const logisticTransform = x => {
    return 1 / (1 + Math.exp(-x));
}

const loadContents = () => {
    let contents = localStorage.getItem('contents');
    console.log('contents from localStorage getItem: ', contents)
    console.log('Contents to be loaded')

    return contents ? JSON.parse(contents) : [];
}

const transformContents = contents => {
    // copy object
    // shallow copy: spread(...) & Object.assign()
    // let tfcontents = Object.assign({}, contents);
    // let tfcontents = {...contents}
    // deepcopy: JSON methods
    let tfcontents = JSON.parse(JSON.stringify(contents))
    console.log('tfcontents: ', tfcontents)

    for (const tfcontent of tfcontents) {
        // console.log('tfcontent: ', tfcontent);
        // console.log('length of each tfcontent: ', Object.keys(tfcontent).length)
        // console.log('tfcontent keys: ', Object.keys(tfcontent))
        // console.log('tfcontent values: ', Object.values(tfcontent))
        for (let c = 0; c < Object.keys(tfcontent).length; c++) {
            tfcontent[Object.keys(tfcontent)[c]] = logisticTransform(Number(Object.values(tfcontent)[c]))
            // console.log(Object.keys(tfcontent)[c], Object.values(tfcontent)[c])
        }
    }
    return tfcontents
}

const init = () => {
    domMapping();
    // render(loadContents());
    render(transformContents(loadContents()));
}

// INIT
// document.addEventListener('DOMContentLoaded', init);
// if defer is used to reference this index.js in HTML, init() is fine
init();