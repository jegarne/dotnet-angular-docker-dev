FROM mcr.microsoft.com/dotnet/core/sdk:3.1

WORKDIR /vsdbg

RUN apt-get update \
    && apt-get --allow-unauthenticated install -y --no-install-recommends \
            unzip \
    && rm -rf /var/lib/apt/lists/* \
    && curl --insecure -sSL https://aka.ms/getvsdbgsh \
        | bash /dev/stdin -v latest -l /vsdbg 

ENV DOTNET_USE_POLLING_FILE_WATCHER 1

WORKDIR /app

ENTRYPOINT dotnet watch run --urls http://+:80 