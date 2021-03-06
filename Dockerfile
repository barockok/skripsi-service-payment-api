FROM node:latest
RUN wget https://github.com/barockok/skripsi-service-payment-api/archive/master.tar.gz
RUN mkdir app
RUN tar xf ./master.tar.gz -C ./app --strip-components=1
WORKDIR ./app
RUN /usr/local/bin/npm install
RUN /usr/local/bin/npm run build
EXPOSE 3000
ENV PORT 3000
CMD ["/usr/local/bin/npm", "run", "start"]
