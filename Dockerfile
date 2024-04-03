FROM node:18.17.1-alphine as builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Use Nginx to serve the built Angular app
FROM nginx:latest

RUN rm -rf /usr/share/nginx/html/*

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

COPY --from=builder /app/docs /usr/share/nginx/html

EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]
