FROM node:alpine
WORKDIR /app
RUN wget https://go.dev/dl/go1.21.5.linux-amd64.tar.gz && \
    tar -C /usr/local -zxf go1.21.5.linux-amd64.tar.gz 
ENV PATH="$PATH:/usr/local/go/bin"

EXPOSE 8080
COPY . .

RUN npm i && \
    node ./node_modules/vite/bin/vite.js build
RUN go build -o app main.go && chmod +x ./app
CMD [ "./app" ]

