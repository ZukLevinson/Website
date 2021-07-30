# Stage for building the production version of the project
FROM node:16.5.0-alpine3.11 AS builder

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
COPY . .

RUN npm install --production
RUN npm run build


# Stage for serving as production
FROM node:16.5.0-alpine3.11 AS production

WORKDIR /app

COPY --from=builder /app/build  .
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-p", "3000", "-s"]