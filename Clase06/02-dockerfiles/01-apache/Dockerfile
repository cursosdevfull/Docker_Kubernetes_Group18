#200mb
FROM ubuntu:24.04

#230mb
RUN apt update && apt install apache2 -y

#225mb
# RUN apt install apache2 -y

# COPY ./my-web /var/www/html
#235mb
ADD ./my-web /var/www/html

CMD ["apachectl", "-D", "FOREGROUND"]