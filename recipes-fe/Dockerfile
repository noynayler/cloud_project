# Use Node.js 18 as the base image
FROM node:18 AS frontend

# Set the working directory
WORKDIR /cloud_project

# Copy package.json and package-lock.json first for better caching
COPY recipes-fe/package*.json ./

# Install dependencies
RUN npm install

# Copy the entire frontend code
COPY recipes-fe/ .

# Build the frontend
RUN npm run build

# Use a lightweight web server to serve the frontend
FROM node:18

# Set the working directory for serving
WORKDIR /cloud_project

# Install serve to serve the frontend
RUN npm install -g serve

# Copy built frontend from the previous stage
COPY --from=frontend /app/build /app/build

# Expose frontend port
EXPOSE 3000

# Serve the frontend
CMD ["serve", "-s", "build", "-l", "3000"]
