FROM nginx:stable-alpine

COPY build /usr/share/nginx/html/
# COPY fonts /usr/share/nginx/html/fonts
# COPY dist /usr/share/nginx/html/dist
# COPY *.html /usr/share/nginx/html/

EXPOSE 80