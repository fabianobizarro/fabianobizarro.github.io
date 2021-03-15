FROM node:lts-alpine AS build
WORKDIR /app

COPY src/ ./src/
COPY public/ ./public
COPY package.json .

ENV PUBLIC_URL=/ 
RUN yarn && yarn build

FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html/

EXPOSE 80