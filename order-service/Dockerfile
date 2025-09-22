# Stage 1: Build
FROM golang:1.20 AS build
WORKDIR /app

# Copy only source code
COPY main.go .

# Create a valid go.mod inside Docker
RUN echo 'module order-service\ngo 1.20\nrequire github.com/gin-gonic/gin v1.9.1' > go.mod

# Download dependencies and generate go.sum
RUN go mod tidy

# Build the binary
RUN go build -o order_service main.go

# Stage 2: Runtime
FROM alpine:3.18
WORKDIR /app
COPY --from=build /app/order_service .
EXPOSE 4004
CMD ["./order_service"]

