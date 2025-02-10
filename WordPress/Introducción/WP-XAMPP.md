---
title: 
    LM - 1º DAW
date: Febrero 2025
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


# ¿Qué es XAMPP? 

Xampp es un servidor web local, multiplataforma que nos va a permitir la creación y pruebas de páginas web que necesitan backend. Integra una serie de herramientas y programas que nos van a facilitar el desarrollo y la ejecución de nuestras páginas.
Fue desarrollado por Apache Friends y su nombre es un acrónimo de cada una de las principales herramientas que contiene; esto nos sirve para hacernos una idea de cuáles son los principales programas que vienen en el paquete.

* X: Hace referencia a los diferentes sistemas operativos en los que se puede instalar el programa, como Linux, Windows, Mac, Ubuntu, etc.
* A: Por el servidor web Apache que permitirá trabajar con las diferentes herramientas del paquete y que será la principal interfaz a usar. Este servidor web de código abierto será fácil de instalar gracias a Xampp.
* M: La letra M hace referencia a la incorporación del sistema de gestión de bases de datos conocido como MySQL; en algunas versiones de Xampp, sobre todo en las más recientes, incorpora MariaDB.
* P: Como todo servidor web de código abierto, Xampp utiliza un lenguaje de programación, siendo en este caso PHP; este lenguaje es bastante conocido y soporta diferentes sistemas de bases de datos.P: Perl es otro lenguaje de programación de Xampp, pero esta vez enfocado en la administración del sistema y programación de red.

# Descargar XAMPP

* Como siempre dirigirse a sitios web oficiales, en este caso al sitio web de [apache](https://www.apachefriends.org/es/index.html).
* Pulsa sobre Descargar
* Navega hacia más descargas
* De la última versión, realiza una búsqueda hacia la versión portable que no se instala. 

# Primer uso de XAMPP

Xampp es recomendable descomprimirlo en la carpeta raíz de un disco (C:/ o en el raíz del USB) ya que evita problemas de permisos o espacios en rutas que hacer que no funcione adecuadamente. 

Una vez descomprimido es recomendable renombrar la carpeta para diferenciarlo de otros usos que se le pueda dar al XAMPP (XAMPP-LM).

Seguidamente lo primero que haremos es ejecutar la primera vez el script setup_XAMPP.bat.

Ahora cada vez que queramos usar XAMPP usaremos xampp_control. Para nuestras páginas web usaremos el APACHE y el servidor de BBDD MySQL.

Para comprobar que todo ha ido correcto, tendré que revisar que en el panel de control las etiquetas se han puesto en verde y en el navegador al acceder a localhost me sale la página de prueba de apache.