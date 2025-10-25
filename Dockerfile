# ---------- BUILD STAGE ----------
FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy dependency files and install
COPY package*.json ./
RUN npm ci

# Copy the rest of your project
COPY . .

# Build your Next.js app
RUN npm run build


# ---------- RUNTIME STAGE ----------
FROM node:22-alpine AS runner
WORKDIR /app

# Copy only the built output and required files
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

# Set environment
ENV NODE_ENV=production
EXPOSE 3000

# Start Next.js
CMD ["npm", "start"]
