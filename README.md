# VCC-Microservice-Based-Application

# Microservice Deployment Across VMs

## Deployment of a Simple Microservice Application Across the VMs

### 1. Preparation and Installation of Dependencies

The first step in setting up the microservices was installing the required software on both Virtual Machines (VM1 and VM2).

#### On VM1 (User Service):
1. **Install Node.js and npm**:
   To ensure that the **User Service**, which is a Node.js application, could run on **VM1**, I installed **Node.js** and **npm**:
   ```bash
   sudo apt update
   sudo apt install nodejs npm
