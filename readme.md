
# Recipes Book Project

## Overview

This project is a **Recipes Book** web application that allows users to manage recipes by adding, viewing, and deleting them. The application is built using a React-based frontend and a Node.js/Express backend, with a MySQL database hosted on AWS RDS. Photos of recipes are uploaded to AWS S3. Terraform is used to provision and manage the cloud infrastructure.

---

### Tech Stack

**Frontend**  
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**Backend**  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)

**Database**  
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![AWS RDS](https://img.shields.io/badge/AWS%20RDS-527FFF?style=for-the-badge&logo=amazonrds&logoColor=white)

**Storage**  
![AWS S3](https://img.shields.io/badge/AWS%20S3-569A31?style=for-the-badge&logo=amazons3&logoColor=white)

**Infrastructure**  
![Terraform](https://img.shields.io/badge/Terraform-623CE4?style=for-the-badge&logo=terraform&logoColor=white)


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










