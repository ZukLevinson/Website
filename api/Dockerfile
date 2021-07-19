FROM node:16.5.0-alpine3.11

LABEL version="1.0-alpha"
LABEL description="A contianer for Website's backend"
LABEL maintainer = ["zuklevinson@gmail.com"]

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
RUN npm install --production
COPY . .

EXPOSE 5000

CMD ["node", "app.js"]