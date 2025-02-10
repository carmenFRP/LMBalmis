---
title: 
    LM - 1º DAW
date: Agosto 2023
export_on_save:
    puppeteer: true
    html: true
puppeteer:
    scale: 1
    landscape: false
    format: "A4"
    printBackground: true
    margin:
        top: "1cm"
        right: "1cm"
        bottom: "2.5cm"
        left: "1cm"
    displayHeaderFooter: true
    headerTemplate: "&nbsp;"
    footerTemplate: "
    <span style=\"font-size: 9pt; display: flex;\">
        <span class=\"pageNumber\" style=\"margin-left: 1cm;\"></span>
        /
        <span class=\"totalPages\"></span>
        <span class=\"title\" style=\"margin-left: 1cm;\"></span>
        <span style=\"margin-left: 1cm;\">Lenguajes de Marcas - React</span>
    </span>
    "
toc:
    depth_from: 1
    depth_to: 5
    ordered: true
---


# Índice

[TOC]

<div style="page-break-after:always;">


# Despliegue

En este proyecto comenzaremos desde 0. 

1. Instalar un servidor web con determinados servicios. 

![Servicios](../Resources/Servicios.png)

En nuestro caso usaremos xampp. 

2. Arrancar Apache y MySQLDatabase

3. Descargar WP. Acuérdate que iremos a [wordpress.org](https://wordpress.org/download/)
4. En el directorio de xampp/htdocs vamos a alojar el comprimido descargado.
5. Creamos un nuevo directorio llamado centro. Descomprime la carpeta de wp dentro de este directorio.
6. Acceder con un navegador a localhost y accedemos a PHPMyAdmin.
7. Creamos una BBDD que llamaremos centroBD con codificación utf8_spanishbbdd.
![centro](../Resources/coleBBDD.png)
8. Accedemos al instalador. Para ello desde un navegador pondremos la url localhost/centro
![instalador](../Resources/Instalador.png)
9. Configuramos el acceso a la bbdd
![acceso](../Resources/accesoBBDD.png)
10. Completamos el siguiente formulario
![Formulario](../Resources/FormularioCreaciónWP.png)
</div>

<div style="page-break-after:always;">

# Plantillas

Vamos a seleccionar una plantilla dentro del repositorio de WordPress. 

1. Vamos a Apariencia-> Temas y presionamos sobre añadir tema.
2. Buscamos tema "university hub"
![University](../Resources/UniversityHub.png)
3. Activamos el tema
4. Dirígete al sitio para ver que todo ha sido correcto localhost/centro
![Plantilla](../Resources/plantillaCentro.png)
5. Editando el perfil puedo quitar la barra de administación del sitio
![Barra](../Resources/Barra.png)

# Personalizar el sitio

1. Entramos al modo administrador de nuestro WorPress (acuérdate localhost/nombre-sitio/wp-admin)
2. Accedemos a la plantilla y le damos a personalizar para cambiar aspectos de la plantilla.
   


   