
console.log("SSH to iaas.ull");


const sshexec = require('ssh-exec');

function puts(error, stdout, stderr) {
console.log(stdout);
}

var host = require('../package.json').ssh.host;
var user = require('../package.json').ssh.user;
var name = require('../package.json').repository.name;

sshexec(`cd Practica2; cd ${name}; git pull; fuser -k 35729/tcp; fuser -k 8080/tcp; npm run generar-gitbook;  nohup npm run server-express &`, {
      user: user,
      host: host,
      key: '~/.ssh/id_rsa.pub'
    }, puts);
