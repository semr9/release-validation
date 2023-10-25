# Resumen de la Arquitectura del Proyecto Demo DEVOPS

Este documento proporciona una descripción concisa de la arquitectura del proyecto, enfocándose en el cluster, sus componentes y los scripts de automatización de jenkins.

## Jenkins
Este clúster se encarga de la ejecución de pipelines y aloja un servicio Jenkins sin volúmenes persistentes.

- **Repositorio de ejecución de pipelines**: `k8s_jenkins`.
- **Despliegue principal**: `jenkins-deployment.yaml` - Gestiona las operaciones del backend, como consultas y manipulación de la base de datos.

## Service-Demo
Este clúster contiene un microservicio demo en Node.js diseñado para realizar operaciones sencillas en pruebas.

- **Recurso para la construcción de la imagen de microservicio**: `k8s_app`.
- **Microservicio**: `service-demo.yaml` - Contiene definiciones para pruebas sencillas.
- **Swagger Url**: `http://{IP}/api-docs/`

## Resumen AKS

- **Jenkins**: Aloja el ejecutor de pipelines, ubicado en `k8s_jenkins`.
- **Service-Demo**: Aloja los recursos para construir la imagen del microservicio en Node.js, ubicada en `k8s_servicedemo`.

Esta estructura proporciona una separación clara y eficiente de las responsabilidades entre los clústeres, facilitando tanto el desarrollo como la gestión del proyecto.
