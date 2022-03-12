FROM node:17@sha256:5fc2e7646206e4d42610a63e84afd36db693688e197582a9fdf2daa8fce6b469

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