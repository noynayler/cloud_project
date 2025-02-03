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
echo "${DOCKER_PWD}" | docker login -u "${DOCKER_USER}" --password-stdin

# Pull the latest images from Docker Hub
echo "Pulling backend and frontend images..."
docker pull ${DOCKER_USER}/backend:latest
#docker pull ${DOCKER_USER}/frontend:latest

# Stop & remove any existing containers
docker ps -q --filter "name=backend" | grep -q . && docker stop backend|| echo "No backend container to stop"
#docker ps -q --filter "name=frontend" | grep -q . && docker stop frontend || echo "No frontend container to stop"

docker ps -aq --filter "name=backend" | grep -q . && docker rm backend|| echo "No backend container to remove"
#docker ps -aq --filter "name=frontend" | grep -q . && docker rm frontend || echo "No frontend container to remove"

# Run backend container on port 3001
echo "Running backend container..."
docker run -d --name backend --network host -p 3001:3001 ${DOCKER_USER}/backend:latest

# Run frontend container on port 80 (serving on HTTP)
#echo "Running frontend container..."
#docker run -d --name frontend --network host -p 80:3000 ${DOCKER_USER}/frontend:latest

echo "Deployment Complete!"
