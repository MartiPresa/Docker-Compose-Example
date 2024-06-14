#     Docker-compose-example README          #

## Introduction

Docker-compose-example is a sample project created for a course in computer engineering at UNMDP (Universidad Nacional de Mar del Plata). The objective of this project is to learn Docker by implementing a multi-container web application consisting of an Angular frontend, an Express server, and a CouchDB backend.

## Project Architecture

The project consists of the following components:

- **CouchDB**: A document-oriented NoSQL database.
- **Backend (Express)**: Backend server built with Express.js, interacting with CouchDB.
- **Frontend (Angular)**: User interface developed with Angular, consuming data from the backend server.

## Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. In this repository, you'll find a 3-service architecture, including:

- A CouchDB database.
- A simple web interface using Angular.
- A server using Express.js.

## Deployment

To deploy this project, follow these steps:

### Step 1: Clone the repository
```Bash
git clone https://github.com/MartiPresa/Docker-compose-example.git
cd Docker-compose-example
``` 

### Step 2: Run Docker Compose

Ensure you have Docker and Docker Compose installed on your system. If not, follow the instructions in the official Docker documentation and Docker Compose documentation.

Run the following command to start the services defined in docker-compose.yml:
```Bash
docker-compose up
```
### Author   
@MartiPresa
