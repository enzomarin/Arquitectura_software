# Tutorial #1 : Docker



 1. Introducción 
 2. Despliegar un primer contenedor Docker básico en práctica
 3. Crear sus propias imágenes con el archivo *Dockerfile*
 4. Combinar varias imágenes para construir software complejos con *Docker-compose*
 5. Preguntas
 6. Ejercicio

## 1. Introducción
### 1.1 ¿Qué es Docker y la integración por contenedores?

[Docker](https://www.docker.com/resources/what-container) corresponde a una herramienta de código abierto  que sirve para **empaquetar, transportar y ejecutar softwares** de distintos niveles de complejidad. Esta herramienta es un modelo de virtualización que se encarga de crear una capa de abstracción con el sistema operativo.

La idea principal de esta herramienta es crear contenedores portables para que las aplicaciones de software puedan ser ejecutadas en cualquier máquina que tenga Docker instalado, sin importar el sistema operativo que la máquina tenga instalado,

 

### 1.2 ¿En qué se diferencia de la virtualización?

 El principal problema de la VM es que un "sistema operativo adicional" el cual ocupa espacio adiciona. Otro inconveniente significativo de la VM es un arranque lento.

Docker elimina todo lo anterior simplemente compartiendo el kernel del SO a través de todos los contenedores que se ejecutan como procesos separados del sistema operativo del host.

![](vm-contenedores.png)


### 1.3 ¿Por qué se necesita a Docker?

La lista corta de beneficios incluye:

- **Proceso de desarrollo más rápido**

No hay necesidad de instalar aplicaciones de terceros como MySQL, Redis, Elasticsearch en el sistema - puede ejecutarlo en contenedores.

- **Práctica encapsulación de aplicaciones**

Docker ofrece un formato de imagen unificado para distribuir sus aplicaciones a través de diferentes sistemas host y servicios cloud. Puede entregar su aplicación en una sola pieza con todas las dependencias requeridas (incluidas en una imagen) listas para ser ejecutadas.


- **Monitoreo fácil y claro**

Docker provee una manera unificada de leer los logs de todos los contenedores en ejecución. No necesita recordar todas las rutas específicas donde su aplicación y sus dependencias almacenan los archivos de logs.

- **Fácil de escalar**

Por diseño, Docker le obliga a seguir sus principios básicos, como la configuración sobre variables de entorno, la comunicación sobre puertos TCP/UDP, etc. Y si ha hecho bien su aplicación, estará lista para ser escalada y facilmente despliegable en cualquier servidor.

### 1.6 Terminología

**Imagen** - Una descripción estática de la arquitectura de software que se quiere despliegar.

**Contenedor** - una instancia en ejecución que encapsula la arquitectura de software funcionando. Los contenedores siempre se crean a partir de imágenes. Un contenedor puede exponer puertos y volúmenes para interactuar con otros contenedores o con el mundo exterior.

**Port (Puerto)** - un puerto TCP/UDP en su significado original. Corresponden a direcciones que sirven de punto de integración entre varios softwares. 

**Volumen** - puede ser descrito como una carpeta compartida dónde se almacenan los datos útiles. Los volúmenes se inicializan cuando se crea un contenedor. Los volúmenes están diseñados para datos persistentes, independientemente del ciclo de vida del contenedor.

**Docker Hub** - un servidor con interfaz web proporcionada por Docker Inc. Almacena muchas imágenes Docker con diferentes programas

## 2. Despliegar un primer contenedor Docker básico en práctica



Creamos un shell interactivo dentro de un contenedor Docker:

```
docker run -i -t --rm ubuntu  
```

- **-t** crea un terminal dentro del contenedor
- **-i** le permite interactuar directamente con el terminal del contenedor
- El indicador **-rm** retira automáticamente el contenedor cuando el proceso sale. Por defecto, los contenedores no se eliminan. Este contenedor existe hasta que mantenemos la sesión shell y termina cuando salimos de la sesión (como una sesión SSH con un servidor remoto).


## 3. Crear sus propias imágenes con el archivo *Dockerfile*

### 3.1 ¿Qué es el archivo *Dockerfile*?

Dockerfile es un archivo de textos que sirve para crear sus propias imágenes, y así configurar el funcionamiento de sus propios softwares.

### 3.2 Ejemplo: Escribir un Dockerfile

Para crear una imagen Docker, debe crear un archivo **Dockerfile**. Es un archivo de texto plano con instrucciones y argumentos. Aquí está la descripción de las instrucciones que vamos a usar en nuestro próximo ejemplo:

**FROM** - establece la imagen base
**RUN** - ejecuta ciertos comandos al momento de construir la imágen
**ENV** - define variables de entorno
**WORKDIR** - define directorio de trabajo
**VOLUME** - crea un punto de montaje para un volumen
**CMD** - ejecuta ciertos comandos al momento de despliegar un contenedor

Puede consultar la referencia de [Dockerfile](https://docs.docker.com/engine/reference/builder/) para obtener más detalles.

## 4. Combinar varias imágenes para construir software complejos con *Docker-compose*

**Docker compose** - es un software CLI utilizada para conectar contenedores entre sí.


### 4.1 Ejemplo 1: Aplicación Python y Redis (Sistema de gestión base de datos)

En este ejemplo, vamos a crear una aplicación web en Python (utilizando la librería Flask) y el SGBD Redis.

La aplicación Python simplemente va a contar cuántas veces un usuario se conecta a una página web y actualizará un contador en una base de datos Redis.

 #### Etapa 1: crear la aplicación Python

Crear una carpeta llamada *compose* y posicionarse a dentro. En  *compose*, crear una carpeta *app*. Esta carpeta almacenará los archivos útiles para nuestra aplicación.

En un archivo app.py, crear la aplicación Flask: 
```
import os

from flask import Flask
from redis import Redis


app = Flask(__name__)
redis = Redis(host=os.environ['REDIS_HOST'], port=os.environ['REDIS_PORT'])
bind_port = int(os.environ['BIND_PORT'])


@app.route('/')
def hello():
    redis.incr('hits')
    total_hits = redis.get('hits').decode()
    return f'Hello from Redis! I have been seen {total_hits} times.'


if __name__ == "__main__":
    app.run(host="0.0.0.0", debug=True, port=bind_port)
```
**Nota bene**: Nuestra aplicación tiene dos dependencias. Depende de las librerias Flask y Redis.

Creamos un archivo txt listando las dependencias de nuestra applicación.

En *app/requirements.txt*:
```
flask==1.0.2
redis==2.10.6
```

#### Etapa 2: Crear una imágen de nuestra aplicación Python

En la carpeta *app*, crear un archivo Dockerfile.

```
FROM python:3.6.3

ENV BIND_PORT 5000
ENV REDIS_HOST localhost
ENV REDIS_PORT 6379

COPY ./requirements.txt /requirements.txt

RUN pip install -r /requirements.txt

COPY ./app.py /app.py

EXPOSE $BIND_PORT

CMD [ "python", "/app.py" ]
```

### Etapa 3: Componer un software con Docker-compose

En una nueva carpeta llamada *compose* , creamos una archivo de configuración llamado **docker-compose.yml**. Tiene el contenido siguiente:
```
version: '3.6'  
services:  
  app:
    build:
      context: ./app
    depends_on:
      - redis
    environment:
      - REDIS_HOST=redis
    ports:
      - "3001:5000"
  redis:
    image: redis:3.2-alpine
    volumes:
      - redis_data:/data
volumes:  
  redis_data:
```

Vayan a examples/compose y ejecute el siguiente comando:

```
docker-compose up  
```

El ejemplo actual incrementará la vista del contador en Redis. Abra la dirección 127.0.0.1:3001 en su navegador web y compruébelo.

Siempre deben dar nombres explícitos a sus volúmenes en docker-compose.yml (si la imagen tiene volúmenes). Esta sencilla regla les ahorrará un problema en el futuro cuando inspeccionen sus volúmenes.

```
version: '3.6'  
services:  
  ...
  redis:
    image: redis:3.2-alpine
    volumes:
      - redis_data:/data
volumes:  
  redis_data:
```

En este caso, redis_data será el nombre dentro del archivo docker-compose.yml.

Para ver los volúmenes, ejecuten:
  
```
docker volume ls 
```

Salida del terminal:

```
DRIVER              VOLUME NAME  
local               apptest_redis_data   
```


## 5. Conclusión del tutorial

- Docker se ha convertido en una herramienta importante de desarrollo de software
- Se puede utilizar en todo tipo de proyectos independientemente de su tamaño y complejidad
- **La encapsulación de su código en contenedores Docker le ayudará a crear procesos de integración más rápidos y eficientes**
- No hay persistencia de datos en los contenedores
- Eviten configuraciones manuales dentro de los contenedores. Deberian añadir comandos en el archivo de configuración Dockerfile.
- Pueden utilizar el comando ``docker exec`` para ejecutar comandos puntualment en un contenedor activo.

## Algunos comandos útiles:

![enter image description here](https://i.postimg.cc/3r4SHS5f/45.png)


