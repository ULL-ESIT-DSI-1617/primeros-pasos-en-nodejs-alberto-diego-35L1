var path = require('path');
var repo = require('../package.json').repository.wiki;
var simpleGit = require('simple-git')(path.resolve('wiki'));


	simpleGit.init().add('./*')
         .commit('deploy to wiki').addRemote('origin', repo).push('--force','origin', 'master:master');

