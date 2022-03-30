const { EventEmitter } = require('stream');

const newEventEmitter = new EventEmitter();
newEventEmitter.on('User logged', data => { console.log( data ) });
newEventEmitter.emit('User logged', { user: 'Lucas Gabriel' });