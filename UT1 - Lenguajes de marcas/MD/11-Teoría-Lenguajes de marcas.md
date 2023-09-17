---
title: 
    LM - 1º DAM
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
        <span style=\"margin-left: 1cm;\">Lenguajes de Marcas</span>
    </span>
    "
toc:
    depth_from: 1
    depth_to: 5
    ordered: true
---


# Índice

[TOC]

<div style="page-break-after:always;"></div>


# Introducción

¿Qué son los lenguajes de marcas? ¿Cuándo aparecen? ¿Cuál es la utilidad? A lo largo de este primer tema introductorio se irán resolviendo estas dudas.  Pero antes de comenzar vamos con un ejemplo práctico a reflexionar sobre todas estas cuestiones en el que se puede ver en un caso que pudiera ser real la utilidad de organizar la información mediante símbolos que nos ayuden a identificar contenido.

<div style="border: solid 1px black;color:green">
María y Félix son los fundadores y propietarios de una asesoría legal y empresarial, que tiene su sede en Cantabria, con oficinas en los municipios más importantes de la región.
María, licenciada en Derecho, ejercía como abogada especializada en derecho laboral y representaba a alguna empresa, además de particulares en su propio despacho situado en Torrelavega. Tenía una red informática cliente-servidor sobre un sistema operativo Windows y trabajaba con una base de datos de documentos jurídicos.
Félix, diplomado en Ciencias Empresariales, había creado una asesoría empresarial, ubicada en Santander, que básicamente, se encargaba de la contabilidad de varias PYMES. También tenía una red cliente-servidor, pero ésta bajo un sistema Linux con software libre de contabilidad.

Ambos eran amigos y un día en que habían estado hablando de sus respectivos trabajos, decidieron que sus ingresos podían aumentar sustancialmente si, además de mantener sus respectivas carteras de clientes, se unían y formaban una sociedad que ofreciese a las empresas asesoría legal y empresarial de forma conjunta.

Desde el principio, la idea de asociarse fue un éxito. Al cabo de dos años el volumen del negocio se había extendido y se hizo imprescindible el intercambio de comunicación entre ambos.

Dado que trabajaban con sistemas informáticos diferentes se plateaba el problema de cómo podían compartir información sobre los clientes comunes manteniendo la infraestructura informática con la que trabaja cada uno.

Consultaron el problema a Juan, un técnico en administración de sistemas informáticos en red, y éste les dijo que no había ningún problema de interconexión si los ficheros que manejaban se ajustaban a un formato estándar conocido como XML. Según lo que Juan les dijo, generar documentos con dicho estándar apenas requiere conocimientos previos de informática, por tanto era una solución que parecía perfecta para su problema.
</div>
<div style="border: solid 1px black;font-size: xx-small;">
Tabla 1. Ejemplo práctico extraído de Materiales desarrollados inicialmente por el Ministerio de Educación, Cultura y Deporte y actualizados por el profesorado de la Junta de Andalucía bajo licencia Creative Commons BY-NC-SA.
</div>

# ¿Qué es un lenguaje de marcas?

Un lenguaje de marcas es aquel que codifica un documento para ser interpretado. Combina la información textual con una serie de marcas que proporcionan información sobre la estructura del texto o sobre la presentación del mismo.Es importante entender que un lenguaje de marcado no es un lenguaje de programación. Mientras que en lenguajes de programación existen conceptos como variables, operadores… En los lenguajes de marcado tendremos etiquetas o codificaciones que cambiarán el aspecto visual o nos indicarán la función de la información.
<div style="page-break-after:always;"></div>

# Tipos de lenguajes de marcas

Existen diferentes lenguajes de marcado. A continuación se propone una posible clasificación según el objetivo de las marcas, pudiendo haber otro tipo de clasificaciones:

* Marcado de presentación
    * Codifica cómo ha de presentarse un documento. Por ejemplo, en un procesador de textos como Microsoft Word se añadirá marcado al texto para indicar que una palabra debe presentarse en negrita.

* Marcado de procedimientos
    * Las etiquetas son de presentación igualmente pero además se pueden indicar subrutinas o macros. Ejemplos de tipos de herramientas que usan este tipo demarcado son LaTeX o PostScript.
* Marcado descriptivo
    * Las etiquetas describen qué es cada fragmento del texto para indicar qué es lo que  se está representando.De este grupo son HTML, XML…
  
#   Historia de los lenguajes de marcas
Los lenguajes de marcas surgieron ante la necesidad de almacenar tanto la presentación como la información de los documentos electrónicos, de la misma manera que se hacía con los documentos que estaban en papel. 
El origen de los lenguajes de marcas se puede vincular de alguna manera a IBM, aunque es bastante más complejo. En los años 70 esta compañía se encontraba con mucha información desestructurada y surgió la necesidad de organizarla para poder procesarla mejor. Charles Goldfarb, investigador de la empresa creó un primer lenguaje de marcas al que llamó GML (Generalized Markup Language). Este lenguaje gustó y se estandarizó. Por ello que surge el estándar SGML, pero era un lenguaje muy complejo y extenso y se puede considerar la piedra angular del resto de lenguajes de marcas.
En este módulo, nos centraremos en los lenguajes de marcas utilizados principalmente para la web: HTML, CSS, XML… Que quizá son los más extendidos dentro del campo. Es a mediados de los 80,cuando el CERN pensó en un lenguaje que se basaba en algunos principios de SGML pero mucho más sencillo, HTML, con el objetivo de compartir información a través de internet.A mediados de los 90 el W3C busca un lenguaje más potente para la web, un lenguaje de marcas basado en SGML pero que fuera tan sencillo como HTML.Surge así lo que denominaron XML.

