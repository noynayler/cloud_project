# Stage 1: Frontend Setup
FROM node:18 AS frontend

# Set working directory
WORKDIR /cloud_project/recipes-fe

# Copy package.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy frontend code
COPY . .

# Build frontend
RUN npm run build

# Stage 2: Serve the frontend using a lightweight server
FROM node:18

# Set working directory for serving
WORKDIR /cloud_project

# Install serve for serving the frontend
RUN npm install -g serve

# Copy built frontend from the previous stage
COPY --from=frontend /cloud_project/recipes-fe/build /recipes-fe/build

# Expose frontend port
EXPOSE 3000

# Serve the frontend
CMD ["serve", "-s", "/recipes-fe/build", "-l", "3000"]
