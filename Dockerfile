FROM nginx:1

COPY assets /usr/share/nginx/html/assets
COPY fonts /usr/share/nginx/html/fonts
COPY dist /usr/share/nginx/html/dist
COPY *.html /usr/share/nginx/html/

EXPOSE 80