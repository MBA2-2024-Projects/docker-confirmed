# Use the official Node.js 18.17 image based on Alpine Linux as the base image
FROM node:18.17-alpine

# Set the working directory inside the container to /server
WORKDIR /server

# Copy the package.json and package-lock.json files from the host to the container
COPY ./server/package*.json ./

# Run npm install to install project dependencies
RUN npm install

# Copy the entire contents of the server directory from the host to the container
COPY ./server/ .

# Expose port 3001 to allow incoming connections to the server application
EXPOSE 3001

# Using the Node user according to best practices
USER node

# Specify the command to run when the container starts, in this case, 'npm run dev'
CMD ["npm", "run", "dev"]
