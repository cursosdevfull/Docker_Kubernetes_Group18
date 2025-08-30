# Aplicación de Catálogo de Productos

Esta aplicación está compuesta por 3 servicios Node.js que trabajan juntos para mostrar un catálogo de productos tecnológicos.

## Arquitectura

- **Frontend**: Aplicación web que muestra la tabla de productos
- **Backend1**: API que maneja los primeros 5 productos y coordina con Backend2
- **Backend2**: API que maneja los siguientes 5 productos
- **MySQL**: Base de datos que almacena los productos
- **phpMyAdmin**: Interfaz web para administrar la base de datos

## Estructura de la Base de Datos

La tabla `productos` tiene las siguientes columnas:
- `id`: Identificador único (AUTO_INCREMENT)
- `nombre`: Nombre del producto (VARCHAR 255)
- `precio`: Precio del producto (DECIMAL 10,2)
- `descripcion`: Descripción detallada del producto (TEXT)

## Productos Incluidos

La aplicación incluye 10 productos tecnológicos reales:

1. **iPhone 15 Pro** - $999.99
2. **Samsung Galaxy S24** - $799.99
3. **MacBook Air M3** - $1299.99
4. **Sony WH-1000XM5** - $399.99
5. **Nintendo Switch OLED** - $349.99
6. **iPad Pro 12.9"** - $1099.99
7. **AirPods Pro 2** - $249.99
8. **Dell XPS 13** - $999.99
9. **Apple Watch Series 9** - $399.99
10. **Google Pixel 8 Pro** - $899.99

## Instrucciones de Uso

### Con Docker Compose (Recomendado)

1. Asegúrate de tener Docker y Docker Compose instalados
2. Navega al directorio `Clase07`
3. Ejecuta el stack completo:
   ```bash
   docker-compose up -d
   ```

4. Espera a que todos los servicios estén listos

5. Inicializa la base de datos:
   ```bash
   curl http://localhost:4000/api/init-products
   ```

6. Accede a la aplicación:
   - **Frontend**: http://localhost:3000
   - **Backend1**: http://localhost:4000
   - **Backend2**: http://localhost:5000
   - **phpMyAdmin**: http://localhost:9000 (user: user, password: 12345)

### Desarrollo Local

Si quieres ejecutar los servicios individualmente:

1. **Iniciar MySQL**:
   ```bash
   docker run -d --name mysql-productos \
     -e MYSQL_ROOT_PASSWORD=12345 \
     -e MYSQL_DATABASE=db \
     -e MYSQL_USER=user \
     -e MYSQL_PASSWORD=12345 \
     -p 3306:3306 \
     mysql:8
   ```

2. **Backend2**:
   ```bash
   cd backend2
   npm install
   npm start
   ```

3. **Backend1**:
   ```bash
   cd backend1
   npm install
   BACKEND2_URL=http://localhost:5000/api/productos npm start
   ```

4. **Frontend**:
   ```bash
   cd frontend
   npm install
   BACKEND1_URL=http://localhost:4000/api/productos npm start
   ```

5. **Inicializar datos**:
   ```bash
   curl http://localhost:4500/api/init-products
   ```

## Endpoints API

### Backend1 (Puerto 4000/4500)
- `GET /` - Salud del servicio
- `GET /healthcheck` - Verificación de estado
- `GET /api/init-products` - Inicializa la tabla y datos
- `GET /api/productos` - Obtiene todos los productos (combinando Backend1 y Backend2)

### Backend2 (Puerto 5000)
- `GET /` - Salud del servicio
- `GET /healthcheck` - Verificación de estado
- `GET /api/productos` - Obtiene los productos 6-10

### Frontend (Puerto 3000)
- `GET /` - Página principal con la tabla de productos
- `GET /api/config` - Configuración de URLs de backend

## Características

- **Diseño Responsivo**: La tabla se adapta a diferentes tamaños de pantalla
- **Datos Reales**: Productos tecnológicos con nombres, precios y descripciones auténticas
- **Arquitectura Distribuida**: Los datos se obtienen de dos backends diferentes
- **Estilo Moderno**: Interfaz atractiva con gradientes y efectos hover
- **Manejo de Errores**: Mensajes informativos cuando hay problemas de conexión

## Troubleshooting

1. **Error de conexión a la base de datos**: Asegúrate de que MySQL esté ejecutándose y las credenciales sean correctas
2. **Tabla vacía**: Ejecuta `/api/init-products` para inicializar los datos
3. **Backend2 no responde**: Verifica que Backend2 esté ejecutándose antes que Backend1
4. **Productos no cargan**: Revisa la consola del navegador para errores de red

## Tecnologías Utilizadas

- **Node.js + Express**: Backends y Frontend
- **MySQL**: Base de datos
- **Docker & Docker Compose**: Containerización
- **Vanilla JavaScript**: Frontend sin frameworks
- **CSS3**: Estilos modernos con gradientes y animaciones
