let value = 0;
let error = null;

while(true)
{


    value += parseInt(prompt("Ingresar Numero"));

    error = confirm("Desea seguir!");
    
    if(isNaN(value))
    {
        value = 0;
    }

    if(error == false)
    { 
        alert("Valor Total : " + value);
        break;
    }

}