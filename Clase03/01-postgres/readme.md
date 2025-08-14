# Postgres

### Server
```
docker run -d \
    --name server-postgres \
    -e POSTGRES_USER=user \
    -e POSTGRES_PASSWORD=12345 \
    -e POSTGRES_DB=db \
    postgres:16.8-alpine3.20
```

### Client
```
docker run -d \
    --name client-postgres \
    -p 8100:80 \
    -e PGADMIN_DEFAULT_EMAIL=sergiohidalgocaceres@gmail.com \
    -e PGADMIN_DEFAULT_PASSWORD=12345 \
    dpage/pgadmin4:8
```