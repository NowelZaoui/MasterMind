const lengthCodiSecret=4;
codiSecret=generarNumeroAleatori();
const maximIntents=4;
numeroIntents=0;

function containsOnlyNumbers(str) {
    return /^[0-9]+$/.test(str);
  }
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
    else if(!containsOnlyNumbers(val))
    {
        alert("Ha de ser un numero natural");

    }
    else if(val.length!=lengthCodiSecret)// Ha de ser de mida 4
    {
        alert("Ha de ser un numero de mida "+String(lengthCodiSecret));
    }
    else{
        var countAcertsPosicio=0;
        var countAcerts_existeix=0;
        for(i=0;i<val.length;i++)
        {
            if(val[i]===codiSecret[i])//Si conicideix la posicio
                countAcertsPosicio++;
            else if(codiSecret.includes(val[i]))//Si existeix en el codiSecret
                countAcerts_existeix++;
        }
        if(countAcertsPosicio==val.length)//Si em acertat totes les posicions, es que es el numero secret
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
    codiSecret=generarNumeroAleatori();
}

function hasPerdut(table)
{
    alert("Has superat el numero de intents. :-(");
    numeroIntents=0;
    for(var i = 1;i<table.rows.length;){
        table.deleteRow(i);
    }
    codiSecret=generarNumeroAleatori();


}

function generarNumeroAleatori()
{
    var numeroAleatori="";
    var listOfNumbers=[];
    for(i=0;i<10;i++)
        listOfNumbers.push(i);
    for(i=0;i<lengthCodiSecret;i++)
    {
        var index=randomIntFromInterval(0,listOfNumbers.length-1);
        var number=listOfNumbers[index];
        listOfNumbers.splice(number,1);
        numeroAleatori=numeroAleatori+String(number);
    }
    
    alert(numeroAleatori);
    return numeroAleatori;
}
function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  