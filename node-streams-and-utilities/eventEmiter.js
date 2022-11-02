const events = require('events');

const eventEmiter = new events.EventEmitter();

eventEmiter.on('cats', (name) => console.log(`${name} from Emiter`))

module.exports = eventEmiter;