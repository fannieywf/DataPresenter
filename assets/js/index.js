'use strict';

// CONSTANTS / VARIABLES
const elements = {};
const avgs = {};

// FUNCTIONS
const domMapping = () => {
    elements.table = dom123.$('table');
    console.log('domMapping table: ', elements.table)
}

const createRow = (parent, dataset) => {
    console.log(dataset)
    const container = dom123.create(
        false,
        'tr',
        parent,
        'container'
    )
        for (let value of dataset) {
            dom123.create(
                value,
                'td',
                container
            )        
        } 
}

const render = contents => {
    // Headline from keys
    createRow(elements.table, Object.keys(contents[0]))
    
    // Input
    for (const content of contents) {
        createRow(elements.table, Object.values(content))
    }
    // Statistics
    createRow(elements.table, Object.values(avgs))
    console.log('rendered')
}

const loadContents = () => {
    let contents = localStorage.getItem('contents');
    console.log('contents from localStorage getItem: ', contents)
    console.log('Contents to be loaded')

    return contents ? JSON.parse(contents) : [];
}

const calculateStatistics = contents => {
    let parses = JSON.parse(JSON.stringify(contents))
    for (const key in parses[0]) {
        let avg = 0
        for (const parse of parses) {
            avg += Number(parse[key])
        }
        avg /= parses.length
        console.log("avg: ", avg)
        avgs[key] = avg
    }
    console.log(avgs)
    console.log(avgs['salary'])

    let avgsalary = avgs['salary'];
    document.getElementById("avgsalary").innerHTML = avgsalary;
    return contents
}

const init = () => {
    domMapping();
    // render(loadContents());
    render(calculateStatistics(loadContents()));
}

// INIT
// document.addEventListener('DOMContentLoaded', init);
// if defer is used to reference this index.js in HTML, init() is fine
init();