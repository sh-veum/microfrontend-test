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


# Function to install npm packages in each project directory
def install_packages():
    for project in projects:
        print(f"Installing packages in {project}...")
        subprocess.run("npm install", cwd=project, shell=True)

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
    install_packages()
    start_projects()
