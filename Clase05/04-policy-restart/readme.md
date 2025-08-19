# Políticas de reinicio

### Reinicia cuando ocurre una falla o un error
```
docker run -d \
    --name server-nginx \
    --restart on-failure \
    nginx:alpine \
    sh -c "sleep 3; exit 1"
```
### Reinicia siempre a menos que lo detenga manualmente
```
docker run -d \
    --name server-nginx \
    --restart unless-stopped \
    nginx:alpine \
    sh -c "sleep 3; exit 1"
```
### Reinicia siempre
```
docker run -d \
    --name server-nginx \
    --restart always \
    nginx:alpine \
    sh -c "sleep 3; exit 1"
```