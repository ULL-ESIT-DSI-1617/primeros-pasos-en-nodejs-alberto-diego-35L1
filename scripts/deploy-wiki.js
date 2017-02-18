var path = require('path');
var repo = require('../package.json').repository.wiki;
var simpleGit = require('simple-git')(path.resolve('wiki'));
var fsp = require('fs-promise');

	fsp.remove(path.resolve('wiki/.git'));

	simpleGit.init().add('./*')
         .commit('deploy to wiki').addRemote('origin', repo).push('--force','origin', 'master:master');

