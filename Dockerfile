FROM node:12
WORKDIR /app
COPY server/package.json server/package-lock.json
RUN npm install
COPY server .
ENTRYPOINT npm run start

