const pubSub = require('./pubSub')

let names = [];

function onCatMatch(name) {
    if (names.includes(name)) {
        console.log(`Hello again - ${name}`)
    } else {
        console.log(`We have new cat - ${name}`);
        names.push(name);
    }
}

pubSub.subscribe('cat', onCatMatch)