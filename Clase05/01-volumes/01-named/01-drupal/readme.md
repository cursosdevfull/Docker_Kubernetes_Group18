# Drupal

### Crear network
```
docker network create net-drupal -d bridge
```
### Crear volúmenes nombrados
```
docker volume create <nombre del volumen>
docker volume create vol-dp-mysql
docker volume create vol-dp-modules
docker volume create vol-dp-profiles
docker volume create vol-dp-sites
docker volume create vol-dp-themes
```
### Crear contenedor de mysql
```
docker run -d \
    --name server-mysql \
    -e MYSQL_ROOT_PASSWORD=12345 \
    -e MYSQL_USER=user \
    -e MYSQL_PASSWORD=12345 \
    -e MYSQL_DATABASE=drupal_db \
    -v vol-dp-mysql:/var/lib/mysql \
    --network net-drupal \
    mysql:8
```
### Crear contenedor de drupal
```
docker run -d \
    --name server-drupal \
    -p 8080:80 \
	-v vol-dp-modules:/var/www/html/modules \
	-v vol-dp-profiles:/var/www/html/profiles \
	-v vol-dp-sites:/var/www/html/sites \
	-v vol-dp-themes:/var/www/html/themes \
    --network net-drupal \
	drupal
```

