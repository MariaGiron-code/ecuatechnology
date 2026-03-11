# Ecuatecnology - Sistema de Gestión de Tickets

## Descripción

Ecuatechnology es un sistema completo de gestión de tickets diseñado para facilitar la administración de solicitudes de soporte técnico. La aplicación permite a los clientes crear y rastrear tickets de soporte, mientras que los administradores pueden gestionar estos tickets, crear diagnósticos, generar proformas y facturas.

El sistema está dividido en dos módulos principales:
- **Módulo de Cliente**: Interfaz para que los usuarios finales puedan crear tickets y seguir su progreso.
- **Módulo de Administrador**: Panel de control para gestionar tickets, usuarios y configuraciones del sistema.

## Características Principales

### Para Clientes
- ✅ Registro y autenticación de usuarios
- ✅ Creación de tickets de soporte técnico
- ✅ Seguimiento del estado de los tickets
- ✅ Visualización de diagnósticos y proformas
- ✅ Generación de facturas en PDF
- ✅ Perfil de usuario personalizable

### Para Administradores
- ✅ Gestión completa de tickets
- ✅ Creación de diagnósticos técnicos
- ✅ Generación de proformas con precios
- ✅ Actualización de estados de tickets
- ✅ Gestión de usuarios administradores
- ✅ Panel de estadísticas y reportes

### Características Técnicas
- 🔐 Autenticación JWT segura
- 📱 Diseño responsivo (mobile-first)
- 📧 Sistema de confirmación por email
- 📄 Generación automática de PDFs

## Tecnologías Utilizadas

### Backend
- **Node.js** con **Express.js** - Servidor web
- **Prisma ORM** - Gestión de base de datos
- **SQL Server** - Base de datos principal
- **JWT** - Autenticación
- **bcrypt** - Encriptación de contraseñas
- **Nodemailer** - Envío de emails

### Frontend
- **React 19** - Framework de interfaz de usuario
- **Vite** - Herramienta de build y desarrollo
- **Tailwind CSS** - Framework de estilos
- **React Router** - Enrutamiento
- **Zustand** - Gestión de estado global
- **Axios** - Cliente HTTP
- **React Toastify** - Notificaciones
- **jsPDF** - Generación de PDFs

### DevOps y Calidad
- **ESLint** - Linting de código JavaScript
- **Stylelint** - Linting de estilos CSS
- **Vercel** - Despliegue del frontend
- **Git** - Control de versiones

## Instalación

### Prerrequisitos
- Node.js (versión 18 o superior)
- npm o yarn
- SQL Server (para desarrollo local)
- Git

### Instalación del Backend

1. Clona el repositorio:
```bash
git clone <url-del-repositorio>
cd Proyecto_Ecuatechnology/backend
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
Copia el archivo `.env.example` a `.env` y configura las variables necesarias:
```env
DATABASE_URL="sqlserver://..."
JWT_SECRET="tu-secreto-jwt"
EMAIL_USER="tu-email"
EMAIL_PASS="tu-contraseña"
CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
STRIPE_SECRET_KEY="..."
```

4. Ejecuta las migraciones de Prisma:
```bash
npx prisma migrate dev
npx prisma generate
```

5. Inicia el servidor de desarrollo:
```bash
npm run dev
```

### Instalación del Frontend

1. Navega al directorio del frontend:
```bash
cd ../frontend/client
```

2. Instala las dependencias:
```bash
npm install
```

3. Configura las variables de entorno:
Crea un archivo `.env.local` con:
```env
VITE_URL_BACK=http://localhost:3000
VITE_API_DESK=http://localhost:3000
```

4. Inicia el servidor de desarrollo:
```bash
npm run dev
```

## Uso

### Desarrollo Local
1. Asegúrate de que el backend esté ejecutándose en el puerto 3000
2. Inicia el frontend con `npm run dev` en el directorio `frontend/client`
3. Accede a `http://localhost:5173` en tu navegador

### Comandos Útiles

#### Backend
```bash
npm run dev          # Iniciar servidor de desarrollo
npm run start        # Iniciar servidor de producción
npx prisma studio    # Abrir Prisma Studio para gestión de BD
```

#### Frontend
```bash
npm run dev          # Iniciar servidor de desarrollo
npm run build        # Construir para producción
npm run preview      # Vista previa del build
npm run lint         # Ejecutar ESLint
npm run lint:css     # Ejecutar Stylelint
```

## Estructura del Proyecto

```
Proyecto_Ecuatechnology/
├── backend/                    # API del servidor
│   ├── src/
│   │   ├── controllers/        # Controladores de la API
│   │   ├── middlewares/        # Middlewares personalizados
│   │   ├── models/            # Modelos de datos
│   │   ├── routers/           # Definición de rutas
│   │   ├── helpers/           # Funciones auxiliares
│   │   └── config/            # Configuraciones
│   ├── prisma/
│   │   └── schema.prisma      # Esquema de la base de datos
│   └── package.json
├── frontend/
│   └── client/                # Aplicación React
│       ├── src/
│       │   ├── components/    # Componentes reutilizables
│       │   ├── layout/        # Layouts de páginas
│       │   ├── pages/         # Páginas públicas
│       │   ├── hooks/         # Hooks personalizados
│       │   ├── context/       # Context API y Zustand
│       │   └── helpers/       # Utilidades
│       ├── public/            # Archivos estáticos
│       └── package.json
├── .gitignore
├── package.json               # Dependencias raíz
└── README.md                  # Este archivo
```

## API Endpoints

### Autenticación
- `POST /api/auth/login` - Inicio de sesión
- `POST /api/auth/register` - Registro de usuario
- `POST /api/auth/confirm-email` - Confirmación de email

### Tickets
- `GET /api/tickets` - Obtener tickets (según rol)
- `POST /api/tickets` - Crear nuevo ticket
- `PUT /api/tickets/:id` - Actualizar ticket
- `PUT /api/tickets/:id/diagnosis` - Agregar diagnóstico
- `PUT /api/tickets/:id/proforma` - Crear proforma

### Administradores
- `GET /api/administradores` - Lista de administradores
- `POST /api/administradores` - Crear administrador
- `DELETE /api/administradores/:id` - Eliminar administrador

### Clientes
- `GET /api/clientes/profile` - Perfil del cliente
- `PUT /api/clientes/profile` - Actualizar perfil

## Despliegue

### Frontend
El frontend está desplegado en **Vercel** y se puede acceder en:
[https://ecuatechnology.vercel.app/](https://ecuatechnology.vercel.app/)

**Configuración de Vercel:**
- Build Command: `npm run build`
- Output Directory: `dist`
- Variables de entorno: `VITE_URL_BACK`, `VITE_API_DESK`

### Backend
El backend debe desplegarse en un servidor separado (ej: Heroku, Railway, VPS).
Requiere configuración de base de datos SQL Server en producción.

### Guías de Desarrollo
- Sigue las reglas de ESLint y Stylelint
- Usa commits descriptivos
- Mantén la documentación actualizada
- Prueba en múltiples dispositivos

## Autores
- **Equipo de Ecuatecnology S.A.** - Empresa desarrolladora

## Soporte

Para soporte técnico o preguntas:
- Revisa la documentación en `frontend/client/README.md`
- Revisa la documentación técnica en `frontend/client/DOCUMENTACION_FRONTEND.md`
- Contacta al equipo de desarrollo

---

**Última actualización:** Noviembre 2025
**Versión:** 1.0.0
