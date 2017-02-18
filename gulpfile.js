var gulp = require('gulp');
var shell = require('gulp-shell');
var ghPages = require('gulp-gh-pages');

gulp.task('default', function() {
  // place code for your default task here
console.log("Prueba default");
});


//conexion ssh hacia el iaas, hacemos pull y levantamos gitbook serve en el puerto 8080
gulp.task('iaas', 
  // place code for your default task here
shell.task([
  'npm run deploy-iaas'
])

);

//commit y push hacia la rama master
gulp.task('github',
  // place code for your default task here
shell.task([
  'npm run push-to-gh'
])

);

//construir el libro en formato website y la wiki
gulp.task('build',
shell.task([
'sudo npm install',
'sudo npm install gitbook-cli',
'sudo npm run generar-gitbook']));

//construir el libro en formato website y subirlo a gh-pages y tambien wiki
gulp.task('deploy',
shell.task([
'npm run deploy']));


//subir la website de la carpeta gh-pages a la rama gh-pages del repositorio
gulp.task('ghpages', function() {
    return gulp.src('./gh-pages/**/*').pipe(ghPages());
});
