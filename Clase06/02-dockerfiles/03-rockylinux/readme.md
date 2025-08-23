# Rocky Linux

### Crear imagen
```
docker build -t rockylinux-web:1.0 -f dockerfiles/dockerfile-rockylinux .
```

### Crear el contenedor
```
docker run -d --name server-rockylinux rockylinux-web:1.0
```

### Crear el contenedor con un nuevo command
```
docker run -it --name server-rockylinux rockylinux-web:1.0 ping google.com
docker run --rm -it rockylinux-web:1.0 ping google.com
```

### Crear imagen con entrypoint modificado
```
docker build -t rockylinux-web:2.0 -f dockerfiles/dockerfile-rockylinux-entrypoint .
```
### Crear el contenedor con un nuevo command
```
docker run --rm -it rockylinux-web:2.0 google.com
```