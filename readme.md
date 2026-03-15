
# Recipes Book Project

## Overview

This project is a **Recipes Book** web application that allows users to manage recipes by adding, viewing, and deleting them. The application is built using a React-based frontend and a Node.js/Express backend, with a MySQL database hosted on AWS RDS. Photos of recipes are uploaded to AWS S3. Terraform is used to provision and manage the cloud infrastructure.

---

## Features


---

## Project Structure

```
cloud_project/
├── recipes-BE/           # Backend service
│   ├── config/           # Configuration files (e.g., database config)
│   ├── controllers/      # Handles requests and logic for API endpoints
│   ├── models/           # Sequelize models for database tables
│   ├── routes/           # Express routes for API endpoints
│   ├── services/         # Handles AWS S3 and business logic
│   ├── app.js            # Main Express application setup
│   ├── index.js          # Entry point for the server
│   └── .env              # Environment variables
├── recipes-FE/           # Frontend service
│   ├── public/           # Public assets (e.g., index.html, favicon)
│   ├── src/              # Source code
│   │   ├── api/          # API handlers for backend communication
│   │   ├── components/   # Reusable React components
│   │   ├── containers/   # Logic-heavy container components
│   │   ├── styles/       # CSS styles (modular CSS)
│   │   └── App.js        # Main application component
│   └── .env              # Environment variables
├── terraform/            # Terraform configurations
│   ├── alb.tf            # Application Load Balancer configuration
│   ├── app-start.sh      # Script to start the application
│   ├── asg.tf            # Auto Scaling Group configuration
│   ├── iam-role.tf       # IAM roles and permissions
│   ├── provider.tf       # AWS provider configuration
│   ├── sg.tf             # Security group configurations
│   ├── variables-locals.tf # Variables and locals for Terraform
│   ├── versions.tf       # Terraform and provider version constraints
│   ├── vpc.tf            # Virtual Private Cloud configuration
│   └── outputs.tf        # Outputs from Terraform
│
└── README.md             # Project documentation
```










