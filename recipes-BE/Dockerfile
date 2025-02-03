# Stage 1: Backend Setup
FROM node:20 AS backend

# Set working directory
WORKDIR /cloud_project/recipes-BE

# Copy package.json first for better caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy backend code
COPY . .

# Expose backend port
EXPOSE 3001

# Start the backend server
CMD ["npm", "start"]
