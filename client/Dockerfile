FROM node:18.17-alpine

WORKDIR /client

COPY ./client/package*.json ./

RUN npm install

COPY ./client/ .

EXPOSE 3000

RUN adduser --disabled-password --gecos '' appuser

USER appuser

CMD ["npm", "run", "start"]