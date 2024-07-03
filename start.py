import os
import subprocess

# Define the folder structure and start commands
projects = {
    "host_app": "npm run dev",
    "node_backend": "npm run dev",
    "prime_react_components": "npm run serve",
    "shadCN_react_components": "npm run serve",
    "shadCN_react_components_2": "npm run serve"
}

# Function to create directories
def create_directories():
    for project in projects:
        if not os.path.exists(project):
            print(f"Directory for {project} doesn't exist")

# Function to start the projects
def start_projects():
    processes = []
    for project, command in projects.items():
        print(f"Starting project in {project} with command: {command}")
        process = subprocess.Popen(command, cwd=project, shell=True)
        processes.append(process)
    
    for process in processes:
        process.wait()

if __name__ == "__main__":
    create_directories()
    start_projects()
