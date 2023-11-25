# Includes TS source files and a built JS /production folder
FROM node:18.14.1-alpine AS development

# Install dev tools
RUN apk add sudo vim fish

# Set node env to dev to include dev dependencies
ENV NODE_ENV=development

# Set workdir to the root folder code/
WORKDIR /code

# Copy files from local folder to dev container
COPY . .

# Install packages based on lock file
RUN npm ci


