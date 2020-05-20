const total = 500;
let flag = 5;
let count = 0;

for (let index = 1; index <= total; index++)
{


    if((index % 4)==0)
    {
        document.write(index + " : (Multipo de 4 ) <br>");
        count++;

    }
    else if((index % 9)==0)
    {
        document.write(index + " : (Multipo de 9 ) <br>");
        count++;
        
    }
    
    if(count == flag)
        {
    
            document.write("<hr>");
            flag +=5;
        }


}