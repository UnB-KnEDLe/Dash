FROM node:16

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

# If you are building your code for production
RUN npm i --legacy-peer-deps

# Bundle app source
COPY . .

# EXPOSE 3000