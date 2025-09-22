# Segundo Parcial – Examen Práctico

Este proyecto fue generado con [Angular CLI](https://github.com/angular/angular-cli) versión 20.3.2 usando la API **standalone**.

## 🧰 Stack y herramientas

- Angular 20 (standalone)
- Bootstrap 5 (CSS framework elegido)
- Git + GitHub
- GitHub Pages
- PWA con Service Worker y Manifest
- Notificaciones locales

## 🚀 Inicio rápido

Instala las dependencias y ejecuta el servidor de desarrollo:

```bash
npm install
npm start
```

Luego abre [http://localhost:4200](http://localhost:4200) en tu navegador.

## 🎨 Framework CSS elegido

Este proyecto utiliza **Bootstrap 5**, instalado desde NPM:

```bash
npm install bootstrap
```

El archivo `angular.json` fue actualizado para incluir el estilo global desde:

```json
"styles": [
  "src/styles.css",
  "node_modules/bootstrap/dist/css/bootstrap.min.css"
]
```

## 📂 Estructura esperada del examen

1. Proyecto Angular y repo en el mismo directorio.
2. Bootstrap como framework elegido (documentado aquí).
3. Integración de template gratuito (ngx-admin o equivalente).
4. Adaptación del layout del template a la ruta `/`.
5. Ruta `/ui` con al menos tres componentes del template.
6. Navegación entre rutas + accesibilidad básica.
7. Activación de PWA (manifest + service worker).
8. Home funcional offline (precaching).
9. Botones de prueba de notificaciones locales.
10. Deploy público en GitHub Pages.

## 📝 Licencia del template

[ngx-admin](https://github.com/akveo/ngx-admin) fue el template base utilizado.  
Licencia: [MIT License](https://github.com/akveo/ngx-admin/blob/master/LICENSE).

## 📦 Build

Para compilar el proyecto:

```bash
ng build
```

## 🧪 Pruebas

Ejecuta los tests unitarios:

```bash
ng test
```
