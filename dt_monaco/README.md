# Aplicar deploy de workflow, SGR y SLO a un dynatrace SaaS.

Este documento proporciona una descripción concisa de los requisitos y procedimiento para desplegar la configuración con el uso de monaco sobre linux, esto se puede agregar a un orquestado de CI/CD como jenkins en un pipeline o freestyle project.

## Variables de entorno

- export DT_URL_ENV=https://xxxx.apps.dynatrace.com
- export DT_TOKEN_ENV=dt0c01.XXXX
- export DT_OAUTH_CLIENT_ID_ENV_VAR=dt0s02.XXXX
- export DT_OAUTH_CLIENT_SECRET_ENV_VAR=dt0s02.XXXX.XXXX
- export SERVICE_NAME=$NAMESPACE

## Ajuste de config yaml

- sed -i "s/{{service}}/${SERVICE_NAME}/g" slo-srg-workflow-monaco/config.yaml

## Deploy monitoring as a code

- ./monaco_linux deploy manifest.yaml
