#!/bin/sh
yarn

yarn build

docker build -t ginlink/hapVac-dashboard-web:dev .

docker login --username $DOCKER_ACCESS_NAME -p $DOCKER_ACCESS_TOKEN

docker push ginlink/hapVac-dashboard-web:dev
