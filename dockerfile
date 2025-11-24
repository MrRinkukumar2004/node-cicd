# use official node image
FROM node:18

#set working dir
WORKDIR /app

#copy files

COPY package.json package.json

RUN npm install
COPY . .

#expose port 
EXPOSE 4000

#run app

CMD [ "node","server.js" ]