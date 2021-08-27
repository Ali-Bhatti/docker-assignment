FROM node:14-alpine

WORKDIR /usr/service1

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm", "start"]