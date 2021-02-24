const { exec } = require('child_process');

function start() {
   const startScript = exec('.././vhserver start');

   startScript.stdout.on('data', data => {
      console.log(data);
   });
   
   startScript.stderr.on('data', data => {
      console.error(data);
   });
}

function stop() {
   const stopScript = exec('.././vhserver stop');

   stopScript.stdout.on('data', data => {
      console.log(data);
   });

   stopScript.stderr.on('data', data => {
      console.error(data);
   });
}

function restart() {
   const restartScript = exec('.././vhserver restart');

   restartScript.stdout.on('data', data => {
      console.log(data);
   });

   restartScript.stderr.on('data', data => {
      console.error(data);
   });
}