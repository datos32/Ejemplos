let filas = parseInt(prompt("INGRESAR NUMERO DE FILAS"));

let columnas = parseInt(prompt("INGRESAR NUMERO DE COLUMNAS"));

let calc = 1;
let row = "";
let col ="";


for (let index = 1; index <= filas; index++)
{
    row += "<tr>";

    for (let inx = 0; inx < columnas; inx++)
    {
        col += "<td>"+ calc.toString()+"</td>";
        calc++;
    }

    row += col + "</tr>";
    col = "";
}



document.write("<table>"+row+"</table>");


