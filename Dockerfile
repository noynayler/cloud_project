# Stage 1: Backend Setup
FROM node:20 AS backend

# Set working directory
WORKDIR /cloud_project/recipes-BE

# 
COPY recipes-BE/package*.json ./

# Install dependencies first
RUN npm install

# Copy backend code
COPY recipes-BE/ .

# Expose backend port
EXPOSE 5000

# Stage 2: Frontend Setup
FROM node:18 AS frontend

# Set working directory
WORKDIR /cloud_project/recipes-fe

# Copy only package.json first (improves caching)
COPY recipes-fe/package*.json ./

# Install dependencies first
RUN npm install

# Copy frontend code
COPY recipes-fe/ .

# Build frontend
RUN npm run build

# Stage 3: Production Image
FROM node:18

# Set working directory
WORKDIR /cloud_project

# Copy built frontend and backend
COPY --from=backend /cloud_project/recipes-BE recipes-BE
COPY --from=frontend /cloud_project/recipes-fe/build recipes-fe/build

# Install serve for frontend serving
RUN npm install -g serve

# Expose frontend and backend ports
EXPOSE 5000 3000

# Start backend and frontend
CMD (cd recipes-BE && npm start &) && serve -s recipes-fe/build -l 3000
