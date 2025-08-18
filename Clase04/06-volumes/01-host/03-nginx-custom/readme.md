# Nginx personalizado

```
docker run -d \
    --name web01 \
    -p 9000:80 \
    -v $(pwd -W)/www:/app \
    -v $(pwd -W)/config/nginx.conf:/etc/nginx/conf.d/default.conf \
    nginx:alpine
```