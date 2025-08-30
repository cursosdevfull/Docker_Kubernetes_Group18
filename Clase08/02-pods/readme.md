# Pods

### Crear un pod
```
kubectl run server-web --image=nginx:alpine
```

### Listar
```
kubectl get po
```

### Port forward
```
kubectl port-forward <nombre del pod> 7000:80
```

### Ejecución de manifiesto
```
kubectl apply -f 01-pod.yml
```

### Describe
```
kubectl describe po <nombre pod>
```