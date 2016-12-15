FROM nginx:1

COPY assets /usr/share/nginx/html/assets
COPY fonts /usr/share/nginx/html/fonts
COPY *.html /usr/share/nginx/html/

EXPOSE 80