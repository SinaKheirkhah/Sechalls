FROM node:12.10.0-alpine	

# Create app directory
WORKDIR /opt/

COPY package*.json ./
COPY . .

RUN chown -R node:node /opt/

RUN npm install
RUN npm install -g nodemon

USER node
EXPOSE 5050

CMD ["nodemon", "start"]