# Partes de un documento marcado

Como hemos visto, existen diferentes tipos de lenguajes de marcas con diferentes simbologías. Uno de los juegos que están muy popularizados es el del uso de etiquetas y atributos para marcar el documento, debido al alcance y la extensión de lenguajes como HTML o metalenguajes como XML. Para estudiar las partes de un documento nos basaremos en estos más populares.

Dentro de un documento de marcado descriptivo como HTML o XML encontraremos:

* Etiquetas. Las etiquetas serán todas aquellas palabras que vayan encerradas entre los símbolos menor (<) y mayor (>). Existen etiquetas de inicio (por ejemplo, <ciudad>) y etiquetas de fin, que llevan una barra invertida para indicar el final de la marca (</ciudad>).
* Elementos. Podemos definir como elementos las estructuras que se forman al etiquetar el texto. Constan de la etiqueta de inicio, la etiqueta de fin y todo el contenido que se encuentre entre ambas.
* Atributos. Indican alguna característica de la etiqueta. Es un par nombre=”valor” que se indica siempre dentro de la etiqueta de inicio. (Por ejemplo, <ciudad país=”España”>Alicante</ciudad>,nos indica que Alicante es una ciudad de España).
  
# Lenguajes de marcas y la web

Como se ha mencionado ya en varias ocasiones a lo largo del documento, el módulo de LM se centrará en lenguajes de marcas ampliamente usados para le mundo web. 
Por esta razón y porque como desarrollador es importante, se explica cómo funciona internet y se trabaja cierta nomenclatura importante para seguir el curso.

## Internet

Internet es la columna vertebral de la web. Se le conoce como la red de redes. Pero, ¿Qué es una red? Una red, a grandes rasgos, se puede ver como un conjunto de dispositivos conectados entre si. Cuando en tu casa por ejemplo el ordenador,el móvil y otros dispositivos electrónicos los conectas entre si has formado una red. Si esta red la unes a la red del IES, a la red de un familiar y la abres a muchas más redes “públicamente” estás formando de alguna manera lo que hoy en día conocemos como Internet.
Internet no solo funciona por unir numerosos dispositivos sino que es necesario el  uso de protocolos estandarizados  (IP,TCP…) para comunicarse entre ellos que definen normas sobre cómo la información se va a intercambiar entre los mismos, se aseguran de que ésta llega y de que es correcta. Aparecen aquí como protagonistas los routers, que van a encaminar la información particionándola en pequeños paquetes y pasándosela entre ellos hasta que alcancen el destino final, los módems que van a adaptar las señales a infraestructuras, los ISP que son las empresas que van a gestionar estos routers... Además de los ya nombrado toma protagonismo una amplia terminología: DNS, HTTP, SSL...

### Terminología básica

• Dirección IP. Cuando enviamos un mensaje a un ordenador necesitamos saber a cuál. Es por ello que se crearon las direcciones IP que identifican nuestros ordenadores dentro de la red. Esta dirección está formada por cuatro grupos numéricos separados por un . .
• DNS. Para una persona es muy complicado memorizar las direcciones IP de los ordenadores o dispositivos conectados a la red. Para solucionarlo, se utilizan los que se conoce como el nombre de dominio, por ejemplo,iesdoctorbalmis.com es un nombre de un dominio. El DNS realiza la traducción de estos nombres a direcciones IP.
• Clientes y servidores. En internet nuestros dispositivos a veces actuarán como clientes, solicitando servicios o información, y en otras ocasiones como servidores proprocionando servicios e información.
• HTTPs. Protocolo usado para las transferencias de datos entre clientes y servidores.
Una vez aclarado cierto funcionamiento básico y algún concepto de la terminología, realmente, ¿Qué es la web? Podemos decir que la web (www, w3) es un sistema interconectado de páginas web accesibles a través de esa red “abierta” que hemos llamado internet. La web no es sinónimo de internet, si no que es una de las aplicaciones construidas sobre internet. Cuando accedemos a las páginas web obtenemos documentos. Estos documentos están publicados en formato HTML, un lenguaje de marcas ampliamente usado en el mundo web y que será uno de los que nos centremos en este módulo. No será el único pues también toman protagonismo en el mundo web otros lenguajes de marcas como XML, JSON,CSS...
# Webgrafía
https://www.youtube.com/watch?v=7_LPdttKXPc
https://developer.mozilla.org/es/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work
