FROM mcr.microsoft.com/dotnet/core/aspnet:3.1

VOLUME /app

# restore as a separate layer to speed up builds
WORKDIR /src
COPY src/Project/Project.csproj .
RUN dotnet restore

COPY src/Project/ .
CMD dotnet publish -c Release -o /app/out/