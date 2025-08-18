# MySQL

### Crear contenedor con volumen de tipo host
```
docker run -d \
    --name server-mysql01 \
    -p 4200:3306 \
    -e MYSQL_ROOT_PASSWORD=12345 \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=12345 \
    -e MYSQL_DATABASE=course \
    -v $(pwd -W)/data:/var/lib/mysql \
    mysql:8
```