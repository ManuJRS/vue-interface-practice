# 🛍️ Vue Interface Practice

Proyecto de práctica enfocado en la construcción de una **interfaz de usuario en Vue 3**, aplicando una arquitectura limpia basada en **DTOs, modelos de dominio, servicios y Pinia**.  
El objetivo es simular un flujo real de consumo de APIs, similar a una **compra de productos o reserva en línea**.

---

## 🎯 Objetivos del proyecto

- Consumir una API externa (GET / POST)
- Separar responsabilidades usando:
  - DTOs
  - Modelos de dominio
  - Servicios
  - Store con Pinia
- Manejar estado global y persistencia
- Renderizar datos en la UI usando modelos (no JSON crudo)
- Simular un flujo real de frontend profesional

---

## 📌 Conceptos clave
- DTOs representan el JSON crudo que llega desde la API.
- Modelos encapsulan lógica, getters y métodos (ej. formattedPrice()).
- Servicios se encargan únicamente de consumir la API.
- Pinia Store maneja estado, loading, errores y persistencia.
- La UI nunca trabaja con JSON plano, solo con modelos de dominio.

---

## 🚀 Cómo arrancar el proyecto

### 1️⃣ Clonar el repositorio
```bash
git clone https://github.com/ManuJRS/vue-interface-practice.git
cd vue-interface-practice
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Crear el archivo `.env`
```bash
cp .env.example .env
```
Configura las variables de entorno según sea necesario.

### 4️⃣ Levantar el proyecto
```bash
npm run dev
```

### 5️⃣ Abrir en el navegador
👉 http://localhost:5173/products

---

## 🛠️ Tecnologías utilizadas

- Vue 3
- Vite
- TypeScript
- HTML / CSS
- Node.js

---

## 📁 Estructura del proyecto (resumen)

```
src/
├── components/
├── views/
├── services/
├── assets/
└── main.ts
```

---

## 📌 Notas

- Este proyecto es solo para **práctica y aprendizaje**.
- Se recomienda usar **Node.js 18+**.

---

## ✨ Autor

**ManuJRS**  
