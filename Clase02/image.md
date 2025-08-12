# Imagen

### Listar las imágenes
```
docker images
docker image ls
```
### Listar las imágenes filtradas
```
docker images | grep nginx
docker image ls | grep nginx
```
### Para inspeccionar una imagen
```
docker image inspect nginx:alpine
```
### Para descargar una imagen
```
docker pull <nombre de la imagen>:<tag de la imagen>
```
### Para descargar una imagen desde el repositorio de AWS
```
docker pull public.ecr.aws/lambda/nodejs:22
```
### Para eliminar una imagen
```
docker rmi <nombre de la imagen>:<tag de la imagen>
docker rmi -f <nombre de la imagen>:<tag de la imagen>
```