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
docker pull ${DOCKER_USERNAME}/recipes-BE:latest
docker pull ${DOCKER_USERNAME}/recipes-fe:latest

# Stop & remove any existing containers
docker ps -q --filter "name=recipes-BE" | grep -q . && docker stop recipes-BE || echo "No backend container to stop"
docker ps -q --filter "name=recipes-fe" | grep -q . && docker stop recipes-fe || echo "No frontend container to stop"

docker ps -aq --filter "name=recipes-BE" | grep -q . && docker rm recipes-BE || echo "No backend container to remove"
docker ps -aq --filter "name=recipes-fe" | grep -q . && docker rm recipes-fe || echo "No frontend container to remove"

# Run backend container on port 3001
echo "Running backend container..."
docker run -d --name recipes-BE -p 3001:3001 ${DOCKER_USERNAME}/recipes-BE:latest

# Run frontend container on port 80 (serving on HTTP)
echo "Running frontend container..."
docker run -d --name recipes-fe -p 80:3000 ${DOCKER_USERNAME}/recipes-fe:latest

echo "Deployment Complete!"
