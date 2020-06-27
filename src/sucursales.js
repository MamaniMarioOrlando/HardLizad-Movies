const fs=require("fs");
const rutaSucursales="./data/theaters.json";
const leerRutaSucursales=fs.readFileSync(rutaSucursales,"utf-8");
const parseLeerRutaSucursales=JSON.parse(leerRutaSucursales);

let moduloSucursales=
{
    titulo:"\n\t\t\t\t Nuestas Salas\n",

    returnListaSucursales:function()
    {
        let listaSucursales=[];
        parseLeerRutaSucursales.theaters.forEach(element => 
        {
            listaSucursales.push(element);    
        });
        return listaSucursales;

    },
    retornaTotalDeSalas:function()
    {
        let cantidadSucursales=this.returnListaSucursales().length;

        return "\n\nLa cantidad de sucursales son: "+cantidadSucursales+"\n";
    },
}

module.exports=moduloSucursales;