# NPM

### Crear la imagen
```
docker build -t install-npm:2.0 .
```

### Crear el contenedor
```
docker run --rm install-npm:2.0 install bootstrap
```

### Crear un contenedor con un volumen host
```
docker run --rm \
    -v $(pwd -W)/node_modules:/app/node_modules \
    install-npm:2.0 \
    install bootstrap
```

