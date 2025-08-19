# Wordpress

### Crear network
```
docker network create net-wp -d bridge
```
### Crear contenedor de mysql
```
docker run -d \
    --name server-mysql \
    -e MYSQL_ROOT_PASSWORD=12345 \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=12345 \
    -e MYSQL_DATABASE=wp_db \
    -v $(pwd -W)/data:/var/lib/mysql \
    --network net-wp \
    mysql:8
```

### Crear contenedor de wordpress
```
docker run -d \
    --name server-wp \
    -e WORDPRESS_DB_HOST=server-mysql \
    -e WORDPRESS_DB_USER=user \
    -e WORDPRESS_DB_PASSWORD=12345 \
    -e WORDPRESS_DB_NAME=wp_db \
    -p 8080:80 \
    -v $(pwd -W)/wp:/var/www/html \
    --network net-wp \
    wordpress
```

