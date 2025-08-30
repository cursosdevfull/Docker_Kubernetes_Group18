# Certificados

### Certificado privado
```
openssl genrsa -out course_18.key 2048
```

### Crear la solicitud
```
openssl req -new -key course_18.key -out course_18.csr -subj "/CN=course_18/O=developers"
```
### Crear el certificado final
```
openssl x509 -req -in course_18.csr -CA \\wsl.localhost\docker-desktop\tmp\docker-desktop-root\run\config\pki\ca.crt -CAkey \\wsl.localhost\docker-desktop\tmp\docker-desktop-root\run\config\pki\ca.key -CAcreateserial -out course_18.crt --days 365
```