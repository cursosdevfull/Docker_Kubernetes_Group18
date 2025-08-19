# Healthcheck Nginx

```
docker run -d \
    --name server-nginx01 \
    --health-cmd="curl -f http://localhost" \
    --health-interval=10s \
    --health-retries=3 \
    --health-timeout=3s \
    --health-start-period=12s \
    nginx:alpine
```