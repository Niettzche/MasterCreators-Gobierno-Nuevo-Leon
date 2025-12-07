# TODO - Plataforma Integral de Clústeres NL (UI/Frontend)

Este documento lista las tareas de interfaz de usuario (UI) pendientes de implementación para los Módulos A (Directorio) y B (Ventanilla Digital), así como funcionalidades transversales.

---

## 🚀 Fundacionales (Acceso y Navegación)

-   [x]  **Login / Autenticación de Usuarios:**
    -   [x]  Crear pantalla de inicio de sesión (`LoginView.jsx`).
    -   [x]  Integrar validación de credenciales (mock por ahora).
    -   [ ]  Enlace a "Olvidé mi Contraseña".
-   [ ]  **Dashboard Layout General:**
    -   [ ]  Diseñar estructura de layout con navegación lateral adaptable (`DashboardLayout.jsx`).
    -   [ ]  Implementar navegación dinámica según el rol del usuario.
-   [ ]  **Dashboard del Clúster ("Mis Trámites"):**
    -   [ ]  Crear vista principal para usuarios de tipo Clúster.
    -   [ ]  Listado de "Mis Proyectos" (tabla con Nombre, Convocatoria, Estado, Fecha).
    -   [ ]  Listado de "Convocatorias Abiertas" (tarjetas o lista).
    -   [ ]  Notificaciones/Alertas de acciones pendientes (ej. "Tienes una aclaración pendiente").
-   [ ]  **Dashboard de Gobierno ("Bandeja de Entrada")**:
    -   [ ]  Crear vista principal para roles de Gobierno (Dirección, Finanzas, Comité, Auditoría).
    -   [ ]  Panel de KPIs básicos (solicitudes en curso, pendientes).
    -   [ ]  Tabla de Proyectos por Revisar/Evaluar (con filtros por estado, convocatoria, clúster).

---

## 🏛️ Módulo A: Directorio y Gestión de Clústeres

-   [ ]  **Mi Perfil de Clúster (Edición):**
    -   [ ]  Pantalla para que el Clúster edite sus "Datos Generales" (Nombre, RFC, Dirección, Contacto, etc.).
    -   [ ]  Interfaz para gestionar "Órganos de Gobierno y Comités" (añadir/editar miembros).
    -   [ ]  Área para gestión del "Expediente Digital Base" (Acta Constitutiva, Poder, RFC, etc.) con indicadores de vigencia.
    -   [ ]  Interfaz para añadir/editar/eliminar "Empresas Asociadas" al Clúster.
-   [ ]  **Gestión de Clústeres (Vista Admin/Gobierno):**
    -   [ ]  Tabla completa de todos los Clústeres registrados.
    -   [ ]  Filtros avanzados (por estatus, sector, municipio).
    -   [ ]  Vista de "Detalle/Edición" de un Clúster específico (para SuperAdmin/Gobierno).
    -   [ ]  Sección de "Revisión de Nuevos Clústeres" (Bandeja de Validación) con botones para Aprobar/Rechazar perfil.
-   [ ]  **Directorio Interno (Vista Detalle):**
    -   [ ]  Vista enriquecida del perfil de cada clúster para usuarios internos (Gobierno), mostrando todos los datos.

---

## 💰 Módulo B: Ventanilla Digital de Apoyos (Gestión de Proyectos)

-   [ ]  **Gestión de Convocatorias (Vista Admin/Gobierno):**
    -   [ ]  Pantalla para crear/editar una Convocatoria (Nombre, Fechas, Rubros elegibles, Topes, Checklist documental, Criterios).
    -   [ ]  Listado de Convocatorias (Activas, Borrador, Cerradas).
-   [ ]  **Vista de Evaluación/Dictamen de Proyectos (Gobierno/Comité):**
    -   [ ]  Pantalla de detalle del proyecto (ver todos los datos del Wizard en modo lectura).
    -   [ ]  Sección para "Validación Documental" con checklist interactivo y comentarios.
    -   [ ]  Sección para "Evaluación Técnica" con campos de puntuación y comentarios para el Comité.
    -   [ ]  Botones de acción según el flujo: "Solicitar Aclaración", "Marcar como Validado", "Aprobar", "Rechazar".
-   [ ]  **Gestión de Cuentas Bancarias (Finanzas):**
    -   [ ]  Pantalla para validar la "Cuenta Bancaria Exclusiva" de un proyecto.
    -   [ ]  Registro de la "Dispersión de Recursos" (fecha, monto, comprobante SPEI).
-   [ ]  **Módulo de Comprobación de Gastos (Clúster):**
    -   [ ]  Pantalla para que el Clúster suba Facturas (XML/PDF) asociadas a partidas presupuestales.
    -   [ ]  Pantalla para subir Evidencias (fotos, diplomas, listas de asistencia) asociadas a indicadores.
    -   [ ]  Visualización del estado de cada partida (Gastado vs. Aprobado).
-   [ ]  **Módulo de Cierre y Auditoría:**
    -   [ ]  Vista detallada del historial de un proyecto para el rol Auditoría.
    -   [ ]  Generación de "Expediente PDF" del proyecto completo.
    -   [ ]  Interfaces para registrar hallazgos y cierre de auditorías.

---

## 🛠️ Requerimientos No Funcionales / Transversales (UI)

-   [ ]  Implementar sistema de notificaciones en UI (toast messages, banners).
-   [ ]  Manejo de estados de carga (spinners) y errores.
-   [ ]  Componentes de carga de archivos (file upload) robustos.
-   [ ]  Componentes de paginación, búsqueda global y filtrado avanzado para tablas.
-   [ ]  Adaptación responsiva para todos los componentes.