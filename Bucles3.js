let texto = "";
let input;

while(true)
{
    texto +=  prompt("Ingresar Contenido")+"-";

    input = confirm("Desea seguir!");
    
    if(input == false)
    { 
        let texto1 = texto.substr(0,texto.length-1);
        document.write(texto1);
        break;
    }

}