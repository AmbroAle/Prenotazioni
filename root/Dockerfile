FROM node:22.14.0
WORKDIR /root
COPY . .
RUN npm install ; npm run build ; npm prune --production
EXPOSE 3000
CMD ["npm","run", "start"]