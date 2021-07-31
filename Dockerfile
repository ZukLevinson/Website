# Stage for building the production version of the project
FROM node:16-alpine AS builder

WORKDIR /app

COPY ["package.json", "package-lock.json", "./"]
COPY . .

RUN npm install --production --silent
RUN npm run build


# Stage for serving as production
FROM node:16-alpine AS production

LABEL version="1.0"
LABEL maintainer="Zuk Levinson"

WORKDIR /app

COPY --from=builder /app/build  .
RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-p", "3000", "-s"]