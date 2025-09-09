# 🚢 COTECMAR - Recorrido Virtual 360°

Una aplicación web interactiva de recorrido virtual 360° que permite explorar diferentes áreas de un barco de la empresa COTECMAR. La aplicación utiliza tecnología moderna de Three.js con React para crear una experiencia inmersiva de navegación panorámica.

## 📋 Características Principales

### 🎮 Funcionalidades

- **Visor Panorámico 360°**: Navegación libre con rotación, zoom y movimiento
- **19 Escenas Diferentes**: Cubiertas, cuartos de máquinas, cabrestantes y sistemas de propulsión
- **Hotspots Interactivos**: Navegación (verdes) e informativos (rojos)
- **Mini Mapa de Navegación**: Planos superior e inferior del barco
- **Modal de Información**: Contenido multimedia con diseño glassmorphism
- **Advertencia de Orientación**: Para dispositivos móviles
- **Diseño Responsive**: Optimizado para móviles, tablets y desktop

### 🎨 Diseño

- **Tema Marino**: Colores azules y blancos
- **Glassmorphism**: Efectos de vidrio esmerilado
- **Animaciones Fluidas**: Transiciones suaves y naturales
- **Branding COTECMAR**: Integrado en toda la aplicación

## 🛠️ Stack Tecnológico

- **Frontend**: React 19.1.0
- **3D Engine**: Three.js 0.180.0
- **React 3D**: @react-three/fiber 9.3.0
- **Componentes 3D**: @react-three/drei 10.7.5
- **Build Tool**: Vite 7.0.4
- **Estilos**: CSS3 con Tailwind CSS 4.1.13

## 🗺️ Escenas Disponibles (19 ubicaciones)

### Cubiertas Principales

- Puente de Gobierno (escena inicial)
- Cubierta Bote Crujía Proa
- Cubierta Bote Crujía Proa Babor
- Proa Costado Babor
- Proa Costado Estribor
- Cubierta Principal Costado Babor
- Cubierta Principal Costado Estribor
- Cubierta de Trabajo
- Cubierta Bote Costado Babor Proa
- Cubierta Bote Costado Babor

### Áreas Técnicas

- Cabrestante Costado Babor
- Cabrestante Costado Estribor
- Cuarto de Máquinas Costado Babor Popa
- Cuarto de Máquinas Costado Babor Proa
- Cubierta Superior Cuarto de Máquinas
- Cuarto de Máquinas Costado Estribor

### Sistemas de Propulsión

- Servo Motor Crujía
- Servo Motor Costado Babor
- Servo Motor Costado Estribor

## 🚀 Instalación y Uso

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone [repository-url]
cd 360-ships

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

### Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Build de producción
- `npm run preview` - Preview del build
- `npm run lint` - Ejecutar linter

## 📱 Compatibilidad

- **Desktop**: Navegadores modernos (Chrome, Firefox, Safari, Edge)
- **Móvil**: iOS y Android
- **Tablet**: Optimizado para orientación landscape
- **PWA Ready**: Preparado para instalación como app

## 🎯 Casos de Uso

- **Capacitación**: Entrenamiento de personal naval
- **Presentaciones**: Demostraciones a clientes
- **Documentación**: Registro visual de instalaciones
- **Marketing**: Recorridos virtuales promocionales
- **Educación**: Material didáctico para estudiantes

## 🏗️ Estructura del Proyecto

```
src/
├── components/          # Componentes React
│   ├── Scene360.jsx    # Visor panorámico 360°
│   ├── Hotspot.jsx     # Hotspots interactivos
│   ├── MiniMap.jsx     # Mapa de navegación
│   ├── InfoModal.jsx   # Modal de información
│   ├── OrientationWarning.jsx # Advertencia de orientación
│   └── LoadingScreen.jsx # Pantalla de carga
├── helpers/            # Utilidades y datos
│   ├── dataScene.js    # Configuración de escenas
│   └── hotspotContent.js # Contenido de hotspots
├── images/             # Imágenes panorámicas 360°
├── App.jsx            # Componente principal
├── App.css            # Estilos principales
└── main.jsx           # Punto de entrada
```

## 🎨 Personalización

### Agregar Nuevas Escenas

1. Agregar la imagen panorámica en `src/images/`
2. Configurar la escena en `src/helpers/dataScene.js`
3. Definir hotspots de navegación e información

### Modificar Hotspots

1. Editar `src/helpers/hotspotContent.js` para contenido informativo
2. Actualizar posiciones en `dataScene.js`

### Personalizar Estilos

- Modificar `src/App.css` para cambios de tema
- Ajustar colores marinos y efectos glassmorphism
- Personalizar animaciones y transiciones

## 🔧 Configuración Avanzada

### Optimización de Rendimiento

- Carga asíncrona de imágenes
- Lazy loading de componentes
- Optimización de texturas Three.js

### Accesibilidad

- Navegación por teclado
- Etiquetas ARIA
- Modo de alto contraste
- Reducción de movimiento

## 📄 Licencia

Este proyecto está desarrollado para COTECMAR. Todos los derechos reservados.

## 🤝 Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crear una rama para tu feature
3. Commit tus cambios
4. Push a la rama
5. Abrir un Pull Request

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto, contactar al equipo de desarrollo de COTECMAR.

---

**COTECMAR** - Soluciones Navales de Excelencia
