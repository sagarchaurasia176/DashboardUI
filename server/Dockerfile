FROM node:23-alpine3.20 AS production
WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile --prod

COPY . .

EXPOSE 4000

CMD ["node", "index.js"]