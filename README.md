<h1>Ejercicio</h1>
Vamos usar la api de <a href="https://github.com/gothinkster/realworld">realWorld app </a>
<ol>
<li>
    Usando la API de <a href="https://github.com/gothinkster/realworld/tree/master/api#endpoints">RealWorld</a> hacer una nube de tags que me permita obtener los tags del sitio y al hacer click en uno de ellos me muestre los primeros 5 articulos completos de cada TAG. Mostrando titulo, descripcion body fecha de creacion y lista de tags asociada a ese articulo.
</li>
</ol>
<h1>Ejercicio 2</h1>
<p>
Con un usuario hardocdeado agregar un boton a un articulo del ejercicio anterior y hacer que le agregue un comentario ingresado en un textarea. tenemos que llamar el metodo login que nos va a devolver un objeto con un token. Ese token lo tenemos que agregar en un header del post para agregar el comentario con el siguiente formato</p>
<pre>Authorization: Token [aca concatenado va el token obtenido]</pre>

### Base endpoint

API https://conduit.productionready.io/api/



### Get Tags

`GET /api/tags`

```JSON
{
  "tags": [
    "reactjs",
    "angularjs"
  ]
}
```


### List Articles

`GET /api/articles`

Returns most recent articles globally by default, provide `tag`, `author` or `favorited` query parameter to filter results

Query Parameters:

Filter by tag:

`?tag=AngularJS`


### Get Article

`GET /api/articles/:slug`

### Single Article

```JSON
{
  "article": {
    "slug": "how-to-train-your-dragon",
    "title": "How to train your dragon",
    "description": "Ever wonder how?",
    "body": "It takes a Jacobian",
    "tagList": ["dragons", "training"],
    "createdAt": "2016-02-18T03:22:56.637Z",
    "updatedAt": "2016-02-18T03:48:35.824Z",
    "favorited": false,
    "favoritesCount": 0,
    "author": {
      "username": "jake",
      "bio": "I work at statefarm",
      "image": "https://i.stack.imgur.com/xHWG8.jpg",
      "following": false
    }
  }
}
```
