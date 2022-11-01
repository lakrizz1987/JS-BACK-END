const events = {};

function subscribe(eventName, callback) {
    if (!events[eventName]) {
        events[eventName] = [];
    }

    events[eventName].push(callback);

};

function publish(eventName, param) {
    if (events[eventName]) {
        events[eventName].forEach(callback => {
            callback(param)
        });
    }
}

function unsubscribe(eventName, callback) {
    events[eventName] = events[eventName].filter(element => element !== callback);
}

module.exports = {
    subscribe,
    publish,
    unsubscribe
}