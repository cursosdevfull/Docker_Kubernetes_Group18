# Drupal

### Crear network
```
docker network create net-drupal -d bridge
```
### Crear contenedor de mysql
```
docker run -d \
    --name server-mysql \
    -e MYSQL_ROOT_PASSWORD=12345 \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=12345 \
    -e MYSQL_DATABASE=drupal_db \
    -v /var/lib/mysql \
    --network net-drupal \
    mysql:8
```
### Crear contenedor de drupal
```
docker run -d \
    --name server-drupal \
    -p 8080:80 \
	-v /var/www/html/modules \
	-v /var/www/html/profiles \
	-v /var/www/html/sites \
	-v /var/www/html/themes \
    --network net-drupal \
	drupal
```

