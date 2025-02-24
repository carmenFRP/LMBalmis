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
Personalizar plantilla - Página de inicio
</div>
<div style="font-size: 75%; border-style: solid; border-width: thin; padding: 3pt;">

**Descripción**

Ahora vamos a instalar la plantilla Envo Royal . Vamos a usarla para crear una página de muestra de un comercio (temática libre). 

Puedes usar una IA para la generación de imágenes, algún recurso libre o buscar tus imágenes en la red...

1. Instala un WP nuevo.
2. Dirígete a la página web oficial y descarga la plantilla en formato zip.
3. Ahora entra a tu wp-admin de tu sitio web. Ve a Apariencia -> Temas -> Añadir nuevo tema. Selecciona subir tema y adjunta el comprimido descargado.
4. Subimos una foto nueva de portada (acuérdate de poner el texto alternativo. Dale a publicar
5. Dirígete a tu admin y en ajustes generales.
   1. Cambia el título. Cambia también aquellos parámetros que te resulten interesantes.
   2. Al final de ajustes, en enlaces permanentes selecciona el nombre de la entrada.
6. Desde tu visor de la página, dirígete a personalizar o desde Apariencia->Personalizar en wp-admin. Las plantillas nos ofrecen esta sección para adecuar el sitio web a nuestras necesidades.
   1.  Cambia colores de la cabecera y color de fondo de acuerdo a tu imagen coorporativa (si no los cambias indica cómo lo harías).
   2.  Investiga y personaliza algún parámetro más. Indícalo en un .txt que puedes entregar.
7. Para introducir la información vamos a crear entradas o páginas.
   1. Vete a categorías y crea dos categorías. Por ejemplo si tu página es una tienda de material escolar puedes crear la categorías libretas y la categoría bolígrafos.
   2. Creamos una primera entrada. Entrada en la que pondremos un título, una descripción y una imagen. Todo lo harás añadiendo bloques. Añade la categoría bolígrafos (puedes hacerlo desde la entrada en edición rápida) y publícala (Fíjate que te deja programarlo). Por ejemplo:
      1. Título: Mi comienzo en el cole
      2. Descripción: ¿Qué bolígrafos compraría para poder sacar 10 en 1ºDAW en el Balmis?
      3. Imagen de un bolígrafo...
    3. Crea 3 entradas más.
    4. Ahora vamos a añadir un menú. Para ello nos vamos a Apariencia->Menú. Le vas a llamar Menú principal. Elimina las páginas propuestas entrando a cada una de ellas y pulsando sobre eliminar. Selecciona las categorías en la parte izquierda y añádelas al menú. Guarda, publica y visualiza.