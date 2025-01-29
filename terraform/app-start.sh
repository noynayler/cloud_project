#!/bin/bash

#export PATH=$PATH:/root/.nvm/versions/node/v20.13.0/bin
#cd /opt/cloud_project/recipes-FE/ && . /root/envs.sh && nohup npm
#cd /opt/cloud_project/recipes-BE/ && nohup serve -s build


#Install Node.js and npm
curl -fsSL https://deb.nodesource.com/setup_lts.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install serve globally
npm install -g serve

# Clone backend and frontend repositories
 git clone https://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@github.com/noynayler/cloud_project.git /opt/cloud_project



# Install backend dependencies and start server
cd /opt/cloud_project/recipes-BE
npm install
npm start &

# Install frontend dependencies, build, and start server
cd /opt/cloud_project/recipes-FE
npm install
npm run build
serve -s build &
