#!/bin/bash

if [[ $# -lt 1 ]]; then
    echo "Usage: ./install_package.sh <package_name>"
else
    # Get the backend container id
    container_id=$(docker ps | grep roost-backend | awk '{print $1}')

    if [[ -z $container_id ]]; then
        echo "Backend container not found. Please make sure the app is running in docker-compose."
        exit 1
    fi

    # Upgrade the database
    docker exec -it $container_id pip install $@
fi