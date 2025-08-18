# Nginx con volumen de tipo host

### Con ruta absoluta
```
docker run -d \
    --name web01 \
    -p 9000:80 \
    -v D:\\Cursos\\Docker_Kubernetes_Group18\\Clase04\\06-volumes\\01-host\\01-nginx\\www:/usr/share/nginx/html \
    nginx:alpine
```
### Con ruta relativa (Git Bash)
```
docker run -d \
    --name web01 \
    -p 9000:80 \
    -v $(pwd -W)/www:/usr/share/nginx/html \
    nginx:alpine
```
### Con ruta relativa (Powershell)
```
docker run -d `
    --name web01 `
    -p 9000:80 `
    -v ${PWD}/www:/usr/share/nginx/html `
    nginx:alpine
```