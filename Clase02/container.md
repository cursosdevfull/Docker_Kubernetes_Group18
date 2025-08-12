# Contenedores

### Listar los contenedores que se están ejecutando
```
docker ps
```
### Listar los contenedores
```
docker ps -a
```
### Listar los contenedores usando filtro
```
docker ps -a | grep nginx
```

### Crear un contenedor con mapeo de puertos y nombre
```
docker run  -p 8000:80 -d --name server-nginx nginx:alpine
```

### Para eliminar un contenedor
```
docker rm <nombre contenedor>
```
### Para detener un contenedor
```
docker stop <nombre contenedor>
```
### Para eliminar un contenedor que se está ejecutando
```
docker rm -f <nombre contenedor>
```
### Para eliminar más de un contenedor que se está ejecutando
```
docker rm -f <nombre contenedor 1> <nombre contenedor 2> <nombre contenedor 3> ...
```
### Para inspeccionar un contenedor
```
docker inspect <nombre contenedor>
```