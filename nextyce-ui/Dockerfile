FROM node:12

RUN mkdir /usr/src/app 
 
WORKDIR /usr/src/app

RUN npm install -g @angular/cli 

ENTRYPOINT ng serve --host 0.0.0.0 --port 4200 -c docker