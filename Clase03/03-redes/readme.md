# Redes

### Listar
```
docker network ls
```

### Crear
```
docker network create <nombre de la red> --driver bridge
docker network create <nombre de la red> -d bridge
```
### Crear contenedor asociado a una red
```
docker run -d \
    --name server-nginx \
    --network net-web \
    nginx:alpine
```

### Crear contenedor asociado a más de una red
```
docker run -d \
    --name server-nginx-2 \
    --network net-web \
    --network net-web-2 \
    nginx:alpine
```
### Crear una red con gateway y subnet
```
docker network create \
    net-web-3 \
    --subnet 150.25.0.0/16 \
    --gateway 150.25.0.10 \
    -d bridge
```

### Inspeccionar una red
```
docker network inspect <nombre de la red>
```
### Crear un contenedor asociado a un IP
```
docker run -d \
    --name server-nginx-3 \
    --network net-web-3 \
    --ip 150.25.0.20 \
    nginx:alpine
```

### Conectar un contenedor a una red
```
docker network connect <nombre de la red> <nombre del contenedor>
```

### Desconectar un contenedor de una red
```
docker network disconnect <nombre de la red> <nombre del contenedor>
```