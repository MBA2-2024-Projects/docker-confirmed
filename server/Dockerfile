FROM node:18.17-alpine

WORKDIR /server

COPY ./server/package*.json ./

RUN npm install

COPY ./server/ .

EXPOSE 3000

RUN adduser --disabled-password --gecos '' appuser

USER appuser

CMD ["npm", "run", "dev"]