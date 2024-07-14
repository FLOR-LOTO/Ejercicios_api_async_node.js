# Ejercicios para practicar:

## Ejercicio 1:

Para este segundo ejercicio, te propongo que investigues la API de WeatherAPI (ver link más abajo) y armes una app muy similar a la anterior, con las siguientes características:
La API sirve para obtener datos climáticos relativos a cada ciudad del planeta. El usuario tiene que poder solicitar por los datos relativos a una ciudad. Es decir, que el parámetro de búsqueda del programa es la ciudad: 'London', 'Buenos Aires', etc.
El objetivo es imprimir en la terminal la temperatura máxima y mínima de los últimos 3 días, de la ciudad ingresada como parámetro.
https://api.weatherapi.com/v1/[Ruta]?key=f0dd881d49d448e5b9803901242906&[masParametros]  
Ej 1: https://api.weatherapi.com/v1/current.json?key=f0dd881d49d448e5b9803901242906&q=paris  
Ej 2: https://api.weatherapi.com/v1/forecast.json?key=f0dd881d49d448e5b9803901242906&q=buenos%20aires

(Lo que está entre corchetes lo tienen que reemplazar por los datos que aclara la documentaciom)
https://www.weatherapi.com/docs/

## Ejercicio 2:

Objetivo:
Crear una API, utilizando el módulo net y el patrón MVC (Modelo-Vista-Controlador), la cual debe consumir una base de datos (https://dummyjson.com/) que contiene usuarios y productos
(Ruta para acceder a los usuarios: https://dummyjson.com/users y la ruta para acceder a los products: https://dummyjson.com/products)
Requisitos:
Inicialización del Proyecto con npm, git & github:
Instalación de las dependencias necesarias.
Crea un archivo database.js para configurar la conexión a la base de datos.

Crear un modelo User con los metodos getByEmail, getById, getAll.
Crear un modelo Product con los metodos getByDescription, getById, getAll.

Implementa un controlador para manejar la obtención de clientes y productos.

Define rutas para las obtencion de los recursos.

Rutas de la vista:
Obtener todos los usuario (users).
Obtener un usuario por id(users/id).

Obtener todos los productos (products).
Obtener un producto por id(products/id).
