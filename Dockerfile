FROM node:12.11.1

# install python
# RUN apk update && apk upgrade && \
#     apk add --no-cache python make

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .

ENTRYPOINT [ "npm", "run", "dev" ]