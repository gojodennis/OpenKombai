FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5173
# Expose host for Vite
CMD ["npm", "run", "dev", "--", "--host"]
