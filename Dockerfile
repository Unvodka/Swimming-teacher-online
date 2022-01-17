FROM node:12

WORKDIR /app

COPY package*.json /app/

RUN npm install

COPY . /app/

EXPOSE 4005

CMD [ "npm", "run", "devStart"]