# Backend Setup
FROM node:20 AS backend

# Set working directory
WORKDIR /cloud_project/recipes-BE

# Copy only package.json first (improves caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend source code
COPY . .

# Expose backend port
EXPOSE 5000

# Start the backend
CMD ["npm", "start"]

