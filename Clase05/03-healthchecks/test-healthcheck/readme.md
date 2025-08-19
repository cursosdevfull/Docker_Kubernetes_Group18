# Test healthcheck

### Crear una imagen
```
docker build -t apptest .
```

### Crear el contenedor
```
docker run -d \
    --name server-nodejs \
    -p 9000:3000 \
    --health-cmd="curl -f http://localhost:3000/healthcheck" \
    --health-interval=10s \
    --health-retries=3 \
    --health-timeout=3s \
    --health-start-period=12s \
    apptest
```