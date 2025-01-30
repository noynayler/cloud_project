
FROM node:18 AS backend

# Set working directory
WORKDIR /cloud_project/recipes-BE

# Copy backend code
COPY recipes-BE/ .

# Install dependencies and start the backend server
RUN npm install

# Expose backend port (Change if needed)
EXPOSE 5000

# Stage 2: Frontend Setup
FROM node:18 AS frontend

# Set working directory
WORKDIR /cloud_project/recipes-fe

# Copy frontend code
COPY recipes-fe/ .

# Install dependencies and build the frontend
RUN npm install && npm run build

# Stage 3: Production Image
FROM node:18

# Set working directory
WORKDIR /cloud_project

# Copy built frontend and backend
COPY --from=backend /cloud_project/recipes-BE recipes-BE
COPY --from=frontend /cloud_project/recipes-fe/build recipes-fe/build

# serving frontend
RUN npm install -g serve

# Expose frontend and backend ports
EXPOSE 5000 3000

# Start both backend and frontend servers
CMD (cd recipes-BE && npm start &) && serve -s recipes-fe/build -l 3000
