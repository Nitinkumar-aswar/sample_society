# Dockerfile
FROM python:3.9-slim

# Set working directory
WORKDIR /Frontend/myapp
# Install nodejs and npm for the React app
RUN apt-get update && \
    apt-get install -y nodejs npm && \
    rm -rf /var/lib/apt/lists/*

# Copy requirements
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the app
COPY . .

EXPOSE 5000
CMD ["python", "app.py"]
