# [API reference](https://docs.docker.com/reference/)

# [Good resource](https://www.youtube.com/watch?v=3c-iBn73dDE&t=4460s&ab_channel=TechWorldwithNana)

<!-- https://youtu.be/3c-iBn73dDE -->

## Docker images

> `docker images` & `docker image ls`

## Docker containers

> `docker ps -a` & `docker ps`

> `docker start <container_id|container_name>`

> `docker rm <container_id|container_name>`

> `docker stop <container_id|container_name>`

> remove all stopped containers `docker container prune`

> `docker run -ti --rm <container>` (remove after usage)
> ex: `docker run -ti --rm nginx bash` or `docker run -ti --rm nginx /bin/sh`
> or `docker exec -it <container_id|container_name> bash` (-it stands for "interactive terminal") when it's running
> or `docker exec -it <container_id|container_name> sh`

> `docker logs <container_id|container_name>`

> `docker run -d <container>` run in background (detached)

> `docker run -d --name <some_name> <container>` run in background (detached) input name

> `docker container inspect <container_id|container_name>`

> `docker run -d -p 8080:80 <container>` ex: `docker run -d -p 8080:80 nginx`

> `docker run -v ${PWD}:/usr/share/nginx/html -p 8080:80 -d --rm <container>`

> (env vars, options...) `docker run --env POSTGRES_HOST_AUTH_METHOD=trust -ti --rm -d --name postgres-cn -p 8080:5432 postgres:10.10`

---

## Docker networks

> docker networks `docker network ls`

> create a network `docker network create <network_name>`

### Ex

> `docker network create mongo-network`

> `docker run -p 27017:27017 -d --network mongo-network --name mongodb-cn -e MONGO_INITDB_ROOT_USERNAME=modex98 -e MONGO_INITDB_ROOT_PASSWORD=password mongo`

> `docker run --network mongo-network -e ME_CONFIG_MONGODB_SERVER=mongodb-cn -e ME_CONFIG_MONGODB_ADMINPASSWORD=password -e ME_CONFIG_MONGODB_ADMINUSERNAME=modex98 -p 8081:8081 --name mongodb-express-cn -d mongo-express`

since both containers are in same network they can communicate using just container_name

---

## Docker compose

> `docker-compose up -d` (default file name is `docker-compose.yaml`)

> `docker-compose down`

> ---

> `docker-compose -f <docker_compose_file_name> up -d`

> `docker-compose -f <docker_compose_file_name> down`

> `docker-compose up -d --build` (when changes happen in the app)

> ---

## Docker DockerFile

> create an image `docker build -f DockerFile . -t <image_name>:<image_tag>`

### Ex

> `docker build -f DockerFile . -t my_app:1.0`

> `docker run -d --name my_app-cn -p 3000:3000 my_app:1.0`
