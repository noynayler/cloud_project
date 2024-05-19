#!/bin/bash

# Update the package repository and install necessary packages
echo "Updating package repository and installing necessary packages..."
apt-get update -y
apt-get install -y nginx git

# Install Node.js and npm
echo "Installing Node.js and npm..."
curl -sL https://deb.nodesource.com/setup_14.x | bash -
apt-get install -y nodejs

echo "Starting setup..."

# Clone the application repository if not already present
if [ ! -d "/var/www/cloud_project" ]; then
  echo "Cloning the application repository..."
  git clone https://github.com/noynayler/cloud_project.git /var/www/cloud_project
else
  echo "Repository already exists. Pulling latest changes..."
  cd /var/www/cloud_project
  git pull origin main
fi

# Navigate to the frontend directory and build the frontend
echo "Installing and building the frontend..."
cd /var/www/cloud_project/recipes-FE
npm install
npm run build

# Navigate to the backend directory and start the backend
echo "Installing backend dependencies and starting the backend..."
cd /var/www/cloud_project/recipes-BE
npm install
npm start &

# Configure Nginx to serve the frontend and proxy backend requests
echo "Configuring Nginx..."
cat > /etc/nginx/sites-available/default <<EOL
server {
    listen 80;

    server_name _;

    location / {
        root /var/www/cloud_project/recipes-FE/build;
        try_files \$uri /index.html;
    }

    location /api {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade \$http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host \$host;
        proxy_cache_bypass \$http_upgrade;
    }
}
EOL

# Restart Nginx to apply the configuration
echo "Restarting Nginx..."
systemctl restart nginx

echo "Setup complete."
