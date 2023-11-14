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
    texto.innerText = `${peliculasAccion[i].title}`
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
    
    texto.innerText = `${peliculasThriller[i].title}`
        img.src=`https://image.tmdb.org/t/p/w500${peliculasThriller[i].poster_path}`

    contenedor.appendChild(img);
    contenedor.appendChild(texto);
    divThriller.appendChild(contenedor)
}
for (let i=0;i<peliculasAventuras.length;i++){
    let texto = document.createElement('h4')
    let img = document.createElement('img')
    let contenedor =document.createElement('div')
    
    texto.innerText = `${peliculasAventuras[i].title}`
        img.src=`https://image.tmdb.org/t/p/w500${peliculasAventuras[i].poster_path}`

    contenedor.appendChild(img);
    contenedor.appendChild(texto);
    divAventuras.appendChild(contenedor)
}
/*const mostrarPeliculaPorGenero = (generoId, contenedorId) => {
  const contenedor = document.getElementById(contenedorId)
  const peliculaGenero = peliculas.filter((pelicula) => pelicula.genre_ids.includes(generoId))

  peliculaGenero.forEach(pelicula => {
    let templatePelis =`
    <div class="pelicula">
      <img src="https://image.tmdb.org/t/p/w200/${pelicula.backdrop_path}" alt="${pelicula.title}">
      <h3>${pelicula.title}</h3>
    </div>
    `
    contenedor.innerHTML += templatePelis
  })

}


mostrarPeliculaPorGenero(28, "genero-28")
mostrarPeliculaPorGenero(53, "genero-53")
mostrarPeliculaPorGenero(12, "genero-12")


*/
