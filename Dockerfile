FROM c0dezer019/react-native-android-base:testing AS environment

LABEL version=1.0.0
LABEL maintainer="c0dezer019"

# Build args
ARG dev_user
ARG dev_password

ENV DEV_USER ${dev_user}

RUN apt-get update && apt-get upgrade

# Installing necessary npm packages
RUN npm i -g yarn ncu

# Creating usergroups
RUN groupadd -g 107 developers

# Adding a user for general development
RUN adduser -c 'Developer' -R / -s /bin/bash -G developers ${dev_user} -p ${dev_password}
RUN usermod -aG sudo c0dezer019
USER ${dev_user}

RUN mkdir -p app/

FROM environment AS App

WORKDIR /app/

COPY package.json .
COPY yarn.lock .

# First check for updates of the dependencies in package.json then install depencies.
RUN ncu -u && yarn install

# Copy contents of repo/project root into the /app directory and CHOWN the files to the developer group.
ADD --chown=:developers . .

FROM build AS Metro

# Simply runs the Metro server
CMD ["yarn", "start"]

FROM Metro AS Android

# Triggers Android stuff
CMD ["yarn", "android"]
