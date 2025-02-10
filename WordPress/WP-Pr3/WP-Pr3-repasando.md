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
* Se deben entregar el directorio centro generado.
* Si se detecta copia en alguna actividad se suspenderá automáticamente la unidad de didáctica a todos los alumnos implicados.
* Si se detecta copia de alguna página web de internet u otro recurso, automáticamente se suspenderá la actividad copiada.

**Calificación**

* Existe una actividad que se evaluará entre 0 y 10.
* Las actividades se puntuarán dentro del apartado de procedimientos que es un 10% de la nota de la unidad.
  
</div>

<div style="padding: 3pt; font-weight: bold; background-color: gainsboro; margin: 5pt 0pt 5pt 0pt;">
Ejercicio tipo examen
</div>
<div style="font-size: 75%; border-style: solid; border-width: thin; padding: 3pt;">

**Descripción**

Debes crear un sitio web en WordPress partiendo del material facilitado. El aspecto final lo puedes comprobar en []
Deberás entregar los dos ficheros generados por el plugin Duplicator, en un ZIP con tu nombre y apellido. Crea un usuario de nombre admin y contraseña 123456.

1. Instala WP
2. Añade la plantilla Inspiro
3. Personaliza la plantilla:
   1. Añade el Logo gato.png --> 2 min
4. Continua la personalización de tu página (Debes quitar el vídeo para apreciar los cambios editando la página de inicio)...
    1. Colores: #006b1a de fondo para el menú
    2. Incrusta tu propio CSS. Pon un borde a la capa que contiene WE ARE CREATIVE... Redondea las esquinas.
    3. Cuando se haga scroll ponle el color #c1d6be.
    4. Cambia el menú si estuviera en inglés:
      1. Home -> Inicio.
      2. About -> Cuestionario.
      3. Elimina Blog.
      4. Contact pon un enlace a iesdoctorbalmis.
5. Añade la funcionalidad Quiz cat en tu WordPress
6. Personaliza tu página:
   1. Quita el vídeo y añade un bloque de página con la imagen Ovillo.png de manera centrada (MIX).
   2. Cambia WE ARE A CREATIVE AGENCY LOCATED IN LONDON => Por vamos a hacer un cuestionario sobre los gatos.
   3. Pregúntale a chat.gpt un texto para rellenar sobre la importancia de los gatos en internet y copialo debejo de este título. Cambia el texto ABOUT US por ¡Comprueba cuánto sabes!
   4. Crea un Quiz sobre los gatos. PRegunta a chat.gpt -> 5 preguntas, 2 respuestas, una válida y otra inválida. Pon una imagen de éxito para puntuaciones mayor que o igual a 3 y de no éxito para puntuaciones menores.
   5. Añade el Quiz a la página de about.
7. Elimina el resto del contenido extra y deja tu página con una buena presentación.