# 1. Imagen ligera de Node
FROM node:18-alpine

# 2. Directorio de trabajo
WORKDIR /app

# 3. Instala PNPM y dependencias
COPY package.json pnpm-lock.yaml ./
RUN npm i -g pnpm && pnpm i --frozen-lockfile

# 4. Copia el código y compila
COPY . .
RUN pnpm run build      # genera /dist

# 5. Expone el puerto que servirás
EXPOSE 8080

# 6. Arranca el servidor estático
CMD ["pnpm", "exec", "astro", "preview", "--host", "--port", "8080"]
