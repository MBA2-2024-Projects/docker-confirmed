# Use the official Node.js 18.17 image based on Alpine Linux as the base image
FROM node:18.17-alpine

# Set the working directory inside the container to /client
WORKDIR /client

# Copy the package.json and package-lock.json files from the host to the container
COPY ./client/package*.json ./

# Run npm install to install project dependencies
RUN npm install

# Copy the entire contents of the client directory from the host to the container
COPY ./client/ .

# Expose port 3000 to allow incoming connections to the application
EXPOSE 3000

# Using the Node user according to best practices
USER node

# Specify the command to run when the container starts, in this case, 'npm run start'
CMD ["npm", "run", "start"]
