FROM node:10.18 as build-stage

COPY ./frontend /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM ubuntu:16.04

RUN apt-get update && apt-get install -y \
    curl && \
    curl -sL https://deb.nodesource.com/setup_10.x | bash && \
    apt-get install -y nodejs

COPY ./backend /app

WORKDIR /app
RUN npm install
COPY --from=build-stage /app/build /app/build

EXPOSE 3001

CMD ["npm", "start"]
