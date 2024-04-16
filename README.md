# Run docker from dockerfile

docker build -t my-app .
docker run -p 3000:3000 my-app

# Stop docker container that is running

docker ps
docker stop CONTAINER ID