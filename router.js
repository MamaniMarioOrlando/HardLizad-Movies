const index=require("./src/index.js")

let router=function(url,res)
{
    switch(url)
    {
        case "/home-page":
        {
            index.homePage(res)
            //res.end("/home-page")
        }
        break;

        case "/en-cartelera":
        {
            index.enCartelera(res);
            
            //res.end("/en-cartelera")
        }
        break;
        case "/mas-votadas":
        {
            index.masVotadas(res)
            res.end("/mas-votadas")
        }
        break;
        case "/sucursales":
        {
            index.sucursales(res);
            res.end("/sucursales")
        }
        break;
        case "/contacto":
        {
            index.contacto(res);
            res.end("/contacto")
        }
        break;
        case "/preguntas-frecuentes":
        {
            index.preguntasFrecuentes(res)
            res.end("/preguntas-frecuentes")
        }
        break;
        default:
            break;
    }
}

module.exports=router;