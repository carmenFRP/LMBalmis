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
Personalizar plantilla - Añadiendo páginas, categorías...
</div>
<div style="font-size: 75%; border-style: solid; border-width: thin; padding: 3pt;">

**Descripción**

Vamos a añadir una landing page a nuestro sitio web. 

La Home Page (o página de inicio) es la página principal de un sitio web, la que los visitantes ven primero cuando ingresan a la URL principal (ejemplo: www.lmmola.com).

Funciones de la Home Page
✅ Presentar la marca o negocio con una visión general.
✅ Facilitar la navegación, enlazando a otras secciones importantes.
✅ Captar la atención con imágenes, textos y llamados a la acción.
✅ Optimización para SEO, ayudando a posicionar el sitio en buscadores.

Elementos comunes de una Home Page
🔹 Logotipo y menú de navegación (para moverse por el sitio).
🔹 Banner principal con un mensaje clave.
🔹 Secciones destacadas (productos, servicios, blog, testimonios).
🔹 Llamado a la acción (CTA) (registrarse, comprar, contactar).
🔹 Pie de página con información de contacto y enlaces importantes.

Es como la portada de un libro: debe ser atractiva, clara y guiar a los visitantes hacia lo que buscan.

Usa la IA para pasarle una captura de pantalla de tu página web y que te ayude a diseñar tu HOME PAGE incluyendo el logotipo, el banner, la llamada a la acción, el pie y la navegación con un menú origina (investiga Widgets)... Personaliza ese boceto y "pásalo" a WP.

1. WP-Admin -> Páginas -> Añadir nueva página.
2. Usa el visor de bloques e intenta realizar al máximo posible tu diseño.
3. Cuando la tengas realizada añádela al menú (Apariencia->Menú) de tu plantilla.
4. En ajustes entradas cambia tu página de inicio a la actual
5. 