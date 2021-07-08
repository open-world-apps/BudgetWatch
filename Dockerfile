FROM c0dezer019/react-native-android-base AS environment

LABEL version=1.0.0
LABEL maintainer="c0dezer019"
LABEL description="BudgetWatch is a React Native Financial App that puts an emphasis on budget monitoring."

# Build args
ARG dev_user
ARG dev_password
ARG root_user=root
ARG root_password

ENV DEV_USER ${dev_user}

RUN apt-get update && apt-get upgrade

# Installing necessary npm packages
RUN npm i -g yarn ncu

# Creating usergroups
RUN groupadd -R ~ -r admin && \
    groupadd -R / developers

# Creating root user and a regular user.
RUN adduser \
    -c 'Root user' \
    -s /bin/bash \
    ${root_user} \
    -p ${root_password} && \
    usermod \
    -a -G \
    admin \
    ${root_user}

# Adding a user for general development
RUN adduser \
    -c 'Developer' \
    -R / \
    -s /bin/bash \
    ${dev_user} \
    -p ${dev_password} && \
    usermod \
    -a -G \
    developers \
    ${dev_user}

# Adding development user to sudo
RUN usermod -aG sudo c0dezer019

WORKDIR /home/${dev_user}

RUN mkdir -p app/

FROM build AS App

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