<h1 align="center">🛍️ 24 Market</h1>
<p align="center">
  A full-stack product CRUD marketplace built with the <strong>PERN stack</strong> and <strong>TypeScript</strong>, designed using <strong>Clean Architecture</strong>.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-Strict-blue?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/PostgreSQL-Neon-success?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Frontend-React%20+%20Vite-blueviolet?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/Backend-Express%20%2B%20TS-brightgreen?style=for-the-badge"/>
</p>

---

## 🧠 Features

- ✅ Built with the **PERN Stack** (PostgreSQL, Express, React, Node)
- ✅ Written entirely in **TypeScript** (frontend + backend)
- ✅ Organized with **Clean Architecture** (Domain / Data / Presentation layers)
- ✅ Fully responsive UI using **Tailwind CSS + DaisyUI**
- ✅ Custom **Zustand-style store** for state management
- ✅ Full **CRUD** for products
- ✅ RESTful API & modular routing
- ✅ Secure using `helmet`, `cors`, and `.env`
- ✅ Ready for deployment with `vite build`, `tsc`, and `serve dist`

---

## 🚀 How to Start

### 1. Clone the Repository

```bash
git clone https://github.com/YoungjaeKimDeveloper/24-Market.git
cd 24-Market
```

### 2. Install Dependencies

```bash
npm install
cd frontend && npm install
```

### 3. Setup Environment Variables

Create `.env` files in both `backend/` and `frontend/` directories:

<details>
<summary><strong>.env (backend)</strong></summary>

```env
PORT=8080
NEON_DATABASE_URL=your_postgres_url
```

</details>

<details>
<summary><strong>.env (frontend)</strong></summary>

```env
VITE_LOCAL_HOST=localhost:8080
```

</details>

### 4. Run Dev Servers

```bash
# Run backend
npm run dev

# Run frontend
cd frontend
npm run dev
```
