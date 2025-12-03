# Taller-ASP.NET-CORE

## Descripción

Este proyecto contiene la implementación de una **aplicación web** desarrollada utilizando **ASP.NET Core**. El objetivo es proporcionar una estructura básica para aplicaciones que sigan el patrón de arquitectura **Modelo-Vista-Controlador (MVC)**, permitiendo la gestión de tareas y usuarios. Este proyecto sirve como base para futuras extensiones, como la integración con bases de datos o la adición de funcionalidades avanzadas.

## Funcionalidades Principales

- **Autenticación de Usuarios**: Los usuarios pueden crear una cuenta personalizada y acceder a su propia lista de tareas.
- **Gestión de Tareas**:
  - Crear nuevas tareas desde su cuenta.
  - Consultar y visualizar tareas previamente creadas.
  - Modificar tareas existentes, como la descripción y la prioridad.
  - Eliminar tareas que ya no sean necesarias.
- **Filtrado de Tareas**: Los usuarios pueden organizar y filtrar sus tareas según criterios como prioridad o fecha.
- **Almacenamiento de Datos**: Utiliza **Entity Framework Core** y **SQL Server** para gestionar las interacciones con la base de datos, donde se almacenan tanto las tareas como los datos de los usuarios.

## Tecnologías Empleadas

- **ASP.NET Core 7.0**: Framework utilizado para desarrollar la aplicación web, proporcionando una estructura robusta y eficiente.
- **Entity Framework Core**: Herramienta ORM que facilita las interacciones con la base de datos, permitiendo realizar consultas y operaciones de manera eficiente.
- **SQL Server**: Sistema de gestión de bases de datos utilizado para almacenar la información de usuarios y tareas.
- **Bootstrap**: Framework CSS para crear una interfaz de usuario moderna y responsiva, compatible con dispositivos móviles y de escritorio.

## Estructura del Proyecto

- **`/Controllers`**: Controladores que gestionan las solicitudes HTTP y la lógica de negocio.
- **`/Models`**: Clases que representan los datos de la aplicación, como las tareas y los usuarios.
- **`/Views`**: Vistas de la aplicación, generadas a partir de Razor Pages, que renderizan el contenido HTML dinámicamente.
- **`/wwwroot`**: Contiene los archivos estáticos, como CSS, JavaScript e imágenes, utilizados por la aplicación.

## Requisitos

- **.NET SDK** (compatible con la versión del proyecto).
- Un **IDE** como **Visual Studio** o **VS Code** para abrir y ejecutar el proyecto.
- **SQL Server** o una base de datos compatible para almacenar la información.



