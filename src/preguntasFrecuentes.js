const fs=require("fs");
const rutaFaqs="./data/faqs.json";
const leerRutaFaqs=fs.readFileSync(rutaFaqs,"utf-8");
const parseLeerRutaFaqs=JSON.parse(leerRutaFaqs);

let moduloPregFrecu=
{
    tituloPregFrecu:"\n\t\t\t\tPreguntas Frecuentes\n",
    returnListaPregFrecu:function()
    {
        
        listafaqs=[];
        parseLeerRutaFaqs.faqs.forEach(iterador => 
        {
            listafaqs.push(iterador);
        });
        return listafaqs;
    },
    returnTotalDePregFrecu:function()
    {
        cantidadPregFrecu=this.returnListaPregFrecu().length;
        return "\n\nTotal de preguntas frecuentes: "+cantidadPregFrecu+"\n";
    }
}
module.exports=moduloPregFrecu;