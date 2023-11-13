import peliculas from './peliculas.js'
 

//Filtramos las peliculas segun el genero
let peliculasAccion = peliculas.filter((peliculas) =>{ 
     return peliculas.genre_ids.includes(28)
});
let peliculasThriller = peliculas.filter((peliculas) =>{ 
    return peliculas.genre_ids.includes(53)
});
let peliculasAventuras =  peliculas.filter((peliculas) =>{ 
    return peliculas.genre_ids.includes(12)
});


//creamos las constantes donde agruparemos por genero
const divAccion = document.getElementById('genero-28')
const divThriller = document.getElementById('genero-53')
const divAventuras = document.getElementById('genero-12')


//Iteramos por el array de cada tipo de peliculas para obtener los poster y el titulo
for (let i=0;i<peliculasAccion.length;i++){

//creamos las variables para poner los datos que nos interesa de las peliculas 
    let texto = document.createElement('h4')
    let img = document.createElement('img')
    let contenedor =document.createElement('div')

//añadimos el texto y la imagen
    texto.innerHTML = `${peliculasAccion[i].title}`
    img.src=`https://image.tmdb.org/t/p/w500${peliculasAccion[i].poster_path}`
//las ponemos en el Html
    contenedor.appendChild(img);
    contenedor.appendChild(texto);
    divAccion.appendChild(contenedor)
}

//Hacemos lo mismo por los otros 2 generos
for (let i=0;i<peliculasThriller.length;i++){
    let texto = document.createElement('h4')
let img = document.createElement('img')
let contenedor =document.createElement('div')
    
    texto.innerHTML = `${peliculasThriller[i].title}`
        img.src=`https://image.tmdb.org/t/p/w500${peliculasThriller[i].poster_path}`

    contenedor.appendChild(img);
    contenedor.appendChild(texto);
    divThriller.appendChild(contenedor)
}
for (let i=0;i<peliculasAventuras.length;i++){
    let texto = document.createElement('h4')
    let img = document.createElement('img')
    let contenedor =document.createElement('div')
    
    texto.innerHTML = `${peliculasAventuras[i].title}`
        img.src=`https://image.tmdb.org/t/p/w500${peliculasAventuras[i].poster_path}`

    contenedor.appendChild(img);
    contenedor.appendChild(texto);
    divAventuras.appendChild(contenedor)
}

