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
                <h2 style="color:#7ba0cd">WP - Sitio web WP y plugin WooCommerce</h2>
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
WooCommerce
</div>
<div style="font-size: 75%; border-style: solid; border-width: thin; padding: 3pt;">


## Personalización plantilla
1. Instala un WordPress.
2. Instala y activa la plantilla ASTRA.
3. Activa el tema y en plugins -> starter templates escoge "BrandStore".
4. Piensa la temática de tu tienda online (ropa de deporte, videojuegos, libros, maquillaje...). Y realiza la personalización de la plantilla:
   1. Astra->Personalización
   2. Elige el juego de colores que desees
   3. Maquetación de cabeceras: activar que sea visible en toda la web, seleccionar el logo que debéis poner en una carpeta llamada assets. En design de la cabecera quita el fondo transparente. Con la edición con el lápiz ponle un color de fondo blanco u otro color que complemente tu juego de colores pero eliminando las transparencias. Sigue personalizando tu cabecera: bordes...
   4.  Pasar menú principal a la derecha y eliminar menú secundario. A la izquierda añadir módulo de HTML personalizado. Coloca distribuido con flexbox con espacio entre los elementos teléfono de contacto, email de contacto y localización en maps.Añádelo dentro de tres etiquetas link.
   5.  El pie de página: cambia el logo, redúcelo a 2 columnas, ponle un color de fondo que te guste con tu página, cambia la letra a color blanco editando el bloque y poniendo el atributo style, quita la columna quitando el widget y añade un widget de imagen. Añade una imagen 
</div>

<div style="font-size: 75%; border-style: solid; border-width: thin; padding: 3pt;">

## Menú y otras configuraciones

1. En WP-Admin, páginas, haciendo uso de la edición rápida, cambia: about-> empresa, cart -> carrito,Checkout -> Pagar, Contact us -> Contáctanos
2. En Apariencia-> Menús tenemos todos los menús. Vamos a eliminar For her, For him, Quick links.
3. Editamos el Main menú, cambiando a Menú principal y añadimos nosotros las páginas que nos interesan.

</div>


<div style="font-size: 75%; border-style: solid; border-width: thin; padding: 3pt;">

## Personalización de WooCommerce: Ajustes
1. En WP-Admin ir a WooCommerce/Ajustes.
2. Primero rellenar en general los datos.
   1. Pestaña general: {Dirección: "C/Cerámica 24", Municipio: "Alicante", País: "España", CP: "03008", Ubicación de venta: "Enviar sólo a países específicos", Vender a países específicos: "España", Ubicación del cliente por defecto: "Sin ubicación", Activar impuestos, Activar cupones, Moneda: "Euros", Decimal: "."} --> GUARDAR
   2. Pestaña productos: Revisar y poner lo único si no está activado activar valoración del defecto. Fíjate que en la parte de arriba tienes General/Inventario. Entra a inventario y decide el tiempo los parámetros. Manda un mensaje de que quedan pocas existencias cuando queden menos de 10. 
   3. Impuestos: {No introduciré los precios con impuestos incluidos}. En la parte superior ir a Tarifas donde introduciremos el [código del país](https://es.wikipedia.org/wiki/ISO_3166-1]) a poner, la cantidad de 21% y el nombre del impuesto IVA.
   4. Envío: Vamos a añadir zonas de envío.
      1. Envío general -> Todas menos Canarias y Alicante. Le damos como método de pago un precio fijo de 3,75€.
      2. Envío Canarias -> Selecciona Canarias. LE como método de pago un precio fijo de 4,75€.
      3. Envío Alicante-> Selecciona Alicante. Le ponemos como método de Pago "Recogida en tienda".
      4. Guarda los cambios.
    5. Pagos: Activamos pagos que nos interesen: Transferencia bancaria (busca un número de cuenta bancaria y ponlo).
    6. Echa un vistazo a cuentas y privacidad pero seguramente no hará falta que configures nada.
    7. Correos electrónicos. Tienes un mensaje personalizado por cada correo que se realiza. Configura el de "Nuevo pedido". Desactiva los que consideres que no son necesarios.
    8. Integración --> Nada
    9. Avanzado -> Crear una página de Términos y condiciones en Páginas y en la pestaña Avanzado asociarla. Todo lo demás dejarlo igual

## Personalización de WooCommerce: Productos
1. En el menú productos, seleccionar todos y eliminarlos
2. Dentro de Productos->Categorías elimina las existentes y crea las de nuestro sitio web: en el caso de que fuera una tienda de maquillaje podría ser Base,Pintalabios y Sombras.
3. Vuelve a productos y dale a crear nuevo producto. Con la ayuda de ChatGPT o alguna página web de alguna tienda de maquillaje crea dos productos para cada categoría (ayúdate para copiar descripciones).Para cada producto
   1.  Añade nombre, descripción, descripción corta, imagen, etiquetas y etiquetas. 
   2.  En los datos del producto escoge producto simple. Rellena los precios. Configura inventario, crea un código para el producto y de existencias pon 10.
   3.  Vas a crear dos variaciones de cada producto. Dirígete a Productos -> Atributos y rellena el formulario, por ejemplo, podría ser Color en el caso del maquillaje.Ahora nos vamos a un producto, cambiamos de producto simple a producto variable cambiándose el menú a otras opciones. En atributos seleccionamos el color y sus variaciones. Seguidamente en variaciones configuramos cada producto diferente. 
**Puedes duplicar productos y editarlos para ganar tiempo**
   Como puedes ver resulta una tarea bastante tediosa y automática. Por ello es posible hacer un archivo .csv
</div>