# Apache

### Crear la imagen usando Dockerfile desde una carpeta distinta a la raíz
```
docker build -t <nombre de la imagen>:<tagname o version> -f <directorio>/<nombre del dockerfile> .
```

### Corrección sin modificar el contexto
```
docker build -t apache-web:4.0 -f src/dockerfile-changed .
```
### Corrección modificando el contexto
```
docker build -t apache-web:5.0 -f src/Dockerfile ./src
```