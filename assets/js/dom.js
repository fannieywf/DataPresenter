'use strict';
// 
const dom123 = {
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