FROM node:14.21.3-alpine AS build

WORKDIR /lab3-js

RUN npm install -g pkg

COPY package.json .

RUN npm install

COPY index.html .

COPY index.js .

RUN pkg index.js -o calculator

FROM alpine

WORKDIR /lab3-js

COPY --from=build /lab3-js/calculator /calculator

CMD ["/calculator"]
