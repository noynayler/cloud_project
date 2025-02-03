# Backend Setup
FROM node:20 AS backend

# Set working directory
WORKDIR /cloud_project/recipes-BE

# Copy only package.json first (improves caching)
COPY recipes-BE/package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY recipes-BE/ .

# Expose backend port
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]

