FROM ubuntu:24.04

RUN apt update && apt install apache2 -y

ADD ./my-web /var/www/html

CMD ["apachectl", "-D", "FOREGROUND"]