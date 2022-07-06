FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV DB_USER="dewin" 
ENV DB_PASSWORD='admin123' 
ENV DB_HOST='localhost' 
ENV DB_NAME='my_store' 
ENV API_KEY='1234'
ENV JWT_SECRET='1234'
ENV DB_PORT=5432
ENV PORT=3000

EXPOSE 3000
CMD ["npm", "start"]