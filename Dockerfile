FROM node:16

WORKDIR /app

COPY . /app/

RUN npm install

EXPOSE 4005

CMD [ "npm", "run", "devStart"]