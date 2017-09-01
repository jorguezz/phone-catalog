FROM node:6
RUN mkdir -p /usr/src/api
COPY . /usr/src/api
RUN npm install --global nodemon
WORKDIR /usr/src/api
COPY package.json /usr/src/api
RUN npm install
EXPOSE 3000