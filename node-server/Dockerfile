FROM node:16
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
RUN npm i nodemon -g
COPY . .
EXPOSE 8080
CMD ["npm", "start"]
