# Frontend Setup
FROM node:18 AS frontend

# Set working directory
WORKDIR /cloud_project/recipes-fe

# Copy only package.json first (improves caching)
COPY recipes-fe/package*.json ./

# Install dependencies
RUN npm install

# Copy frontend source code
COPY recipes-fe/ .

# Build frontend
RUN npm run build

# Expose frontend port
EXPOSE 3000

# Serve the frontend using `serve`
CMD ["npx", "serve", "-s", "build", "-l", "3000"]
