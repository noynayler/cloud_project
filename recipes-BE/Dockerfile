# Use Node.js 20 as the base image
FROM node:20 AS backend

# Set the working directory
WORKDIR /cloud_project

# Copy package.json and package-lock.json first for better caching
COPY recipes-BE/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire backend code
COPY recipes-BE/ .

# Expose backend port
EXPOSE 3001

# Start the backend server
CMD ["npm", "start"]
