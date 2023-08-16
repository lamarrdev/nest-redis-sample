FROM node:20.3-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

# pm2설치
RUN npm install --global pm2

RUN npm install

COPY . .

RUN npm run build

FROM node:20.3-alpine as production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY package*.json ./

# pm2설치
RUN npm install --global pm2

RUN npm install --only=production

COPY . .

COPY --from=development /usr/src/app/dist ./dist

# pm2-runtime으로 실행
CMD ["pm2-runtime", "start", "ecosystem.config.js", "--env", "production"]