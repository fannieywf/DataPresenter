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

    createRow(elements.table, Object.keys(contents[0]))

    for (const content of contents) {
        // console.log('content: ', content);
        // // Object.keys() is built-in
        // console.log('length of each content: ', Object.keys(content).length)
        // console.log('content keys: ', Object.keys(content))
        // console.log('content values: ', Object.values(content))
        createRow(elements.table, Object.values(content))
    
        // content, type, parent, classes
    }
    // Output
    createRow(elements.table, Object.values(avgs))
    console.log('rendered')
}

const logisticTransform = x => {
    return 1 / (1 + Math.exp(-x));
}

const loadContents = () => {
    let contents = localStorage.getItem('contents');
    console.log('contents from localStorage getItem: ', contents)
    console.log('Contents to be loaded')

    return contents ? JSON.parse(contents) : [];
}

const calculateStatistics = contents => {
    let parses = JSON.parse(JSON.stringify(contents))
    // console.log("parsed contents: ", parses)
    // console.log("length of parsed contents: ", parses.length)

    // 2 parses
    // console.log(parse)
    // console.log("parsed keys", Object.keys(parse))
    // console.log("parsed values", Object.values(parse))
    // 3 is
    // for (let i = 0; i < Object.keys(parse).length; i++) {
    // console.log(Object.keys(parse)[i])
    //     console.log(Number(Object.values(parse)[i]))
    //avg[Object.keys(parses[parse])[i]] += Number(Object.values(parses[parse])[i])
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
    console.log(avgs['input3'])

    let avgsalary = avgs['input3'];
    document.getElementById("avgsalary").innerHTML = avgsalary;
    return contents
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
    render(calculateStatistics(loadContents()));
    // render(transformContents(loadContents()));
}

// INIT
// document.addEventListener('DOMContentLoaded', init);
// if defer is used to reference this index.js in HTML, init() is fine
init();