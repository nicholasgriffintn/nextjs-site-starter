FROM node:17@sha256:1845a99ada85e286535bbf12e1261ea688b28b7e8bcf6521590edbbea9f41cf9

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