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
        <span style=\"margin-left: 1cm;\">Lenguajes de Marcas - WP</span>
    </span>
    "
toc:
    depth_from: 1
    depth_to: 5
    ordered: true
---

<!--A incluir al principio de la práctica-->
<div>
    <div style="display: flex; padding: 10pt; width: 100%; justify-content: flex-end;align-items: center">
            <div >
                <h2 style="color:#7ba0cd">WP - Personalizando plantillas</h2>
            </div>
            <img height="100" src="../Resources/Fondo.png" alt="Imagen fondo" />
        </div>
    <div style="display: flex; background-color: #7ba0cd; justify-content: space-between; border-style: solid; border-width: thin;">
        <div style="text-align: center; color:white;font-weight:bold;width:100%">
            Normas generales para la práctica
        </div>
    </div>
  
</div>

<div style="font-size: 75%; border-style: solid; border-width: thin; padding: 3pt;">

**Condiciones de entrega**

* Se dispone de 2 sesiones para realizar la práctica. Se entregarán en la fecha indicada. No se admitirán ejercicios entregados  después de esa fecha.
* La entrega de todas las actividades se hará a través de GitHub y Aules. 
* En GitHub, al repositorio LM subirás un directorio que deberá nombrarse con el nombre y primer apellido del alumno seguido de la frase “-práctica1-UT5”. El nombre y los apellidos deben ir separados por un guión. En aules el enlace a ese directorio del repositorio.

**Condiciones de corrección**

* Las actividades se deben con las herramientas trabajadas en el aula
* Se deben entregar el directorio centro generado
* Si se detecta copia en alguna actividad se suspenderá automáticamente la unidad de didáctica a todos los alumnos implicados.
* Si se detecta copia de alguna página web de internet u otro recurso, automáticamente se suspenderá la actividad copiada.

**Calificación**

* Existe una actividad que se evaluará entre 0 y 10.
* Las actividades se puntuarán dentro del apartado de procedimientos que es un 10% de la nota de la unidad. 
  
</div>

<div style="padding: 3pt; font-weight: bold; background-color: gainsboro; margin: 5pt 0pt 5pt 0pt;">
Personalizar plantilla - Entrega de la práctica
</div>
<div style="font-size: 75%; border-style: solid; border-width: thin; padding: 3pt;">

**Descripción**

Un plugin de WordPress es un software que amplía las funcionalidades del sistema, permitiendo agregar características sin necesidad de modificar el código del sitio. Los plugins pueden hacer de todo, desde mejorar la seguridad y el rendimiento hasta añadir formularios de contacto, tiendas en línea, optimización SEO, y más.

Duplicator es un plugin de WordPress que permite clonar, migrar, copiar o hacer copias de seguridad de un sitio web. Con él, puedes:
✅ Crear paquetes que contienen todos los archivos del sitio y la base de datos.
✅ Mover un sitio de un servidor a otro sin perder datos.
✅ Hacer copias de seguridad manuales o programadas.
✅ Crear entornos de prueba o desarrollo fácilmente.

Para utilizarlo e incorporarlo en tu práctica (y poder entregarla)

1. Dirígete a WP-Admin/Duplicator->Añadir Nuevo plugin.
2. En buscar busca el plugin llamado Duplicator.
3. Una vez instalado y activado accede dentro del nuevo menú Duplicator a crear copia de seguridad.
4. No cambies el nombre de archivo pero en notas introduce tu Nombre y apellidos.Crea la copia.
5. Se generan dos archivos, descarga y comprime los dos.