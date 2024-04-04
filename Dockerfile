FROM node:14.21.3-alpine

COPY package.json .

RUN npm install

COPY index.html .

COPY index.js .

CMD ["npm", "start"]
