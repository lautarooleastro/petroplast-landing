# Petroplast Landing Page

Una página web profesional para Petroplast, empresa argentina especializada en plásticos, tuberías y trabajos de construcción.

## 🚀 Características

- **Diseño Responsivo**: Optimizado para dispositivos móviles, tablets y desktop
- **Bootstrap 5.3**: Framework CSS moderno y robusto
- **Animaciones Suaves**: Efectos de scroll y transiciones elegantes
- **Formulario de Contacto**: Integración con Formspree para manejo de formularios
- **SEO Optimizado**: Meta tags, Open Graph y estructura semántica
- **Rendimiento**: Carga rápida y optimizada

## 📁 Estructura del Proyecto

```
petroplast-landing/
├── index.html              # Página principal
├── css/
│   └── styles.css         # Estilos personalizados
├── js/
│   └── main.js           # JavaScript personalizado
├── images/
│   ├── hero/             # Imágenes del hero
│   ├── projects/         # Galería de proyectos
│   └── icons/           # Iconos personalizados
├── documentation.md      # Documentación técnica
├── plan.md              # Plan de desarrollo
└── README.md            # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica
- **CSS3**: Estilos personalizados y variables CSS
- **Bootstrap 5.3**: Framework CSS (CDN)
- **JavaScript ES6+**: Funcionalidad interactiva
- **Font Awesome**: Iconografía
- **AOS**: Animaciones on scroll
- **Google Fonts**: Tipografía (Inter)

## 🚀 Instalación y Uso

### Requisitos
- Navegador web moderno
- Servidor web local (opcional para desarrollo)

### Instalación Local

1. **Clonar o descargar el proyecto**
   ```bash
   git clone [URL_DEL_REPOSITORIO]
   cd petroplast-landing
   ```

2. **Servidor local (opcional)**
   ```bash
   # Con Python 3
   python -m http.server 8000
   
   # Con Node.js
   npx http-server
   
   # Con PHP
   php -S localhost:8000
   ```

3. **Abrir en navegador**
   ```
   http://localhost:8000
   ```

### Desarrollo

1. **Editar archivos**
   - `index.html`: Contenido y estructura
   - `css/styles.css`: Estilos personalizados
   - `js/main.js`: Funcionalidad JavaScript

2. **Personalizar**
   - Cambiar colores en `:root` variables CSS
   - Modificar contenido en HTML
   - Ajustar animaciones en JavaScript

## 📱 Secciones de la Página

### 1. **Navegación**
- Barra de navegación fija con efecto scroll
- Menú responsive para móviles
- Enlaces suaves a secciones

### 2. **Hero/Hero**
- Título principal y descripción
- Botones de llamada a la acción
- Fondo con gradiente y patrón

### 3. **Sobre Nosotros**
- Información de la empresa
- Características destacadas
- Imagen representativa

### 4. **Servicios**
- Tarjetas con servicios principales
- Iconos descriptivos
- Lista de características

### 5. **Proyectos**
- Galería de proyectos destacados
- Filtros por categoría
- Información de cada proyecto

### 6. **¿Por qué elegirnos?**
- Ventajas competitivas
- Estadísticas y logros
- Testimonios (futuro)

### 7. **Contacto**
- Formulario de contacto funcional
- Validación de campos
- Información de contacto

### 8. **Footer**
- Enlaces importantes
- Información de contacto
- Redes sociales

## 🎨 Personalización

### Colores
```css
:root {
    --primary-color: #002748;    /* Azul principal */
    --secondary-color: #64748b;   /* Gris secundario */
    --accent-color: #eee741;      /* Amarillo verdoso de acento */
    --light-bg: #f8fafc;         /* Fondo claro */
    --dark-text: #334155;        /* Texto oscuro */
}
```

### Tipografía
- **Fuente principal**: Inter (Google Fonts)
- **Tamaños**: Responsive con clamp()
- **Pesos**: 300, 400, 500, 600, 700

### Componentes Bootstrap
- **Navbar**: Navegación responsive
- **Cards**: Tarjetas de servicios y proyectos
- **Forms**: Formulario de contacto
- **Grid**: Sistema de columnas responsive
- **Buttons**: Botones con efectos hover

## 📧 Configuración del Formulario

### Formspree (Recomendado)
1. Crear cuenta en [Formspree.io](https://formspree.io)
2. Crear nuevo formulario
3. Reemplazar `YOUR_FORM_ID` en el HTML:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Alternativas
- **Netlify Forms**: Para hosting en Netlify
- **EmailJS**: Para envío directo desde frontend
- **Backend personalizado**: Para mayor control

## 🚀 Despliegue

### Netlify (Recomendado)
1. Conectar repositorio GitHub
2. Configurar dominio personalizado
3. Activar SSL automático
4. Configurar formularios

### Vercel
1. Importar proyecto
2. Configurar variables de entorno
3. Desplegar automáticamente

### GitHub Pages
1. Habilitar Pages en configuración
2. Seleccionar rama main
3. Acceder a `https://usuario.github.io/petroplast-landing`

## 📊 SEO y Performance

### Meta Tags Incluidos
- Title y description optimizados
- Open Graph para redes sociales
- Twitter Cards
- Viewport para móviles

### Optimizaciones
- Imágenes lazy loading
- CSS y JS minificados
- CDN para librerías externas
- Compresión gzip

### Métricas Objetivo
- **Lighthouse Score**: > 90
- **Tiempo de carga**: < 3 segundos
- **Core Web Vitals**: Optimizados

## 🔧 Mantenimiento

### Actualizaciones Regulares
- Revisar enlaces rotos
- Actualizar contenido
- Optimizar imágenes
- Revisar performance

### Monitoreo
- Google Analytics
- Search Console
- PageSpeed Insights
- Uptime monitoring

## 📞 Soporte

Para soporte técnico o consultas sobre el proyecto:

- **Email**: [tu-email@ejemplo.com]
- **GitHub**: [usuario-github]
- **Documentación**: Ver `documentation.md`

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver archivo `LICENSE` para más detalles.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crear rama para feature (`git checkout -b feature/AmazingFeature`)
3. Commit cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abrir Pull Request

## 📝 Changelog

### v1.0.0 (2024-01-XX)
- ✅ Estructura base con Bootstrap 5.3
- ✅ Diseño responsive completo
- ✅ Formulario de contacto funcional
- ✅ Animaciones y efectos
- ✅ SEO optimizado
- ✅ Performance optimizado

---

**Desarrollado con ❤️ para Petroplast**
