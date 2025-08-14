# MySQL

### Server
```
docker run -d \
    --name server-mysql01 \
    -p 4200:3306 \
    -e MYSQL_ROOT_PASSWORD=12345 \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=12345 \
    -e MYSQL_DATABASE=course \
    mysql:8
```

### Client
```
docker run -d \
    --name client-mysql \
    -p 9000:80 \
    -e PMA_ARBITRARY=1 \
    phpmyadmin:5.2.2
```

