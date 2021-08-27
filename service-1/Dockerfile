FROM node:14-alpine

WORKDIR /usr/services-test

COPY package*.json .

RUN npm install

COPY . .

CMD ["npm", "start"]