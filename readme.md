
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

🧩 **Terraform**: Infrastructure as Code (IaC) for provisioning AWS resources.

🚀 Auto Scaling Group for high availability.

🌐 Application Load Balancer for traffic distribution.

🔒 Secure and modular infrastructure.

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
- **MySQL** (or AWS RDS instance)
- **AWS CLI** (for configuring S3)
- **Terraform** (v1.0 or higher)

---

### Setup Instructions

#### Backend Setup

1. **Navigate to Backend Directory:**

   ```bash
   cd recipes-BE
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Environment Variables:** Create a `.env` file in `recipes-BE/` with the following:

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

4. **Run the Backend:**

   ```bash
   npm start
   ```

#### Frontend Setup

1. **Navigate to Frontend Directory:**

   ```bash
   cd recipes-FE
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Set Environment Variables:** Create a `.env` file in `recipes-FE/` with the following:

   ```env
   REACT_APP_API_BASE_URL=http://localhost:3001/recipesBook
   ```

4. **Run the Frontend:**

   ```bash
   npm start
   ```

#### Infrastructure Setup

1. **Navigate to Terraform Directory:**

   ```bash
   cd terraform
   ```

2. **Initialize Terraform:**

   ```bash
   terraform init
   ```

3. **Review and Apply Terraform Configuration:**

   ```bash
   terraform plan
   terraform apply
   ```

4. **Delete the EC2:**
   ```bash
   terraform destroy

   ```

---

## API Endpoints

### Recipe Endpoints

| Method | Endpoint           | Description               |
| ------ | ------------------ | ------------------------- |
| GET    | `/recipesBook`     | Fetch all recipes         |
| GET    | `/recipesBook/:id` | Fetch a specific recipe   |
| POST   | `/recipesBook`     | Create a new recipe       |
| PUT    | `/recipesBook/:id` | Update an existing recipe |
| DELETE | `/recipesBook/:id` | Delete a recipe           |

### AWS S3 Integration

- Photos are uploaded to S3 and the URL is stored in the database.

---

[//]: # ()
[//]: # (## Technologies Used)

[//]: # ()
[//]: # (### Frontend)

[//]: # ()
[//]: # (- React-based UI for managing recipes.)

[//]: # (- **React Router**: For navigation.)

[//]: # (- **Axios**: For HTTP requests.)

[//]: # ()
[//]: # (### Backend)

[//]: # ()
[//]: # (- **Node.js**: JavaScript runtime.)

[//]: # (- **Express**: Web framework.)

[//]: # (- **Sequelize**: ORM for MySQL.)

[//]: # (- **AWS SDK**: For S3 integration.)

[//]: # ()
[//]: # (### Database)

[//]: # ()
[//]: # ( - **MySQL** hosted on AWS RDS.)

[//]: # ()
[//]: # (### Infrastructure)

[//]: # (- AWS infrastructure provisioned with Terraform.)

[//]: # ()
[//]: # (- **AWS S3**: For storing images.)

[//]: # (- **Terraform**: Infrastructure as Code.)

---





