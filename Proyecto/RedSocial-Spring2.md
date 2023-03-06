---
title: 
    LM - 1º DAM
date: Marzo 2022
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
        <span style=\"margin-left: 1cm;\">Lenguajes de Marcas - Proyecto red social - Spring 2</span>
    </span>
    "
toc:
    depth_from: 1
    depth_to: 5
    ordered: true
---


<!--A incluir al principio del proyecto-->
<div>
    <div style="display: flex; padding: 10pt; width: 100%; justify-content: flex-end;align-items: center">
            <div >
                <h2 style="color:#7ba0cd">Proyecto Red Social</h2>
            </div>
            <img height="100" src="imágenes/Fondo.png" />
        </div>
    <div style="display: flex; background-color: #7ba0cd; justify-content: space-between; border-style: solid; border-width: thin;">
        <div style="text-align: center; color:white;font-weight:bold;width:100%">
            Normas generales para el proyecto
        </div>
    </div>
  
</div>

<div style="font-size: 75%; border-style: solid; border-width: thin; padding: 3pt;">

**Condiciones de entrega**

* Se dispone de 1 sesión para realizar las actividades. El proyecto se entregará como fecha tope el 20 de marzo. Se entregarán en la fecha indicada. No se admitirán ejercicios entregados  después de esa fecha.
* La entrega de todas las actividades se hará a través de GitHub y Aules. 
* En GitHub, tendréis un repositorio con el nombre de vuestra red social (uno por grupo). Entregaréis el enlace a ese directorio.

**Condiciones de corrección**

* Las actividades se deben realizar con un editor (Visual Studio Code por ejemplo). No se pueden usar frameworks ni librerías.
* Se deben entregar los ficheros .html y .css que se hubieran generado anteriormente, los ficheros .xml, así como todos los recursos multimedia.
* Si se detecta copia en alguna actividad se suspenderá automáticamente la unidad de didáctica a todos los alumnos implicados.
* Si se detecta copia de alguna página web de internet, automáticamente se suspenderá la actividad copiada.

**Calificación**

* En esta primera entrega el proyecto tendrá un valor mínimo de 0 puntos y un valor máximo de 10 puntos. En el apartado calificación se ponen los requisitos que debe incluir.

</div>

<div style="padding: 3pt; font-weight: bold; background-color: gainsboro; margin: 5pt 0pt 5pt 0pt;">
    Requisitos funcionales
</div>
<div style="font-size: 75%; border-style: solid; border-width: thin; padding: 3pt;">
Necesitaremos almacenar la información de la aplicación como de la interfaz para poder darle cierto dinamismo.

* Login -> El cliente necesita tener una serie de usuarios con sus contraseñas para en un futuro sólo dejar entrar a aquellas personas que formen parte de la red social (crearemos tres usuarios) Además necesita almacenar el etiquetado para en un futuro poder cambiarlo cuando sea necesario.
  
* Olvidó contraseña -> Almacenaremos el etiquetado de esta página.

* Darse de alta -> Almacenaremos el etiquetado de esta página. 
  
* Página de publicaciones -> De cada una de las publicaciones, almacenaremos su información. Muy importante almacenar de quién es la publicación. Además de etiquetado de esta página.
  
* Perfil -> Tendremos que tener etiquetada la información personal del perfil del usuario que entra al sistema (crearemos tres perfiles). Almacenaremos etiquetado de esta página.

* Amigos -> Almacenaremos como mínimo dos amigos. De esos dos amigos es obligatorio que alguno de ellos haya hecho publicaciones y algún otro no. Almacenaremos el etiquetado de la página.

* Historias -> Almacenaremos las imágenes que forman parte de la historia además del etiquetado de la página y el tiempo de cada historia.

* Mensajes -> Almacenamos un par de ejemplos de mensajes y etiquetas de la interfaz.

* Notificaciones -> Tendremos las notificaciones.



</div>
<div style="padding: 3pt; font-weight: bold; background-color: gainsboro; margin: 5pt 0pt 5pt 0pt;">
    Reparto de tareas
</div>
<div style="font-size: 75%; border-style: solid; border-width: thin; padding: 3pt;">

La mayoría de los grupos están formados por 8 personas. Tenéis que repartiros entre todos las tareas:

:bulb: Ayuda: Existen dos tipos de tareas a repartir:

- Tareas de desarrollo: Cada uno puede hacer su parte de extraer la información pero tendréis que ponderar las tareas y que el reparto sea equitativo (hay partes más extensas). Además debéis mejorar lo ya hecho con las anatociones dadas.
- Tareas de gestión: Necesitaréis seguir repartiendo las tareas de gestión.

</div>

<div style="padding: 3pt; font-weight: bold; background-color: gainsboro; margin: 5pt 0pt 5pt 0pt;">
    Entrega
</div>
<div style="font-size: 75%; border-style: solid; border-width: thin; padding: 3pt;">
Todos los fuentes se alojarán en un repositorio de GitHub y la entrega será la del enlace. 

Cada miembro del grupo presentará su propia documentación completada con el nuevo sprint. Debéis indicar bien la parte del reparto de tareas y cómo os habéis organizando siguiendo la metodología SCRUM.
 


