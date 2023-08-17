<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

## Create env-related file.

```bash
$ git clone https://github.com/lamarrdev/nest-redis-sample.git ./nest-redis-sample
$ cd nest-redis-sample

$ touch ./src/config/env/.development.env
$ touch ./src/config/env/.production.env
```

## Add the port number to the env file. (.production.env or .development.env)
```bash
$ vi ./src/config/env/.development.env
$ vi ./src/config/env/.production.env
```

```bash
APP_PORT=7373
REDIS_PORT=6380
```

## Run the app in developer mode.

```bash
$ npm install
$ npm run start:dev
```

## Run the app in production mode.

```bash
$ export $(grep -v '^#' ./src/config/env/.production.env | xargs); docker-compose up --build -d
```
