FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /myapp

# Install Node.js and npm for React app (if needed)
RUN apt-get update && \
    apt-get install -y nodejs npm && \
    rm -rf /var/lib/apt/lists/*

# Copy the requirements.txt file from your local machine to the Docker container
COPY Frontend/frontend/requirements.txt /myapp/requirements.txt

# Install Python dependencies from the requirements.txt file
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application into the container
COPY Frontend/frontend /myapp

# Expose the port the app will run on (for backend)
EXPOSE 5000

# Run the application
CMD ["python", "app.py"]
