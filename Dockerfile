FROM node:14.17.1
MAINTAINER c0dezer019

# Setting environment
ARG NODE_ENV=production
ENV NODE_ENV $NODE_ENV

# Global
ENV NPM_CONFIG_PREFIX=/home/node/.npm-global
ENV PATH /home/node/.npm-global/bin:$PATH
RUN npm i --unsafe-perm -g npm@latest expo-cli@latest yarn

# Local
RUN mkdir -p /usr/local/app && chown node:node /usr/local/app
ADD . /usr/local/app
WORKDIR /usr/local/app
ENV PATH /usr/local/app/.bin:$PATH

USER node

COPY ./package.json ./yarn.lock ./

RUN yarn install --silent

COPY . .

# Expose ports
ARG PORT=19006
ENV PORT $PORT
EXPOSE $PORT 19001 19002

CMD ["yarn", "start"]
