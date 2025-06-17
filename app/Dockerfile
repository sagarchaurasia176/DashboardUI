# Build Stage
FROM node:23-alpine3.20 AS builder
WORKDIR /app

COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

# Production Stage
FROM nginx:1.27.4 AS production
WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY --from=builder /app/dist .

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
