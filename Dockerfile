# ---------- 1️⃣ Build stage ----------
FROM node:18-alpine AS builder

WORKDIR /app

# Usa pnpm (instala a través de corepack)
RUN corepack enable && corepack prepare pnpm@9 --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN pnpm run build     # genera /app/dist

# ---------- 2️⃣ Runtime stage ----------
FROM node:18-alpine

WORKDIR /srv

# Servidor estático super-ligero (serve ≈ 6 MB)
RUN npm i -g serve

# Copiamos solo el resultado compilado
COPY --from=builder /app/dist ./dist

EXPOSE 8080
CMD ["serve", "-s", "dist", "-l", "8080"]
