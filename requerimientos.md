**Plataforma Integral de Clústeres del Estado de Nuevo León**

**Directorio + Ventanilla Digital de Apoyos**

**Documento de Análisis de Requerimientos (versión borrador)**

---

## 1. Antecedentes y objetivo general

Actualmente la gestión de los clústeres y de sus apoyos se realiza con:

- Formularios y tablas en Excel.
- Intercambio de información por correo electrónico.
- Entrega manual de documentación, facturas y evidencias.

Esto dificulta la trazabilidad, el control de cumplimiento y la generación de información para la toma de decisiones.

**Objetivo general:**

Diseñar una **plataforma web institucional** que integre en un solo sistema:

1. Un **Directorio de Clústeres y Empresas** del Estado de Nuevo León.
2. Una **Ventanilla Digital de Clústeres** para gestionar el ciclo completo de los apoyos, desde la convocatoria hasta el cierre y auditoría.

---

## 2. Alcance funcional (visión general)

La plataforma contempla dos grandes módulos que pueden implementarse por fases:

### Módulo A. Directorio de Clústeres y Empresas

- Registro y administración de los **15 clústeres** del estado.
- Perfil completo de cada clúster (datos legales, órganos de gobierno, comités).
- Listado estructurado de las **empresas asociadas** a cada clúster.
- Búsqueda y filtros por clúster, sector, subsector, municipio, tamaño de empresa, etc.
- Versión pública controlada (consulta) y versión interna (análisis y reportes).

### Módulo B. Ventanilla Digital de Apoyos a Clústeres

Gestión integral del ciclo:

1. Convocatoria.
2. Postulación de proyectos por parte de los clústeres.
3. Validación de requisitos y documentación.
4. Evaluación / dictamen.
5. Firma de convenio.
6. Registro de dispersión de recursos.
7. Ejecución, indicadores y evidencias.
8. Cierre y auditoría.
9. Gestión de incumplimientos y reintegros (en su caso).

---

## 3. Roles y permisos (RBAC)

### 3.1 Roles principales

1. **Clúster (Solicitante)**
    - Registra y actualiza su perfil.
    - Captura proyectos, presupuesto e indicadores.
    - Carga documentación requerida, facturas y evidencias.
2. **Representante legal (Firmante)**
    - Confirma la veracidad de la información.
    - Firma o carga el convenio firmado.
3. **Dirección / Área de Clústeres (Operación – Gobierno)**
    - Configura programas y convocatorias.
    - Valida requisitos y documentación.
    - Gestiona aclaraciones con los clústeres.
    - Da seguimiento a proyectos y reportes.
4. **Comité evaluador**
    - Revisa expedientes.
    - Captura calificaciones y comentarios.
    - Emite recomendación: Aprobado / No aprobado / Solicitar información adicional.
5. **Finanzas**
    - Valida cuenta bancaria.
    - Registra dispersión de recursos.
    - Da seguimiento a comprobación y, en su caso, reintegros.
6. **Auditoría / Órgano interno de control**
    - Consulta expedientes digitales completos.
    - Registra auditorías, requerimientos, hallazgos y cierres.
7. **Público (consulta)**
    - Accede a un listado de beneficiarios aprobados, con información básica del proyecto y monto.

> Nota: a nivel técnico se puede agregar un Súper Administrador para la gestión global de usuarios, roles y parámetros del sistema.
> 

---

## 4. Flujo general y estados

### 4.1 Convocatoria

- **Borrador → Publicada → Cerrada**

Configurable por la Dirección/Área de Clústeres:

- Nombre y objetivo.
- Fechas de inicio y cierre.
- Rubros elegibles (Capacitación, Certificaciones, Vinculación/Encuentros de negocio, etc.).
- Montos máximos por proyecto / por clúster.
- Checklist documental.
- Criterios de evaluación.

### 4.2 Solicitud / Proyecto (ciclo completo)

Estados sugeridos:

1. Borrador (captura por el clúster).
2. Enviada.
3. En validación documental.
4. Requiere aclaración ↔ Respuesta cargada.
5. Validada.
6. En evaluación (Comité evaluador).
7. Dictaminada (Aprobada / No aprobada).
8. Convenio en firma.
9. Vigente.
10. En ejecución.
11. En cierre (entrega de reportes finales y evidencias).
12. Cerrada.

