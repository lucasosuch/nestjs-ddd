FROM node:current

ENV NODE_ENV=${NODE_ENV}

RUN mkdir -p /usr/src

COPY package.json /usr/src/package.json
COPY yarn.lock /usr/src/yarn.lock

WORKDIR /usr/src
COPY . /usr/src/

RUN yarn install --immutable
RUN yarn prisma generate

RUN yarn build
EXPOSE 3000

CMD ["yarn", "start"]
