# Stage 1: Build the React App
FROM node:14-alpine as build

# Set the working directory for the backend (Node.js app)
WORKDIR /society/Backend/

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app using Nginx
FROM nginx:alpine

# Copy the build output from the previous stage
COPY --from=build /society/Backend/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
