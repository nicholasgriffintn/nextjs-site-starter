FROM node:14@sha256:d3f3c5105b1defedbdd7a8c6a4184d11e65f246d0dfd798e6f0fabc4b5326d46

# Setting working directory. All the path will be relative to WORKDIR
WORKDIR /usr/src/app

# Copying source files
COPY . .

# Installing dependencies
RUN yarn

# Building app
RUN yarn run build

# Running the app
CMD [ "yarn", "start" ]