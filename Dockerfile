FROM node:12.16-slim

WORKDIR /srv/www/mythology

COPY . .

RUN npm install

RUN npm run build

EXPOSE 3000

CMD npm run start:dev
