FROM node:lts-alpine as base
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
COPY . .

FROM cypress/base as test
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY --from=base ["/usr/src/app", "./"]
COPY ["cypress.json", "./"]
RUN npm install 
CMD ["npm", "test"]

FROM base as release
ENV NODE_ENV=production
RUN chown -R node /usr/src/app
RUN npm install --production --silent && mv node_modules ../
EXPOSE 3000
USER node
CMD ["npm", "start"]
