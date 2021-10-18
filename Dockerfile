FROM node:12.13.0
WORKDIR /myapp
COPY ["package.json", "package-lock.json", "./"]
RUN npm install
COPY . .
EXPOSE 8888
CMD ["node", "index.js"]