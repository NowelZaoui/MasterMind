const lengthCodiSecret=4;
codiSecret=String("1234");
const maximIntents=3;
numeroIntents=0;
function afegir(){
	var res=document.getElementById("GuessTextBox");
    var table=document.getElementById("Taula");
    var val=res.value;
    if(isNaN(val))//Comprova que es un numero
        alert("Ha de ser un numero");
    else if(parseInt(val)<0)//Que sigui positiu
    {
        alert("Ha de ser un numero positiu");
    }
    else if(String(parseInt(val))!==val)//Que sigui un enter positiu. el ParseInt s'atura quan troba un caracter com '.' (que seria un float). Si el numero resultat no es igual com string, es que ha trobat un valor incorrecte
    {
        alert("Ha de ser un numero natural");

    }
    else if(val.length!=4)// Ha de ser de mida 4
    {
        alert("Ha de ser un numero de mida 4");
    }
    else{
        val=String(val);
        var countAcertsPosicio=0;
        var countAcerts_existeix=0;
        for(i=0;i<val.length;i++)
        {
            if(val[i]===codiSecret[i])
                countAcertsPosicio++;
            else if(codiSecret.includes(val[i]))
                countAcerts_existeix++;
        }
        if(countAcertsPosicio==val.length)
            hasGuanyat(table);
        else{
            var row = table.insertRow();
            for(i=0;i<val.length;i++){
                // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
                var cell = row.insertCell(i);

                // Add some text to the new cells:
                cell.innerHTML = String(val[i]);
            }
            var cell=row.insertCell(val.length+0);
            cell.innerHTML = String (countAcertsPosicio);
            cell=row.insertCell(val.length+1);
            cell.innerHTML = String (countAcerts_existeix);

            numeroIntents++;
            if(numeroIntents==maximIntents)
                hasPerdut(table);
         }
         res.value="";
    }
}

function hasGuanyat(table)
{
    alert("Has trobat el codi secret. :-)");
    numeroIntents=0;
    for(var i = 1;i<table.rows.length;){
        table.deleteRow(i);
    }

}

function hasPerdut(table)
{
    alert("Has superat el numero de intents. :-(");
    numeroIntents=0;
    for(var i = 1;i<table.rows.length;){
        table.deleteRow(i);
    }


}

function generarNumeroAleatori()
{

}