-- =============================================
-- ESQUEMA DE BASE DE DATOS - PLATAFORMA CLÚSTERES NL
-- Fecha: 05 Dic 2025
-- Autor: Sistema GRP (Generado por IA)
-- Motor: PostgreSQL
-- =============================================

-- 1. SEGURIDAD Y ACCESO (RBAC)
-- =============================================
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE, -- 'superadmin', 'gobierno', 'comite', 'cluster', 'auditor'
    description TEXT
);

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    role_id INT NOT NULL REFERENCES roles(id),
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    full_name VARCHAR(150) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_active BOOLEAN DEFAULT TRUE
);

-- 2. MÓDULO A: DIRECTORIO (CLÚSTERES Y EMPRESAS)
-- =============================================
CREATE TABLE clusters (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id), -- Usuario Login asociado al Clúster
    name VARCHAR(200) NOT NULL UNIQUE, -- "Clúster Automotriz"
    legal_name VARCHAR(255), -- "Clúster Automotriz de Nuevo León A.C."
    rfc VARCHAR(13) UNIQUE,
    logo_url VARCHAR(255),
    website VARCHAR(255),
    address TEXT,
    president_name VARCHAR(150),
    contact_email VARCHAR(255),
    verification_status VARCHAR(20) DEFAULT 'PENDING' -- PENDING, VERIFIED, REJECTED
);

CREATE TABLE companies (
    id SERIAL PRIMARY KEY,
    cluster_id INT REFERENCES clusters(id),
    name VARCHAR(255) NOT NULL,
    rfc VARCHAR(13),
    sector VARCHAR(100),
    size VARCHAR(50), -- 'Micro', 'Pequeña', 'Mediana', 'Grande'
    contact_name VARCHAR(150),
    contact_email VARCHAR(255),
    is_active BOOLEAN DEFAULT TRUE
);

-- 3. MÓDULO B: VENTANILLA DIGITAL (CORE)
-- =============================================
CREATE TABLE convocatorias (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL, -- "Apoyos Estratégicos 2025"
    program_year INT NOT NULL,
    start_date DATE NOT NULL,
    end_date DATE NOT NULL,
    budget_limit DECIMAL(15,2), -- Tope por proyecto (ej. 2,000,000)
    is_active BOOLEAN DEFAULT TRUE,
    rules_url VARCHAR(255) -- PDF de Reglas de Operación
);

CREATE TABLE projects (
    id SERIAL PRIMARY KEY,
    cluster_id INT NOT NULL REFERENCES clusters(id),
    convocatoria_id INT NOT NULL REFERENCES convocatorias(id),
    folio VARCHAR(50) UNIQUE, -- "NL-2025-0042"
    
    -- Sección B: Datos del Proyecto
    title VARCHAR(255) NOT NULL,
    summary TEXT,
    rubro VARCHAR(50), -- 'capacitacion', 'certificacion', 'vinculacion'
    start_date DATE,
    end_date DATE,
    
    -- Sección Financiera (Resumen)
    total_amount DECIMAL(15,2) DEFAULT 0,
    requested_amount DECIMAL(15,2) DEFAULT 0, -- Max 85%
    private_contribution DECIMAL(15,2) DEFAULT 0, -- Min 15%
    
    -- Estado del Workflow
    status VARCHAR(50) DEFAULT 'DRAFT', 
    -- DRAFT, SUBMITTED, IN_REVIEW, CORRECTION_NEEDED, VALIDATED, EVALUATION, APPROVED, REJECTED, EXECUTION, CLOSED
    
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. DETALLE FINANCIERO Y TÉCNICO
-- =============================================
CREATE TABLE budget_items (
    id SERIAL PRIMARY KEY,
    project_id INT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    rubro VARCHAR(100), -- 'Materiales', 'Honorarios', 'Renta'
    concept VARCHAR(255) NOT NULL,
    unit_cost DECIMAL(15,2) NOT NULL,
    quantity INT DEFAULT 1,
    total_cost DECIMAL(15,2) GENERATED ALWAYS AS (unit_cost * quantity) STORED,
    is_eligible BOOLEAN DEFAULT TRUE -- Para marcar gastos no permitidos
);

CREATE TABLE indicators (
    id SERIAL PRIMARY KEY,
    project_id INT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    name VARCHAR(100), -- "Empresas Beneficiadas"
    target_value DECIMAL(10,2) NOT NULL, -- Meta (ej. 20)
    achieved_value DECIMAL(10,2) DEFAULT 0 -- Lo logrado al final
);

-- 5. EXPEDIENTE DIGITAL Y AUDITORÍA
-- =============================================
CREATE TABLE documents (
    id SERIAL PRIMARY KEY,
    project_id INT NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
    doc_type VARCHAR(50) NOT NULL, -- 'ACTA', 'RFC', 'COTIZACION', 'FACTURA'
    file_url VARCHAR(255) NOT NULL,
    uploaded_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'PENDING', -- PENDING, VALID, INVALID
    reviewer_comment TEXT
);

CREATE TABLE project_history (
    id SERIAL PRIMARY KEY,
    project_id INT NOT NULL REFERENCES projects(id),
    user_id INT REFERENCES users(id), -- Quién hizo el cambio
    previous_status VARCHAR(50),
    new_status VARCHAR(50),
    comments TEXT, -- "Se regresa por falta de firma"
    changed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- DATOS SEMILLA (SEEDERS) PARA INICIO RÁPIDO
-- =============================================
INSERT INTO roles (name, description) VALUES 
('superadmin', 'Control Total del Sistema'),
('gobierno', 'Revisor y Aprobador de Proyectos'),
('cluster', 'Solicitante de Apoyos'),
('auditor', 'Solo Lectura');

INSERT INTO convocatorias (title, program_year, start_date, end_date, budget_limit) VALUES
('Programa de Fortalecimiento de Clústeres 2025', 2025, '2025-01-01', '2025-12-30', 2000000.00);
