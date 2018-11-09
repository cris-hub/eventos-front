FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf

WORKDIR /usr/share/nginx/html
RUN mkdir /usr/share/nginx/html/eventos
# COPY dist/eventos /usr/share/nginx/html/eventos/
