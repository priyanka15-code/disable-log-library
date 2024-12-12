const DisableLogs = require('./index');


console.log('This log will appear.');

DisableLogs.disable(); 
console.log('This log will not appear.');

DisableLogs.enable(); 
console.log('This log will appear again.');
