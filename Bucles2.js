let Nota = parseInt(prompt("Introduce un numero: "));

        if(Nota < 0 || Nota > 10)
        {
            alert("Introduce un numero valido!");
        }
        else if( Nota <= 2)
        {
            alert("Muy Deficiente");
        }
        else if(Nota == 3 || Nota == 4)
        {
            alert("Insuficiente");
        }
        else if(Nota == 5 || Nota == 6)
        {
            alert("Suficiente");
        }
        else if(Nota == 7)
        {
            alert("Bien");
        }
        else if(Nota == 8 || Nota == 9)
        {
            alert("Notable");
        }
        else if(Nota == 10)
        {
            alert("Sobresaliente");
        } 
