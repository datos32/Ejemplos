let buffer = "";
for (let index = 1; index <= 30; index++) 
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