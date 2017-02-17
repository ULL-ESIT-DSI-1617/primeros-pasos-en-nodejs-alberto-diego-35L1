/*console.log("Ejecución de Github");
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
console.log(stdout); }

exec("git add .", puts);
exec("git commit -m 'commit automático'", puts);
exec("git push origin master", puts);*/

console.log("Commit and push to github master");
var simpleGit = require('simple-git')();
simpleGit.add('.')
         .commit("commit automático").push('origin', 'master');;
