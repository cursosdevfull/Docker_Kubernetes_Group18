# Contextos

### Listar
```
kubectl config view
```

### Crear contexto
```
kubectl config set-context course18-ctx --user course18 --cluster docker-desktop
```

### Cambiar de contexto
```
kubectl config use-context course18-ctx
```