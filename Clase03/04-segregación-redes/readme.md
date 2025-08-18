# Tarea

- Crear 3 contenedores: frontend, backend, database (usen la imagen nginx:alpine)
- frontend solo puede ver a backend
- database solo puede ver a backend
- backend solo puede ver a frontend y a database

### Resolución
```
docker network create net-01 -d bridge
docker network create net-02 -d bridge

docker run -d --name frontend --network net-01 nginx:alpine
docker run -d --name backend --network net-01 --network net-02 nginx:alpine
docker run -d --name database --network net-02 nginx:alpine
```