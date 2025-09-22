FROM node:18-alpine

WORKDIR /app

# Copy package files first for caching
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source files
COPY . ./

# Expose port
EXPOSE 4001

# Start service
CMD ["npm", "start"]

