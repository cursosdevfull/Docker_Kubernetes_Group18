# Variables de entorno
```
docker run -d --name server-nginx -e username=sergio.hidalgo nginx:alpine
docker run -d --name server-nginx -e username=sergio.hidalgo -e timeout=4000 nginx:alpine
```