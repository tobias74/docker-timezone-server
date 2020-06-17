FROM node:13.5

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon
RUN npm install -g forever
RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "run", "forever_live"]




