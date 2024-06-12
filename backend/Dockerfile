FROM node:alpine

WORKDIR /src

COPY package.json ./
COPY package-lock.json ./
COPY ./src ./src

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]