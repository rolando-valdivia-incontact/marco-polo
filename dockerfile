FROM keymetrics/pm2:latest-alpine
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install

COPY . .
EXPOSE 3000
CMD ["pm2-runtime", "/usr/src/app/app.js"]