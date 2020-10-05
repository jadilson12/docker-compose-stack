# Stack built with Docker Compose

A stack environment built using Docker Compose. It consists of the following:

* Node 12.x
* React 16.x
* Postgres 11.x
* AdnonisJs 4.x
* Npm 6.x

## Installation

Clone this repository on your local computer .
Run the `docker-compose up -d`.

```shell
git clone https://github.com/jadilson12/docker-compose-stack
cd docker-compose-stack
```
Setting environment
```shell
cp api/.env.example api/.env
cp docker-compose.example docker-compose.yml
```

Installing dependencies

```shell
cd api ; npm install
cd ../web-app ; npm install  ; cd ..
```

Start compose

```shell
docker-compose up -d
```

Your AdonisJs is now ready!! You can access it via `http://localhost:3333`.

## author

Jadilson Guedes <jadilson12@gmail.com>  
License MIT <https://jadilson12.mit-license.org/>
