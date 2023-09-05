# Docker MERN project
## Get started
### Clone project
- Create folder
    ```bash
    mkdir docker-confirmed
    ```
    ```bash
    cd docker-confirmed
    ```
- Clone files
    ```bash
    git clone https://github.com/MBA2-2024-Projects/docker-confirmed.git .
    ```
### Dockerize project
- Build images
    ```bash
    sudo docker-compose build
    ```
- Start services
    ```bash
    sudo docker-compose up
    ```
### Entry points
- Client __REACT__: [http://localhost:3000/](http://localhost:3000/)
- Server __EXPRESS__: [http://localhost:3001/](http://localhost:3001/)

### ENV file:
Add __.env__ file at the root of the project.
```yml
#.env
MESSAGE="message" # The welcome message 
API_URL="http://localhost:3001/" # Entry point for the server
MONGO_INITDB_ROOT_USERNAME="admin" # Username for Mongo
MONGO_INITDB_ROOT_PASSWORD="password" # Password for Mongo
MONGO_INITDB_DATABASE="database" # Default database for Mongo
```