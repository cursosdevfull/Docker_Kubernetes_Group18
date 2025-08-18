# MongoDB

### Network
```
docker network create net-mongo -d bridge
```

### Server
```
docker run -d \
    --name server-mongo \
    -e MONGO_INITDB_ROOT_USERNAME=admin \
    -e MONGO_INITDB_ROOT_PASSWORD=12345 \
    --network net-mongo \
    mongo:4
```

### Client
```
docker run -d \
    --name client-mongo \
    -p 9000:8081 \
    -e ME_CONFIG_MONGODB_SERVER=server-mongo \
    -e ME_CONFIG_MONGODB_ADMINUSERNAME=admin \
    -e ME_CONFIG_MONGODB_ADMINPASSWORD=12345 \
    -e ME_CONFIG_BASICAUTH_USERNAME=admin \
    -e ME_CONFIG_BASICAUTH_PASSWORD=54321 \
    --network net-mongo \
    mongo-express:1.0.2-20-alpine3.19
```