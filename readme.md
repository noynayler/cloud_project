
# Recipes Book Project

## Overview

This project is a **Recipes Book** web application that allows users to manage recipes by adding, viewing, and deleting them. The application is built using a React-based frontend and a Node.js/Express backend, with a MySQL database hosted on AWS RDS. Photos of recipes are uploaded to AWS S3. Terraform is used to provision and manage the cloud infrastructure.

---

## Features

### Frontend

💻 **React-Based UI**: Built with reusable components and styled using modular CSS.

♻️**Routing**: Utilizes React Router for navigation.

📱**Responsive Design**: Optimized for multiple devices.

### Backend

🛠️ **Node.js and Express**: RESTful API with routes for managing recipes.

📂  **MySQL Database**: Stores recipe details, hosted on AWS RDS.

### Infrastructure

☁️ **AWS Services**:

- **RDS**: MySQL database for data persistence.
- **S3**: For storing recipe photos.

---

## CI/CD Pipeline

### Steps Included in the Pipeline

1. **Linting**:
   - ESLint checks for code quality and formatting issues.

2. **Unit Testing**:
   - Jest tests simulate frontend and backend functionality.

3. **Docker Image Creation**:
   - A Docker image is built and tagged from the backend source code.

4. **Image Push to Docker Hub**:
   - Built Docker images are pushed to Docker Hub for storage and deployment.

5. **Production Deployment**:
   - Images are deployed to an AWS EC2 instance using SSH and Docker CLI.

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

---

## Getting Started

### Prerequisites

Ensure you have the following installed:
- **Node.js** (v16 or higher)
- **MySQL** (or an AWS RDS instance)
- **AWS CLI** (for configuring S3)

---

### Setup Instructions

#### Backend Setup

1. **Navigate to Backend Directory**:
   ```bash
   cd recipes-BE
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Environment Variables**: Create a `.env` file in the `recipes-BE/` directory with the following:
   ```env
   PORT=3001
   DB_HOST=<your_database_host>
   DB_PORT=3306
   DB_NAME=<your_database_name>
   DB_USER=<your_database_user>
   DB_PASSWORD=<your_database_password>
   S3_BUCKET_NAME=<your_s3_bucket_name>
   AWS_REGION=<your_aws_region>
   ```

4. **Run the Backend**:
   ```bash
   npm start
   ```

#### Frontend Setup

1. **Navigate to Frontend Directory**:
   ```bash
   cd recipes-FE
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Environment Variables**: Create a `.env` file in the `recipes-FE/` directory with the following:
   ```env
   REACT_APP_API_BASE_URL=http://localhost:3001/recipesBook
   ```

4. **Run the Frontend**:
   ```bash
   npm start
   ```

---

## CI/CD Pipeline

### Steps Included in the Pipeline

1. **Linting**:
   - ESLint checks for code quality and formatting issues.

2. **Unit Testing**:
   - Jest tests simulate frontend and backend functionality.

3. **Docker Image Creation**:
   - A Docker image is built and tagged from the backend source code.

4. **Image Push to Docker Hub**:
   - Built Docker images are pushed to Docker Hub for storage and deployment.

5. **Production Deployment**:
   - Images are deployed to an AWS EC2 instance using SSH and Docker CLI.

---

## API Endpoints

### Recipe Management

| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| GET    | `/recipesBook`     | Fetch all recipes         |
| GET    | `/recipesBook/:id` | Fetch a specific recipe   |
| POST   | `/recipesBook`     | Create a new recipe       |
| PUT    | `/recipesBook/:id` | Update an existing recipe |
| DELETE | `/recipesBook/:id` | Delete a recipe           |

---

## Deployment Overview

The application follows a streamlined deployment process:
1. **Code Push**:
   - Developers push code changes to the GitHub repository.
2. **Continuous Integration**:
   - GitHub Actions run linting, testing, and build jobs.
3. **Image Deployment**:
   - Docker images are built and pushed to Docker Hub.
4. **Production Deployment**:
   - Images are deployed to an AWS EC2 instance.

---




