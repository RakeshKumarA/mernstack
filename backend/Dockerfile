FROM node:14-slim

WORKDIR /usr/src/app

ENV NODE_ENV=dev
ENV PORT=5000
ENV PGUSER=postgres
ENV PGHOST=35.198.170.75
ENV PGPASSWORD=proshop
ENV PGDATABASE=ecomm
ENV PGPORT=5432
ENV JWT_SECRET=abc123

COPY ./package.json ./
COPY ./package-lock.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "node", "server.js" ]