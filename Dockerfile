FROM node:10.18 as build-stage

COPY ./frontend /app
WORKDIR /app
RUN npm install
RUN npm run build

FROM nginx

COPY --from=build-stage /app/build /usr/share/nginx/html
