FROM node:14-alpine

WORKDIR /usr/service2

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]