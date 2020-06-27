const fs=require("fs");
const rutaDeMovies="./data/movies.json";
const leerRutaDeMovies=fs.readFileSync(rutaDeMovies,"utf-8");
const parseLeerRutaDeMovies=JSON.parse(leerRutaDeMovies);

let moduloMasVotadas=
{
    tituloMasVotadas:"\n\t\t\tMás Votadas\n",

    retornarListaDeMovie:function()
    {
        return parseLeerRutaDeMovies;
    },
    retornaMoviesMasVotada:function()
    {
        listaMoviesMasVotadas=[];
        this.retornarListaDeMovie().movies.forEach(function(iterador)
        {
            if(iterador.vote_average>7)
            {
                listaMoviesMasVotadas.push(iterador);
            }
        });
        return listaMoviesMasVotadas;
    },

    retornaLaCantidadDeMasVotadas:function()
    {
        let cantPeliculas=this.retornaMoviesMasVotada().length;
        return "\n\nLa cantidad de peliculas Mas votadas es: "+cantPeliculas+"\n";
    },

    sumaMasVotadas:function()
    {
        let suma=0;
        let lista=this.retornaMoviesMasVotada();
        lista.forEach(function(iterador)
        {
            suma+=iterador.vote_average;
        });
        return suma;
    },

    retornaPromedioMasVotadas:function()
    {
        sumaTotal=this.sumaMasVotadas();
        cantidadMasVotada=this.retornaMoviesMasVotada().length;
        promedio=sumaTotal/cantidadMasVotada;
        return "\n\nRatin promedio es: "+promedio.toFixed(2)+"\n";
    }
}

module.exports=moduloMasVotadas;
