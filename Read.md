3-Tier Architecture — 5 Microservices Sample

This repository contains a minimal 3-tier architecture sample with 5 microservices, a React frontend, and a Postgres database. It's intended as a starting point you can run with docker-compose.

Architecture

Presentation (Frontend): frontend/ — React app that calls the services.

Application (Services): 5 small REST services (each in a different language):

auth-service/ — Node.js (Express)

user-service/ — Python (FastAPI)

product-service/ — Java (Spring Boot)

order-service/ — Go (Gin)

payment-service/ — C# (.NET 7 minimal API)

Data (Database): postgres (single Postgres instance for simplicity) — services use basic in-memory or simple DB connection stub (you can extend to use Postgres per service later).

Unit Test Dependency and Tools Installation for Services

1. Auth Service (Node.js)

Install Node.js & npm
Install dependencies and dev dependencies:

npm install
npm install --save-dev jest mocha chai supertest

Run unit tests:

npm test

2. User Service (Python + FastAPI)

Install Python 3.x & pip

Install dependencies:

pip install -r requirements.txt

Install testing tools:

pip install pytest pytest-cov requests

Run unit tests:

pytest

3. Product Service (Java + Spring Boot)

Install JDK & Maven

Install dependencies and run tests:

mvn clean install
mvn test

Optional testing libraries: JUnit 5, Mockito

4. Order Service (Go + Gin)

Install Go SDK

Install testing dependencies:

go get github.com/stretchr/testify

Run unit tests:

go test ./...

5. Payment Service (C# .NET)

Install .NET SDK

Restore dependencies:

dotnet restore

Install testing tools/packages:

dotnet add package xunit
dotnet add package NUnit
dotnet add package MSTest.TestFramework

Run unit tests:

dotnet test

Tip: You can also use language-specific Docker images in Jenkins pipelines with all tools pre-installed to simplify setup and maintain consistency across CI builds.

