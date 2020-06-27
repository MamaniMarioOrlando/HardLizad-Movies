const homePage=require("./homePage.js");
const enCartelera=require("./enCartelera.js");
const masVotadas=require("./masVotadas.js");
const sucursales=require("./sucursales.js");
const contacto=require("./contacto.js");
const pregFrecu=require("./preguntasFrecuentes.js");

const { resolveNaptr, resolveMx } = require("dns");


let index=
{
    homePage:function(res)
    {
        let contador=0;
        let listaMovie=homePage.listarPelis();
        res.write(homePage.titulo);
        res.write("\n\nTotal de películas en cartelera​: "+homePage.cantidad()+"\n\n");
        listaMovie.forEach(lista=(iterador)=>
        {
            res.write(++contador+"-"+iterador+"\n");   
        });
        res.write(homePage.retornaPieDePaguina());
        res.end();
    },
    enCartelera:function(res)
    {
        let listaMovies=enCartelera.retornaListaMovie();
        res.write(enCartelera.tituloEnCartelera);
        res.write(enCartelera.retornaTotalPeliculas());

        listaMovies.movies.forEach(recorer=iterador=>
        {
            res.write(`
            
Titulo: ${iterador.title}
Reseña: ${iterador.overview}
            
            `);
        });
        
        res.end()
    },
    masVotadas:function(res)
    {
        let listaMasVotadas=masVotadas.retornaMoviesMasVotada();
        res.write(masVotadas.tituloMasVotadas);
        //console.log(masVotadas.retornaMoviesMasVotada());
        //res.write(masVotadas.retornaMoviesMasVotada());
        res.write(masVotadas.retornaLaCantidadDeMasVotadas());
        res.write(masVotadas.retornaPromedioMasVotadas());
        res.write("\nListado de peliculas mas votadas: \n");
        listaMasVotadas.forEach(function(iterador)
        {
            res.write(`
Titulo: ${iterador.title}
Rating: ${iterador.vote_average}
Reseña: ${iterador.overview}

            `);
        });
        
    },
    sucursales:function(res)
    {
        let listaDeSalas=sucursales.returnListaSucursales();
        res.write(sucursales.titulo);
        res.write(sucursales.retornaTotalDeSalas());
        listaDeSalas.forEach(function(iterador)
        {
            res.write(`

Nombre: ${iterador.name}
Dirección: ${iterador.address}
Descripción: ${iterador.description}

`);
        });

    },
    contacto:function(res)
    {
        res.write(contacto.tituloContacto);
        res.write(contacto.retornaContenido());
    },
    preguntasFrecuentes:function(res)
    {
        let listaPregFrecu=pregFrecu.returnListaPregFrecu();
        res.write(pregFrecu.tituloPregFrecu);
        res.write(pregFrecu.returnTotalDePregFrecu());
        
        listaPregFrecu.forEach(function(iterador)
        {
            res.write(`
            
Preguntas: ${iterador.faq_title}
Respuesta: ${iterador.faq_answer}
            
`)
        });
        
    },
}
module.exports=index;