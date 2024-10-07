# Use the official lightweight Python image from Docker Hub
FROM python:3.10-slim

# Set the working directory inside the container
WORKDIR Backend/app.py
# Copy the requirements.txt file to the container
COPY requirements.txt .

# Install the Python dependencies inside the container
RUN pip install --no-cache-dir -r requirements.txt

# Copy the entire backend code into the container's working directory
COPY . .

# Expose the port the backend will run on (5000 in your case)
EXPOSE 5000

# Set the default command to run your Python app
CMD ["python", "app.py"]
