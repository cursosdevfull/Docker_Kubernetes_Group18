# Curso Docker & Kubernetes - Grupo 18

![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Kubernetes](https://img.shields.io/badge/Kubernetes-326CE5?style=for-the-badge&logo=kubernetes&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Este repositorio contiene todos los materiales, ejercicios y proyectos del curso de Docker y Kubernetes del Grupo 18. El curso está diseñado para proporcionar un conocimiento práctico y completo desde conceptos básicos hasta implementaciones avanzadas en entornos de producción.

## 📋 Tabla de Contenidos

- [Descripción del Curso](#descripción-del-curso)
- [Estructura del Curso](#estructura-del-curso)
- [Requisitos Previos](#requisitos-previos)
- [Instalación](#instalación)
- [Temario Detallado](#temario-detallado)
- [Proyectos Prácticos](#proyectos-prácticos)
- [Recursos Adicionales](#recursos-adicionales)
- [Contribución](#contribución)

## 🎯 Descripción del Curso

Este curso intensivo de Docker y Kubernetes está diseñado para desarrolladores, DevOps engineers y administradores de sistemas que desean dominar las tecnologías de contenedores y orquestación más importantes del ecosistema actual.

### Objetivos de Aprendizaje

- ✅ Comprender los conceptos fundamentales de contenedores
- ✅ Dominar Docker desde comandos básicos hasta arquitecturas complejas
- ✅ Crear y gestionar imágenes Docker personalizadas
- ✅ Implementar aplicaciones multi-contenedor con Docker Compose
- ✅ Configurar y gestionar clusters de Kubernetes
- ✅ Desplegar aplicaciones en entornos cloud (AWS, Azure, GCP)
- ✅ Implementar mejores prácticas de seguridad y monitoreo

## 🏗️ Estructura del Curso

El curso está organizado en 10 clases progresivas, cada una con ejercicios prácticos y proyectos hands-on:

```
📁 Clase02 - Fundamentos de Docker
📁 Clase03 - Trabajo con Bases de Datos
📁 Clase04 - Gestión Avanzada de Contenedores
📁 Clase05 - Volúmenes y Persistencia
📁 Clase06 - Dockerfiles y SPA
📁 Clase07 - Docker Compose
📁 Clase08 - Introducción a Kubernetes
📁 Clase09 - Recursos de Kubernetes
📁 Clase10 - Despliegue en Cloud
```

## 🔧 Requisitos Previos

### Software Necesario
- **Docker Desktop** (versión 4.0+)
- **kubectl** (cliente de Kubernetes)
- **Node.js** (versión 18+)
- **Git**
- Editor de código (VS Code recomendado)

### Conocimientos Recomendados
- Comandos básicos de terminal/bash
- Conceptos básicos de redes
- Experiencia básica con aplicaciones web
- Conocimientos de JavaScript/Node.js (para los proyectos)

## 🚀 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/cursosdevfull/Docker_Kubernetes_Group18.git
   cd Docker_Kubernetes_Group18
   ```

2. **Verificar instalación de Docker**
   ```bash
   docker --version
   docker-compose --version
   ```

3. **Verificar instalación de Kubernetes**
   ```bash
   kubectl version --client
   ```

## 📚 Temario Detallado

### 📦 Clase 02 - Fundamentos de Docker
**Conceptos básicos de contenedores e imágenes**
- Diferencias entre contenedores e imágenes
- Comandos esenciales de Docker
- Gestión de contenedores (RabbitMQ, SonarQube, NATS, Jenkins)
- Variables de entorno y configuración
- Trabajo con bases de datos (MySQL)

**Ejercicios prácticos:**
- [RabbitMQ](./Clase02/01-rabbitmq/)
- [SonarQube](./Clase02/02-sonarqube/)
- [NATS](./Clase02/03-nats/)
- [Jenkins](./Clase02/04-jenkins/)
- [MySQL](./Clase02/07-mysql/)

### 🗄️ Clase 03 - Trabajo con Bases de Datos
**Gestión de datos y redes en Docker**
- PostgreSQL en contenedores
- MongoDB y NoSQL
- Configuración de redes Docker
- Segregación de redes para seguridad

**Ejercicios prácticos:**
- [PostgreSQL](./Clase03/01-postgres/)
- [MongoDB](./Clase03/02-mongo/)
- [Redes Docker](./Clase03/03-redes/)
- [Segregación de redes](./Clase03/04-segregación-redes/)

### 🔧 Clase 04 - Gestión Avanzada de Contenedores
**Operaciones avanzadas y mantenimiento**
- Comandos exec para debugging
- Commits y creación de imágenes
- Contenedores temporales
- Filtros y limpieza de recursos
- Introducción a volúmenes

**Ejercicios prácticos:**
- [MongoDB avanzado](./Clase04/01-mongo/)
- [Docker commit](./Clase04/02-commit/)
- [Contenedores temporales](./Clase04/03-run-temporal/)
- [Filtros y limpieza](./Clase04/05-filter-remove/)
- [Volúmenes host](./Clase04/06-volumes/)

### 💾 Clase 05 - Volúmenes y Persistencia
**Gestión de datos persistentes**
- Volúmenes nombrados vs anónimos
- Límites de recursos (CPU/memoria)
- Health checks para monitoring
- Políticas de reinicio

**Ejercicios prácticos:**
- [Volúmenes nombrados](./Clase05/01-volumes/01-named/)
- [Volúmenes anónimos](./Clase05/01-volumes/02-anonymous/)
- [Límites de recursos](./Clase05/02-limites-recursos/)
- [Health checks](./Clase05/03-healthchecks/)
- [Políticas de reinicio](./Clase05/04-policy-restart/)

### 🏗️ Clase 06 - Dockerfiles y SPA
**Creación de imágenes personalizadas**
- Dockerfiles para diferentes tecnologías
- Single Page Applications (Angular, React, Vue, Svelte, Solid)
- Optimización de imágenes
- Multi-stage builds

**Proyectos incluidos:**
- [Aplicaciones SPA](./Clase06/01-spa/) (Angular, React, Vue, Svelte, Solid)
- [Dockerfiles personalizados](./Clase06/02-dockerfiles/) (Apache, Rocky Linux, NPM, Git, React, NestJS)

### 🐳 Clase 07 - Docker Compose
**Orquestación multi-contenedor**
- Aplicación completa con microservicios
- Frontend + Backend + Base de datos
- Configuraciones para diferentes entornos (local, AWS, Azure, GCP)

**Proyecto principal:**
- [Aplicación de Catálogo de Productos](./Clase07/) - Sistema completo con:
  - Frontend Node.js
  - 2 Backend APIs
  - MySQL + phpMyAdmin
  - Configuraciones multi-cloud

### ☸️ Clase 08 - Introducción a Kubernetes
**Fundamentos de orquestación**
- Conceptos básicos de Kubernetes
- Pods y manifiestos YAML
- Gestión de recursos

**Ejercicios prácticos:**
- [Recursos básicos](./Clase08/01-resources/)
- [Pods](./Clase08/02-pods/)

### 🎛️ Clase 09 - Recursos de Kubernetes
**Gestión completa del cluster**
- ReplicaSets y Deployments
- Services (ClusterIP, NodePort, LoadBalancer)
- Namespaces y organización
- ConfigMaps y Secrets
- Probes y health checks
- Límites y cuotas de recursos

**Componentes cubiertos:**
- [ReplicaSets](./Clase09/01-replicasets/)
- [Deployments](./Clase09/02-deployments/)
- [Services](./Clase09/03-services/)
- [Namespaces](./Clase09/04-namespaces/)
- [ConfigMaps](./Clase09/05-configmaps/)
- [Secrets](./Clase09/06-secrets/)
- [Probes](./Clase09/07-probes/)
- [Límites y requests](./Clase09/08-limits-requests/)
- [LimitRange](./Clase09/09-limit-range/)
- [Resource Quota](./Clase09/10-resource-quota/)

### ☁️ Clase 10 - Despliegue en Cloud
**Implementación en entornos de producción**
- Gestión de certificados SSL/TLS
- Usuarios y contextos
- RBAC (Role-Based Access Control)
- Registries privados
- Despliegues en AWS, Azure y GCP
- Auto-escalamiento

**Temas avanzados:**
- [Certificados](./Clase10/01-certificates/)
- [Gestión de usuarios](./Clase10/02-user/)
- [Contextos](./Clase10/03-contexts/)
- [RBAC](./Clase10/04-rbac/)
- [Registry privado](./Clase10/05-registry/)
- [Despliegue local](./Clase10/07-deploy-local/)
- [Despliegue AWS](./Clase10/08-deploy-aws/)
- [Auto-escalamiento](./Clase10/09-escalamiento/)
- [Despliegue Azure](./Clase10/10-deploy-azure/)
- [Despliegue GCP](./Clase10/11-deploy-gcp/)

## 🚀 Proyectos Prácticos

### 1. Aplicación de Catálogo de Productos (Clase 7)
Una aplicación completa de microservicios que incluye:
- **Frontend**: Interfaz web para mostrar productos
- **Backend1 & Backend2**: APIs REST complementarias
- **MySQL**: Base de datos relacional
- **phpMyAdmin**: Administración de BD

### 2. SPAs Multi-Framework (Clase 6)
Implementaciones del mismo proyecto en diferentes frameworks:
- Angular
- React
- Vue.js
- Svelte
- SolidJS

### 3. Infraestructura Multi-Cloud (Clase 10)
Despliegues de la misma aplicación en:
- Amazon Web Services (EKS)
- Microsoft Azure (AKS)
- Google Cloud Platform (GKE)

## 📖 Recursos Adicionales

### Documentación Oficial
- [Docker Documentation](https://docs.docker.com/)
- [Kubernetes Documentation](https://kubernetes.io/docs/)
- [Docker Compose Reference](https://docs.docker.com/compose/)

### Herramientas Útiles
- [Docker Hub](https://hub.docker.com/) - Registry público de imágenes
- [Play with Docker](https://labs.play-with-docker.com/) - Playground online
- [Katacoda](https://www.katacoda.com/) - Escenarios interactivos

### Comandos de Referencia Rápida

**Docker Básico:**
```bash
# Gestión de contenedores
docker ps                    # Listar contenedores activos
docker ps -a                 # Listar todos los contenedores
docker run -d nginx          # Ejecutar contenedor en background
docker stop <container>      # Detener contenedor
docker rm <container>        # Eliminar contenedor

# Gestión de imágenes
docker images                # Listar imágenes
docker pull <image>          # Descargar imagen
docker build -t <tag> .      # Construir imagen
docker rmi <image>           # Eliminar imagen
```

**Kubernetes Básico:**
```bash
# Gestión de pods
kubectl get pods             # Listar pods
kubectl describe pod <name>  # Detalles del pod
kubectl logs <pod>           # Ver logs
kubectl exec -it <pod> bash  # Conectar al pod

# Gestión de deployments
kubectl apply -f file.yaml   # Aplicar manifiesto
kubectl get deployments     # Listar deployments
kubectl scale deployment <name> --replicas=3
```

## 🤝 Contribución

Si encuentras errores o tienes sugerencias para mejorar el contenido:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/mejora`)
3. Commit tus cambios (`git commit -am 'Agrega nueva mejora'`)
4. Push a la rama (`git push origin feature/mejora`)
5. Abre un Pull Request

## 📝 Licencia

Este material es de uso educativo. Todos los derechos reservados.

---

**Instructor:** Sergio Hidalgo  
**Grupo:** 18  
**Duración:** 10 clases  
**Modalidad:** Práctico hands-on

> 💡 **Tip:** Cada clase incluye ejercicios prácticos. Se recomienda completarlos en orden para un mejor aprovechamiento del curso.

---
⭐ Si este curso te ha sido útil, no olvides darle una estrella al repositorio!