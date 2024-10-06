# Use Python 3.9 slim base image
FROM python:3.9-slim

# Set the working directory inside the container
WORKDIR /Frontend/myapp

# Install Node.js and npm for the React app
RUN apt-get update && \
    apt-get install -y nodejs npm && \
    rm -rf /var/lib/apt/lists/*

# Copy and install Python dependencies from requirements.txt
COPY Frontend/frontend/src/requirements.txt /Frontend/frontend/requirements.txt

RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY Frontend/frontend/src
# Expose the port your app will run on (5000 for backend)
EXPOSE 5000

# Command to run your Python application
CMD ["python", "app.py"]