Ramas alternativas:

- Rechazada (con motivo).
- Cancelada por incumplimiento → Reintegro requerido → Reintegrado / En cobranza.

---

## 5. Requisitos de información

### 5.1 Perfil del clúster

**Datos generales:**

- Nombre comercial del clúster.
- Logo.
- Razón social.
- RFC.
- Domicilio fiscal y domicilio de oficinas.
- Municipio / Estado.
- Número de empresas asociadas.
- Sitio web (opcional).

**Datos de contacto:**

- Nombre del representante legal.
- Correo electrónico del representante legal.
- Teléfono del representante legal.
- Datos de contacto operativo / administración (nombre, correo, teléfono).

**Órganos de gobierno (con comités):**

- Presidente (nombre, empresa que representa).
- Vicepresidente (nombre, empresa).
- Secretario (nombre, empresa).
- Vocales A, B, C… (nombre y empresa).
- Comités (ej. capital humano, innovación, vinculación, etc.):
    - Nombre del comité.
    - Objetivo 1, 2, 3.
    - Presidente del comité y empresa que representa.

**Documentación del clúster (expediente base):**

Siguiendo las Reglas de Operación, por convocatoria se podrán requerir, al menos:

a) Proyecto con modelo colaborativo alineado a las Reglas de Operación.

b) Copia del acta constitutiva de la asociación civil / clúster solicitante.

c) Copia del instrumento público que acredite la representación legal.

d) Comprobante de domicilio de la persona moral (vigencia no mayor a 3 meses).

e) Copia de identificación oficial vigente del representante legal.

f) Constancia de Situación Fiscal (RFC) con fecha de emisión no mayor a 3 meses.

g) Opinión de cumplimiento de obligaciones fiscales (SAT), con fecha no mayor a 3 meses.

h) Carátula bancaria (cuenta específica para administración del recurso, con CLABE).

i) Documento que acredite la aprobación del proyecto por parte de la Asamblea General de la asociación civil (acta de asamblea o equivalente).

Estos documentos se administran desde el módulo de **Expediente Digital**, con control de vigencia y versión.

---

### 5.2 Datos de proyecto / solicitud

**Sección A – Identidad del solicitante**

- RFC del clúster.
- Razón social.
- Domicilio y municipio.
- Giro / sector.
- Contacto operativo.
- Representante legal.

**Sección B – Datos del proyecto**

- Nombre del proyecto.
- Programa y convocatoria a la que aplica.
- Rubro principal (Capacitación / Certificaciones / Vinculación / otro definido en convocatoria).
- Resumen ejecutivo.
- Problema u oportunidad que atiende.
- Objetivo general y objetivos específicos.
- Beneficios esperados para el sector / empresas.
- Alcance geográfico (municipios).
- Fecha de inicio y fecha de fin (máximo 12 meses).
- Cronograma (por mes, de enero a diciembre, con actividades clave).

**Sección C – Presupuesto y financiamiento**

- Monto total del proyecto.
- Monto solicitado al programa.
- Aportación del clúster / empresas (validación automática ≥ 15%).
- Otras fuentes de financiamiento (si aplican).
- Desglose por partidas (líneas de presupuesto):
    - Rubro.
    - Concepto.
    - Proveedor.
    - Cantidad / unidad.
    - Costo unitario.
    - Subtotal.
    - Elegible / No elegible (según catálogo de gastos).

**Sección D – Indicadores e impactos (por rubro)**

Ejemplos (configurables por convocatoria):

- **Capacitación:**
    - Número de capacitaciones programadas / realizadas.
    - Número de personas capacitadas.
    - Número de empresas beneficiadas.
    - Personas que obtuvieron empleo o ascenso gracias a la capacitación.
- **Certificaciones:**
    - Número de empresas certificadas.
    - Número de pymes integradas a cadenas de valor.
    - Indicadores de ventas / competitividad vinculados al proyecto.
- **Vinculación / Encuentros de negocio:**
    - Número de eventos.
    - Compradores / proveedores participantes.
    - Número de citas de negocio realizadas.
    - Oportunidades generadas y ventas estimadas.

Los indicadores deberán contar con:

- Nombre.
- Definición.
- Unidad de medida.
- Línea base (opcional).
- Meta comprometida.

**Sección E – Cuenta bancaria**

