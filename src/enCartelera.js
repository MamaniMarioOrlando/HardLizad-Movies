const fs=require("fs");


let moduloEnCartelera=
{
    tituloEnCartelera:"\n\t\t\tEn Cartelera\n",
    retornaListaMovie:function()
    {
        const archivoMovie='./data/movies.json';
        const leerArchivoMovie=fs.readFileSync(archivoMovie,"utf-8");
        let parseLeerArchivoMovie=JSON.parse(leerArchivoMovie);
        //nodelet parseLeerArchivoMovie=JSON.parse(leerArchivoMovie);
        return parseLeerArchivoMovie;
    },

    retornaCantidadDePeliculas:function()
    {
        return this.retornaListaMovie()
    },
    retornaTotalPeliculas:function()
    {
        return "\n\nTotal de películas​:"+this.retornaListaMovie().total_movies;
    },

}


module.exports=moduloEnCartelera;