# Pull nginx image
FROM nginx:stable-alpine3.20-perl

#set the working directory
COPY /dist /usr/share/nginx/html