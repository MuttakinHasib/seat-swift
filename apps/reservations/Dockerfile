FROM node:alpine as developement

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN npm i -g yarn@1.22.19

RUN yarn install

COPY . .

RUN yarn build

FROM node:alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./

RUN npm i -g yarn@1.22.19

RUN yarn install --production

COPY --from=developement /usr/src/app/dist ./dist

CMD [ "node","dist/apps/reservations/main.js" ]