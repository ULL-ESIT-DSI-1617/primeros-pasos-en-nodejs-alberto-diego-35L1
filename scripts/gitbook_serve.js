var exec = require('child_process').exec;

function puts(error, stdout, stderr) { 
console.log("Ejecución de Gitbook Serve");
console.log(stdout); }

exec("gitbook --port 8080 serve", puts);
