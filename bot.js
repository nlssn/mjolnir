const { exec } = require('child_process');

const startScript = exec('.././vhserver start');
const stopScript = exec('.././vhserver stop');

startScript.stdout.on('data', data => {
   console.log(data);
});

startScript.stderr.on('data', data => {
   console.error(data);
});

/*
stopScript.stdout.on('data', data => {
   console.log(data);
});

stopScript.stderr.on('data', data => {
   console.error(data);
});
*/
