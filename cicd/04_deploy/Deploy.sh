#!/bin/bash
echo "Deploy NodeJS!!!"
docker run -d --name marco-polo-rvl -p 30000:3000 rvaldivia/marco-polo:latest