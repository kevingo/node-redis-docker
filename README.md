## Example for Node.js and Redis in Docker

---

This is sample Node.js example used for testing connection with Redis server with Docker.

### 1. Please Start Redis Server :

- [Docker Redis](https://github.com/kevingo/docker-redis)

### 2. Build the node-redis-docker image :

```
docker build -t node-redis-docekr .
```

### 3. Run the container with the image you build in the second step, and link it with your redis container in the first step.

```
docker run -d --name node-redis-docker --link redis:redis node-redis-docker
```

#### 4. See the results :

```
docker logs node-redis-docker
```

![image](http://github.com/kevingo/node-redis-docker/raw/master/screenshot/docker-logs.png)
