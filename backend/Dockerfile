# --- STAGE 1: Build & Dependency Installation ---
FROM node:20-alpine AS builder

# Set the working directory inside the container
WORKDIR /var/www/html

# Copy dependency manifests first to leverage Docker caching
COPY package*.json ./

# Install all dependencies (including devDependencies if you use TypeScript/Build tools)
RUN npm ci

# Copy the rest of your application code
COPY . .

# Optional: Run a build step if you are using TypeScript or a bundler
# RUN npm run build

# Prune devDependencies to keep the production layer clean
RUN npm prune --production


# --- STAGE 2: Lightweight Production Runtime ---
FROM node:20-alpine AS runner

# Set environment to production
ENV NODE_ENV=production

WORKDIR /var/www/html

# Copy only the required files and pruned node_modules from the builder stage
COPY --from=builder /var/www/html/package*.json ./
COPY --from=builder /var/www/html/node_modules ./node_modules
COPY --from=builder /var/www/html/ ./

# Expose the port your Express app listens on (usually 3000 or 8080)
EXPOSE 3000

# Run the app using the standard node command instead of npm for better signal handling
CMD ["node", "src/index.ts"]
