# Use the official lightweight Node.js image
FROM node:18-alpine

# Set the working directory
WORKDIR Frontend/frontend

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the app for production
RUN npm run build

# Expose the port for the app
EXPOSE 3000

# Start the app
CMD ["npm", "start"]
