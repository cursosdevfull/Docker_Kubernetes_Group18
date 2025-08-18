# Filter / remove

### Filter
```
docker ps -a --filter "ancestor=node:alpine3.22"
docker ps -a --filter "ancestor=node:alpine3.22" -q
```

### Eliminar
```
docker ps -a --filter "ancestor=node:alpine3.22" -q | xargs docker rm
```