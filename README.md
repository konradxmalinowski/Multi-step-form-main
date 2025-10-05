## Multi‑Step Form (Angular + Spring Boot) ✨

Elegant full‑stack starter demonstrating a multi‑step form with a modern Angular UI and a robust Spring Boot API, backed by PostgreSQL. Developer‑friendly, Docker‑ready, and MIT‑licensed.

---

## Badges

[![Made with Angular](https://img.shields.io/badge/Frontend-Angular-DD0031?logo=angular&logoColor=white)](https://angular.dev)
[![Spring Boot](https://img.shields.io/badge/Backend-Spring%20Boot-6DB33F?logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![PostgreSQL](https://img.shields.io/badge/DB-PostgreSQL-4169E1?logo=postgresql&logoColor=white)](https://www.postgresql.org)
[![License: MIT](https://img.shields.io/badge/License-MIT-000000.svg)](LICENSE)

---

## Table of Contents 🧭

- Overview
- Features
- Tech Stack
- Architecture
- Quick Start
- Configuration
- Backend (`backend/`)
- Frontend (`frontend/`)
- PostgreSQL with Docker
- Troubleshooting
- Contributing
- License

---

## Overview 📦

- **Frontend**: Angular app for a multi‑step form UX
- **Backend**: Spring Boot REST API to process and persist data
- **Database**: PostgreSQL (Dockerized for local dev)

---

## Features 🌟

- Multi‑step form with smooth navigation
- Clear separation of frontend and backend concerns
- Local Postgres in Docker for fast setup
- Environment‑based configuration
- Developer‑friendly scripts

---

## Tech Stack 🧰

- **Frontend**: Angular, TypeScript, RxJS
- **Backend**: Java 17+, Spring Boot
- **Database**: PostgreSQL
- **Build/Tools**: Maven, Node.js, npm

---

## Architecture 🏗️

```
[ Angular (frontend) ]  ⇄  [ Spring Boot (backend) ]  ⇄  [ PostgreSQL ]
        UI/UX                     REST API                     Data
```

---

## Quick Start 🚀

### 1) Prerequisites

- Node.js 18+ and npm
- Java 17+
- Maven
- Docker (for Postgres)

### 2) Start the database

If you do not have a local Postgres, run it via Docker:

```powershell
docker run --name postgress -e POSTGRES_PASSWORD=mysecretpassword -p 5431:5432 -d postgres
```

### 3) Run the backend

```powershell
cd backend
mvn spring-boot:run
```

API: `http://localhost:8080/`

### 4) Run the frontend

```powershell
cd frontend
npm install
npm start
# or: npx ng serve
```

App: `http://localhost:4200/`

---

## Configuration ⚙️

Common backend properties (examples):

```
SPRING_DATASOURCE_URL=jdbc:postgresql://localhost:5431/postgres
SPRING_DATASOURCE_USERNAME=postgres
SPRING_DATASOURCE_PASSWORD=mysecretpassword
```

Set them in `application.properties`/`application.yml` or as environment variables.

---

## Backend 📡 (`backend/`)

- Run: `mvn spring-boot:run`
- Config: `src/main/resources/application.properties` or environment variables
- Dependencies: see `pom.xml`

---

## Frontend 🎨 (`frontend/`)

- Install: `npm install`
- Dev server: `npm start` or `npx ng serve`
- Config: see `angular.json`, `src/environments/`

---

## PostgreSQL with Docker 🐘

### Remove an old container (if it exists)

```powershell
docker rm postgress
```

### Run a new Postgres container

```powershell
docker run --name postgress -e POSTGRES_PASSWORD=mysecretpassword -p 5431:5432 -d postgres
```

- `--name postgress` – container name
- `-e POSTGRES_PASSWORD=mysecretpassword` – sets the password for user `postgres`
- `-p 5431:5432` – maps container port 5432 to local port 5431
- `-d` – detached mode
- `postgres` – official PostgreSQL image from Docker Hub

### Check container status

```powershell
docker ps
```

You should see the container in the `Up` state.

### Connect to Postgres inside the container

```powershell
docker exec -it postgress psql -U postgres
```

Common `psql` commands:

```sql
\l          -- list databases
\c name     -- connect to database 'name'
\dt         -- list tables in current database
\q          -- quit psql
```

### External access (e.g., pgAdmin)

```
Host: localhost
Port: 5431
User: postgres
Password: mysecretpassword
```

### Additional Docker commands

```powershell
docker stop postgress   # stop
docker start postgress  # start
docker rm postgress     # remove
docker ps -a            # list all
```

Notes:

- `POSTGRES_PASSWORD` must be set when first running a new container.
- For multiple instances, use unique `--name` and `-p` port mappings.

---

## Troubleshooting 🧩

- Port in use: change the left side of `-p 5431:5432` (e.g., `5435:5432`).
- Cannot connect from backend: verify `SPRING_DATASOURCE_URL` host and port.
- Frontend cannot reach API: check CORS and that backend runs on `:8080`.

---

## Contributing 🤝

Issues and PRs are welcome. Please keep changes focused and documented.

---

## License 📄

MIT — see `LICENSE` for details.

---
