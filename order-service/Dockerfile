FROM golang:1.20-alpine AS build
WORKDIR /app
COPY . .
RUN go build -o order_service main.go

FROM alpine:3.18
WORKDIR /app
COPY --from=build /app/order_service ./order_service
EXPOSE 8081
CMD ["./order_service"]