# Plataforma de Comercio Electrónico

Este proyecto consiste en una plataforma de comercio electrónico simplificada con dos servicios backend:

1. **Servicio de Catálogo de Productos**: Gestiona los productos.
2. **Servicio de Gestión de Pedidos**: Gestiona los pedidos.

## Configuración

### Requisitos

- Node.js
- MongoDB
- Configurar las variables de entorno:
  - `DATABASE_URL`: URL de conexión a la base de datos MongoDB.

### Instalación

1. Clonar el repositorio.
2. Instalar dependencias:

```bash
# Para el servicio de productos
cd product-catalog-service
npm install

# Para el servicio de pedidos
cd order-management-service
npm install
