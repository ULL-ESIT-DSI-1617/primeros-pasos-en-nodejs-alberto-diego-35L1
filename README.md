# Práctica 2: Primeros pasos en NodeJs

## Introducción
En esta práctica se ha realizado un tutorial sobre los pasos necesarios para instalar diferentes herramientas, como también capturas de la utilización de las mismas (NodeJS, Github, Gitbook, Pandoc, Atom, etc).
A su vez se han añadido unos scripts en NodeJs que automatizan el despliegue del libro en diferentes sites como pueden ser gh-pages o una máquina iaas que levantará un servidor http al cual se podrá acceder dentro de la red ULL.


A continuación se procederá a describir el funcionamiento/finalidad de cada script:

Hay que señalar que la configuración de direcciones (ssh, repositorios remotos, etc), se recogen desde el fichero de configuración del proyecto **package.json** alojado en la raíz del directorio.

* **Push a la rama master remota automáticamente**
``
npm run push-to-gh
``
Añade al control de versiones todos los cambios realizados desde el último commit, y los sube al **repositorio remoto** al que apunta **origin**.

* **Servidor gitbook**
``
npm run gitbook-serve
``
Levanta un servidor sobre nuestro libro desde el módulo de gitbook-cli

* **Servidor web sobre la carpeta gh-pages**
``
npm run server-express
``
Levanta un servidor web en el puerto 8080. Es necesario construir la website del libro previamente en el directorio gh-pages.

* **Construir website gitbook**
``
npm run generar-gitbook
``
Genera en el directorio ./gh-pages la website del libro en formato html, css y javascript de forma automática.

* **Construir wiki**
``
npm run generar-wiki
``
Genera en el directorio ./wiki el libro que se desplegará en la sección wiki del repositorio que indiquemos.

* **Desplegar wiki**
``
npm run deploy-wiki
``
Despliega la wiki en el repositorio que le indiquemos en el package.json

* **Accesso y despliegue del libro web en máquina remota iaas**
``
gulp iaas
``
Accede remotamente a la máquina a través de **ssh**, actualiza el repositorio desde el repositorio remoto al que apunta, genera la website y levanta el servidor con el módulo **express** accesible a través del puerto **8080**.

* **Despliegue del libro en la rama gh-pages del repositorio remoto**
``
gulp ghpages
``
Con el modulo de Gulp gh-pages, se despliega el libro en la rama **gh-pages** del repositorio remoto. Previamente se ha de generar la website en el directorio ./gh-pages.

* **Construcción total**
``
gulp build
``
Instala todas las dependencias necesarias, y construye la website y la wiki del libro.

* **Despliegue total**
``
gulp deploy
``
Despliega la website en la rama gh-pages del repositorio remoto, como también la wiki en dicho repositorio.






* [Enlace al repositorio Github](https://github.com/ULL-ESIT-DSI-1617/primeros-pasos-en-nodejs-alberto-diego-35L1)
* [Enlace a la publicación en gh-pages](https://ull-esit-dsi-1617.github.io/primeros-pasos-en-nodejs-alberto-diego-35L1/)
* [Enlace a la publicación en máquina iaas en Gitbook](http://10.6.129.237:8080/)

* [Pagina web asignatura](https://campusvirtual.ull.es/1617/course/view.php?id=1136)
* [Enunciado de la practica](https://casianorodriguezleon.gitbooks.io/ull-esit-1617/practicas/practicatareasiniciales2.html)

* [Página personal de Diego](https://alu0100761252.github.io)
* [Página personal de Alberto](https://alu0100825510.github.io)
