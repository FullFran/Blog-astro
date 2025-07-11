FROM node:20

# Crea directorio app
WORKDIR /app

# Copia los archivos necesarios
COPY package.json package-lock.json* pnpm-lock.yaml* ./
COPY . .

# Instala dependencias
RUN npm install -g pnpm && pnpm install

# Compila el proyecto
RUN pnpm run build

# Expone el puerto de Astro
EXPOSE 3000

# Comando para arrancar el servidor Astro
CMD ["pnpm", "run", "preview"]
