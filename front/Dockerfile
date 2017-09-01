FROM node:6
RUN npm rebuild node-sass --force
RUN mkdir -p /usr/src/front
WORKDIR /usr/src/front
COPY package.json /usr/src/front
COPY . /usr/src/front
RUN npm install
EXPOSE 4200
CMD ["npm", "start"]
