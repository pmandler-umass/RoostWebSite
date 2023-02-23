#!/bin/bash

if [[ $# -lt 1 ]]; then
    echo "Usage: ./install_package.sh <package_name>"
else
    # Get the frontend container id
    container_id=$(docker ps | grep roost-frontend | awk '{print $1}')

    if [[ -z $container_id ]]; then
        echo "Frontend container not found. Please make sure the app is running in docker-compose."
        exit 1
    fi

    # Upgrade the database
    docker exec -it $container_id npm install $@
fi