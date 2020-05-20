let buffer = "";
let input = parseInt(prompt("Ingresar Numero"));
if(input <= 50)
{
    for (let index = 1; index <= input; index++) 
{
    for (let inn = 1; inn <= index; inn++)
    {
        buffer += index.toString();

        if(inn == index)
        {
            document.write(buffer +"<br>");
            
        }
    }

    buffer = "";
}
}else
{
    alert("Ingresar un numero menor a {51}");
}
