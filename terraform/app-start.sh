#!/bin/bash
set -e  # Exit on error

# Update packages and install Docker
echo "Updating packages and installing Docker..."
sudo yum update -y
sudo yum install -y docker
sudo systemctl start docker
sudo systemctl enable docker

# Add `ec2-user` to Docker group (avoid sudo requirement)
sudo usermod -aG docker ec2-user

# Log in to Docker Hub
echo "Logging into Docker Hub..."
echo "${DOCKER_PASSWORD}" | docker login -u "${DOCKER_USERNAME}" --password-stdin

# Pull the latest images from Docker Hub
echo "Pulling backend and frontend images..."
docker pull ${DOCKER_USERNAME}/backend
:latest
docker pull ${DOCKER_USERNAME}/frontend:latest

# Stop & remove any existing containers
docker ps -q --filter "name=backend
" | grep -q . && docker stop backend
 || echo "No backend container to stop"
docker ps -q --filter "name=frontend" | grep -q . && docker stop frontend || echo "No frontend container to stop"

docker ps -aq --filter "name=backend
" | grep -q . && docker rm backend
 || echo "No backend container to remove"
docker ps -aq --filter "name=frontend" | grep -q . && docker rm frontend || echo "No frontend container to remove"

# Run backend container on port 3001
echo "Running backend container..."
docker run -d --name backend
 -p 3001:3001 ${DOCKER_USERNAME}/backend
 :latest

# Run frontend container on port 80 (serving on HTTP)
echo "Running frontend container..."
docker run -d --name frontend -p 80:3000 ${DOCKER_USERNAME}/frontend:latest

echo "Deployment Complete!"
