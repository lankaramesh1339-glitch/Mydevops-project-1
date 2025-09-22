# Stage 1: Build
FROM mcr.microsoft.com/dotnet/sdk:7.0 AS build
WORKDIR /src

# Copy project file and restore dependencies
COPY PaymentService.csproj ./
RUN dotnet restore

# Copy all source files
COPY . ./

# Publish the app
RUN dotnet publish -c Release -o /app/publish

# Stage 2: Runtime
FROM mcr.microsoft.com/dotnet/aspnet:7.0
WORKDIR /app
COPY --from=build /app/publish .
EXPOSE 4005
ENTRYPOINT ["dotnet", "PaymentService.dll"]