- Banco.
- CLABE interbancaria (cuenta específica para el recurso).
- Número de cuenta.
- Titular de la cuenta.
- Comprobante (carátula bancaria).

**Sección F – Documentos de respaldo del proyecto**

- Cotizaciones de proveedores (por proyecto / partida).
- Convenios de colaboración (si aplica).
- Otros documentos definidos en la convocatoria.

---

### 5.3 Facturas, SPEI y evidencias

Durante la ejecución del proyecto, el clúster deberá poder:

- Registrar **facturas** asociadas a cada proyecto y a la partida correspondiente.
- Asociar a cada factura:
    - XML (en su caso) y PDF.
    - Fecha de emisión.
    - RFC emisor/receptor.
    - Concepto.
    - Importe.
- Subir **comprobantes de pago / SPEI** vinculados a la factura.
- Cargar **evidencias** (fotos, diplomas, listas de asistencia, presentaciones, etc.) vinculadas al entregable y al indicador correspondiente.

Opcional / a definir en la fase de diseño técnico:

- Integración con servicios del SAT para **verificación de timbrado y vigencia de CFDI**, en caso de que la normatividad y costos lo permitan.
- En su defecto, validación documental manual con campos estructurados.

---

## 6. Reglas de negocio clave

Configurables por convocatoria, pero sugeridas como “reglas duras”:

1. **Tope de apoyo por beneficiario** (máximo por clúster y por proyecto).
2. **Aportación mínima del solicitante**: ≥ 15% del monto total del proyecto.
3. **Duración máxima del proyecto**: 12 meses.
4. **No se puede enviar la solicitud** si falta algún documento marcado como obligatorio.
5. **Cuenta bancaria exclusiva** para administración del recurso (obligatoria con evidencia).
6. **Catálogo de gastos no elegibles**: no permitir su captura o marcarlos como no financiables.
7. Obligación de permitir auditorías y entregar información / evidencias a través de la plataforma.

---

## 7. Requerimientos no funcionales

- Plataforma web responsiva (accesible desde navegador sin instalación).
- Autenticación por usuario y contraseña; opción a doble factor (2FA) en fases posteriores.
- Registro de bitácora: quién creó, editó, validó, aprobó o canceló una solicitud.
- Perfiles y permisos claramente delimitados (RBAC).
- Almacenamiento y resguardo seguro de la información y documentos.
- Posibilidad de exportar información a Excel / CSV y generar un “Expediente PDF” por proyecto.

---

## 8. Fases propuestas de implementación

### Fase 1 – MVP (prioritario para ejercicio 2025)

- Registro y perfil de clústeres.
- Configuración básica de programas y convocatorias.
- Captura de solicitudes / proyectos con secciones A–F.
- Carga de documentos y facturas (sin integración SAT en esta etapa).
- Flujo de estados básico: Borrador → Enviada → En validación → Validada → Dictaminada → Convenio → En ejecución → Cerrada.
- Listado público de beneficiarios aprobados.

### Fase 2 – Optimización y control

- Motor de reglas de negocio configurable (topes, aportaciones mínimas, etc.).
- Módulo de indicadores y reportes (tableros).
- Auditoría y trazabilidad avanzada (historial de cambios, expedientes PDF).
- Mejoras de interfaz y experiencia de usuario (wizard, semáforo de expediente, bandeja de observaciones).

### Fase 3 – Integraciones estratégicas

- Integración con servicios del SAT para verificación de RFC / CFDI (según viabilidad).
- Firma electrónica / validación de convenios vía proveedor autorizado.
- Notificaciones por correo y, en su caso, WhatsApp.
- API / endpoints para publicación automática de resultados en otros portales del gobierno.

---

## 9. Criterios de éxito

- Incremento del porcentaje de solicitudes completas desde el primer envío.
- Reducción del tiempo promedio de validación y dictamen.
- Mayor cumplimiento en entrega oportuna de evidencia y reportes.
- Trazabilidad completa del recurso y de los proyectos apoyados.
- Disminución de observaciones críticas en auditorías.

---

Este documento se presenta como **borrador de análisis de requerimientos**, sujeto a revisión conjunta con la Secretaría de Economía, la Dirección de Clústeres, Finanzas y el Órgano Interno de Control, para priorizar fases, ajustes y definiciones finales de alcance.
