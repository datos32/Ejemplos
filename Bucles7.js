let input ;
let buffer = "";
input = parseInt(prompt("Ingrensar Numero"));

    if(input <= 50)
    {
        for (let index = input ; index >= 1; index--) 
        {
            for (let inn = 1; inn <= input ; inn++)
            {
                buffer += index.toString();
                if(inn == index)
                {
                    document.write(buffer +"<br>");
                    
                }
            }
        
            buffer = "";
        }
    }
