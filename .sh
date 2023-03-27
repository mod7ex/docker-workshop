# since we have issue with building from docker-compose.yaml file we will build manually

docker build -f DockerFile . -t my_app:latest

echo 'Image built with success'

docker-compose up -d

