# Ejercicio integrador

La idea es tomar el spec de frontend de real world app (https://github.com/gothinkster/realworld/tree/master/spec)
Y hacer un frontend par el backend alojado en 
https://conduit.productionready.io/api

Este backend esta documentado en https://github.com/gothinkster/realworld/tree/master/api

El ejercicio consiste en implementar 
+ Signup Sign in de usuarios. 
+ ABMC de Articulos. 
+ ABC de Comentarios (no hace falta actualizar)
+ Mostrar una lista paginada de articulos. 

El ejercicio debe incluir routing, reactive forms, http, autenticacion. 
El token de la autenticacion se debe guardar en local storage. 

Pueden usar el diseño y el los estilos css o componentes de terceros que quieran entre ellos puede ser
+ Bootstrap 
+ Material UI
+ https://clarity.design/

o el que quieran, si van a usar componentes con javascript asegurense de usar aquellos que esten hechos con angular sino se puede complicar. 

El ejercicio lo pueden hacer en grupos de hasta 4 personas, en ese caso usen nu repositorio comun de github o gitlab  y todos los merge hay que hacerlos por pull request. 
Voy a mirar los pull request para evaluar el trabajo. 

Deberian hacer un fork de este repositorio para empezar y despues la entrega la vamos a hacer por pull request. 

El proyecto debe funcionar con el backend. 
Debe compilar en modo produccion 

ng build --prod

y debe pasar el linting

ng lint 


