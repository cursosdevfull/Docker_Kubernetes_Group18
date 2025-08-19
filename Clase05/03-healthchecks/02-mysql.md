# Healthcheck MySQL

```
docker run -d \
    --name server-mysql \
    -e MYSQL_ROOT_PASSWORD=12345 \
    --health-cmd="mysqladmin ping -h localhost" \
    --health-interval=10s \
    --health-retries=3 \
    --health-timeout=3s \
    --health-start-period=12s \
    mysql:8
```