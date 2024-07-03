import os
import subprocess
import signal
import sys

# Define the folder structure and start commands
projects = {
    "host_app": "npm run dev",
    # "node_backend": "npm run dev",
    "prime_react_components": "npm run serve",
    "shadCN_react_components": "npm run serve",
    "shadCN_react_components_2": "npm run serve"
}

processes = []

# Function to install npm packages in each project directory
def install_packages():
    for project in projects:
        print(f"Installing packages in {project}...")
        subprocess.run("npm install", cwd=project, shell=True)

# Function to start the projects
def start_projects():
    global processes
    for project, command in projects.items():
        print(f"Starting project in {project} with command: {command}")
        process = subprocess.Popen(command, cwd=project, shell=True)
        processes.append(process)
    
    for process in processes:
        process.wait()

# Signal handler for clean exit
def signal_handler(sig, frame):
    print('Exiting gracefully...')
    for process in processes:
        process.terminate()
    sys.exit(0)

if __name__ == "__main__":
    signal.signal(signal.SIGINT, signal_handler)
    install_packages()
    start_projects()
