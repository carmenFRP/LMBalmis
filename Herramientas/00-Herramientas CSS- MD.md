---
title: 
    LM - 1º DAM
date: Marzo 2024
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
        <span style=\"margin-left: 1cm;\">Herramientas CSS</span>
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


# StyleLint

Un linter, también conocido como analizador estático, es una herramienta de software que ayuda a identificar problemas en el código fuente o marcado antes de su uso. El término "linter" es una contracción de "lint" (pelusa o hilacha en inglés), que se refiere a pequeños errores en el código que podrían no ser críticos pero que podrían causar problemas o hacer que el código sea menos legible, menos óptimo...

Pasos de uso StyleLint:

- Instalar [Node.js](https://nodejs.org/en/download) (entorno de ejecución de JS). Esto sólo lo harás una vez en tu máquina local. 
  
- Junto a Node.js obtienes npm, que te permite instalar, actualizar, gestionar bibliotecas y herramientas de tu proyecto. Ejecuta **npm init**. Es necesario ejecutar este comando porque es necesaria la creación de un archivo package.json para tu proyecto. El archivo package.json es fundamental para el funcionamiento de Node.js y npm, y contiene información sobre tu proyecto, sus dependencias y configuraciones. Te hará una serie de preguntas, contéstalas.
  
- Inicializa Stylelint ejecutando el comando **npm init stylelint**.
  
- Por último vamos a ver los errores ejecutando **npx stylelint "URL-CSS"**

