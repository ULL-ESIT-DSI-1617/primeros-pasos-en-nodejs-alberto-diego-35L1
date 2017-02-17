var exec = require('child_process').exec;

function puts(error, stdout, stderr) { 
console.log("Ejecución de Gitbook build");
console.log(stdout); }

exec("gitbook build ./txt ./gh-pages", puts);
